'use client'

import { ArcElement, Chart as ChartJS, Legend, Tooltip, type ChartOptions } from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

const data = {
    labels: ['Electronics', 'Fashion', 'Home & Living', 'Beauty', 'Sports'],
    datasets: [
        {
            label: 'Units sold',
            data: [32, 24, 18, 15, 11],
            backgroundColor: ['#818cf8', '#34d399', '#fbbf24', '#f472b6', '#38bdf8'],
            borderColor: '#1e293b',
            borderWidth: 3,
            hoverOffset: 8,
        },
    ],
}

const options: ChartOptions<'pie'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'bottom',
            labels: { color: '#cbd5e1', padding: 18, usePointStyle: true, pointStyle: 'circle' },
        },
        tooltip: {
            callbacks: {
                label: (context) => ` ${context.label}: ${context.formattedValue}% of sales`,
            },
        },
    },
}

export default function BestSellingCharts() {
    return (
        <section className="rounded-xl border border-slate-700 bg-slate-800 p-5 shadow-lg sm:p-6">
            <div className="mb-5">
                <h2 className="text-lg font-semibold text-white">Best Selling Categories</h2>
                <p className="mt-1 text-sm text-slate-400">Share of items sold this month</p>
            </div>
            <div className="h-72">
                <Pie data={data} options={options} />
            </div>
        </section>
    )
}
