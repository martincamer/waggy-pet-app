import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import PetShop from './pages/PetShop';
import Product from './pages/Product';
import Blog from './pages/Blog';
import BlogArticulo from './pages/BlogArticulo';

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Routes path="/">
					<Route
						index
						path="/"
						element={<PetShop />}
					/>
					<Route
						path="/product/:id"
						element={<Product />}
					/>
					<Route
						path="/blog"
						element={<Blog />}
					/>
					<Route
						path="/blog/:id"
						element={<BlogArticulo />}
					/>
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
