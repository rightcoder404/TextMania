import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Textarea from "./components/Tesxtarea";
import Alert from "./components/Alert";
// import About from "./components/About";
// import { BrowserRouter as Router,  Routes, Route } from "react-router-dom";
function App() {
  const [alert, setAlert] = useState(null);
  const handleAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const [mode, setMode] = useState("light");
  const handleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      handleAlert("darkmode avtivated", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      handleAlert("lightmode avtivated", "success");
    }
  };

  return (
    <>
      <div className="container my-3">
        {/* <Router> */}
        <Alert alert={alert} handleAlert={handleAlert} />
        <Navbar
          text="Text Mania"
          mode={mode}
          handleMode={handleMode}
          home="Home"
        />
        <Textarea handleAlert={handleAlert} mode={mode} />
        {/* <Routes>
          <Route exact path="/Textarea" element={<Textarea handleAlert={handleAlert} mode={mode} />}/>
          <Route exact path="/About" element={<About />} />
        </Routes>
        </Router> */}
      </div>
    </>
  );
}

export default App;
