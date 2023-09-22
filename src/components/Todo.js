// function Todo() {
//   return (
//     <div className="card">
//       <h2>Title</h2>
//       <div className="actions">
//         <button className="btn">Delete</button>
//       </div>
//     </div>
//   );
// }

// export default Todo;

export default function Todo(props) {
  function deleteHandler() {
    console.log("clicked");
  }
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
    </div>
  );
}
