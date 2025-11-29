import { CheckCheck, Pencil, ShoppingCart, Trash2 } from "lucide-react"
import { Link } from "react-router-dom"

const Shopping = () => {
    return (
        <section className='flex flex-col flex-1 overflow-y-auto p-4 mt-16'>
            {/* compras podem ser classificadas como total, feitas, colicitadas, aceites, pendentes e recusadas */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
                {/* <!-- Stat Card 1: Total Revenue --> */}
                <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow border-l-4 border-blue-500">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-gray-500 text-sm font-medium">Total Compras</p>
                            <h3 className="text-2xl font-bold mt-1 text-gray-800">754</h3>
                        </div>
                        <div className="bg-blue-100 p-2 rounded-lg">
                            <ShoppingCart className="h-6 w-6 text-blue-600" />
                        </div>
                    </div>
                </div>

                {/* <!-- Stat Card 2: Conversion Rate --> */}
                <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow border-l-4 border-purple-500">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-gray-500 text-sm font-medium">Compras Solicitadas</p>
                            <h3 className="text-2xl font-bold mt-1 text-gray-800">1726</h3>
                        </div>
                        <div className="bg-purple-100 p-2 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* <!-- Stat Card 3: Avg. Session --> */}
                <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow border-l-4 border-amber-500">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-gray-500 text-sm font-medium">Compras Pendentes</p>
                            <h3 className="text-2xl font-bold mt-1 text-gray-800">4m 32s</h3>
                        </div>
                        <div className="bg-amber-100 p-2 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* <!-- Stat Card 4: Active Users --> */}
                <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow border-l-4 border-green-500">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-gray-500 text-sm font-medium">Compras feitas</p>
                            <h3 className="text-2xl font-bold mt-1 text-gray-800">429</h3>
                        </div>
                        <div className="bg-green-100 p-2 rounded-lg">
                            <CheckCheck className="h-6 w-6 text-green-600" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex  md:flex-row justify-between items-center mb-4">
                <h1 className="text-3xl font-bold">Compras</h1>
                {/* <div className="w-full md:w-1/3 mb-4 md:mb-0">
                    <input type="text" placeholder="Search users..." className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div> */}
                <Link to="/shopping/create" className="bg-blue-950 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition duration-300">
                    Add New User
                </Link>
            </div>

            {/* <!-- User Table --> */}
            <div className="overflow-x-auto bg-white rounded-lg shadow">
                <table className="w-full table-auto text-center">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600 text-sm leading-normal text-center">
                            <th className="py-3 px-6">Id</th>
                            <th className="py-3 px-6">Produto/Serviço</th>
                            <th className="py-3 px-6">Valor</th>
                            <th className="py-3 px-6">Fornecedor</th>
                            <th className="py-3 px-6">NIF</th>
                            <th className="py-3 px-6">Estado</th>
                            <th className="py-3 px-6">Nº da Factura</th>
                            <th className="py-3 px-6 text-center">Actions</th>
                        </tr>
                    </thead>

                    <tbody className="text-gray-600 text-sm">

                        {/* Linha 1 */}
                        <tr className="border-b border-gray-200 hover:bg-gray-100">
                            <td className="py-3 px-6">1</td>
                            <td className="py-3 px-6">Cartuchos de Impressora</td>
                            <td className="py-3 px-6">45.000 Kz</td>
                            <td className="py-3 px-6">OfficeSupplies Lda</td>
                            <td className="py-3 px-6">500123456</td>
                            <td className="py-3 px-6">
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                    Pago
                                </span>
                            </td>
                            <td className="py-3 px-6">FT-2024-001</td>
                            <td className="py-3 px-6 text-center">
                                <div className="flex item-center justify-center">
                                    <Link to='/shopping/edit/1' className="mr-3 transform hover:text-blue-500 hover:scale-110">
                                        <Pencil className="w-5 h-5" />
                                    </Link>
                                    <button className="transform hover:text-red-500 hover:scale-110 cursor-pointer">
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>
                            </td>
                        </tr>

                        {/* Linha 2 */}
                        <tr className="border-b border-gray-200 hover:bg-gray-100">
                            <td className="py-3 px-6">2</td>
                            <td className="py-3 px-6">Serviço de Internet</td>
                            <td className="py-3 px-6">25.000 Kz</td>
                            <td className="py-3 px-6">Unitel</td>
                            <td className="py-3 px-6">540987321</td>
                            <td className="py-3 px-6">
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                    Pendente
                                </span>
                            </td>
                            <td className="py-3 px-6">FT-2024-140</td>
                            <td className="py-3 px-6 text-center">
                                <div className="flex item-center justify-center">
                                    <Link to='/shopping/edit/1' className="mr-3 transform hover:text-blue-500 hover:scale-110">
                                        <Pencil className="w-5 h-5" />
                                    </Link>
                                    <button className="transform hover:text-red-500 hover:scale-110 cursor-pointer">
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>
                            </td>
                        </tr>

                        {/* Linha 3 */}
                        <tr className="border-b border-gray-200 hover:bg-gray-100">
                            <td className="py-3 px-6">3</td>
                            <td className="py-3 px-6">Compra de Laptop</td>
                            <td className="py-3 px-6">450.000 Kz</td>
                            <td className="py-3 px-6">Shoprite Tech</td>
                            <td className="py-3 px-6">512334899</td>
                            <td className="py-3 px-6">
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                    Pago
                                </span>
                            </td>
                            <td className="py-3 px-6">FT-2024-210</td>
                            <td className="py-3 px-6 text-center">
                                <div className="flex item-center justify-center">
                                    <Link to='/shopping/edit/1' className="mr-3 transform hover:text-blue-500 hover:scale-110">
                                        <Pencil className="w-5 h-5" />
                                    </Link>
                                    <button className="transform hover:text-red-500 hover:scale-110 cursor-pointer">
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>
                            </td>
                        </tr>

                        {/* Linha 4 */}
                        <tr className="border-b border-gray-200 hover:bg-gray-100">
                            <td className="py-3 px-6">4</td>
                            <td className="py-3 px-6">Material de Escritório</td>
                            <td className="py-3 px-6">18.900 Kz</td>
                            <td className="py-3 px-6">Papelaria Lider</td>
                            <td className="py-3 px-6">500998712</td>
                            <td className="py-3 px-6">
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                    Pendente
                                </span>
                            </td>
                            <td className="py-3 px-6">FT-2024-333</td>
                            <td className="py-3 px-6 text-center">
                                <div className="flex item-center justify-center">
                                    <Link to='/shopping/edit/1' className="mr-3 transform hover:text-blue-500 hover:scale-110">
                                        <Pencil className="w-5 h-5" />
                                    </Link>
                                    <button className="transform hover:text-red-500 hover:scale-110 cursor-pointer">
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>
                            </td>
                        </tr>

                        {/* Linha 5 */}
                        <tr className="border-b border-gray-200 hover:bg-gray-100">
                            <td className="py-3 px-6">5</td>
                            <td className="py-3 px-6">Licença de Software</td>
                            <td className="py-3 px-6">120.000 Kz</td>
                            <td className="py-3 px-6">Microsoft Angola</td>
                            <td className="py-3 px-6">599002331</td>
                            <td className="py-3 px-6">
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                    Pago
                                </span>
                            </td>
                            <td className="py-3 px-6">FT-2024-889</td>
                            <td className="py-3 px-6 text-center">
                                <div className="flex item-center justify-center">
                                    <Link to='/shopping/edit/1' className="mr-3 transform hover:text-blue-500 hover:scale-110">
                                        <Pencil className="w-5 h-5" />
                                    </Link>
                                    <button className="transform hover:text-red-500 hover:scale-110 cursor-pointer">
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* <!-- Static Pagination --> */}
            <div className="flex justify-between items-center mt-4">
                <div>
                    <span className="text-sm text-gray-700">Exibindo de 1 a 5 de 5 entradas</span>
                </div>
                <div className="flex space-x-2">
                    <button className="px-3 py-1 rounded-lg bg-blue-950 text-white cursor-pointer">
                        Previous
                    </button>
                    <button className="px-3 py-1 rounded-lg bg-blue-950 text-white cursor-pointer">
                        Next
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Shopping
