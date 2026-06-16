export type OrderStatus =
| "Entregue"
| "Em Preparo"
| "Saiu para Entrega"
| "Pagamento"
| "Cancelado";


export interface Order {
    id: string;
    customer: string;
    total: number;
    status: OrderStatus;
    payment: string;
    createAt: string;
}