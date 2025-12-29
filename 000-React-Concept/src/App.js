import React from "react";
import "./App.css";
import Card from "./components/UI/Card";
import UseReff from "./components/hooks/useRef/UseRef";
import UseState from "./components/hooks/useState/UseState";
import ControlledInput from "./components/Controller/ControlledInput";
import UncontrolledInput from "./components/Uncontrolled/UncontrolledInput";
import UseEffect from "./components/hooks/useEffect/UseEffect";
import ThemeButton from "./ThemeButton";
import Counter1 from "./components/hooks/useReducer/UseReducer";
import UseForm from "./customHooks/useForm";
import UseLocalStorage from "./customHooks/useLocalStorage";
import UseFetch from "./customHooks/useFetch";
import UseEventListener from "./customHooks/useEventListerner";
import UseMediaQuery from "./customHooks/useMediaQuery";
import Userlist from "./mapFilter&Reduce/Map";
import FilteredUsers from "./mapFilter&Reduce/Filter";
import TotalAge from "./mapFilter&Reduce/Reduce";

const App = () => {
  return (
    <div className="app-container">
      <h1 className="app-heading">User Interaction Components</h1>
      <div className="component-container">
        <Card>
          <>
            <h1>Custom Hooks Examples</h1>
            <UseForm />
            <UseLocalStorage />
            <UseFetch />
            <UseEventListener />
            <UseMediaQuery />
          </>
        </Card>
        <Card>
          <Card>
            <h2>useState</h2>
            <UseState />
          </Card>
          <Card>
            <h2>useRef</h2>
            <UseReff />
          </Card>
          <Card>
            <h2>useEffect</h2>
            <UseEffect />
          </Card>
          <Card>
            <h2>useReducer</h2>
            <Counter1 />
          </Card>
          <Card>
            <h2>Controlled Input</h2>
            <ControlledInput />
          </Card>
          <Card>
            <h2>Uncontrolled Input</h2>
            <UncontrolledInput />
          </Card>
          <Card>
            <h2>Theme Button</h2>
            <ThemeButton />
          </Card>
          <Card>
            <h2>Map Function</h2>
            <Userlist />
          </Card>
          <Card>
            <h2>Filter Function</h2>
            <FilteredUsers />
          </Card>
          <Card>
            <h2>Filter Function</h2>
            <TotalAge />
          </Card>
        </Card>
      </div>
    </div>
  );
};

export default App;
