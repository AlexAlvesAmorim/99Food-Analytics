import { orders } from "../../mocks/orders";

export function OrdersStatusChart() {
    const total = orders.length;

    const delivered = orders.filter(
        order => order.status === "Entregue").length;

    const preparing = orders.filter(
        order => order.status === "Em Preparo").length;

    const delivering = orders.filter(
        order => order.status === "Saiu para Entrega").length;

    const canceled = orders.filter(
        order => order.status === "Cancelado").length;


    return (
        <div className="bg-white rounded-xl shadow p-5">
            <h2 className="font-bold mb-4">
                Pedidos por Status
            </h2>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        

            <div className="space-y-4">
                <div>
                    <div className="flex justify-between">
                        <span>Entregue</span>
                        <span>{delivered}</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded">
                        <div className="h-3 bg-green-500 rounded" style={{ width: `${total > 0 ? (delivered / total) * 100 : 0}%` }} />
                    </div>
                </div>

                <div>
                    <div className="flex justify-between">
                        <span>Em Preparo</span>
                        <span>{preparing}</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded">
                        <div className="h-3 bg-yellow-500 rounded" style={{ width: `${total > 0 ? (preparing / total) * 100 : 0}%` }} />
                    </div>
                </div>

                <div> 
                    <div className="flex justify-between">
                        <span>Cancelado</span>
                        <span>{canceled}</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded">
                        <div className="h-3 bg-red-500 rounded" style={{ width: `${total > 0 ? (canceled / total) * 100 : 0}%` }} />
                    </div>
                </div>

                <div>
                    <div className="flex justify-between">
                        <span>Saiu para Entrega</span>
                        <span>{delivering}</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded">
                        <div className="h-3 bg-blue-500 rounded" style={{ width: `${total > 0 ? (delivering / total) * 100 : 0}%` }} />
                    </div>
                </div>
            </div>
        </div>
    );
}