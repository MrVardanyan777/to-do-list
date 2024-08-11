import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';

interface TaskItemProps {
  id: number;
  text: string;
  completed: boolean;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ id, text, completed, toggleTodo, deleteTodo }) => {
  return (
    <div className='w-full max-h-max flex justify-between items-center p-2 font-serif bg-[#ecf0f1] rounded-md' style={{opacity: completed ? '0.5' : '1'}}>
      <p style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {text}
      </p>
      <div className='flex items-start'>
        <CheckIcon
          fontSize='large'
          sx={{ ":hover": { color: 'green', transition: '.3s', cursor: 'pointer' } }}
          onClick={() => toggleTodo(id)}
        />
        <DeleteIcon
          fontSize='large'
          sx={{ ":hover": { color: 'red', transition: '.3s', cursor: 'pointer' } }}
          onClick={() => deleteTodo(id)}
        />
      </div>
    </div>
  );
};

export default TaskItem;
