import React from "react";

import { Routes, Route, Link } from "react-router-dom";

import { Home } from "./pages/Home";
import { Error404 } from "./pages/Error404";
import { Checkout } from "./pages/Checkout";
import { Terms } from "./pages/Terms";
import { FAQ } from "./pages/FAQ";
import { Rounds } from "./pages/Rounds";
import { Discover } from "./pages/Discover";
import { PersonalAccount } from "./pages/PersonalAccount";
import { PublicProfile } from "./pages/PublicProfile";
import { EditProfil } from "./pages/EditProfil";
import { SingleProject } from "./pages/SingleProject";
import { SingleProjectOwner } from "./pages/SingleProjectOwner";
import { SingleRound } from "./pages/SingleRound";
import { Step1 } from "./pages/Apply/Step1";
import { Step2 } from "./pages/Apply/Step2";
import { Step3 } from "./pages/Apply/Step3";
import { Step4 } from "./pages/Apply/Step4";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/terms" element={<Terms />}></Route>
        <Route path="/faq" element={<FAQ />}></Route>
        <Route path="/rounds" element={<Rounds />}></Route>
        <Route path="/discover" element={<Discover />}></Route>
        <Route path="/personalAccount" element={<PersonalAccount />}></Route>
        <Route path="/publicProfile" element={<PublicProfile />}></Route>
        <Route path="/editProfile" element={<EditProfil />}></Route>
        <Route path="/singleProject" element={<SingleProject />}></Route>
        <Route
          path="/singleProjectOwner"
          element={<SingleProjectOwner />}
        ></Route>
        <Route path="/singleRound" element={<SingleRound />}></Route>
        <Route path="/apply/step-1" element={<Step1 />}></Route>
        <Route path="/apply/step-2" element={<Step2 />}></Route>
        <Route path="/apply/step-3" element={<Step3 />}></Route>
        <Route path="/apply/step-4" element={<Step4 />}></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
    </>
  );
}

export default App;
