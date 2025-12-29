export const addTask = (task) => ({
  type: "ADD_TODO",
  task,
});

export const removeTask = (task) => ({
  type: "REMOVE_TODO",
  task,
});
