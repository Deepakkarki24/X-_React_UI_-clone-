import "./App.css";
import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import SidebarRight from "./components/SidebarRight";
import MobileNav from "./components/MobileNav";

function App() {
  const [subsTitleText, setSubsTitleText] = useState("Subscribe to Premium");
  const [subsContText, setSubsContText] = useState(
    "Subscribe to unlock new features and if eligible, receive a share of ads revenue"
  );

  // const HandleContext = (title, text) => {
  //   const titleText = "Subscribe to Premium222";
  //   setSubsTitleText(titleText);

  //   const contentText =
  //     "Subscribe to unlock new features and if eligible, receive a share of ads revenue";
  //   setSubsContText(contentText);
  // };

  return (
    <>
      <div className="main container-fluid">
        <Sidebar />
        <Feed />
        <SidebarRight
          subsTitle={subsTitleText}
          subsContent={subsContText}
          // HandleContext={HandleContext}
        />
        <MobileNav />
      </div>
    </>
  );
}

export default App;
