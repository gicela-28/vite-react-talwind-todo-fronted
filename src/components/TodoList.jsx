import { Droppable, Draggable } from '@hello-pangea/dnd'
import TodoListsItem from './TodoListsItem'

const TodoList = ({ todos, removeTodo, updateTodo }) => {
     return (
          <Droppable droppableId="todos">
               {(droppableProvided) => (
                    <div
                         ref={droppableProvided.innerRef}
                         {...droppableProvided.droppableProps}
                         className="mt-8 overflow-hidden rounded-t-md bg-white transition duration-700 dark:bg-gray-800 [&>article]:p-4"
                    >
                         {todos.map((todo, index) => (
                              <Draggable
                                   key={todo.id}
                                   index={index}
                                   draggableId={`${todo.id}`}
                              >
                                   {(draggableProvided) => (
                                        <TodoListsItem
                                             todo={todo}
                                             removeTodo={removeTodo}
                                             updateTodo={updateTodo}
                                             ref={draggableProvided.innerRef}
                                             {...draggableProvided.dragHandleProps}
                                             {...draggableProvided.draggableProps}
                                        />
                                   )}
                              </Draggable>
                         ))}
                         {droppableProvided.placeholder}
                    </div>
               )}
          </Droppable>
     )
}
export default TodoList
