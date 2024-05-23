import React, { useState } from 'react'

export default function Form(props) {

   const handleUpClick =() =>{
    // console.log("upper case clicked");
    let newText = text.toUpperCase();
    setText(newText);

  }
   const handleLoClick =() =>{
    // console.log("lower case clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase" , "success");

  }

  const handleCopy=() =>{
   let text = document.querySelector("#myBox");
   text.select();
   navigator.clipboard.writeText(text.value);
   console.log(text.value); 
   props.showAlert("copied to clipboard" , "success");

  }
  
   const handleOnChange =(event) =>{
    // console.log("onchnage clicked");
    setText(event.target.value);

  }

    

const [text,setText] = useState("enter your text");
    return (
        <>
    <div>
       
<div className=" container mb-3" style={{color: props.mode==='dark'?'white':`black`}}>
    <h1>{props.heading}</h1>

  <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="3" style={{backgroundColor : props.mode==='dark'?'grey':`white`}}></textarea>
</div>
      
      <button className="btn btn-primary mx-2" onClick={handleUpClick} >uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick} >Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy} >Copy text</button>
     
     
    </div>

    <div className="container"  style={{color: props.mode==='dark'?'white':`black`}} >
        <h1>counting of words</h1>
        <p>{text.split(/[" "]+/).length -1} words and {text.length} letter</p>
        <p> {0.008 * text.split(" ").length} mintues to read</p>
        <h2>Preview</h2>
        <p> {text}</p>
        
     
       
    </div>
    </>
  )
}
