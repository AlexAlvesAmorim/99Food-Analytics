import { useState } from "react";
import { products } from "../../mocks/products";

export function Products() {

    const [search, setSearch] = useState("");
    const [productsList] = useState(products);

    const filteredProducts = productsList.filter(
        (product) =>
            product.name
                .toLowerCase()
                .includes(search.toLowerCase())
    );

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">
                    Produtos
                </h1>
                <p className="text-gray-500">
                    Gerencie o catálogo
                </p>
            </div>

            <input
                type="text"
                placeholder="Buscar produto..."
                value={search}
                onChange={(event) =>
                    setSearch(event.target.value)
                }
                className="w-full p-3 border rounded-xl" />

            <div className="bg-white rounded-xl shadow">
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="text-left p-4">Nome</th>
                            <th className="text-left p-4">Categoria</th>
                            <th className="text-left p-4">Preço</th>
                        </tr>
                    </thead>

                    <tbody>{filteredProducts.map((product) => (
                        <tr key={product.id} className="border-b">
                            <td className="p-4">{product.name}</td>
                            <td className="p-4">{product.category}</td>
                            <td className="p-4">R$ {product.price}</td>
                       </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}