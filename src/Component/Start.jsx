import React from "react";
import './Quiz.css'
import { Link } from "react-router-dom";

class Start extends React.Component {

    render() {
        return (
            <>
                <div className="startingpoint">
                    <h1 >Quiz App </h1>
                    <Link to= "/Main"> <button className="btn"> Play </button>  </Link>
                </div>
            </>
        )
    }
}

export default Start
