"use client";

import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const data = [
    { month: "Jan", a: 500, b: 200 },
    { month: "Feb", a: 300, b: 240 },
    { month: "Mar", a: 320, b: 310 },
    { month: "Apr", a: 280, b: 260 },
    { month: "May", a: 500, b: 370 },
    { month: "Jun", a: 420, b: 300 },
    { month: "Jul", a: 580, b: 450 },
    { month: "Aug", a: 390, b: 330 },
    { month: "Sep", a: 450, b: 380 },
    { month: "Oct", a: 490, b: 350 },
    { month: "Nov", a: 360, b: 310 },
    { month: "Dec", a: 540, b: 430 },
];

export function SalesOverview() {
    return (
        <Card className="bg-linear-to-br from-[#0d0f24] to-[#185672] border-none text-white rounded-2xl shadow-xl p-4 w-full">
            <CardHeader>
                <CardTitle className="text-white text-xl">Sales Overview</CardTitle>
                <CardDescription className="font-semibold">
                    +5% more in 2021
                </CardDescription>
            </CardHeader>
            <CardContent className="h-[350px]">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 20, right: 20, left: -10, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.15)" />

                        <XAxis
                            dataKey="month"
                            stroke="rgba(255,255,255,0.4)"
                            tick={{ fill: "rgba(255,255,255,0.7)" }}
                            axisLine={false}
                            tickLine={false}
                        />

                        <YAxis
                            stroke="rgba(255,255,255,0.4)"
                            tick={{ fill: "rgba(255,255,255,0.7)" }}
                            axisLine={false}
                            tickLine={false}
                        />

                        <Tooltip
                            contentStyle={{
                                background: "#1b2947",
                                border: "1px solid rgba(255,255,255,0.2)",
                                borderRadius: "8px",
                            }}
                            labelStyle={{ color: "white" }}
                            itemStyle={{ color: "white" }}
                        />

                        <defs>
                            <linearGradient id="colorA" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="20%" stopColor="#4dafff" stopOpacity={0.8} />
                                <stop offset="100%" stopColor="#4dafff" stopOpacity={0} />
                            </linearGradient>

                            <linearGradient id="colorB" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="20%" stopColor="#00eaff" stopOpacity={0.8} />
                                <stop offset="100%" stopColor="#00eaff" stopOpacity={0} />
                            </linearGradient>
                        </defs>

                        <Area
                            type="monotone"
                            dataKey="a"
                            stroke="#4dafff"
                            strokeWidth={3}
                            fill="url(#colorA)"
                        />

                        <Area
                            type="monotone"
                            dataKey="b"
                            stroke="#00eaff"
                            strokeWidth={3}
                            fill="url(#colorB)"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}
