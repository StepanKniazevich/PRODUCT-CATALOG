import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';


export default class ProductItem extends Component {

    constructor(props) {
        super(props)
        this.addGoods = this.addGoods.bind(this);
    }

    addGoods(e) {
        this.props.addGoods(this.props.product.id);
    }


    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }} className={"productItem"}>
                    <Card.Body>
                        <Card.Title>{this.props.product.name}</Card.Title>
                        <Card.Text>
                            Ціна:{this.props.product.price}
                        </Card.Text>
                        {this.props.product.isInShoppingCart ?
                            <p>У корзині</p>
                            : <Button variant="primary" onClick={this.addGoods}>Купити</Button>
                        }
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
