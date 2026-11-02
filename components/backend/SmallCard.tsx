import type { LucideIcon } from 'lucide-react'

type SmallCardProps = {
    title: string
    total: number
    icon: LucideIcon
    iconClassName: string
}

export default function SmallCard({ title, total, icon: Icon, iconClassName }: SmallCardProps) {
    return (
        <div className="rounded-lg bg-slate-700 p-2 text-white shadow-lg">
            <div className="flex items-center gap-4">
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${iconClassName}`}>
                    <Icon aria-hidden="true" className="h-6 w-6" />
                </div>
                <div>
                    <p className="text-sm text-slate-300">{title}</p>
                    <h3 className="text-2xl font-bold">{total}</h3>
                </div>
            </div>
        </div>
    )
}
