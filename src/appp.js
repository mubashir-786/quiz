import React from 'react';
import "./appp2.css"
import { useState } from 'react';
export default function appp(prop) {

  return <div>
    <div> <h1 className='head' > -Quiz App-</h1> </div>
    <h5>------Question------</h5>
    <h3> {prop.ques}  </h3>
    <ul>
      {prop.option.map(list => { return <li> <button className="slt" onClick={prop.othr} >{list} </button> </li> })}
      <li> <button className="slt" onClick={prop.onClick} >{prop.correctOption}</button> </li>
    </ul>
    {/* {prop.option.map( list=>{ return <div>  <input type="radio" name='option' value={list}  /> {list}</div> })} */}
  </div>;
}
