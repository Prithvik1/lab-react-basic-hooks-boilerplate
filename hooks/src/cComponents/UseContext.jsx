import React,{ useContext } from "react";
import { ToggleTheme } from "../App";
import NewUseState from "./NewUseState";


function UseContext(){
  const para = `Not much`

  const theme = useContext(ToggleTheme);
  const themeStyle = {
    backgroundColor: theme?"black":"grey",
    color:theme?"grey":"black",
    padding:"2rem",
    margin:"2rem"
  }

  return(
    <div style={themeStyle}>
      <NewUseState para={para}/>
    </div>
  )
}

export default UseContext;