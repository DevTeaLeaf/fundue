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
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
    </>
  );
}

export default App;
