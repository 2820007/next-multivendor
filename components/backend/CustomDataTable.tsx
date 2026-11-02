const products = [
  { name: 'Apple MacBook Pro 17"', color: 'Silver', category: 'Laptop', accessories: 'Yes', available: 'Yes', price: 'Rs. 299,900', weight: '3.0 lb.' },
  { name: 'Microsoft Surface Pro', color: 'White', category: 'Laptop PC', accessories: 'No', available: 'Yes', price: 'Rs. 199,900', weight: '1.0 lb.' },
  { name: 'Magic Mouse 2', color: 'Black', category: 'Accessories', accessories: 'Yes', available: 'No', price: 'Rs. 9,900', weight: '0.2 lb.' },
  { name: 'Apple Watch', color: 'Black', category: 'Watches', accessories: 'Yes', available: 'No', price: 'Rs. 19,900', weight: '0.12 lb.' },
  { name: 'Apple iMac', color: 'Silver', category: 'PC', accessories: 'Yes', available: 'Yes', price: 'Rs. 299,900', weight: '7.0 lb.' },
  { name: 'Apple AirPods', color: 'White', category: 'Accessories', accessories: 'No', available: 'Yes', price: 'Rs. 16,900', weight: '0.1 lb.' },
  { name: 'iPad Pro', color: 'Gold', category: 'Tablet', accessories: 'No', available: 'Yes', price: 'Rs. 69,900', weight: '1.3 lb.' },
  { name: 'Magic Keyboard', color: 'Black', category: 'Accessories', accessories: 'Yes', available: 'Yes', price: 'Rs. 9,900', weight: '453 g' },
  { name: 'Apple TV 4K', color: 'Black', category: 'TV', accessories: 'Yes', available: 'No', price: 'Rs. 17,900', weight: '1.78 lb.' },
  { name: 'AirTag', color: 'Silver', category: 'Accessories', accessories: 'Yes', available: 'No', price: 'Rs. 2,900', weight: '53 g' },
]

export default function CustomDataTable() {
  return (
    <div className="mb-4 text-xl font-bold text-slate-100">
      Recent Orders
      {/* Tables */}
      <div className="relative mt-4 overflow-x-auto rounded-xl border border-slate-700 bg-slate-800 shadow-lg">
        <table className="w-full min-w-[900px] text-left text-sm text-slate-300">
          <thead className="border-b border-slate-700 bg-slate-900/60 text-xs uppercase tracking-wide text-slate-300">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input id="table-checkbox" type="checkbox" className="h-4 w-4 rounded border-slate-500 bg-slate-700 text-indigo-500 focus:ring-2 focus:ring-indigo-400" />
                  <label htmlFor="table-checkbox" className="sr-only">Select all products</label>
                </div>
              </th>
              <th scope="col" className="px-6 py-4 font-semibold">Product name</th>
              <th scope="col" className="px-6 py-4 font-semibold">Color</th>
              <th scope="col" className="px-6 py-4 font-semibold">Category</th>
              <th scope="col" className="px-6 py-4 font-semibold">Accessories</th>
              <th scope="col" className="px-6 py-4 font-semibold">Available</th>
              <th scope="col" className="px-6 py-4 font-semibold">Price</th>
              <th scope="col" className="px-6 py-4 font-semibold">Weight</th>
              <th scope="col" className="px-6 py-4 font-semibold">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700">
            {products.map((product, index) => (
              <tr key={product.name} className="transition-colors hover:bg-slate-700/40">
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input id={`table-checkbox-${index + 2}`} type="checkbox" className="h-4 w-4 rounded border-slate-500 bg-slate-700 text-indigo-500 focus:ring-2 focus:ring-indigo-400" />
                    <label htmlFor={`table-checkbox-${index + 2}`} className="sr-only">Select {product.name}</label>
                  </div>
                </td>
                <th scope="row" className="whitespace-nowrap px-6 py-4 font-semibold text-white">{product.name}</th>
                <td className="px-6 py-4">{product.color}</td>
                <td className="px-6 py-4">{product.category}</td>
                <td className="px-6 py-4">{product.accessories}</td>
                <td className="px-6 py-4">{product.available}</td>
                <td className="whitespace-nowrap px-6 py-4 font-medium text-slate-100">{product.price}</td>
                <td className="whitespace-nowrap px-6 py-4">{product.weight}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button type="button" className="rounded-md bg-indigo-500/15 px-2.5 py-1.5 text-xs font-semibold text-indigo-300 transition-colors hover:bg-indigo-500/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">Edit</button>
                    <button type="button" className="rounded-md bg-rose-500/15 px-2.5 py-1.5 text-xs font-semibold text-rose-300 transition-colors hover:bg-rose-500/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-400">Remove</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
