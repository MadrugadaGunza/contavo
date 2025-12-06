import { CheckCheck, ChevronLeft, ChevronRight, Eye, Pencil, Plus, ShoppingCart, Trash2, X } from "lucide-react"
import React from "react"
import { Link } from "react-router-dom";
import { formatCurrency, getStatusClasses } from "../../../utils/conversions";

type Shopping = {
    id: string;
    file: string;
    product: string;
    category: string;
    supplier: string;
    nif_supplier: string;
    contact_supplier: string;
    unit_price: number;
    amount: number;
    iva: number;
    // total_price: number;
    status: string;
    payment_method: string;
    description?: string;
}

const Shopping = () => {
    const [shoppings, setShoppings] = React.useState<Shopping[]>([]);

    React.useEffect(() => {
        const fetchShoppings = async () => {
            try {
                const response = await fetch("http://localhost:8000/api/shopping");
                if (!response.ok) throw new Error("Erro ao buscar comprar");
                const result = await response.json();
                setShoppings(result.data);
            } catch (error) {
                console.error("Erro ao buscar compras", error);
            }
        };
        fetchShoppings();
    }, []);

    const pago = shoppings.filter((item) => item.status == 'pago');
    const pendente = shoppings.filter((item) => item.status == 'pendente');
    const cancelado = shoppings.filter((item) => item.status == 'cancelado');

    return (
        <section className='p-3 mt-16 bg-gray-100 min-h-screen'>
            <div className="flex md:flex-row justify-between items-center mb-4">
                <Link to="/dashboard" className="inline-flex gap-1 bg-gray-800 text-white pl-2 pr-5 py-2 hover:bg-gray-700 transition duration-300">
                    <ChevronLeft />
                    Voltar
                </Link>
                <h1 className="text-3xl font-bold font-roboto">Compras da Instituição</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-3">
                {/* <!-- Stat Card 1: Total Revenue --> */}
                <div className="bg-white p-4 shadow-sm border-l-4 border-blue-500">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-gray-500 text-sm font-medium">Total Compras</p>
                            <h3 className="text-2xl font-bold mt-1 text-gray-800">{shoppings.length}</h3>
                        </div>
                        <div className="bg-blue-100 p-2 rounded-lg">
                            <ShoppingCart className="h-6 w-6 text-blue-600" />
                        </div>
                    </div>
                </div>

                {/* <!-- Stat Card 2: Active Users --> */}
                <div className="bg-white p-4 shadow-sm border-l-4 border-green-500">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-gray-500 text-sm font-medium">Compras feitas</p>
                            <h3 className="text-2xl font-bold mt-1 text-gray-800">{pago.length}</h3>
                        </div>
                        <div className="bg-green-100 p-2 rounded-lg">
                            <CheckCheck className="h-6 w-6 text-green-600" />
                        </div>
                    </div>
                </div>

                {/* <!-- Stat Card 3: Avg. Session --> */}
                <div className="bg-white p-4 shadow-sm border-l-4 border-amber-500">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-gray-500 text-sm font-medium">Compras Pendentes</p>
                            <h3 className="text-2xl font-bold mt-1 text-gray-800">{pendente.length}</h3>
                        </div>
                        <div className="bg-amber-100 p-2 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* <!-- Stat Card 4: Conversion Rate --> */}
                <div className="bg-white p-4 shadow-sm border-l-4 border-red-500">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-gray-500 text-sm font-medium">Compras Canceladas</p>
                            <h3 className="text-2xl font-bold mt-1 text-gray-800">{cancelado.length}</h3>
                        </div>
                        <div className="bg-red-100 p-2 rounded-lg">
                            <X className="h-6 w-6 text-red-600" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex md:flex-row justify-between items-center mb-4 bg-white shadow-sm p-3">
                <p className="font-semibold">{shoppings.length} Compras encontradas</p>
                <Link to="/shopping/create" className="inline-flex gap-1 bg-gray-800 text-white pl-2 pr-5 py-2 hover:bg-gray-700 transition duration-300">
                    <Plus />
                    Nova Compra
                </Link>
            </div>

            <div className="overflow-x-auto bg-white p-3 shadow-sm">
                <table className="w-full table-auto text-center border border-gray-200">
                    <thead className="bg-gray-800 text-white">
                        <tr className="text-sm leading-normal text-center">
                            <th className="py-3.5 px-3">Produto/Serviço</th>
                            <th className="py-3.5 px-3">Preço Unitario</th>
                            <th className="py-3.5 px-3">Fornecedor</th>
                            <th className="py-3.5 px-3">NIF</th>
                            <th className="py-3.5 px-3">Estado</th>
                            <th className="py-3.5 px-3 text-center">Acções</th>
                        </tr>
                    </thead>

                    <tbody className="text-gray-700 text-sm">
                        {
                            shoppings && shoppings.map((shopping) => (
                                <tr key={shopping.id} className="border-b border-gray-200 odd:bg-white even:bg-gray-100">
                                    <td className="py-2 px-3">{shopping.product}</td>
                                    <td className="py-2 px-3">{formatCurrency(shopping.unit_price)}</td>
                                    <td className="py-2 px-3">{shopping.supplier}</td>
                                    <td className="py-2 px-3">{shopping.nif_supplier}</td>
                                    <td className="py-2 px-3">
                                        <span className={`px-3 py-1 inline-flex items-center text-sm font-semibold rounded-lg ${getStatusClasses(shopping.status)}`}>
                                            {shopping.status}
                                        </span>
                                    </td>
                                    <td className="py-2 px-3 text-center">
                                        <div className="flex item-center justify-center">
                                            <Link to={`/shopping/details/${shopping.id}`} className="inline-flex items-center bg-blue-600 text-white bg-brand hover:bg-brand-strong box-border focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 text-xs pl-1.5 pr-2 py-1.5 focus:outline-none">
                                                <Eye className="w-5 h-5" />
                                            </Link>
                                            <Link to={`/shopping/edit/${shopping.id}`} className="mx-1 inline-flex items-center bg-green-600 text-white bg-brand hover:bg-brand-strong box-border focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 text-xs pl-1.5 pr-2 py-1.5 focus:outline-none">
                                                <Pencil className="w-5 h-5" />
                                            </Link>
                                            <button className="inline-flex items-center bg-red-600 text-white bg-brand hover:bg-brand-strong box-border focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 text-xs pl-1.5 pr-2 py-1.5 focus:outline-none cursor-pointer">
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

            {/* <!-- Static Pagination --> */}
            <div className="flex justify-between items-center mt-4">
                <div>
                    <span className="text-sm text-gray-700">Exibindo de 1 a 5 de 5 entradas</span>
                </div>
                <div className="flex space-x-2">
                    <button className="inline-flex gap-1 px-3 py-1 bg-gray-800 text-white cursor-pointer">
                        <ChevronLeft />
                        Previous
                    </button>
                    <button className="inline-flex gap-1 px-3 py-1 bg-gray-800 text-white cursor-pointer">
                        Next
                        <ChevronRight />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Shopping
