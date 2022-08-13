import React from "react";
import { FaSistrix } from "react-icons/fa";
import { FaEllipsisH} from "react-icons/fa"
const Nav = (props) => {
    return(
        <div className="comp">
            <h2>Friends</h2>
            <div className="col-2">
                <div className="search">
                    <i className="chan"><FaSistrix /></i>
                    <input type="text" onChange={props.onchange} placeholder="Search..." />
                    <p>{props.search}</p>
                </div>
                <p>Friend requests</p>
                <p>find Friends</p>
                <div id="hy">
                    <FaEllipsisH id="hyy"/>
                </div>
            </div>
        </div>
    );
}

export default Nav