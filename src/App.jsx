import { DragDropContext } from '@hello-pangea/dnd'

import { useEffect, useState } from 'react'
import Header from './components/Header'
import TodoComputed from './components/TodoComputed'
import TodoCreate from './components/TodoCreate'
import TodoFilter from './components/TodoFilter'
import TodoList from './components/TodoList'
// import { list } from 'postcss'

// const initialStateTodos = [
//      {
//           id: 1,
//           title: 'go to the gym',
//           completed: true,
//      },
//      {
//           id: 2,
//           title: 'complete the text',
//           completed: false,
//      },
//      {
//           id: 3,
//           title: 'Otro',
//           completed: false,
//      },
//      {
//           id: 4,
//           title: 'tengo hambre',
//           completed: true,
//      },
//      {
//           id: 5,
//           title: 'gicela',
//           completed: true,
//      },
// ]

const initialStateTodos = JSON.parse(localStorage.getItem('todos')) || []

const reorder = (list, startIndex, endIndex) => {
     const result = [...list]
     const [remove] = result.splice(startIndex, 1)
     result.splice(endIndex, 0, remove)

     return result
}

const App = () => {
     const [todos, setTodos] = useState(initialStateTodos)

     useEffect(() => {
          localStorage.setItem('todos', JSON.stringify(todos))
     }, [todos])

     const createTodo = (title) => {
          const newTodo = {
               id: Date.now(),
               title: title.trim(),
               completed: false,
          }
          setTodos([...todos, newTodo])
     }

     const removeTodo = (id) => {
          setTodos(todos.filter((todo) => todo.id !== id))
     }

     const updateTodo = (id) => {
          setTodos(
               todos.map((todo) =>
                    todo.id === id
                         ? { ...todo, completed: !todo.completed }
                         : todo
               )
          )
     }

     const computedItemLeft = todos.filter((todo) => !todo.completed).length

     const clearCompleted = () => {
          setTodos(todos.filter((todo) => !todo.completed))
     }

     const [filter, setFilter] = useState('completed')

     const changeFilter = (filter) => setFilter(filter)

     const filteredTodos = () => {
          switch (filter) {
               case 'all':
                    return todos
               case 'active':
                    return todos.filter((todo) => !todo.completed)
               case 'completed':
                    return todos.filter((todo) => todo.completed)
               default:
                    return todos
          }
     }

     const handleDragEnd = (result) => {
          const { destination, source } = result
          if (!destination) return
          if (
               source.index === destination.index &&
               source.droppableId === destination.droppableId
          ) {
               return // no hacemos nada si se soltó en el mismo lugar
          }
          setTodos((prevTasks) =>
               reorder(prevTasks, source.index, destination.index)
          )
     }


	return (
          <div className="min-h-screen bg-gray-200 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat transition duration-700 dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] md:bg-[url('./assets/images/bg-desktop-light.jpg')] md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')]">
               <Header />
               <main className="container mx-auto mt-8 px-4 md:max-w-xl">
                    <TodoCreate createTodo={createTodo} />

                    {/* todoList (TdoItem) TodoUpdate &  TodoDelete */}
                    <DragDropContext onDragEnd={handleDragEnd}>
                         <TodoList
                              todos={filteredTodos()}
                              removeTodo={removeTodo}
                              updateTodo={updateTodo}
                         />
                    </DragDropContext>
                    {/* TodoComputed */}
                    <TodoComputed
                         computedItemLeft={computedItemLeft}
                         clearCompleted={clearCompleted}
                    />
                    {/* TodoFilter */}
                    <TodoFilter changeFilter={changeFilter} filter={filter} />
               </main>
               <footer className="mb-5 mt-8 text-center transition duration-700 dark:bg-gray-800 dark:text-gray-300">
                    Drag anf frop to recorder list
               </footer>
          </div>
     )
}

export default App
