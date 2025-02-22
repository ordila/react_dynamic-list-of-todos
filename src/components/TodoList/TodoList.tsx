import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoItem } from '../TodoItem/TodoItem';

interface ITodoList {
  todos: Todo[];
}

export const TodoList: React.FC<ITodoList> = ({ todos }) => (
  <table className="table is-narrow is-fullwidth">
    <thead>
      <tr>
        <th>#</th>
        <th>
          <span className="icon">
            <i className="fas fa-check" />
          </span>
        </th>
        <th>Title</th>
        <th> </th>
      </tr>
    </thead>

    <tbody>
      {todos?.map(todo => {
        return <TodoItem {...todo} key={todo.id} />;
      })}
    </tbody>
  </table>
);
