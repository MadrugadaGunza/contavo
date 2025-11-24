import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <section className="bg-gray-100 flex flex-column justify-center items-center h-screen">
            <div className="">
                <h1 className="text-5xl mb-8">Página não encontrada :)</h1>
                <Link to='/login' className="p-2 bg-blue-500 rounded-bottom-circle">Voltar</Link>
            </div>
        </section>
    )
}

export default NotFound
