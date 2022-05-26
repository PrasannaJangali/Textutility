import React ,{useState}  from 'react'

export default function Textform(props) {
   const [text,stateText]=useState("Enter text here");
   const handleonchange=(event)=>{
        stateText(event.target.value);
   }
   const handleUpcase=()=>{
       let a=text;
       let b=a.toUpperCase();
       stateText(b);
       props.showalert("Uppercase Enabled","success");
       
   }
   const handleLocase=()=>{
    let a=text;
    let b=a.toLowerCase();
    stateText(b);
    props.showalert("Lowercase Enabled","success");

    }
    const deletespaces=()=>{
        let b=text.replaceAll(' ','');
        stateText(b);
        props.showalert("Deletespace Enabled","success");
       
    }
    const cleartext=()=>{
        stateText("");
        props.showalert("Cleartext Enabled","warning");
       
    }
    const alternatecase=()=>{
        var charArray = text.toLowerCase().split("");
        for (var i = 1; i < charArray.length; i += 2) {
            charArray[i] = charArray[i].toUpperCase();
        } 
        let b=charArray.join("");
        stateText(b);
        props.showalert("Alternateuppercase Enabled","success");
       
    }

    const copytext=()=>{
        var f=document.getElementById('exampleFormControlTextarea1');
        f.select();
        setTimeout(() => {
            f.selectionStart = 4;
            f.selectionEnd = 4;
        }, 2000);
        navigator.clipboard.writeText(f.value);
        props.showalert("Copytext Enabled","success");
    }
  return (
    <>
    <div className="mb-3 my-3 container">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.heading}</label>
  <textarea style={props.textarea} value={text} onChange={handleonchange}className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
   

    <button disabled={text.length===0} className="btn mx-1 my-3 btn-primary" style={props.mycolor} onClick={handleUpcase}>Click to Uppercase</button>
    <button disabled={text.length===0} className="btn mx-3 my-3 btn-primary" style={props.mycolor} onClick={handleLocase}>Click to Lowercase</button>
    <button disabled={text.length===0} className="btn my-3 btn-primary" style={props.mycolor} onClick={deletespaces}>delete spaces</button>
    <button disabled={text.length===0} className="btn my-3 mx-3 btn-primary" style={props.mycolor} onClick={cleartext}>Clear text</button>
    <button disabled={text.length===0} className="btn my-3  btn-primary" style={props.mycolor} onClick={alternatecase}>AlTeRnAtInG text</button>
    <button disabled={text.length===0} className="btn my-3 mx-2 btn-primary" style={props.mycolor} onClick={copytext}>Copy text</button>

    <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return (element.length>0)}).length} words and {text.replaceAll(' ','').length } characters</p>
    </div>
    <div className="container">
        <h2>Preview</h2>
        <p>{text.length>0 ? text:"Enter text to Preview"}</p>
    </div>
    </div>
    </>
  )
}
