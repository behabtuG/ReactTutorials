// Home Page Component
import React, { useState } from "react";
import Counter from "../../hooks/useState/CounterApp";
import CarsApp from "../propsVSState/CarsApp";
import Fruit from "../propsVSState/fruitApp";
import StateClass from "../stateInClassVsFunctional/StateInClass";
import StateInFunction from "../stateInClassVsFunctional/StateInFunction";
import { FaSun, FaMoon } from "react-icons/fa";
import "../../App.css";
import Timer from "../../hooks/useEffect/Timer";
import TernaryOperator from "../conditionalRendering/TernaryOperator";
import IfElse from "../conditionalRendering/IfElse";
import LogicalAnd from "../conditionalRendering/LogicalAND";
import SwitchCase from "../conditionalRendering/SwitchCase";
import Parent from "../propsDrilling/WithOut_useContext";
import Parent1 from "../propsDrilling/With_useContext";
import NumberList from "../reactLists/Items";
import Navmenu from "../reactLists/Navmenu";
import CounterApp from "../CounterApp";
import Themes from "../../hooks/useContext/Theme";
import Focus from "../../hooks/useRef/useRef";
import UseMemo from "../../hooks/performanceHooks/useMemo";
import UseCallback from "../../hooks/performanceHooks/useCallBack";
// import UseFetch from "../../hooks/ResourceHooks/useFetch";
import useWidth from "../../hooks/CustomHooks/useWidth";
import Click from "../../hooks/useState/Click";
import StateArray from "../../hooks/useState/StateArray";
import StateInObject from "../../hooks/useState/StateInObject";
import Apps from "../../hooks/useContext/App";
import Focuss from "../../hooks/useRef/UseRefs";
import VideoPlayer from "../../hooks/useRef/VideoPlayer";
import PreviousValue from "../../hooks/useRef/PreviousValue";
import UseMemos from "../../hooks/performanceHooks/useMemos";
import SolvingMemosbyMemo from "../../hooks/performanceHooks/solvingMemos";
// import UseCallBacks from "./hooks/performanceHooks/useCallBacks";
import SolvingCallBacks from "../../hooks/performanceHooks/solvingCallBacks";
import HookCounterOne from "../../hooks/useEffect/HookCounterOne";
import UseReducer from "../../hooks/otherHooks/useReducer";
import UseImperative from "../../hooks/otherHooks/ImperativeHandle";
import UseLayoutEffect from "../../hooks/otherHooks/useLayoutEffect";
// import UseReducer from "./hooks/useReducer/useReducer";
import { useNavigate } from "react-router-dom";
import Login from "../forms/Login";
import UncontrolledRorm from "../forms/UncontrollerForm";
import ControlleredForm from "../forms/ControlleredForm";
import BasicFormHandling from "../forms/BasicformHandling";
import DynamicFormHandling from "../forms/DynamicFormHandling";
const Home = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState("light"); // Theme state management

  const fruits = {
    name: "Mango",
    color: "Yellow",
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const numbers = [1, 2, 3, 4, 5];
  const menuItems = ["Home", "About", "Contact", "Login", "Register"];

  // const data = "https://jsonplaceholder.typicode.com/posts"; // URL for data fetching

  const width = useWidth();

  return (
    <div className={`App ${theme}`}>
      <h2>Full React Concepts Demo</h2>
      <button onClick={() => navigate("/contact")}>Go to Contact</button>
      <header className="app-header">
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>
      </header>
      <hr />
      <section>
        <h6>Props vs State</h6>
        <div className="side-by-side-container">
          <Fruit fruits={fruits} />
          <CarsApp />
        </div>
      </section>
      <hr />
      <section>
        <h6>State in Class & Functional Components</h6>
        <div className="side-by-side-container">
          <StateClass />
          <StateInFunction />
        </div>
      </section>
      <hr />
      <section>
        <h6>Props Drilling</h6>
        <div className="side-by-side-container">
          <Parent />
          <Parent1 />
        </div>
      </section>
      <hr />
      <section>
        <h6>React List</h6>
        <div className="side-by-side-container">
          <NumberList numbers={numbers} />
          <Navmenu menuitems={menuItems} />
        </div>
      </section>
      <hr />
      <section>
        <h6>Conditional Rendering</h6>
        <div className="side-by-side-container">
          <IfElse />
          <TernaryOperator />
          <LogicalAnd />
          <SwitchCase />
        </div>
      </section>
      <hr />
      <section>
        <h6>React Forms</h6>
        <div className="side-by-side-container">
          <Login />
          <UncontrolledRorm />
          <ControlleredForm />
          <BasicFormHandling />
          <DynamicFormHandling />
          {/* <TernaryOperator /> */}
          {/* <LogicalAnd /> */}
          {/* <SwitchCase /> */}
        </div>
      </section>
      <hr />
      <section>
        <h6>React Hooks</h6>
        <div className="side-by-side-container">
          <Counter />
          <Click />
          <Timer />
          <HookCounterOne />
          <StateArray />
          <StateInObject />
          <Themes />
          <Apps />
          <Focus />
          <Focuss />
          <VideoPlayer />
          <PreviousValue />
          <UseMemo />
          <UseMemos />
          <SolvingMemosbyMemo />
          <UseCallback />
          {/* <UseCallBacks /> */}
          <SolvingCallBacks />
          <UseReducer />
          <UseImperative />
          <UseLayoutEffect />
          {/* <UseFetch url={data} /> */}
          <h6>Window Width: {width}px</h6>
        </div>
      </section>
      <hr />
      <section>
        <h6>React Redux</h6>
        <div className="side-by-side-container">
          <CounterApp />
        </div>
      </section>
      <hr />
    </div>
  );
};

export default Home;
