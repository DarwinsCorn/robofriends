import React from "react";

export default function SearchBox({onChangeCallBack}) {
   
    return(
        <div className="pa2">
            <input className="pa3 ba b--green bg-lightest-blue"
            type="search" 
            placeholder="search bots"
            onChange={onChangeCallBack}
            />
        </div>
    )
}

