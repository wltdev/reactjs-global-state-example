import { proxy } from "valtio";

const removeTodo = (todos, id) =>
  todos.filter((todo) => todo.id !== id)

const addTodo = (todos, text) => [
  ...todos,
  {
    id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
    text,
    done: false,
  },
];

const updateTitle = (text) => text;

const store = proxy({
  todos: [],
  newTodo: "",
  appTitle: "App title",
  newAppTitle: "",
  removeTodo: (id) => {
    store.todos = removeTodo(store.todos, id);
  },
  addTodo: () => {
    store.todos = addTodo(store.todos, store.newTodo);
    store.newTodo = "";
  },
  updateTitle: (text) => {
    store.appTitle = updateTitle(text)
    store.newAppTitle = "";
  }
});

export default store;