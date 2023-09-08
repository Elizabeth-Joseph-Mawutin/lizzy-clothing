
import {useContext} from 'react';
import { cartContext } from '../../contexts/cart.context';

import Button from '../button/button.component'

import cartItem from '../cart-item/cart-item.component'

import './cart-dropdown.styles.scss'

const CartDropdown = () => {
	const { cartItems} = useContext(cartContext);

	return (
		<div className='cart-dropdown-container'>
			<div className='cart-items'>
				{cartItems.map((item) => (
					<cartItem key={item.id} cartItem={item} />
				))}
			</div>
			<Button>GO TO CHECKOUT</Button>
		</div>
	);

};

export default CartDropdown;