import React from "react";
import './shoppage.style.scss'
import CollectionPreview from '../../collection-preview/collection-preview.component'
import SHOP_DATA from "./shop.data";

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }
    render() {
        const { collections } = this.state;
        return (
            <div className='shop-page'>
                {
                    collections.map(({id, ...OtherSections}) => {
                        return (<CollectionPreview key={id} {...OtherSections} />)
                    })
                }
            </div>
        )
    }
}

export default ShopPage;