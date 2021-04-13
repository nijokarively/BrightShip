import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import LocalShippingTwoToneIcon from "@material-ui/icons/LocalShippingTwoTone";
import FiberManualRecordTwoToneIcon from "@material-ui/icons/FiberManualRecordTwoTone";
import BatteryCharging20Icon from "@material-ui/icons/BatteryCharging20";
import BatteryCharging30Icon from "@material-ui/icons/BatteryCharging30";
import BatteryCharging50Icon from "@material-ui/icons/BatteryCharging50";
import BatteryCharging60Icon from "@material-ui/icons/BatteryCharging60";
import BatteryCharging80Icon from "@material-ui/icons/BatteryCharging80";
import BatteryCharging90Icon from "@material-ui/icons/BatteryCharging90";
import BatteryChargingFullIcon from "@material-ui/icons/BatteryChargingFull";

import Divider from "@material-ui/core/Divider";
import { Typography } from "@material-ui/core";

let green = "#6cc24a";
let cyan = "#05c3dd";
let red = "#e35205";
let orange = "#f0b323";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100vh",
    overflow: 'auto',
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.secondary.main,
  },
  title: {
    color: theme.palette.text.primary,
    margin: "auto",
    padding: "10px",
    textAlign: "center",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

function BatteryIcon(props) {
  let batteryCharge = parseInt(props.energy, 10);
  if (batteryCharge <= 20) {
    return <BatteryCharging20Icon htmlColor={red} />;
  } else if (batteryCharge <= 30) {
    return <BatteryCharging30Icon htmlColor={red} />;
  } else if (batteryCharge <= 50) {
    return <BatteryCharging50Icon htmlColor={orange} />;
  } else if (batteryCharge <= 60) {
    return <BatteryCharging60Icon htmlColor={orange} />;
  } else if (batteryCharge <= 80) {
    return <BatteryCharging80Icon htmlColor={cyan} />;
  } else if (batteryCharge <= 90) {
    return <BatteryCharging90Icon htmlColor={cyan} />;
  } else {
    return <BatteryChargingFullIcon htmlColor={cyan} />;
  }
}

function PowerIcon(props) {
  let powerStatus = props.status;
  if (powerStatus === "active") {
    return <FiberManualRecordTwoToneIcon htmlColor={green} />;
  } else {
    return <FiberManualRecordTwoToneIcon htmlColor={red} />;
  }
}

export default function Drawer(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant="h6" gutterBottom>
        DropShip Dashboard
      </Typography>
      <List component="nav" aria-label="main vehicle label">
        <ListItem button>
          <ListItemIcon>
            <LocalShippingTwoToneIcon color="secondary" />
          </ListItemIcon>
          <ListItemText primary="Your Vehicles:" />
        </ListItem>
      </List>
      <Divider />
      <List component="nav" aria-label="vehicles labels">
        {props.data.map((vehicle, index) => (
          <ListItem button key={vehicle.id}>
            <ListItemIcon>
              <PowerIcon status={vehicle.status} />
            </ListItemIcon>
            <ListItemText primary={vehicle.name} />
            <ListItemIcon>
              <BatteryIcon energy={vehicle.energy} />
              <Typography color="secondary" variant="subtitle1" gutterBottom>
                {vehicle.energy}%
              </Typography>
            </ListItemIcon>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
