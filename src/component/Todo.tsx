import { Button, IconButton } from "@mui/material";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DeleteIcon from '@mui/icons-material/Delete';

const Icon = ({ 
    todoId,
    isCompleted, 
    updateIsCompleted,
}: { 
    todoId: string,
    isCompleted: boolean, 
    updateIsCompleted: (todoId: string) => void;
}) => {
    return (
        <div onClick={() => updateIsCompleted(todoId)}>
            {isCompleted ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon/> }
        </div>
    );
}

export const Todo = ({
    todoId,
    name,
    isCompleted,
    updateIsCompleted,
    deleteTodo,
}: {
    todoId: string;
    name: string;
    isCompleted: boolean;
    updateIsCompleted: (todoId: string) => void;
    deleteTodo: (todoId: string) => void;
}) => {
    return (
        <Button 
            style={{ justifyContent: 'space-between', display: 'flex', alignItems: 'center' }} 
            fullWidth={true}
            endIcon={
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Icon todoId={todoId} isCompleted={isCompleted} updateIsCompleted={updateIsCompleted} />
                    <IconButton
                        onClick={(e) => {
                            e.stopPropagation();
                            deleteTodo(todoId);
                        }}
                        edge="end"
                        aria-label="delete"
                    >
                        <DeleteIcon />
                    </IconButton>
                </div>
            }
        >
            {name}
        </Button>
    );
};
