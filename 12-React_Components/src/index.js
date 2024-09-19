import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import ShoppingList from "./RenderingLists/list";
import ConditionalRender from "./conditionalRendering/render";
import App from "./SharingdatabnComponents/App";
import ContextApp from "./useContext/WithProps/ContextApp";
import WithProp from "./useContext/WithProps/Heading/App";
import WithProps from "./useContext/WithProps/Heading/NewApp";
import WithContextApp from "./useContext/WithContext/App";
import ContextintermediateApp from "./useContext/WithContext/CPTIC/App";
import ChallengeApp from "./useContext/WithContext/Challenge/App";
import ManagingStateApp from "./ManagingState/QuestionOne";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <div className="layout">
        <Sidebar /> {/* Sidebar first to appear on the left */}
        <div className="main-content">
          <Header />
          <main className="content">
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/shopping-list" element={<ShoppingList />} />
              <Route path="/Render" element={<ConditionalRender />} />
              <Route path="/context-app" element={<ContextApp />} />
              <Route path="/with-prop" element={<WithProp />} />
              <Route path="/with-props" element={<WithProps />} />
              <Route path="/with-context-app" element={<WithContextApp />} />
              <Route
                path="/context-intermediate-Component"
                element={<ContextintermediateApp />}
              />
              <Route path="/ChallengeApp" element={<ChallengeApp />} />
              <Route path="/ManagingStateApp" element={<ManagingStateApp />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  </React.StrictMode>
);
