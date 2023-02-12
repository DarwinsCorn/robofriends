import React,{useState,useEffect} from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";


export default function App() {

    const [robots,setRobots] = useState([]);
    const [searchVal,setSearchVal] = useState("");
    const [filtBot, setFiltBot] = useState([]);
    
    
    let searchUpd = evt=> {
        setSearchVal(evt.target.value);
    };

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>response.json())
        .then(users=>setRobots(users))
        },
        []         
    );

    useEffect(()=>{
        setFiltBot(robots.filter(robot=>robot.name.toLowerCase().includes(searchVal.toLowerCase())))
    }
    , [robots, searchVal]
    );
    
    return(
        <div className="tc">
            <Scroll>
                <h1 className="f-headline">Robofriends</h1>
                <SearchBox onChangeCallBack={searchUpd} />
            </Scroll>
                <CardList robots={filtBot} />
            
        </div>
    )
}

