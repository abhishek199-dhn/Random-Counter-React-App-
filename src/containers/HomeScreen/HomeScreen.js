// @flow
import * as React from "react";
import RandomNumber from "../../components/RandomNumber/RandomNumber";
import "./homescreen.css";

function HomeScreen() {
    return (
        <section className="homeScreen-wrapper">
            <RandomNumber
                min={1}
                max={5000}
                interval={2000}
            />
        </section>
    );
}

export default HomeScreen;
