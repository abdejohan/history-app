import ReactDOM from "react-dom/client";
import Home from "./pages/HomePage";
import Admin from "./pages/AdminPage";
import "./styles/index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./components/Layout";
import Story from "./pages/StoryPage";
import { GlobalContextProvider } from "./context/Globals";

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
	<GlobalContextProvider>
		<RouterProvider router={router} />
	</GlobalContextProvider>
);
