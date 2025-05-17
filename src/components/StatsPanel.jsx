function StatsPanel(props) {
    return (
        <div className="bg-white dark:bg-gray-900 border-2 border-purple-600 rounded-xl p-6 mb-6 shadow-lg transition-all duration-300 text-gray-900 dark:text-gray-100">
            <h2 className="text-2xl font-bold mb-4 text-purple-700 dark:text-purple-400">Estadísticas</h2>
            <p>Productos totales: <span className="text-purple-700 dark:text-purple-300">{props.total}</span></p>
            <p>
                Producto más caro:{" "}
                <span className="text-purple-700 dark:text-purple-300">
                    {props.max ? `${props.max.title} ($${props.max.price})` : "N/A"}
                </span>
            </p>
            <p>
                Producto más barato:{" "}
                <span className="text-purple-700 dark:text-purple-300">
                    {props.min ? `${props.min.title} ($${props.min.price})` : "N/A"}
                </span>
            </p>
            <p>
                Productos con título &gt; 20 caracteres: <span className="text-purple-700 dark:text-purple-300">{props.countLongTitles}</span>
            </p>
            <p>Precio total: <span className="text-purple-700 dark:text-purple-300">${props.totalPrice}</span></p>
            <p>Promedio de descuento: <span className="text-purple-700 dark:text-purple-300">{props.avgDiscount}%</span></p>
            <p>Productos con stock bajo (&lt; 50): <span className="text-purple-700 dark:text-purple-300">{props.lowStockCount}</span></p>
            <p>
                Producto con mayor descuento:{" "}
                <span className="text-purple-700 dark:text-purple-300">
                    {props.maxDiscountProduct
                        ? `${props.maxDiscountProduct.title} (${props.maxDiscountProduct.discountPercentage}%)`
                        : "N/A"}
                </span>
            </p>
            <p>Promedio de precio: <span className="text-purple-700 dark:text-purple-300">${props.avgPrice}</span></p>
        </div>
    );
}
export default StatsPanel;