import About from "./components/About";
import './App.css';
// import GetTodos from "./components/GetTodos";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="todo-app">
      <Header />
      {/* <div className="todo-app"> */}
      <About />
      {/* <TodosHandler /> */}
      {/* <GetTodos /> */}
      <TodoList />
      {/* </div> */}
      <Footer />
    </div>
  );
}

export default App;
