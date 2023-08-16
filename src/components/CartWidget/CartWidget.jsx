// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import { faCartShopping } from '@fortawesome/free-solid-svg-icons' ;
import '../../components/CartWidget/CartWidget.scss'



const CartWidget = () => {
    return (
    <div>
        <FontAwesomeIcon icon={faCartShopping} className='carrito'/>
        <strong className='NumHardcodeado'> 0 </strong> 
    </div>
    ) 
}

export default CartWidget

