import { useState } from "react";
import useTodoStore from "../../store/TodoStore";

export default function AddTodoForm() {
    const [text, setText] = useState('');
    const addTodo = useTodoStore(state => state.addTodo);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        addTodo(text);
        setText('');
    };

    return (
        <form onSubmit={handleSubmit} className="flex justify-between p-2">
            <input
                type="text"
                className="flex-1 p-2 border rounded"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add New Todo"
            />
            <button
                type="submit"
                className="transition-all duration-200 ease-in-out transform hover:bg-blue-600 px-6 bg-blue-500 text-white ml-2 rounded"
            >
                Add
            </button>
        </form>
    );
}
