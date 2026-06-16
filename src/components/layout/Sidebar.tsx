import { NavLink } from "react-router-dom";

export function Sidebar() {
    return (
        <aside className="w-64 bg-slate-900 text-white p-6">
            <h2 className="text-xl font-bold mb-8">
                99Food Analytics
            </h2>

            <nav className="flex flex-col gap-4">
                <NavLink to="/">Dashboard</NavLink>
                <NavLink to="/orders">Pedidos</NavLink>
                <NavLink to="/products">Produtos</NavLink>
                <NavLink to="/settings">Configurações</NavLink>
            </nav>
        </aside>
    );
}