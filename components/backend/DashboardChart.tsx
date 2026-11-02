import BestSellingCharts from "./BestSellingCharts";
import WeeklySaleCharts from "./WeeklySaleCharts";

export default function DashboardChart() {
    return (
        <div className="grid grid-cols-1 gap-5 py-6 xl:grid-cols-2">
            <WeeklySaleCharts />
            <BestSellingCharts />
        </div>
    )
}
