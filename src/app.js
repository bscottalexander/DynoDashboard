import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout";
import LoginPage from "./pages/login";
import DashboardPage from "./pages/dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      }
    ]
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
