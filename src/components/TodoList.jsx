import TodoListsItem from './TodoListsItem'

const TodoList = ({ todos, removeTodo, updateTodo }) => {
     return (
          <div className="mt-8 overflow-hidden rounded-t-md bg-white transition duration-700 dark:bg-gray-800 [&>article]:p-4">
               {todos.map((todo) => (
                    <TodoListsItem
                         key={todo.id}
                         todo={todo}
                         removeTodo={removeTodo}
                         updateTodo={updateTodo}
                    />
               ))}
          </div>
     )
}
export default TodoList
