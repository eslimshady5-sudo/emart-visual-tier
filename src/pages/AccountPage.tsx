import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AccountPage() {
  return (
    <div className="container py-12">
        <h1 className="text-3xl font-bold mb-8">My Account</h1>
        <Tabs defaultValue="orders" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-6">
                <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                <TabsTrigger value="orders">Orders</TabsTrigger>
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
            </TabsList>
            <TabsContent value="dashboard">
                <p>Welcome to your dashboard!</p>
            </TabsContent>
            <TabsContent value="orders">
                <p>You have no orders.</p>
            </TabsContent>
            <TabsContent value="profile">
                <p>Manage your profile information.</p>
            </TabsContent>
             <TabsContent value="wishlist">
                <p>Your wishlist is empty.</p>
            </TabsContent>
        </Tabs>
    </div>
  );
}
