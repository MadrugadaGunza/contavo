import * as yup from "yup";

export const shoppingSchema = yup.object().shape({
    file: yup.mixed().required("O ficheiro é obrigatório"),
    product: yup.string().required("Designação é obrigatória"),
    category: yup.string().required("Categoria é obrigatória"),
    supplier: yup.string().required("Nome do fornecedor é obrigatório"),
    nif_supplier: yup.string().required("NIF é obrigatório"),
    contact_supplier: yup.string().required("Contacto obrigatório"),
    unit_price: yup.number().typeError("Preço inválido").positive("Deve ser positivo").required("Preço é obrigatório"),
    amount: yup.number().typeError("Quantidade inválida").positive("Deve ser positivo").required("Quantidade é obrigatório"),
    iva: yup.string().required("IVA obrigatório"),
    total_price: yup.number().typeError("Preço total inválido").min(0, "Não pode ser negativo").required("Preço total obrigatório"),
    status: yup.string().required("Estado obrigatório"),
    payment_method: yup.string().required("Método obrigatório"),
    description: yup.string().optional(),
});
