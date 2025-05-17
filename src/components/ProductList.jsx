function ProductList(props) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
            {props.products.map((p) => (
                <div
                    key={p.id}
                    className="bg-white dark:bg-gray-900 border-2 border-purple-700 rounded-xl p-5 shadow-lg hover:shadow-purple-700 transition-all duration-300 text-gray-900 dark:text-gray-100 hover:scale-105"
                >
                    <h3 className="font-semibold text-lg text-purple-700 dark:text-purple-300 mb-2">{p.title}</h3>
                    <p className="text-gray-700 dark:text-gray-200 text-xl">${p.price}</p>
                </div>
            ))}
        </div>
    );
}
export default ProductList;