import React from "react";
import "./home.css";
// import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import android from "../components/images/android.png";
import ios from "../components/images/ios.png";
import img14 from "../components/images/three-users.jpg";
import AboutUs from "./AboutUs";

function Home() {
  return (
    <div>
      <div className="container">
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <div className="header-text-session">
              <h1 className="text-title">
                Think Richly <br /> Invest Your Money
              </h1>
              <p>
                OVest is a registered and growing investment platform managed by
                a team of experienced and competent professionals in the finance
                and investment industry with impressive interest rates. OVest is
                secure, trusted and efficient.
              </p>
              <button className="btn-start">Get Started</button>
              <div className="mobile-apps">
                <img
                  src={ios}
                  className="download app_store_badges"
                  alt="ios"
                />
                <img
                  src={android}
                  className="download app_store_badges"
                  alt="android"
                />
              </div>
            </div>
          </Grid>

          <Grid
            item
            sm={6}
            md={6}
            lg={6}
            display={{ xs: "none" }}
            className="image-ses"
          >
            <img src={img14} alt="" className="image-14" />
          </Grid>
        </Grid>
      </div>
      <AboutUs />
    </div>
  );
}

export default Home;
