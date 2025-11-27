import { KpiCard } from '@/components/cards/KPICard'
import WelcomeCard from '@/components/cards/WelcomeCard'
import { Bell, CardSim, Check, DropletOff, Globe, ShoppingCart, Users, Wallet } from 'lucide-react'

import {
    Item,
    ItemContent,
    ItemDescription,
    ItemMedia,
    ItemTitle,
} from "@/components/ui/item"
import { ProjectTable } from '@/components/tables/ProjectTable';
import { SalesOverview } from '@/components/charts/SalesOverview';
import ActiveUsersCard from '@/components/charts/ActiveUserCharts';
import { SatisfactionRateCard } from '@/components/cards/SatisfactionRates';
import { ReferralTrackingCard } from '@/components/cards/ReferralTracking';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const orders = [
    {
        icon: <Bell />,
        title: "$2400, Design changes",
        date: "22 DEC 7:20 PM",
    },
    {
        icon: <ShoppingCart />,
        title: "New order #1832412",
        date: "21 DEC 11 PM",
    },
    {
        icon: <Bell />,
        title: "Server payments for April",
        date: "21 DEC 9:34 PM",
    },
    {
        icon: <CardSim />,
        title: "New card added for order #4359133",
        date: "20 DEC 2:20 AM",
    },
    {
        icon: <DropletOff />,
        title: "New card added for order #4359133",
        date: "18 DEC 4:54 AM",
    },
    {
        icon: <Check />,
        title: "New order #9583120",
        date: "17 DEC",
    },
];


export const DashhboardScreen = () => {
    return (
        <>
            <main className='flex flex-col px-6 pb-6 gap-3'>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                    <KpiCard
                        title="Today's Money"
                        value="$53,000"
                        icon={Wallet}
                    />
                    <KpiCard
                        title="Today's Users"
                        value="2,300"
                        icon={Globe}
                    />
                    <KpiCard
                        title="New Clients"
                        value="+3,462"
                        icon={Users}
                    />
                    <KpiCard
                        title="Total Sales"
                        value="$103,430"
                        icon={ShoppingCart}
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <WelcomeCard />
                    <SatisfactionRateCard />
                    <ReferralTrackingCard />
                </div>
                <div className="flex gap-5">
                    <SalesOverview />
                    <ActiveUsersCard />
                </div>
                <div className="flex gap-5">
                    <ProjectTable variant='dashboard' showMembers={true} actions={false} menu={true} status={false} description={true} />
                    <Card className="rounded-2xl bg-linear-to-r from-[#0d0f24] to-[#185672] p-6 text-white shadow-xl w-[30%] border-none">
                        <CardHeader className="p-0">
                            <CardTitle className="text-xl font-bold">Orders overview</CardTitle>
                            <CardDescription className="font-bold text-sm text-white/70">
                                +30% <span className="font-normal">this month</span>
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="mt-6 space-y-6">
                            {orders.map((order, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <ItemMedia>
                                        {order.icon}
                                    </ItemMedia>
                                    <Item className='p-0'>
                                        <ItemContent>
                                            <ItemTitle>{order.title}</ItemTitle>
                                            <ItemDescription className="text-white/60 text-xs mt-1">{order.date}</ItemDescription>
                                        </ItemContent>
                                    </Item>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>
            </main>

        </>
    )
}
