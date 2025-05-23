import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import Product from "./ui/Product";
import Error from "./ui/Error";
import AppLayout from "./ui/AppLayout";
import Contact from "./ui/Contact";
import Products from "./ui/Products";

// import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:productId",
        element: <Product />,
        errorElement: <Error />,
      },
      {
        path: "/products",
        element: <Products />,
        errorElement: <Error />,
      },
      {
        path:"/contact",
        element:<Contact />,
        errorElement: <Error />,
      }
      
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;