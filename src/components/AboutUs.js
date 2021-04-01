//   const classes = useStyles();
//   return (
//     <div className={classes.root}>
//
//       <Grid className="content" container spacing={2}>
//         <Grid item xs={12} sm={6}>
//           <div className=" icon-session">
//             <img className="sure-icon" src={sure} alt="" />
//           </div>
//           <p className="content-text">
//
//           </p>
//           <p className="content-text">
//
//           </p>
//         </Grid>
//         <Grid item xs={12} sm={6} l>
//           <div className=" icon-session">
//             <img className="sure-icon" src={sure} alt="" />
//           </div>
//
//         </Grid>
//       </Grid>
//     </div>

import React from "react";
import "./About.css";
import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import icon1 from "../components/images/security.png";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    flexGrow: 1,
  },
  media: {
    height: 140,
  },
});

function AboutUs() {
  const classes = useStyles();

  return (
    <div className="about-us">
      <div className="content-lead">
        <Typography align="center" className={classes.TypographyStyle}>
          <h1 className="title">Welcome To OVest</h1>
          <hr />
        </Typography>
        <Grid className="content" container spacing={3}>
          <Grid item xs={12} sm={4} md={4}>
            <Card className="card">
              <CardActionArea>
                <CardContent>
                  <img src={icon1} className="sure-icon" alt="" />
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    <p className="content-text">
                      OVest.ng is a product of OYESource Empire Enterprises, a
                      union of brands enriching lives and communities daily and
                      duly registered with CAC with RC Number: 2901133.
                    </p>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Card className="card">
              <CardActionArea>
                <CardContent>
                  <img src={icon1} className="sure-icon" alt="" />
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    <p className="content-text">
                      OVest.ng is managed by a team of experienced and competent
                      professionals in the finance and investment industry
                      within and outside the country to ensure optimum return.
                    </p>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Card className="card">
              <CardActionArea>
                <CardContent>
                  <img src={icon1} className="sure-icon" alt="" />
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    <p className="content-text">
                      Both ovest.ng and OYESource Empire Enterprises are legal
                      entities in Nigeria. Our drive is to consistently be the
                      platform that enrich you financially and give returns to
                      money invest by our investors to earn you total financial
                      liberation.
                    </p>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default AboutUs;
