import { AnimatePresence, motion } from "framer-motion";
import useTodoStore from "../../store/TodoStore";
import TodoItem from "../TodoItem/TodoItem";

export default function TodoList() {
    const todos = useTodoStore(state => state.todos);

    return (
        <AnimatePresence>
            <ul>
                {Array.isArray(todos) && todos.map(todo => (
                    <motion.li key={todo.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <TodoItem todo={todo} />
                    </motion.li>
                ))}
            </ul>
        </AnimatePresence>
    );
}
