import React from "react";
import Card from "./Card"

export default function CardList ({robots}) { 
    const List = robots.map((robot)=><Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />);

    return(<div>
      {List}
    </div>)

}

