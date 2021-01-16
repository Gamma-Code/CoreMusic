import searchRoutes from '../components/search/routes';

const apiVersion = '/api/v1';

export default app => {
	app.use(apiVersion, searchRoutes);
};
