'use client'

import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Tooltip, type ChartOptions } from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend)

const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
        {
            label: 'Sales',
            data: [420, 610, 520, 780, 690, 980, 840],
            backgroundColor: 'rgba(129, 140, 248, 0.8)',
            hoverBackgroundColor: '#a5b4fc',
            borderRadius: 7,
            borderSkipped: false,
            maxBarThickness: 38,
        },
    ],
}

const options: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: { display: false },
        tooltip: {
            displayColors: false,
            callbacks: { label: (context) => ` Rs. ${context.formattedValue}` },
        },
    },
    scales: {
        x: {
            grid: { display: false },
            border: { display: false },
            ticks: { color: '#94a3b8' },
        },
        y: {
            beginAtZero: true,
            border: { display: false, dash: [4, 4] },
            grid: { color: 'rgba(148, 163, 184, 0.12)' },
            ticks: {
                color: '#94a3b8',
                callback: (value) => `Rs. ${value}`,
            },
        },
    },
}

export default function WeeklySaleCharts() {
    return (
        <section className="rounded-xl border border-slate-700 bg-slate-800 p-5 shadow-lg sm:p-6">
            <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                    <h2 className="text-lg font-semibold text-white">Weekly Sales</h2>
                    <p className="mt-1 text-sm text-slate-400">Sales revenue over the last 7 days</p>
                </div>
                <span className="rounded-full bg-indigo-400/10 px-3 py-1 text-xs font-medium text-indigo-300">This week</span>
            </div>
            <div className="h-72">
                <Bar data={data} options={options} />
            </div>
        </section>
    )
}
