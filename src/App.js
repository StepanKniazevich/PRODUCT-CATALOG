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

    let addGoodsItem = {}
    for (let index = 0; index < this.state.database.length; index++) {
      if (goodsId === this.state.database[index].id) {
        addGoodsItem = Object.assign({}, this.state.database[index])
      }
    }

    this.setState(prevState =>
    ({
      addGoods: [...prevState.addGoods, addGoodsItem]
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
    const productList = this.state.database.map((product, index) => {
      if (goodsId === product.id) {
        product.isInShoppingCart = condition;
      }
      return product
    })
    this.setState({ database: productList })
  }


  priceItem(priceItem, indexWhereChange) {

    const shoplist = this.state.addGoods.map((product, index) => {
      if (index === indexWhereChange) {
        product.price = priceItem;
      }
      return product
    })
    this.setState({
      addGoods: [...shoplist]
    })
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

    const ifDataBaseExist = this.state.database.length === 0 ? false : true;
    const totalPrice = () => this.state.addGoods.reduce((prevVal, item) => {
      return prevVal + item.price
    }, 0)

    return (
      <div className="product-catalog" >
        <ProductList database={this.state.database} addGoods={this.addGoods} key={this.state.database.id} />
        <ShopList shopList={this.state.addGoods} deleteItem={this.deleteItem}
          priceItem={this.priceItem} totalPrice={totalPrice()}
          ifDataBaseExist={ifDataBaseExist} />
      </div>
    );
  }
}


