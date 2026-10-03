import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./routes/Home";
import { Reshaped } from "reshaped";
import "reshaped/themes/slate/theme.css";
import Layout from "./components/Layout";
import NotFound from "./routes/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "*",
        Component: NotFound,
      },
    ]
  },
])

export default function Router() {
  return <Reshaped theme="slate">
    <RouterProvider router={router} />
  </Reshaped>
}