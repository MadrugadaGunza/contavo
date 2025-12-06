import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { shoppingSchema } from "../../../validations/shoppingSchema";

import FileInput from "../../../components/form/FileInput";
import Input from "../../../components/form/Input";
import Select from "../../../components/form/Select";
import Textarea from "../../../components/form/Textarea";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { formatCurrency } from "../../../utils/conversions";

const categories = [
    { value: "factura", label: "Factura" },
    { value: "recibo", label: "Recibo" },
    { value: "nota_debito", label: "Nota de Débito" }
];

const iva = [
    { value: "sim", label: "Sim" },
    { value: "nao", label: "Não" },
];

const status = [
    { value: "pago", label: "Paga" },
    { value: "pendente", label: "Pendente" },
    { value: "cancelado", label: "Cancelado" },
];

const payment_method = [
    { value: "transferencia", label: "Transferência" },
    { value: "dinheiro", label: "Dinheiro" },
];

const Create = () => {
    const { register, handleSubmit, setValue, control, formState: { errors } } = useForm({
        resolver: yupResolver(shoppingSchema)
    });
    const navigate = useNavigate();

    // Observa unit_price, amount e iva para recalcular total
    const unitPrice = useWatch({ control, name: "unit_price" });
    const amount = useWatch({ control, name: "amount" });
    const ivaOption = useWatch({ control, name: "iva" });

    React.useEffect(() => {
        if (!unitPrice || !amount) {
            setValue("total_price", 0);
            return;
        }

        let total = Number(unitPrice) * Number(amount);

        if (ivaOption === "sim") {
            total = total * 1.14;
        }

        setValue("total_price", total);
    }, [unitPrice, amount, ivaOption, setValue]);

    const onSubmit = async (data: any) => {
        const formData = new FormData();
        formData.append("product", data.product);
        formData.append("category", data.category);
        formData.append("supplier", data.supplier);
        formData.append("nif_supplier", data.nif_supplier);
        formData.append("contact_supplier", data.contact_supplier);
        formData.append("unit_price", String(data.unit_price));
        formData.append("amount", String(data.amount));
        formData.append("iva", data.iva);
        formData.append("status", data.status);
        formData.append("payment_method", data.payment_method);
        formData.append("description", data.description ?? "");
        formData.append("total_price", data.total_price);
        formData.append("file", data.file);

        try {
            const response = await fetch('http://localhost:8000/api/shopping', {
                method: 'POST',
                body: formData,
            });
            console.log(response);
            const result = await response.json();
            if (!response.ok) throw new Error(`Erro ao registar a compra ${result.message}`);
            console.log(result);
            toast.success('Operação concluída com sucesso!');
            navigate('/shopping');
        } catch (error) {
            console.log(error);
            toast.error('Erro ao registar a compra!');
        }
    };

    return (
        <section className="p-4 mt-16 bg-gray-100 min-h-screen">
            <h1 className="text-3xl mb-4">Registar nova compra</h1>

            <div className="bg-white p-4 shadow-md">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                        {/* File */}
                        <div>
                            <FileInput label="Anexar documento" onFileSelect={(file) => setValue("file", file, { shouldValidate: true })} />
                            {errors.file && (<p className="text-red-600 mt-1">{String(errors.file.message)}</p>)}
                        </div>

                        <div>
                            <Input label="Designação da Compra" placeholder="Digite a designação da compra" {...register("product")} />
                            <p className="text-red-600 mt-1">{errors.product?.message}</p>
                        </div>

                        <div>
                            <Select label="Categoria" options={categories} {...register("category")} />
                            <p className="text-red-600 mt-1">{errors.category?.message}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                            <Input label="Nome do Fornecedor" {...register("supplier")} />
                            <p className="text-red-600 mt-1">{errors.supplier?.message}</p>
                        </div>

                        <div>
                            <Input label="NIF do Fornecedor" {...register("nif_supplier")} />
                            <p className="text-red-600 mt-1">{errors.nif_supplier?.message}</p>
                        </div>

                        <div>
                            <Input label="Contacto do Fornecedor" {...register("contact_supplier")} />
                            <p className="text-red-600 mt-1">{errors.contact_supplier?.message}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                            <Input label="Preço Unitario" type="number" {...register("unit_price")} />
                            <p className="text-red-600 mt-1">{errors.unit_price?.message}</p>
                        </div>

                        <div>
                            <Input label="Quantidade" type="number" {...register("amount")} />
                            <p className="text-red-600 mt-1">{errors.amount?.message}</p>
                        </div>

                        <div>
                            <Input label="Preço total" type="number" {...register("total_price")} />
                            <p className="text-red-600 mt-1">{errors.total_price?.message}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                            <Select label="IVA" options={iva} {...register("iva")} />
                            <p className="text-red-600 mt-1">{errors.iva?.message}</p>
                        </div>

                        <div>
                            <Select label="Estado da Compra" options={status} {...register("status")} />
                            <p className="text-red-600 mt-1">{errors.status?.message}</p>
                        </div>

                        <div>
                            <Select label="Método de Pagamento" options={payment_method} {...register("payment_method")} />
                            <p className="text-red-600 mt-1">{errors.payment_method?.message}</p>
                        </div>
                    </div>

                    <div>
                        <Textarea label="Descrição" rows={6} {...register("description")} />
                    </div>

                    <button className="bg-gray-800 text-white py-3 px-10 mt-3 cursor-pointer">
                        Registar
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Create;
