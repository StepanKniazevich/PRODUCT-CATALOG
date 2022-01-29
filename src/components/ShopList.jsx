import React, { Component } from 'react'
import ShopListItem from './ShopListItem'
import { Badge } from 'react-bootstrap'




export default class ShopList extends Component {
    constructor(props) {
        super(props);
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
        const showShopList = () => {
            return (
                <> {
                    this.props.shopList.map((item, index) => <ShopListItem shopListItem={item}
                        deleteItem={this.deleteItem} index={index} priceItem={this.priceItem} />)}
                </>


            )
        }


        return (<div className={"shopList"} >
            <>  <h2>{'Кошик:'}</h2>{
                ((this.props.ifDataBaseExist) && (this.props.shopList.length === 0)) ?
                    <Badge className={"empty-list"} bg="secondary">Корзина пуста </Badge> : (this.props.ifDataBaseExist) ?
                        <> {showShopList()}
                            <div className={"total-price"}><Badge bg="danger">Загальна ціна:  {this.props.totalPrice} </Badge></div>
                        </> : ""
            }</>
        </div >)
    }
}

