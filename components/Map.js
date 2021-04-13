import { PinDropSharp } from "@material-ui/icons";
import * as React from "react";

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicles: props.data,
      // The map instance to use during cleanup
      map: null,
    };
  }
  mapRef = React.createRef();

  componentDidMount() {
    const H = window.H;
    const platform = new H.service.Platform({
      apikey: "HwHeEOj4CXgVbQznCXiFaICxxO92e8N-PWGAd0AOUvg",
    });

    const defaultLayers = platform.createDefaultLayers();

    const map = new H.Map(
      this.mapRef.current,
      defaultLayers.vector.normal.map,
      {
        center: { lat: 42.3293284, lng: -83.0397632 },
        zoom: 17,
        pixelRatio: window.devicePixelRatio || 1,
      }
    );

    // MapEvents enables the event system
    // Behavior implements default interactions for pan/zoom (also on mobile touch environments)
    // This variable is unused and is present for explanatory purposes
    const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

    // Create the default UI components to allow the user to interact with them
    // This variable is unused
    const ui = H.ui.UI.createDefault(map, defaultLayers);

    // // Create a marker icon from an image URL:
    var icon = new H.map.Icon("graphics/truckMarker.png");
    var markers = [];

    this.state.vehicles.map((vehicle, index) => {
      // // Create a marker using the previously instantiated icon:
      var marker = new H.map.Marker(
        { lat: parseFloat(vehicle.lat), lng: parseFloat(vehicle.lng) },
        { icon: icon }
      );
      var html =
        "</div><div ><b>" +
        vehicle.name +
        "</b><br>Status: " +
        vehicle.status +
        "<br>Energy: " +
        vehicle.energy +
        "%</div>";
      marker.setData(html);

      markers.push(marker);
    });

    // add markers to the group
    var group = new H.map.Group();
    group.addObjects(markers);
    map.addObject(group);

    // add 'tap' event listener, that opens info bubble, to the group
    group.addEventListener(
      "tap",
      function (evt) {
        // event target is the marker itself, group is a parent event target
        // for all objects that it contains
        var bubble = new H.ui.InfoBubble(evt.target.getGeometry(), {
          // read custom data
          content: evt.target.getData(),
        });
        // show info bubble
        ui.addBubble(bubble);
      },
      false
    );

    // get geo bounding box for the group and set it to the map
    map.getViewModel().setLookAtData({
      bounds: group.getBoundingBox(),
    });

    this.setState({ map });
  }

  componentWillUnmount() {
    // Cleanup after the map to avoid memory leaks when this component exits the page
    this.state.map.dispose();
  }

  render() {
    return (
      // Set a height on the map so it will display
      <div ref={this.mapRef} style={{ height: "100vh" }} />
    );
  }
}
