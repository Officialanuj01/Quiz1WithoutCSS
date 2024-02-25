import React from "react";
import './App.css'
import {Route, Routes } from "react-router-dom";
import Main from "./Component/Main";
import Start from "./Component/Start";


class Quiz extends React.Component {

  render() {

    return (
      <>
              <Routes>
                <Route path="/Main" element= {<Main/>}></Route>
                <Route path="/" element = {<Start/>}></Route>
              </Routes>
      </>
    )
  }
}

export default Quiz;