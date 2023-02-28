import React from "react";
import {FiMapPin} from 'react-icons/fi';

export default function Card(props) {
    return(
        <div className="flex flex-1 items-center justify-between space-x-4">
            <div>
                <img src={`${props.card.image}`} className="max-w-xs w-32 h-44 rounded-md" alt="" />
            </div>
            <div>
                <div className="flex items-center text-darkBlue ">
                    <FiMapPin className="text-lightOrange text-exs"/>
                    <h4 className="uppercase tracking-widest text-exs ml-1">{props.card.country}</h4>
                    <a href="#" className="underline ml-4 text-grayishBlue text-exs">View on Google Maps</a>
                </div>
                <h1 className="text-2xl font-bold">{props.card.feature}</h1>
                <h5 className="text-exs font-bold mt-4">{props.card.date}</h5>
                <p className="text-exs mt-2">{props.card.description}</p>
            </div>
        </div>
    )
}