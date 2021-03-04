import React from 'react';
import './custom-button.style.scss';

const CustomButtom = ({children , isGoogleSignIn, ...otherProps})=>{
    // console.log({...otherProps})
    return (
    <button className={`${isGoogleSignIn?'google-sign-in':''} custom-button`}>
        {children}
    </button>
)}

export default CustomButtom;