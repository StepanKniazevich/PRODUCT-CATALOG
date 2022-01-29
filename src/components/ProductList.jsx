
import React, { Component } from 'react';
import ProductItem from './ProductItem';

export default class ProductList extends Component {

    constructor(props) {
        super(props)
        this.addGoods = this.addGoods.bind(this);
        this.checkData = this.checkData.bind(this);

    }

    addGoods(goodsId) {
        this.props.addGoods(goodsId);

    }

    checkData() {

    }

    render() {
        return (
            <div className="productList">
                <h2>{'Товари:'}</h2>{
                    this.props.database.length ?
                        this.props.database.map(item => <ProductItem product={item} addGoods={this.addGoods} />)
                        : "Зачекайте, будь ласка)..."}</div>);
    }
}

