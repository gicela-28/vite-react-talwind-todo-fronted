import CrossIcon from './components/icons/CrossIcon'
import MoonIcon from './components/icons/Moon'

const App = () => {
    return (
        <div className="min-h-screen bg-gray-200 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
            <header className="container mx-auto px-4 pt-8">
                <div className="flex justify-between">
                    <h1 className="text-3xl font-semibold uppercase tracking-[0.3em] text-white">
                        Todo
                    </h1>
                    <button><MoonIcon fill="#f5f" /> </button>
                </div>
                <form
                    className="mt-8 flex items-center gap-4 overflow-hidden rounded-md bg-white px-4 py-3"
                    action=""
                >
                    <span className="inline-block h-5 w-5 rounded-full border-2"></span>
                    <input
                        type="text"
                        placeholder="create nuevo"
                        className="w-full text-gray-400 outline-none"
                    />
                </form>
            </header>
            <main className="container mx-auto mt-8 px-4">
                <div className="rounded-md bg-white [&>article]:px-4">
                    <article className="flex gap-4 border-b border-b-gray-400 px-4 py-4">
                        <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
                        <p className="grow text-gray-600">
                            Complete online javaScrip
                        </p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article>
                    <article className="flex gap-4 border-b border-b-gray-400 py-4">
                        <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
                        <p className="grow text-gray-600">
                            Complete online javaScrip
                        </p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article>
                    <article className="flex gap-4 border-b border-b-gray-400 py-4">
                        <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
                        <p className="grow text-gray-600">
                            Complete online javaScrip
                        </p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article>
                    <article className="mb-4 flex gap-4 border-b border-b-gray-400 py-4">
                        <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
                        <p className="grow text-gray-600">
                            Complete online javaScrip
                        </p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article>

                    <section className="flex justify-between py-4">
                        <span className="text-gray-400">5 items left</span>
                        <button className="text-gray-400">
                            clear complete
                        </button>
                    </section>
                </div>
            </main>
            <section className="container mx-auto mt-8 px-4">
                <div className="flex justify-center gap-4 rounded-md bg-white px-3 py-2">
                    <button className="text-blue-600">All</button>
                    <button className="hover:text-blue-600">Active</button>
                    <button className="hover:text-blue-600">Completed</button>
                </div>
            </section>
            <div className="container flex">
                <div className="">
                    <p className="container mx-auto mt-2 rounded-md bg-slate-300">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Nisi doloremque ab iusto?
                    </p>
                </div>
            </div>
        </div>
    )
}

export default App
