import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Map from "../components/Map";
import Drawer from "../components/Drawer";

import useSWR from "swr";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  loading: {
    color: theme.palette.text.secondary,
    margin: "auto",
    padding: "10px",
    textAlign: "center",
  },
}));

const API_URL = "http://localhost:3000/api/vehicles";
async function fetchVehicles(url) {
  const res = await fetch(url);
  const json = await res.json();
  return json;
}

export default function Home() {
  const classes = useStyles();

  const { data, error } = useSWR(API_URL, fetchVehicles);

  if (!data)
    return (
      <>
        <Grid item xs={12}>
          <Typography
            className={classes.loading}
            variant="h4"
            component="h1"
            gutterBottom
          >
            refreshing data
          </Typography>
        </Grid>
      </>
    );

  const vehiclesData = data;

  return (
    <Grid container spacing={0}>
      <Grid item xs={2}>
        <div id="sidebar">
          <Drawer data={vehiclesData} />
        </div>
      </Grid>
      <Grid item xs={10}>
        <div id="map">
          <Map data={vehiclesData} />
        </div>
      </Grid>
    </Grid>
  );
}
