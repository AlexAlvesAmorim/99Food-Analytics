import { orders } from "../../mocks/orders";
import { StatusBadge } from "./StatusBadge";

export function OrdersTable () {
    return (
        <div className="bg-white rounded-xl shadow p-5">
            <h2 className="font-bold mb-4">
                Pedidos Recentes
            </h2>

            <table className=" w-full">
                <thead>
                    <tr className="border-b">
                        <th className="text-left py-3">ID</th>
                        <th className="text-left py-3">Cliente</th>
                        <th className="text-left py-3">Total</th>
                        <th className="text-left py-3">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order.id} className="border-b">
                        <td className="py-3">{order.id}</td>
                        <td className="py-3">{order.customer}</td>
                        <td className="py-3"> R$ {order.total.toFixed (2)}</td>
                        <td className="py-3"><StatusBadge
                        status={order.status} />
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}