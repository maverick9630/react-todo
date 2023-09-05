import React from 'react';

const ShowTask = ({ tasklist, setTasklist, task, setTask }) => {

    const handleClear = () => {
        setTasklist([])
    }

    const handleEdit = (id) => {
        const selectedTask = tasklist.find(todo => todo.id === id);
        setTask(selectedTask)
    }

    const handleDelete = (id) => {
        const updatedTask = tasklist.filter((task) => task.id !== id)
        setTasklist(updatedTask)
    }
  return (
    <section className='showTask'>
      <div className="head">
        <div className='title-count'>
          <span className='title'>Todo</span>
          <span className='count'>{tasklist.length}</span>
        </div>
        <button className='clearAll' onClick={handleClear}>Clear All</button>
      </div>
      <ul>
        {tasklist.map((todo) => (
          <li>
            <p>
              <span>{todo.name}</span>
              <span>{todo.time}</span>
            </p>
            <i onClick = {()=> handleEdit(todo.id)}className='bi bi-pencil-square'></i>
            <i onClick = {() => handleDelete(todo.id)}className='bi bi-trash'></i>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ShowTask;
