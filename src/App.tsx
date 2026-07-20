import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import HomePage from "./pages/HomePage";

const MenuPage = lazy(() => import("./pages/MenuPage"));

function PageFallback() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center" role="status">
      <div className="w-40">
        <p className="mb-4 text-center font-display text-lg italic text-cream/60">
          Közler hazırlanıyor…
        </p>
        <div className="kor-line kor-line--live" />
      </div>
    </div>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/menu",
        element: (
          <Suspense fallback={<PageFallback />}>
            <MenuPage />
          </Suspense>
        ),
      },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
