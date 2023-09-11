import { useContext } from 'react';
import { cartContext} from '../../contexts/cart.context'

import './checkout.styles.scss'

const Checkout = () => {
	const { cartItems, addItemToCart, removeItemToCart} = useContext(cartContext);

	return (
		<div className='checkout-container'>
			<div className='checkout-header'>
				<div className='header-block'>
					<span>Product</span>
				</div>
				<div className='header-block'>
					<span>Description</span>
				</div>
				<div className='header-block'>
					<span>Quantity</span>
				</div>
				<div className='header-block'>
					<span>Price</span>
				</div>
				<div className='header-block'>
					<span>Remove</span>
				</div>
			</div>
			
			<div>
				{cartItems.map((cartItem) => {
					const {id, name, quantity} = cartItem;
					return (
						<div key={id}>
							<h2>{name}</h2>
							
							<span>{quantity}</span>
							<br />
							<span onClick={() => removeItemToCart(cartItem)}>decrement</span>
							<br />
							<span onClick={() => addItemToCart(cartItem)}>increament</span>
						 </div>
					);
				
				})}
			</div>
		</div>
	)
};

export default Checkout;