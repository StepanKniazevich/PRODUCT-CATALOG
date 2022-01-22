import React, { Component } from 'react';
import { Card, Button, ButtonGroup } from 'react-bootstrap';


export default class ShopListItem extends Component {


    constructor(props) {
        super(props);
        this.state = {
            price: this.props.shopListItem.price,
            count: 1,
            shouldShangePrice: false
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.priceItem = this.priceItem.bind(this);
        this.addCount = this.addCount.bind(this);
        this.incCount = this.incCount.bind(this);
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
    incCount() {

        if (this.state.count > 1) {
            this.setState(prevCount => ({
                count: prevCount.count - 1,
                shouldShangePrice: !prevCount.shouldShangePrice
            }))

        }

    }



    priceItem(count) {

        this.setState({
            price: this.props.shopListItem.price * count
        })
        console.log('ADDDDDD')


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

        console.log(this.state.count);
        return (<div className={'shopList-item'}>

            <Card border="danger" style={{ width: '18rem' }}>
                <Card.Header><h4>{this.props.shopListItem.name}</h4></Card.Header>
                <Card.Body>
                    <Card.Text>Ціна: {this.props.shopListItem.price}</Card.Text>
                    <p><ButtonGroup size="sm">
                        <Button variant="success" onClick={this.addCount}>+</Button>
                        <Button variant="danger" onClick={this.incCount}>-</Button>
                    </ButtonGroup><br /><Card.Text>Кількість:{this.state.count} </Card.Text>
                        <Card.Title>Cума: {this.state.price} </Card.Title> </p>
                    <Button variant="danger" onClick={this.deleteItem}>Видалити</Button>
                </Card.Body>
            </Card>
        </div>)
    }
}



