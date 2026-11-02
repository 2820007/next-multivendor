


import { Clock3, LoaderCircle, ShoppingCart, Truck } from 'lucide-react'
import SmallCard from './SmallCard'

const SmallCards = () => {
  const orderStats = [
    {
      title: 'Total Orders',
      total: 553,
      icon: ShoppingCart,
      iconClassName: 'bg-orange-600',
    },
    {
      title: 'Orders Pending',
      total: 42,
      icon: Clock3,
      iconClassName: 'bg-amber-600',
    },
    {
      title: 'Orders Processing',
      total: 18,
      icon: LoaderCircle,
      iconClassName: 'bg-blue-600',
    },
    {
      title: 'Orders Delivered',
      total: 493,
      icon: Truck,
      iconClassName: 'bg-emerald-600',
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-8">
      {orderStats.map((item) => (
        <SmallCard key={item.title} {...item} />
      ))}
    </div>
  )
}

export default SmallCards
