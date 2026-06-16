import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/layout/Sidebar.tsx";
import { Topbar } from "../components/layout/Topbar.tsx";

export function MainLayout () {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Topbar />

                <main className="flex-1 p-6 bg-slate-50">
                    < Outlet/>
                </main>
            </div>
        </div>
    );
}