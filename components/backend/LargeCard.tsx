import { Layers } from "lucide-react";

type LargeCardProps = {
    items: {
        className?: string;
        title: string;
        sales: string | number;
    };
};

export default function LargeCard({items}: LargeCardProps) {
    return (
        <div className={`rounded-lg text-white shadow-md p-8 flex items-center flex-col gap-2 ${items.className ?? ''}`}>
            <Layers/>
            <h4>{items.title}</h4>
            <h2 className="text-2xl font-bold">{items.sales}</h2>

            
        </div>
    )
}
