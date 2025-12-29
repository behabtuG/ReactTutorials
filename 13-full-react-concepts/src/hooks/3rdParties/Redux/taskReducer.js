export function taskReducer(state = { tasks: [] }, action) {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, tasks: [...state.tasks, action.task] };
    case "REMOVE_TODO":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task !== action.task),
      };
    default:
      return state;
  }
}
