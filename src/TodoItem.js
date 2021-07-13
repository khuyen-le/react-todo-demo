import './TodoItem.css';
function TodoItem(props) {
  /*
  Props are like states -- also attributes of components. But they are immutable and only rendered once when the component starts.
  Props are passed from the parent to the child component. 
  To pass something as a prop, in the parent component do: 
  <ChildComponent propName=propValue></>
  In the child component, you can then refer to propValue as props.propName
  */
  function handleRemove() {
    props.handleRemove(props.id); // Q3- What's this doing? 
  }

  return (
    <div className="card">
      {props.name}
      {/* Q4- we don't need to show this in an actual todo list, but try making the id of the item display as well!*/}
      <button onClick={handleRemove}>REMOVE</button>
    </div>
  )
}

export default TodoItem;