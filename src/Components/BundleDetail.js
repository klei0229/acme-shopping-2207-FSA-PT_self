import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

const BundleDetail = () => {
	const { id } = useParams();
	const { bundles } = useSelector((state) => state);
	const bundle = bundles.find((bundle) => bundle.id === id);
	const products = bundle.products;

	return (
		<div>
			<div>
				<h1>{bundle.name}</h1>
				<h4>
					<Link to={'/bundles'}>Return to our other bundles</Link>
				</h4>
			</div>
			<div>
				{products.map((product) => {
					return (
						<ul key={product.id}>
							<li>{product.name}</li>
							<img src={product.imageURL} />
						</ul>
					);
				})}
			</div>
		</div>
	);
};

export default BundleDetail;
