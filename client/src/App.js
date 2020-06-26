import React, {Component} from 'react';
import ItemCarousel from './components/ItemCarousel';
import Axios from 'axios';
// import data from '../../testData';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

      products: []
      // products: [data.data[0], data.data[1], data.data[2]]
    }

    // this.seedDB = this.seedDB.bind(this);
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  // seedDB() {

  //   Axios.get('/seed')
  //     .then( res => {

  //       console.log('database seeded');
  //     })
  //     .catch( err => {

  //       console.error('error with seeding database', err);
  //     })
  // }

  getProducts() {

    Axios.get('/products')
      .then( res => {
        let products = res.data;
        this.setState({products: products});
      })
      .catch( err => {

        console.error('error with getting products', err);
      })
  }

  render() {

    return (
      
      <div className="mainContainer">
        <ItemCarousel data={this.state.products}/>
      </div>
    )
  }
}

export default App;
