
import CustomDataTable from '@/components/backend/CustomDataTable'
import DashboardChart from '@/components/backend/DashboardChart'
import Heading from '@/components/backend/Heading'
import LargeCards from '@/components/backend/LargeCards'
import SmallCards from '@/components/backend/SmallCards'


const page = () => {
  return (
    <div>
      <Heading title="Dashboard Overview"/>

      {/* Large cards */}
      <LargeCards/>
      

      {/* Small cards */}
      <SmallCards/>
      {/* Charts */}
      <DashboardChart/>
      {/* Recent Orders Table */}
      <CustomDataTable/>
     
    </div>
  )
}

export default page