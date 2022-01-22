import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './components/ProductList';
import ShopList from './components/ShopList';
import React from 'react';



export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      database: [],
      addGoods: []
    }
    this.addGoods = this.addGoods.bind(this);
    this.deleteItem = this.deleteItem.bind(this);

  }

  addGoods(goodsId) {

    this.setState(prevState =>
    ({
      addgoods: prevState.addGoods.push(...this.state.database.filter((item, index) => { return goodsId === this.state.database[index].id }))
    }));


  }

  deleteItem(goodsId, index) {

    const product = this.state.database;
    this.setState(prevState =>
    ({
      addgoods: prevState.addGoods.splice(index, 1)

    }));

    product.filter(item => { return item.id === goodsId })[0].isInShoppingCart = false



  }

  componentDidMount() {
    fetch('https://api.ifcityevent.com/products')
      .then(response => response.json())
      .then(response => this.setState({
        database: response.map(item => {
          return { ...item, isInShoppingCart: false }
        })
      }))
  }

  render() {
    return (

      <div className="product-catalog">

        <div className={"product-item"}><ProductList database={this.state.database} addGoods={this.addGoods} key={this.state.database.id} /></div>
        <ShopList shopList={this.state.addGoods} deleteItem={this.deleteItem} />
      </div>
    );
  }
}


