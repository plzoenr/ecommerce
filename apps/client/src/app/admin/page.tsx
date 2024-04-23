import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

function getSaleData() {

}

export default function AdminDashboard() {
    return <>
        <DashboardCard title="Sales" subtitle="desc" body="asd"></DashboardCard>
        <DashboardCard title="Customers" subtitle="desc" body="asd"></DashboardCard>
        <DashboardCard title="Orders" subtitle="desc" body="asd"></DashboardCard>
    </>
}

type DashboardCardProps = {
    title: string,
    subtitle: string,
    body: string
}

function DashboardCard({title, subtitle, body}: DashboardCardProps) {
    return <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card>
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{subtitle}</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>{body}</p>
                </CardContent>
            </Card>
        </div>
    </>
}
