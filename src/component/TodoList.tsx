import { TodoType } from "../App";
import { Todo } from "./Todo";

export const TodoList = ({ 
        todoList, 
        updateIsCompleted,
        deleteTodo,
    }: {
        todoList: TodoType[];
        updateIsCompleted:(todoId: string) => void;
        deleteTodo: (todoId: string) => void;
    }) => {
        return (
            <div>
                {todoList.map((todo) => {
                    return (
                        <Todo key={todo.id} 
                        todoId={todo.id} 
                        name={todo.name} 
                        isCompleted={todo.isCompleted} 
                        updateIsCompleted={updateIsCompleted}
                        deleteTodo={deleteTodo}
                        />
                    )
                })}
            </div>
    );
};
