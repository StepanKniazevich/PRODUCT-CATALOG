import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';


export default class ShopListItem extends Component {


    constructor(props) {
        super(props);
        this.state = {
            price: 0
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.priceItem = this.priceItem.bind(this);

    }

    deleteItem(e) {

        this.props.deleteItem(this.props.shopListItem.id, this.props.index)
    }

    priceItem() {



    }


    render() {


        return (<div className={'shopList-item'}>

            <Card border="danger" style={{ width: '18rem' }}>
                <Card.Header>{this.props.shopListItem.name}</Card.Header>
                <Card.Body>
                    <Card.Title>Ціна: {this.props.shopListItem.price}</Card.Title>

                    <Button variant="danger" onClick={this.deleteItem}>Видалити</Button>
                </Card.Body>
            </Card>
        </div>)
    }
}



