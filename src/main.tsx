import ReactDOM from "react-dom/client";
import Home from "./routes/Home";
import Admin from "./routes/Admin";
import "./styles/index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./routes/ErrorPage";
import Layout from "./components/Layout";
import Story from "./routes/Story";

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
			{
				path: "/event/:id",
				element: <Story />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<RouterProvider router={router} />
);
