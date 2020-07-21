import React from 'react';
import Product from './Product';
import './Home.css';
function Home() {
	return (
		<div className='home'>
			{/* <img src='https://images-eu.ssl-images-amazon.com/images/G/02/' alt='' /> */}
			<img
				className='home_image'
				src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg'
				alt=''
			/>
			{/* Product id, title, price, rating, image */}
			<div className='home_row'>
				<Product
					id='12345'
					title='The New Vacume'
					price={11.96}
					rating={5}
					image='https://www.bigw.com.au/medias/sys_master/images/images/heb/h88/12585601761310.jpg'
				/>
				<Product
					id='4891241'
					title='Apple MacBook Pro'
					price={2099.0}
					rating={5}
					image='https://www.bhphotovideo.com/images/images2500x2500/apple_mvvj2ll_a_16_macbook_pro_late_1520434.jpg'
				/>
			</div>
			<div className='home_row'>
				<Product
					id='51094901'
					title='Dell S-Series 27 inch monitor'
					price={374.29}
					rating={5}
					image='https://m.media-amazon.com/images/I/81ONemBAVtL._AC_UY436_FMwebp_QL65_.jpg'
				/>
				<Product
					id='5194914'
					title='Airpods Pro'
					price={218.45}
					rating={5}
					image='https://m.media-amazon.com/images/I/71zny7BTRlL._AC_UY436_FMwebp_QL65_.jpg'
				/>
				<Product
					id='12345'
					title='Sony Alpha a6000'
					price={489.0}
					rating={5}
					image='https://m.media-amazon.com/images/I/61oKYl9q+kL._AC_UY436_FMwebp_QL65_.jpg'
				/>
			</div>
			<div className='home_row'>
				<Product
					id='12345'
					title='TCL 4K UHD Dolby VISION HDR Roku'
					price={700.0}
					rating={5}
					image='https://m.media-amazon.com/images/I/91ZrvnzneML._AC_UY436_FMwebp_QL65_.jpg'
				/>
			</div>

			{/* Product */}
		</div>
	);
}

export default Home;
