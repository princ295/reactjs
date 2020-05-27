
import React from "react";

//routing
import { BrowserRouter, Route } from "react-router-dom";

//component
import NoteList from "./notelist";
import FormDetail from "./formdetail";

//global style fron bulma
import "../index.scss";
import "../style/layoutStyle.scss";


const Layout = (props)=>{
  return(
    <div className="layout-box"> 
      <div className="top-bar">
        <h1>Note Mate</h1>
      </div>

      <div className="page-content">
        {props.children}
       
      <BrowserRouter>
        <Route path="/" exact component={NoteList}></Route>
        <Route path="/addlist" exact component={FormDetail}></Route>
        <Route path="/addlist/:id" exact component={FormDetail}></Route>
      </BrowserRouter>
      </div>

    </div>
  )
}
export default Layout;
