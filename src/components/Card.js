import React from "react";

const Card = ({name,email,id}) => {
    return(
        <div className="tc bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="omar-pic" src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p><email>{email}</email></p>
            </div>
        </div>
    );
}

export default Card;