import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

export const Route = createRootRoute({
	component: Root,
	notFoundComponent: NotFoundPage,
});

function Root() {
	return (
		<>
			<Outlet />
			<TanStackRouterDevtools />
		</>
	);
}

function NotFoundPage() {
	return <div>404 Not Found</div>;
}
