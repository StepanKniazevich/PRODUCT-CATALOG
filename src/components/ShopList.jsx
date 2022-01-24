import React, { Component } from 'react'
import ShopListItem from './ShopListItem'

export default class ShopList extends Component {

    constructor(props) {
        super(props);
        this.state = {

            totalPrice: 0
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.priceItem = this.priceItem.bind(this);
    }

    priceItem(priceItem, index) {
        this.props.priceItem(priceItem, index)
    }

    deleteItem(goodsId, index) {
        this.props.deleteItem(goodsId, index);
    }

    render() {
        console.log(this.props.shopList);
        return (<div className={"shopList"}>
            <h2>Shoping list: </h2>{
                this.props.shopList.map((item, index) => <ShopListItem shopListItem={item}
                    deleteItem={this.deleteItem} index={index} priceItem={this.priceItem} />)

            }</div>);
    }
}
