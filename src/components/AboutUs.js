import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import about1 from "../components/images/about1.jpg";
import about2 from "../components/images/about2.jpg";

import "./About.css";
const useStyles = makeStyles({
  typographyStyle: {
    color: "blue",
  },
});

function AboutUs() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography align="center" className={classes.TypographyStyle}>
        <h1 className="title">Welcome To OVest</h1>
        <hr />
      </Typography>

      <Grid className="content" container spacing={3}>
        <Grid item xs={12} sm={6}>
          <p className="content-text">
            OVest.ng is a product of OYESource Empire Enterprises, a union of
            brands enriching lives and communities daily and duly registered
            with CAC with RC Number: 2901133. OVest.ng is managed by a team of
            experienced and competent professionals in the finance and
            investment industry within and outside the country to ensure optimum
            return.
          </p>
          <p className="content-text">
            Both ovest.ng and OYESource Empire Enterprises are legal entities in
            Nigeria. Our drive is to consistently be the platform that enrich
            you financially and give returns to money invest by our investors to
            earn you total financial liberation.
          </p>
        </Grid>
        <Grid className="about-img" item xs={12} sm={6} l></Grid>
      </Grid>
     
    </div>
  );
}
export default AboutUs;
