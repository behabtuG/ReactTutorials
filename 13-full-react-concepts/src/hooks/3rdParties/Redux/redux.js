import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, removeTask } from "../../3rdParties/Redux/actionCreators";

const ReactRedux = () => {
  // Access Redux state
  // const tasks = useSelector((state) => state);
  // const tasks = useSelector((state) => state.tasks);
  const tasks = useSelector((state) => state.tasks || []);

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Redux</h2>
      <button onClick={() => dispatch(addTask("Wake up"))}>Add Wake up</button>
      <button onClick={() => dispatch(addTask("Study"))}>Add Study</button>
      <button onClick={() => dispatch(addTask("Eat"))}>Add Eat</button>
      <button onClick={() => dispatch(addTask("Go to sleep"))}>
        Add Go to sleep
      </button>
      <button onClick={() => dispatch(removeTask("Eat"))}>Remove Eat</button>
      <button onClick={() => dispatch(addTask("Work"))}>Add Work</button>
      <button onClick={() => dispatch(addTask("Sleep"))}>Add Sleep</button>
      <button onClick={() => dispatch(removeTask("Sleep"))}>
        Remove Sleep
      </button>

      <h3>Current Tasks:</h3>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default ReactRedux;
