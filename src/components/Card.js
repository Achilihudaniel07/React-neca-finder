import React from "react";
import { FaEllipsisH} from "react-icons/fa"

const Card = (props) => {
    return (
        <div className="cards">
            {
                props.Records.map(record => {
                    return (
                        <div className="card" key={record.id}>
                            <div className="flex">
                                <img src={record.image} alt = {record.caption} />
                                <div className="flexb">
                                    <h3>{record.caption}</h3>
                                    <span>{record.friend} mutual friends </span>
                                </div>
                            </div>
                            <FaEllipsisH className="icon" />
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Card;