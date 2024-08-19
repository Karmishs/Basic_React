import { Button, TextField } from "@mui/material";
import React, {ChangeEvent, KeyboardEvent} from "react";

type Props = {
    newTodoString: string;
    onNewTodoChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onAddingButtonClick: () => void;
    onKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void;
};

export const CreateNewTodo = ({
    newTodoString,
    onNewTodoChange,
    onAddingButtonClick,
    onKeyPress, 
} : Props ) => {
  return (
    <div>
      <TextField 
        size="small"
        value={newTodoString}
        onChange={onNewTodoChange}
        onKeyDown={onKeyPress}
        />
        <Button variant="contained" onClick={onAddingButtonClick}>
        Add
        </Button>
    </div>
  );
};