import { ADD_TASK, DELETE_TASK } from "../config/actionTypes";
import Task from "../models/Task";
const initialState = [
  new Task(1,"Learn java","app"),
  new Task(2,"Learn redux","store")
];
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const { data } = action;
      const tasks = new Task(state.length + 1, data.title, data.description);
      return [...state, tasks];
      
    case DELETE_TASK:
      const { id } = action;
      return state.filter((task) => task.id !== id);

    default:
      return state;
  }
};

export default taskReducer;
