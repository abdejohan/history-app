import ReactDOM from "react-dom/client";
import Home from "./routes/Home";
import Admin from "./routes/Admin";
import { ChakraProvider } from "@chakra-ui/react";
import "./styles/index.css";
import "./styles/timeline.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./routes/ErrorPage";
import Layout from "./components/Layout";

const router = createBrowserRouter([
	{
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/admin",
				element: <Admin />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<ChakraProvider>
		<RouterProvider router={router} />
	</ChakraProvider>
);
