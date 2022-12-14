import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Main from "./components/Main.js"


function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<Main />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
