import React from "react";
import { NavLink, Link } from "react-router-dom";
import logOut from "../../Assets/Images/logOut.svg"


export function AppBar({data, open, setOpen}) {

  return (
    <div
      className={open ? "AppModalCard open" : "AppModalCard"}
      onClick={() => setOpen(!open)}
    >
      <div className={open ? "appBar openApp" : "appBar"}>
        <div>
        <div className="AppProfile">
          <figure></figure>
          <div>
            <h3>Nasriddinov Hojiakbar</h3>
            <p>Tizim admini</p>
          </div>
        </div>
          {data.map((item, index) => (
            <NavLink className="navBtn" key={index} to={item.linkName}>
              <img width="30px" src={item.img} alt="" />
              {item.name}
            </NavLink>
            
          ))}
        </div>
        <Link to="">
          <img width="30px" src={logOut} alt="" />
          Log out
        </Link>
      </div>
    </div>
  );
}
