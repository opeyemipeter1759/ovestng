import React from "react";
import "./home.css";
import { Box, SimpleGrid } from "@chakra-ui/react";
import android from "../components/images/android.png";
import ios from "../components/images/ios.png";
import img14 from "../components/images/landing.png";

function Home() {
  return (
    <div className="container">
      <SimpleGrid columns={2} spacing={2}>
        <Box height="80px">
          <img src={img14} alt="" className="image-14" />
        </Box>
        <Box height="80px">
          <div className="header-text-session">
            <h1 className="text-title">
              Think Richly <br /> Invest Your Money
            </h1>
            <p>
              OVest is a registered and growing investment platform managed by a
              team of experienced and competent professionals in the finance and
              investment industry with impressive interest rates. OVest is
              secure, trusted and efficient.
            </p>
            <button className="btn-start">Get Started</button>
            <div className="mobile-apps">
              <img src={ios} className="download app_store_badges" alt="ios" />
              <img
                src={android}
                className="download app_store_badges"
                alt="android"
              />
            </div>
          </div>
        </Box>
      </SimpleGrid>
    </div>
  );
}

export default Home;
