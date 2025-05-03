import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks, selectAllTasks, getTasksStatus, getTasksError } from '../features/tasksSlice';

const TasksList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectAllTasks);
  const status = useSelector(getTasksStatus);
  const error = useSelector(getTasksError);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTasks());
    }
  }, [status, dispatch]);

  let content;

  if (status === 'loading') {
    content = <div className="loader">Загрузка...</div>;
  } else if (status === 'succeeded') {
    content = (
      <ul className="tasks-list">
        {tasks.map(task => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            {task.title}
          </li>
        ))}
      </ul>
    );
  } else if (status === 'failed') {
    content = <div className="error">{error}</div>;
  }

  return (
    <section className="tasks-section">
      <h2>Список задач</h2>
      {content}
    </section>
  );
};

export default TasksList;
