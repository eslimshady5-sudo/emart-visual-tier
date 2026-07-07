import { Routes, Route } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import HomePage from "@/pages/HomePage";
import ShopPage from "@/pages/ShopPage";
import DealsPage from "@/pages/DealsPage";
import NewArrivalsPage from "@/pages/NewArrivalsPage";
import BestSellersPage from "@/pages/BestSellersPage";
import AboutPage from "@/pages/AboutPage";
import SupportPage from "@/pages/SupportPage";
import TrackOrderPage from "@/pages/TrackOrderPage";
import AccountPage from "@/pages/AccountPage";
import WishlistPage from "@/pages/WishlistPage";
import CartPage from "@/pages/CartPage";
import CheckoutPage from "@/pages/CheckoutPage";
import ProductPage from "@/pages/ProductPage";

import { AdminLayout } from "@/pages/admin/AdminLayout";
import AdminDashboardPage from "@/pages/admin/AdminDashboardPage";
import AdminProductsPage from "@/pages/admin/AdminProductsPage";
import AdminOrdersPage from "@/pages/admin/AdminOrdersPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="deals" element={<DealsPage />} />
        <Route path="new-arrivals" element={<NewArrivalsPage />} />
        <Route path="best-sellers" element={<BestSellersPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="support" element={<SupportPage />} />
        <Route path="track-order" element={<TrackOrderPage />} />
        <Route path="account" element={<AccountPage />} />
        <Route path="wishlist" element={<WishlistPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="product/:productId" element={<ProductPage />} />
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboardPage />} />
        <Route path="products" element={<AdminProductsPage />} />
        <Route path="orders" element={<AdminOrdersPage />} />
      </Route>
    </Routes>
  );
}

export default App;
