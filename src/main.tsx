import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./routes/Home";
import Admin from "./routes/Admin";
import { ChakraProvider, Center } from "@chakra-ui/react";
import "./styles/index.css";
import "./styles/timeline.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./routes/ErrorPage";
// ----------------------------------------------------------

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/welcome-boss",
		element: <Admin />,
		errorElement: <ErrorPage />,
	},
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<ChakraProvider>
		<Center h='100vh' w='100vw'>
			<RouterProvider router={router} />
		</Center>
	</ChakraProvider>
);
