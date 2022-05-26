// import logo from './logo.svg';
import './App.css';
import React ,{ useState } from 'react';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';

function App() {
  const [mode,setmode] = useState("light");
  const [alert,setalert] = useState(null);
  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type,
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }
  document.title="TextUtils";
  const [textarea,settextarea]=useState({
    backgroundColor:'white',
    color:'black',
  })
  const togglemode=()=>{
    if( mode==="light"){
      setmode("dark"); 
     document.body.style.backgroundColor='rgb(0 61 90)';
     document.body.style.color='white';
      showalert("Darkmode enabled","success");
      settextarea({
        color:'white',
        backgroundColor:'black'
      })
    }
    
    else{
      setmode("light");
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
      settextarea({
        color:'black',
        backgroundColor:'white',
      })
    }
  }
  
  return (
    <>
    <Navbar title="TextUtils" mode={mode} togglemode={togglemode} />
    <Alert alert={alert} showalert={showalert}/>
    <Textform showalert={showalert} alert={alert} textarea={textarea}  heading="Enter text to analyse" />
    </>
  );
}

export default App;
