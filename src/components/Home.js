import React, { useRef, useEffect } from "react";
import { TweenMax } from "gsap";
import "./home.css";
import Grid from "@material-ui/core/Grid";
import android from "../components/images/android.png";
import ios from "../components/images/ios.png";
import img14 from "../components/images/three-users.jpg";
import AboutUs from "./AboutUs";

function Home() {
  let app = useRef(null);

  useEffect(() => {
    TweenMax.to(app, 0, { css: { visibility: "visible" } });
  });
  return (
    <div>
      <div className="home" ref={(el) => (app = el)}>
        <div className="container">
          <Grid container spacing={6}>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <div className="header-text-session">
                <h1 className="text-title">
                  Think Richly <br /> Invest Your Money
                </h1>
                <p>
                  OVest is a registered and growing investment platform managed
                  by a team of experienced and competent professionals in the
                  finance and investment industry with impressive interest
                  rates. OVest is secure, trusted and efficient.
                </p>
                <p className="btn-st">
                  <button className="btn-start1">Get Started</button>
                  <button className="btn-start2">Login</button>
                </p>
                {/* <div className="mobile-apps">
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
              </div> */}
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
      </div>
      <AboutUs />
    </div>
  );
}

export default Home;
