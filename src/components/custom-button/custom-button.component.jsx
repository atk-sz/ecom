import React from 'react';
import './custom-button.style.scss';

const CustomButtom = ({children , ...otherProps})=>(
    <button className="custom-button">
        {children}
    </button>
)

export default CustomButtom;