import React from 'react'
import { useState } from 'react'
export default function Tesxtarea(props) {
    const handleUpCase = ()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.handleAlert("text converted to Upper case","success");
    }
    const handleDownCase = ()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.handleAlert("text converted to lower case","success");
    }
    const handleClear = ()=>{
        let newText="";
        setText(newText);
        props.handleAlert("text cleared","success");
    }
    const handleOnChange=(Event)=>{
        setText(Event.target.value);
    }
    const [text,setText]=useState("");
  return (
    <div style={{color: props.mode==='dark'?'white':'black'}}>
      <div className="mb-3">
        <label htmlFor="my-box" className="form-label"> </label>
        <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'grey':'white'}}  value={text} onChange={handleOnChange} id="my-box" rows="8"></textarea>
        <button className="btn btn-primary my-3 mx-2" onClick={handleUpCase}>Convert To UpperCase </button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleDownCase}>Convert To lowerCase </button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleClear}>Clear Text </button>
      </div>
      <div className="container">
        <h2>Details</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} minutes required to read</p>
        <h2>Paragraph Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  )
}
