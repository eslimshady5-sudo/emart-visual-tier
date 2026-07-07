import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const orders = [
    { id: "ORD001", customer: "John Doe", date: "2024-07-20", status: "Fulfilled", total: 250.00 },
    { id: "ORD002", customer: "Jane Smith", date: "2024-07-21", status: "Processing", total: 150.75 },
    { id: "ORD003", customer: "Mike Johnson", date: "2024-07-21", status: "Pending", total: 350.00 },
    { id: "ORD004", customer: "Emily Davis", date: "2024-07-22", status: "Fulfilled", total: 75.50 },
];

const statusVariant: { [key: string]: "default" | "secondary" | "destructive" | "outline" } = {
    Fulfilled: "default",
    Processing: "secondary",
    Pending: "outline",
}

export default function AdminOrdersPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Orders</h1>
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Total</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>
                  <Badge variant={statusVariant[order.status]}>{order.status}</Badge>
                </TableCell>
                <TableCell className="text-right">${order.total.toFixed(2)}</TableCell>
                <TableCell className="text-right">
                  <Button variant="outline" size="sm">View</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}

// Dummy Card component for compilation
const Card = ({children}: {children: React.ReactNode}) => <div className="border rounded-lg bg-card text-card-foreground shadow-sm">{children}</div>