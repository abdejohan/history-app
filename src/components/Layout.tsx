import { VStack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => (
	<VStack h='100vh' w='100vw' overflow='hidden'>
		<Header />
		<Outlet />
	</VStack>
);

export default Layout;