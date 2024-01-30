import "./App.css";
import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

function App() {
  // const [isActive, setIsActive] = useState([
  //   {
  //     fontWeight: "700",
  //   },
  // ]);

  return (
    <>
      <div className="main container-fluid">
        <Sidebar />
        <Feed />
      </div>
    </>
  );
}

export default App;
