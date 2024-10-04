import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import HomePage from "./pages/HomePage";
import SearchResultsPage from "./pages/SearchResultsPage";
import ServiceDetailsPage from "./pages/ServiceDetailsPage";
import BookingPage from "./pages/BookingPage";
import Inbox from "./pages/Inbox";
import AuthLayout from "./layout/AuthLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthForPro from "./pages/AuthForPro";
import Authorization from "./auth/Authorization";
import Gate from "./auth/Gate";

const router = createBrowserRouter([
  {
    element: (
      <Authorization>
        <RootLayout />
      </Authorization>
    ),
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/search-results", element: <SearchResultsPage /> },
      { path: "/service-details", element: <ServiceDetailsPage /> },
      { path: "/booking", element: <BookingPage /> },
      { path: "/inbox", element: <Inbox /> },
    ],
  },
  {
    element: (
      <Gate>
        <AuthLayout />
      </Gate>
    ),
    children: [
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/pro", element: <AuthForPro /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
