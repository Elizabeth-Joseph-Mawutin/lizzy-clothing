import {ReactComponent as ShoppingIcon} from '../../assets/ShoppingIcon'

import './cart-icon.styles.scss'

const CartIcon = () => {
	return (
		<div className='cart-icon-container'>
			<ShoppingIcon className='shopping-icon' />
			<span className="item-count">10</span>
		</div>
	);
};

export default CartIcon;