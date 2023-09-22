import Backdrop from "./components/Backdrop";
import Todo from "./components/Todo";
import Modal from "./components/Modal";

function App() {
  return (
    <div>
      <h1>To Dos</h1>
      <Todo title="title" />
      <Todo title="title2" />
      <Todo title="title3" />
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
