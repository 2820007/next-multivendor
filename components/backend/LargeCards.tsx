import LargeCard from './LargeCard'

const LargeCards = () => {
  const orderStats = [
    {
      title: "Today Orders",
      sales: 11100,
      className: "bg-green-500",
    },
    {
      title: "Yesterday Orders",
      sales: 13100,
      className: "bg-orange-500",
    },
    {
      title: "This Month",
      sales: 123400,
      className: "bg-blue-500",
    },
    {
      title: "All-Times Sales ",
      sales: 1142100,
      className: "bg-purple-500",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-8">
      {orderStats.map((item) => (
        <LargeCard key={item.title} items={item} />
      ))}
    </div>
  )
}

export default LargeCards
