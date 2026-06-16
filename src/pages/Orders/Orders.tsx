import { orders } from "../../mocks/orders";
import { useState } from "react";
import { Order, OrderStatus } from "../../types/order";

export function Orders() {

    const [search, setSearch] = useState("");

    const [statusFilter, setStatusFilter] = useState("Todos");

    const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

    const [ordersList, setOrdersList] = useState(orders);

    const filteredOrders = ordersList.filter((orders) => {

        const matchSearch = orders.customer.toLowerCase().includes(search.toLowerCase());

        const matchStatus = statusFilter === "Todos" ? true : orders.status === statusFilter;

        return matchSearch && matchStatus;
    });


    const updateStatus = (
        id: string,
        newStatus: OrderStatus
    ) => {
            setOrdersList(
                ordersList.map((order) => order.id ===id 
                ?
            {
                ...order,
                status: newStatus,
            }
        : order
        )
            );
        };

    return (
        <div className="space-y-6">
            <div>

                <h1 className="text-3xl font-bold">Pedidos
                </h1>
                <p className="text-gray-500">Gerencie todos os pedidos
                </p>
            </div>

            <input
                type="text"
                placeholder="Buscar Pedido..."
                value={search}
                onChange={(event) => {
                    setSearch(event.target.value);
                }}
                className="w-full p-3 border rounded-xl outline-none" />

            <div className="flex gap-2">
                <button onClick={() => setStatusFilter("Todos")}
                    className={
                        statusFilter === "Todos"
                            ? "bg-blue-600 text-white px-3 py-2 rounded-lg"
                            : "bg-gray-200 px-3 py-2 rounded-lg"}>Todos</button>
                <button onClick={() => setStatusFilter("Entregue")}
                    className={
                        statusFilter === "Entregue"
                            ? "bg-blue-600 text-white px-3 py-2 rounded-lg"
                            : "bg-gray-200 px-3 py-2 rounded-lg"}>Entregue</button>
                <button onClick={() => setStatusFilter("Em Preparo")}
                    className={
                        statusFilter === "Em Preparo"
                            ? "bg-blue-600 text-white px-3 py-2 rounded-lg"
                            : "bg-gray-200 px-3 py-2 rounded-lg"}>Em Preparo</button>
                <button onClick={() => setStatusFilter("Cancelado")}
                    className={
                        statusFilter === "Cancelado"
                            ? "bg-blue-600 text-white px-3 py-2 rounded-lg"
                            : "bg-gray-200 px-3 py-2 rounded-lg"}>Cancelado</button>
                <button onClick={() => setStatusFilter("Saiu para Entrega")}
                    className={
                        statusFilter === "Saiu para Entrega"
                            ? "bg-blue-600 text-white px-3 py-2 rounded-lg"
                            : "bg-gray-200 px-3 py-2 rounded-lg"}>Saiu para Entrega</button>
            </div>

            <div className="bg-white rounded-xl shadow">
                <table className="w-full">

                    <thead>
                        <tr className="border-b">

                            <th className="text-left p-4">
                                ID
                            </th>

                            <th className="text-left p-4">
                                Cliente
                            </th>

                            <th className="text-left p-4">
                                Total
                            </th>

                            <th className="text-left p-4">
                                Pagamento
                            </th>

                            <th className="text-left p-4">
                                Status
                            </th>

                        </tr>
                    </thead>

                    <tbody>
                        {filteredOrders.map((order) => (

                            <tr key={order.id} className="border-b cursor-pointer
                             hover:bg-gray-50" onClick={() => setSelectedOrder(order)}>

                                <td className="p-4">
                                    {order.id}
                                </td>

                                <td className="p-4">
                                    {order.customer}
                                </td>
                                <td className="p-4">
                                    R$    {order.total}
                                </td>
                                <td className="p-4">
                                    {order.payment}
                                </td>

                                <td className="p-4">
                                    {order.status}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {selectedOrder && (

                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">

                        <div className="bg-white p-6 rounded-xl w-[500px]">

                            <h2 className="text-2xl font-bold mb-4">Detalhes do Pedido</h2>
                            <p>
                                <strong>ID: </strong>{""}{selectedOrder.id}
                            </p>

                            <p>
                                <strong>Cliente: </strong>{""}{selectedOrder.customer}
                            </p>

                            <p>
                                <strong>Total: </strong>{""}{selectedOrder.total}
                            </p>

                            <p>
                                <strong>Pagamento: </strong>{""}{selectedOrder.payment}
                            </p>

                            <p>
                                <strong>Status: </strong>{""}{selectedOrder.status}
                            </p>

<div className="flex gap-2 mt-4 flex-wrap">
    <button onClick={() => updateStatus(selectedOrder.id,"Entregue")}
    className="bg-green-500 text-white px-3 py-2 rounded">
        Entregue
    </button>

    <button onClick={() => updateStatus(selectedOrder.id,"Em Preparo")}
    className="bg-yellow-500 text-white px-3 py-2 rounded">
        Em Preparo
    </button>

    <button onClick={() => updateStatus(selectedOrder.id,"Cancelado")}
    className="bg-red-500 text-white px-3 py-2 rounded">
        Cancelado
    </button>

    <button onClick={() => updateStatus(selectedOrder.id,"Saiu para Entrega")}
    className="bg-green-500 text-white px-3 py-2 rounded">
       Saiu para entrega
    </button>
    </div>

                            <button onClick={() =>
                                setSelectedOrder(null)
                            } className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg">Fechar</button>

                        </div>
                    </div>
                )}

</div>
</div>
                );
}