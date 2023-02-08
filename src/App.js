import React from "react";
import CardList from "./CardList";
import {robots} from "./robots";
import SearchBox from "./SearchBox";


function App() {

    return(
        <>
            <h1>Robofriends</h1>
            {/* <SearchBox /> */}
            <CardList robots={robots} />
        </>
    )
}

export default App;