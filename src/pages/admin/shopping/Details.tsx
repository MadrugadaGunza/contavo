import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronLeft, Edit, Link2, Pencil } from 'lucide-react';
import { getStatusClasses } from '../../../utils/conversions';

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
    total_price: number;
    status: string;
    payment_method: string;
    description: string;
    createdAt: string;
    updatedAt: string;
};

const Details = () => {
    const [shopping, setShopping] = React.useState<Shopping | null>(null);
    const { id } = useParams();

    React.useEffect(() => {
        const fetchShoppings = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/shopping/${id}`);
                if (!response.ok) throw new Error("Erro ao buscar compras");
                const result = await response.json();
                setShopping(result.data);
            } catch (error) {
                console.error("Erro ao buscar compras", error);
            }
        };
        fetchShoppings();
    }, [id]);

    if (!shopping) {
        return (
            <section className="flex flex-col flex-1 overflow-y-auto p-3 mt-16 bg-gray-100 min-h-screen">
                <p className="mt-20 text-center">Carregando...</p>
            </section>
        );
    }

    console.log(`http://localhost:8000/src${shopping.file}`);

    return (
        <section className='flex flex-col flex-1 overflow-y-auto p-3 mt-16 bg-gray-100 min-h-screen'>
            <div className="flex md:flex-row justify-between items-center mb-4">
                <Link to="/shopping" className="inline-flex gap-1 bg-gray-800 text-white pl-2 pr-5 py-2 hover:bg-gray-700 transition duration-300">
                    <ChevronLeft />
                    Voltar
                </Link>
                <h1 className="text-3xl font-bold">Detalhes da Compra | {shopping.product}</h1>
            </div>

            <div className="space-y-3">
                <div className="grid md:grid-cols-2 gap-3">
                    <div className="p-3 bg-white shadow-md space-y-2">
                        <h2 className="font-semibold text-lg">Produto</h2>
                        <p><strong>Nome:</strong> {shopping.product}</p>
                        <p><strong>Categoria:</strong> {shopping.category}</p>
                    </div>

                    <div className="p-3 bg-white shadow-md space-y-2">
                        <h2 className="font-semibold text-lg">Pagamento</h2>
                        <p>
                            <strong className='mr-3'>Status:</strong>
                            <span className={`px-3 py-1 inline-flex items-center text-sm font-semibold rounded-full ${getStatusClasses(shopping.status)}`}>
                                {shopping.status}
                            </span>
                        </p>
                        <p><strong>Método de Pagamento:</strong> {shopping.payment_method}</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-3">
                    <div className="p-3 bg-white shadow-md space-y-2">
                        <h2 className="font-semibold text-lg">Valores</h2>
                        <p><strong>Preço Unitário:</strong> {shopping.unit_price.toFixed(2)} Kz</p>
                        <p><strong>Quantidade:</strong> {shopping.amount}</p>
                        <p><strong>IVA:</strong> {shopping.iva}</p>
                        <p><strong>Total:</strong> {shopping.total_price.toFixed(2)} Kz</p>
                    </div>

                    <div className="p-3 bg-white shadow-md space-y-2">
                        <h2 className="font-semibold text-lg">Fornecedor</h2>
                        <p><strong>Nome:</strong> {shopping.supplier}</p>
                        <p><strong>NIF:</strong> {shopping.nif_supplier}</p>
                        <p><strong>Contacto:</strong> {shopping.contact_supplier}</p>
                    </div>
                </div>

                {/* Bloco 5: Descrição */}
                <div className="p-3 bg-white shadow-md space-y-2">
                    <h2 className="font-semibold text-lg">Descrição</h2>
                    <p>{shopping.description}</p>
                </div>

                {/* Bloco 6: Datas */}
                <div className="p-3 bg-white shadow-md text-gray-600 flex justify-between items-center">
                    <Link to={`/shopping/edit/${id}`} className="inline-flex gap-1 bg-gray-800 text-white pl-3 pr-5 py-2 hover:bg-gray-700 transition duration-300">
                        <Pencil />
                        Editar
                    </Link>
                    <div className='flex items-center'>
                        <p><strong>Criado em:</strong> {new Date(shopping.createdAt).toLocaleString()}</p>
                        <span className="px-3">|</span>
                        <p><strong>Atualizado em:</strong> {new Date(shopping.updatedAt).toLocaleString()}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Details;
