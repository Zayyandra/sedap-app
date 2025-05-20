// import Dashboard from "./pages/Dashboard";
// import Customers from "./pages/Customers";
// import Orders from "./pages/Orders";
// import ErrorPage400 from "./pages/ErrorPage400";
// import ErrorPage401 from "./pages/ErrorPage401";
// import ErrorPage403 from "./pages/ErrorPage403";
// import AddCustomer from "./pages/AddCustomer";
// import AddOrder from "./pages/AddOrder";
// import MainLayout from "./layouts/MainLayout";
// import AuthLayout from "./layouts/AuthLayout";
// import Login from "./pages/auth/Login";
// import Register from "./pages/auth/Register";
// import Forgot from "./pages/auth/Forgot";
import "./assets/tailwind.css";
import { Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import NavigationBar from "./components/guest/NavigationBar";
import HomePage from "./pages/guest/Homepage";

const UserList = React.lazy(() => import("./pages/UserList"));
const Loading = React.lazy(() => import("./components/Loading"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Customers = React.lazy(() => import("./pages/Customers"));
const Orders = React.lazy(() => import("./pages/Orders"));
const ErrorPage400 = React.lazy(() => import("./pages/ErrorPage400"));
const ErrorPage401 = React.lazy(() => import("./pages/ErrorPage401"));
const ErrorPage403 = React.lazy(() => import("./pages/ErrorPage403"));
const AddCustomer = React.lazy(() => import("./pages/AddCustomer"));
const AddOrder = React.lazy(() => import("./pages/AddOrder"));
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const GuestLayout = React.lazy(() => import("./layouts/guest/GuestLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/error/400" element={<ErrorPage400 />} />
          <Route path="/error/401" element={<ErrorPage401 />} />
          <Route path="/error/403" element={<ErrorPage403 />} />
          <Route path="/customers/add" element={<AddCustomer />} />
          <Route path="/orders/add" element={<AddOrder />} />
          <Route path="/UserList" element={<UserList />} />
        </Route>
        <Route path="/*" element={<ErrorPage400 />} />

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

        <Route element={<GuestLayout />}>
          {/* <Route path="/" element={<HomePage />} /> */}
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
