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
    this.setIsShoppingCard = this.setIsShoppingCard.bind(this);
    this.priceItem = this.priceItem.bind(this);

  }

  addGoods(goodsId) {

    this.setState(prevState =>
    ({
      addGoods: [...prevState.addGoods, ...this.state.database.filter((item, index) => {
        return goodsId === this.state.database[index].id
      })]
    }));
    this.setIsShoppingCard(goodsId, true);

  }

  deleteItem(goodsId, index) {

    this.setState(prevState =>
    ({
      addgoods: prevState.addGoods.splice(index, 1)

    }));
    this.setIsShoppingCard(goodsId, false)
  }


  setIsShoppingCard(goodsId, condition) {

    this.state.database.filter(item => { return item.id === goodsId })[0].isInShoppingCart = condition;
  }


  priceItem(priceItem, index) {
    this.state.addGoods[index].price = priceItem;
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
        <ShopList shopList={this.state.addGoods} deleteItem={this.deleteItem} priceItem={this.priceItem} />
      </div>
    );
  }
}


