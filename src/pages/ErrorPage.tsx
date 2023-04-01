import { Link, useRouteError } from "react-router-dom";

function ErrorPage() {
	const error: any = useRouteError();
	console.error(error);

	return (
		<main>
			<div id='error-page'>
				<h1>Oops!</h1>
				<p>Sorry, an unexpected error has occurred.</p>
				<p>
					<i>{error.statusText || error.message}</i>
				</p>
				<Link to='/'>Go back Home</Link>
			</div>
		</main>
	);
}
export default ErrorPage;
