import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Map from "../components/Map";
import Drawer from "../components/Drawer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const data = [
  {
    id: "001",
    name: "EV600",
    status: "active",
    energy: "80",
    lat: "42.3193284",
    lng: "-83.0397932",
  },
  {
    id: "002",
    name: "EV602",
    status: "inactive",
    energy: "50",
    lat: "42.7293284",
    lng: "-83.0497632",
  },
  {
    id: "003",
    name: "EV603",
    status: "active",
    energy: "20",
    lat: "42.1293284",
    lng: "-83.0317632",
  },
];

export default function Home() {
  const classes = useStyles();

  return (
    <Grid container spacing={0}>
      <Grid item xs={2}>
        <div id="sidebar">
          <Drawer data={data} />
        </div>
      </Grid>
      <Grid item xs={10}>
        <div id="map">
          <Map data={data} />
        </div>
      </Grid>
    </Grid>
  );
}
