import { useState } from 'react'

const TodoCreate = ({ createTodo }) => {
     const [title, setTitle] = useState('')
     const handleSubmitAddTodo = (e) => {
          e.preventDefault()

          if (title.trim().length > 0) {
               createTodo(title)
               setTitle('')
          }
          setTitle('')
     }
     return (
          <form
               onSubmit={handleSubmitAddTodo}
               className="mt-8 flex items-center gap-4 overflow-hidden rounded-md bg-white px-4 py-3 transition duration-700 dark:bg-gray-800"
               action=""
          >
               <span className="inline-block h-5 w-5 rounded-full border-2"></span>
               <input
                    type="text"
                    placeholder="create nuevo"
                    className="w-full text-gray-400 outline-none transition duration-700 dark:bg-gray-800"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
               />
          </form>
     )
}

export default TodoCreate
