/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import useTodoStore from "../../store/TodoStore";

export default function TodoItem({ todo }) {
    const { removeTodo, toggleTodo } = useTodoStore();
    const variants = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
    };

    return (
        <motion.div variants={variants} initial='initial' animate='animate' className={`flex items-center p-2`} layout>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
            />
            <span className={`flex-1 ml-2 ${todo.completed ? 'line-through' : ''}`}>
                {todo.text}
            </span>
            <button
                onClick={() => removeTodo(todo.id)}
                className="px-2 py-1 bg-red-500 text-white rounded"
            >
                Delete
            </button>
        </motion.div>
    );
}
