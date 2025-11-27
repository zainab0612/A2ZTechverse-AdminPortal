import { Card, CardTitle, CardDescription, CardAction } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface KpiCardProps {
    title: string;
    value: string | number;
    icon: LucideIcon;
    color?: string;
}

export function KpiCard({ title, value, icon: Icon }: KpiCardProps) {
    return (
        <Card className="bg-[#0d1224]/90 backdrop-blur-xl border-none rounded-2xl p-5 shadow-lg flex flex-row justify-between items-center">
            <div>
                <CardTitle className="text-sm text-white/70 mb-1">{title}</CardTitle>
                <CardDescription>
                    <div className="text-2xl font-bold text-white">
                        {value}
                    </div>
                </CardDescription>
            </div>
            <CardAction>
                <div className="bg-[#185672] p-4 rounded-xl flex items-center justify-center shadow-md">
                    <Icon className="text-white" size={22} />
                </div>
            </CardAction>
        </Card>
    );
}
