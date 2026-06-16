type StatusBadgeProps = {
    status: string;
};

export function StatusBadge ({
    status,
}: StatusBadgeProps) {

const statusStyles = {
    Entregue: "bg-green-100 text-green-700",
    Cancelado: "bg-red-100 text-red-700",
    "Em Preparo": "bg-yellow-100 text-yellow-700",
    "Saiu para Entrega": "bg-blue-100 text-blue-700",
};

    return (
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusStyles[
            status as keyof typeof statusStyles
        ]}`}>
            {status}
        </span>
    );
}