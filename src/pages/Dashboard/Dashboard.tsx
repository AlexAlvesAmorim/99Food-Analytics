import { MetricCard } from "../../components/dashboard/MetricCard";
import { OrdersTable } from "../../components/dashboard/OrdersTable";
import { orders } from "../../mocks/orders";
import { OrdersStatusChart } from "../../components/dashboard/OrderStatusChart";

export function Dashboard() {
    const totalRevenue = orders.reduce(
        (acc, order) => acc + order.total, 0
    );

    const totalOrders = orders.length;

    const averageTickets = totalOrders > 0 ? totalRevenue / totalOrders : 0;

    const deliveredOrders = orders.filter(
        (order) => order.status === "Entregue").length;


    const pixRevenue = orders.filter((order) => order.payment === "Pix")
        .reduce((acc, order) => acc + order.total, 0);

    const creditRevenue = orders.filter((order) => order.payment === "Credito")
        .reduce((acc, order) => acc + order.total, 0);

    const debitRevenue = orders.filter((order) => order.payment === "Debito")
        .reduce((acc, order) => acc + order.total, 0);

    const revenueByDate = orders.reduce(
        (acc, order) => {
            const date = order.createAt;

            if (!acc[date]) {
                acc[date] = 0;
            }

            acc[date] += order.total;

            return acc;
        },
        {} as Record<string, number>
    );

    const revenueEntries = Object.entries(revenueByDate);

    const maxDayRevenue = revenueEntries.length > 0
        ? Math.max(...revenueEntries.map(([, v]) => v))
        : 1;

    const paymentCounts = {
        Pix: pixRevenue,
        Credito: creditRevenue,
        Debito: debitRevenue,
    };

    const mostUsedPayment = Object.entries(paymentCounts).sort((a, b) => b[1] - a[1])[0];

    const bestRevenueDay = revenueEntries.sort((a, b) => b[1] - a[1])[0];

    return (

        <div>
            <h1>Dashboard</h1>
            <div className="grid grid-cols-4 gap-4">

                <MetricCard
                    title="Receita Hoje"
                    value={`R$ ${totalRevenue.toFixed(2)}`}
                />

                <MetricCard
                    title="Pedidos"
                    value={String(totalOrders)}
                />

                <MetricCard
                    title="Ticket Médio"
                    value={`R$ ${averageTickets.toFixed(2)}`}
                />

                <MetricCard
                    title="Entregues"
                    value={String(deliveredOrders)}
                />
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
                <h2 className="text-xl font-bold mb-4">Receita por Dia</h2>

                {revenueEntries.map(([date, value]) => (
                    <div key={date} className="mb-4">
                        <div className="flex justify-between mb-1">
                            <span>{date}</span>
                            <span>R$ {value.toFixed(2)}</span>
                        </div>

                        <div className="w-full bg-gray-200 rounded-full h-3">
                            <div className="bg-green-500 h-3 rounded-full" style={{
                                width: `${(value / maxDayRevenue) * 100}%`,
                            }}
                            />
                        </div>
                    </div>
                ))}

            </div>

            <div className="bg-white p-6 rounded-xl shadow">
                <h2 className="text-xl font-bold mb-4">
                    Insights
                </h2>
                <div className="space-y-2">
                    <p>
                        Melhor dia:
                        {" "} {bestRevenueDay?.[0]}
                    </p>

                    <p> Receita: {" "}R$ {bestRevenueDay?.[1].toFixed(2)}
                    </p>

                    <p>Método mais usado: {" "} {mostUsedPayment?.[0]}</p>
                </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
                <h2 className="text-xl font-bold mb-4">
                    Receita por Método de Pagamento
                </h2>

                <div className="space-y-4">
                    <div>
                        <p>Pix - R$ {pixRevenue.toFixed(2)}</p>
                        <div className="w-full bg-gray-200 h-3 rounded-full">
                            <div className="bg-green-500 h-3 rounded-full" style={{ width: `${totalRevenue > 0 ? (pixRevenue / totalRevenue) * 100 : 0}%` }} />
                        </div>
                    </div>

                    <div>
                        <p>Crédito - R$ {creditRevenue.toFixed(2)}</p>
                        <div className="w-full bg-gray-200 h-3 rounded-full">
                            <div className="bg-blue-500 h-3 rounded-full" style={{ width: `${totalRevenue > 0 ? (creditRevenue / totalRevenue) * 100 : 0}%` }} />
                        </div>
                    </div>

                    <div>
                        <p>Débito - R$ {debitRevenue.toFixed(2)}</p>
                        <div className="w-full bg-gray-200 h-3 rounded-full">
                            <div className="bg-yellow-500 h-3 rounded-full" style={{ width: `${totalRevenue > 0 ? (debitRevenue / totalRevenue) * 100 : 0}%` }} />
                        </div>
                    </div>
                </div>
            </div>
              
            <OrdersTable />
            <OrdersStatusChart />
        </div >
    );
}