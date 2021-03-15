import React from 'react';
import { connect } from 'react-redux';
import  {ReactComponent as ShoppingIcon} from '../../assests/shopping-bag.svg' 
import { toggleCart } from '../../redux/cart/cart.actions';
import './cart-icon.style.scss'

const CartIcon = ({toggleCart,toggleVal})=>{
    // console.log(toggleVal)
    return(
        <div onClick={toggleCart} className='cart-icon'>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'> 0 </span>
        </div>
    )
}


const mapDispatchToProps = dispatch =>({
    toggleCart : ()=> dispatch(toggleCart())
})
// const mapStateToProps = ({user})=>({
//     currentUser: user.currentUser
//   })
//   const mapDispatchToProps = dispatch => ({
//     setCurrentUser: user => dispatch(setCurrentUser(user))
//   });
export default connect(null,mapDispatchToProps)(CartIcon);