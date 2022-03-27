import './style.css';
import bell from "../../../../asete/imagines/bell.png"
import { useState } from 'react';


export default (props) => {
    const { number } = props;
    return (
        <div className="notification">
            <div className="not__num">
                {number}
            </div>
            <img className="bell" src={bell} alt="bell"></img>
        </div>
    )
}