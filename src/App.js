import React,{useState} from "react";
import CardList from "./CardList";
import {robots} from "./robots";
import SearchBox from "./SearchBox";


export default function App() {

    const [updRobo,setUpRobo] = useState(robots);

    let searchUpd = evt=> {
        setUpRobo(robots.filter(robot=>robot.name.toLowerCase().includes(evt.target.value.toLowerCase())))
    };
    
    return(
        <div className="tc">
            <h1>Robofriends</h1>
            <SearchBox onChangeCallBack={searchUpd} />
            <CardList robots={updRobo} />
        </div>
    )
}

