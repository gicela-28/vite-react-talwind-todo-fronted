const TodoComputed = ({ computedItemLeft, clearCompleted }) => {
     return (
          <section className="flex justify-between rounded-b-md bg-white px-4 py-4 transition duration-700 dark:bg-gray-800">
               <span className="text-gray-400">
                    {computedItemLeft} Articulos restantes
               </span>
               <button className="text-gray-400" onClick={clearCompleted}>
                    clear complete
               </button>
          </section>
     )
}
export default TodoComputed
