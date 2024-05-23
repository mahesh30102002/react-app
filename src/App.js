import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';

// import About from './components/About';
import React , { useState}from 'react'
import Alert from './components/Alert';
// import Contact from './components/Contact';

// import {
//   BrowserRouter,
//   Route,
//   Routes,
// } from "react-router-dom";

    

function App() {

  const[mode,setMode]= useState('light');
  
  const[alert,setAlert] = useState(null);

  const showAlert =(message,type)=>{
    setAlert({
      msg : message,
      type : type
    })

    setTimeout(()=>{
      setAlert(null);

    },2000)

  }

 
  const toggleMode =()=>{
    if(mode==="light"){
    setMode("dark")
    document.body.style.backgroundColor = "grey";
    showAlert("dark mode enabled" , "success");
    document.title = "Textutils - Darkmode"
  
    }else{
      setMode("light")
      document.body.style.backgroundColor = "white";
      showAlert("light mode enabled" , "success");
     
    }
  }
  return (
    <>
  {/* <BrowserRouter> */}
<Navbar title="ccd" hometext="Home"  mode={mode}   toggleMode={toggleMode}/>
<Alert alert={alert}/>

  <div className="container">
  <Form heading="enter your text" mode={mode} showAlert={showAlert}/>

  {/* <Routes> */}
        {/* <Route exact path="/" element={<Form heading="enter your text" mode={mode} showAlert={showAlert}/>} /> */}
        {/* <Route exact path="/about/*" element={<About />} />  */}
        {/* <Route exact path="/contact/*" element={<Contact />} />  */}
  {/* </Routes>     */}

</div>
{/* </BrowserRouter> */}
          
   </>
  );
}

export default App;
