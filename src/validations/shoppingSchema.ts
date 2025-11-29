import * as yup from "yup";

export const shoppingSchema = yup.object().shape({
    file: yup.mixed().required("O ficheiro é obrigatório").test("fileSize", "O ficheiro é muito grande (máx 5MB)", file =>file ? file.size <= 5 * 1024 * 1024 : false)
        .test("fileType", "Formato inválido (PDF/JPG/PNG)", file => file ? ["application/pdf", "image/jpeg", "image/png"].includes(file.type) : false),

    product: yup.string().required("Designação é obrigatória"),
    category: yup.string().required("Categoria é obrigatória"),
    supplier: yup.string().required("Nome do fornecedor é obrigatório"),
    nif_supplier: yup.string().required("NIF é obrigatório"),
    contact_supplier: yup.string().required("Contacto obrigatório"),

    unit_price: yup.number().typeError("Preço inválido").positive("Deve ser positivo").required(),

    amount: yup.number().typeError("Quantidade inválida").positive("Deve ser positivo").required(),

    iva: yup.string().required("IVA obrigatório"),

    total_price: yup.number().typeError("Preço total inválido").positive().required(),

    status: yup.string().required("Estado obrigatório"),
    payment_method: yup.string().required("Método obrigatório"),

    description: yup.string().optional(),
});
