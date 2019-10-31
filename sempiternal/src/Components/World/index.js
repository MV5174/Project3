import React from "react";
import Player from "../Player/player"
import Map from "../Map/index";
import { tiles }from "../../data/maps/1/index"
import store from "../../Config/store";

function World(props) {
    store.dispatch({
        type: "add_Tiles",
        payload: {
            tiles,
        }
    })
    return (
        <div
            style={{
                position: "relative",
                width: "800px",
                height: "400px",
                margin: "20px auto",

            }}
        >
            <Map />
            <Player />
        </div>
    )
}

export default World