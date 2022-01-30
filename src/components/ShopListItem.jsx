import React, { Component } from 'react';
import { Card, Button, ButtonGroup } from 'react-bootstrap';


export default class ShopListItem extends Component {


    constructor(props) {
        super(props);
        this.state = {
            price: { ...this.props.shopListItem }.price,
            count: 1,
            shouldShangePrice: false
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.priceItem = this.priceItem.bind(this);
        this.addCount = this.addCount.bind(this);
        this.subCount = this.subCount.bind(this);
    }

    deleteItem(e) {

        this.props.deleteItem(this.props.shopListItem.id, this.props.index)
    }

    addCount() {
        this.setState(prevCount => ({
            count: prevCount.count + 1,
            shouldShangePrice: !prevCount.shouldShangePrice
        }))


    }
    subCount() {
        if (this.state.count > 1) {
            this.setState(prevCount => ({
                count: prevCount.count - 1,
                shouldShangePrice: !prevCount.shouldShangePrice
            }))
        }
    }

    priceItem(count) {
        const priceItem = { ...this.state }.price * count;
        this.props.priceItem(priceItem, this.props.index)

    }

    componentDidUpdate() {
        if (this.state.shouldShangePrice) {
            this.priceItem(this.state.count);
            this.setState(prev => ({
                shouldShangePrice: !prev.shouldShangePrice
            }))
        }
    }


    render() {

        return (<div className={'shopList-item'}>

            <Card border="danger" style={{ width: '18rem' }} className={"shopListItem"} >
                <Card.Header><b>{this.props.shopListItem.name}</b>
                    <ButtonGroup size="sm" className={"addNewItem"}>
                        <Button variant="success" onClick={this.addCount}>+</Button>
                        <Button variant="danger" onClick={this.subCount}>-</Button>
                    </ButtonGroup></Card.Header>
                <Card.Body>
                    <Card.Text>Ціна: <b>{this.state.price}</b> </Card.Text>
                    <Card.Text>  Кількість:<b>{this.state.count}</b> </Card.Text>
                    <Card.Title>Cума:<b>{this.props.shopListItem.price}</b> </Card.Title>
                    <Button variant="danger" onClick={this.deleteItem}>Видалити</Button>
                </Card.Body>
            </Card>
        </div >)
    }
}



