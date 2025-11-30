import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { shoppingSchema } from "../../../validations/shoppingSchema";

import FileInput from "../../../components/form/FileInput";
import Input from "../../../components/form/Input";
import Select from "../../../components/form/Select";
import Textarea from "../../../components/form/Textarea";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

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
    const { register, handleSubmit, setValue, formState: { errors } } = useForm({ resolver: yupResolver(shoppingSchema) });
    const navigate = useNavigate();

    const onSubmit = async (data: any) => {
        try {
            const toastId = toast.loading("A enviar compra...");
            const formData = new FormData();

            if (data.file) {
                formData.append("file", data.file);
            }

            formData.append("product", data.product);
            formData.append("category", data.category);
            formData.append("supplier", data.supplier);
            formData.append("nif_supplier", data.nif_supplier);
            formData.append("contact_supplier", data.contact_supplier);
            formData.append("unit_price", data.unit_price);
            formData.append("amount", data.amount);
            formData.append("iva", data.iva);
            formData.append("total_price", data.total_price);
            formData.append("status", data.status);
            formData.append("payment_method", data.payment_method);
            formData.append("description", data.description || "");

            const response = await fetch("http://localhost:8000/api/shopping", {
                method: "POST",
                body: formData
            });
            const result = await response.json();

            if (!response.ok) {
                toast.error(result.message || "Erro ao registar compra", { id: toastId });
                return;
            }

            toast.success("Compra registada com sucesso!", { id: toastId });
            navigate('/shopping')
        } catch (error) {
            console.error("Erro ao enviar:", error);
            toast.error("Erro inesperado ao registar compra", { id: toastId });
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

                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                        <div>
                            <Input label="Preço Unitario" type="number" {...register("unit_price")} />
                            <p className="text-red-600 mt-1">{errors.unit_price?.message}</p>
                        </div>

                        <div>
                            <Input label="Quantidade" type="number" {...register("amount")} />
                            <p className="text-red-600 mt-1">{errors.amount?.message}</p>
                        </div>

                        <div>
                            <Select label="IVA" options={iva} {...register("iva")} />
                            <p className="text-red-600 mt-1">{errors.iva?.message}</p>
                        </div>

                        <div>
                            <Input label="Preço Total" type="number" {...register("total_price")} />
                            <p className="text-red-600 mt-1">{errors.total_price?.message}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
