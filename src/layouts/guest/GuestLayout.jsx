import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="bg-gray-100 min-h-screen">
              <div className="flex-1 p-4"></div>
        <Outlet />
    </div>
  );
}
