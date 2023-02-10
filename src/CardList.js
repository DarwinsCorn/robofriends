import React from "react";
import Card from "./Card"

export default function CardList ({robots}) { 
    const List = robots.map((user,idx)=><Card id={robots[idx].id} name={robots[idx].name} email={robots[idx].email} />);

    return(<div>
      {List}
    </div>)

}

