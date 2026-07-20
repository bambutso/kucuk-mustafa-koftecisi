import { lazy, Suspense, type ReactNode } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import HomePage from "./pages/HomePage";

const MenuPage = lazy(() => import("./pages/MenuPage"));
const StoryPage = lazy(() => import("./pages/StoryPage"));
const PlacePage = lazy(() => import("./pages/PlacePage"));
const GalleryPage = lazy(() => import("./pages/GalleryPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const ReservationPage = lazy(() => import("./pages/ReservationPage"));
const AdminPage = lazy(() => import("./pages/AdminPage"));

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

function lazyRoute(element: ReactNode) {
  return <Suspense fallback={<PageFallback />}>{element}</Suspense>;
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/menu", element: lazyRoute(<MenuPage />) },
      { path: "/hikayemiz", element: lazyRoute(<StoryPage />) },
      { path: "/mekan", element: lazyRoute(<PlacePage />) },
      { path: "/galeri", element: lazyRoute(<GalleryPage />) },
      { path: "/iletisim", element: lazyRoute(<ContactPage />) },
      { path: "/rezervasyon", element: lazyRoute(<ReservationPage />) },
      { path: "/yonetim", element: lazyRoute(<AdminPage />) },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
