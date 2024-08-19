import { ChangeEvent, useEffect, useState, KeyboardEvent } from "react"
import { v4 as uuidv4 } from 'uuid';
import { CreateNewTodo } from "./component/CreateNewTodo";
import { TodoList } from "./component/TodoList";

export type TodoType = {id: string; name: string; isCompleted: boolean};

function App() {
  const [todoList, setTodoList] = useState<TodoType[]>(() => {
    const savedTodoList = JSON.parse(localStorage.getItem('todoList') ?? '[]');
    if(savedTodoList?.length){
      return savedTodoList
    }
    return [];
  });
  const [newTodoString, setNewTodoString] = useState('');

  const onNewTodoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodoString(e.target.value);
  };

  const onAddingButtonClick = () => {
    if (newTodoString.trim() === '') {
      return;
    }

    const newTodoItem: TodoType = {
      id: uuidv4(),
      name: newTodoString,
      isCompleted: false,
    }

    setTodoList([newTodoItem, ...todoList]);
    setNewTodoString('');
  };
  
  const updateIsCompleted = (todoId: string) => {
    setTodoList((prevState) => {
      return prevState.map((todo) => {
        if (todo.id === todoId) {
          return {...todo, isCompleted: !todo.isCompleted}
        }
        return todo;
      })
    })
  }
  
  const deleteTodo = (todoId: string) => {
    setTodoList((prevState) => {
      return prevState.filter((todo) => todo.id !== todoId);
    });
  }

  const handleEnterKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onAddingButtonClick();
    }
  };

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);

  console.log({ newTodoString });

  return (
    <>
      <p>This is Todo App</p>
      <CreateNewTodo
        onAddingButtonClick={onAddingButtonClick}
        newTodoString={newTodoString}
        onNewTodoChange={onNewTodoChange}
        onKeyPress={handleEnterKeyPress}
      />
      <TodoList todoList={todoList} updateIsCompleted={updateIsCompleted} deleteTodo={deleteTodo}/>
    </>
  );
}

export default App
