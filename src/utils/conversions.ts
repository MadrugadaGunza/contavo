export const getStatusClasses = (status: string) => {
    switch (status) {
        case 'pago':
            return 'bg-green-100 text-green-800 pb-[7px]';
        case 'pendente':
            return 'bg-amber-100 text-amber-800 pb-[7px]';
        case 'cancelado':
            return 'bg-red-100 text-red-800 pb-[5px]';
        case 'solicitada':
            return 'bg-purple-100 text-purple-800 pb-[5px]';
        default:
            return 'bg-gray-100 text-gray-800 pb-[5px]';
    }
};

export const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-AO', {
        style: 'currency',
        currency: 'AOA',
        minimumFractionDigits: 2,
    }).format(value);
};
