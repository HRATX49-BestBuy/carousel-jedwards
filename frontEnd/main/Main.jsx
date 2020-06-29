import React, {Component} from 'react';
import ItemCarousel from './Components/ItemCarousel';
import Axios from 'axios';

// import data from '../../testData';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

      products: [],
      loaded: false,
    }

    this.seedDB = this.seedDB.bind(this);
    this.getProducts = this.getProducts.bind(this);
    this.renderCarousel = this.renderCarousel.bind(this);
  }

  componentDidMount() {

    this.getProducts();

  }

  seedDB() {

    Axios.get('/seed')
      .then( res => {

        console.log('database seeded');
      })
      .catch( err => {

        console.error('error with seeding database', err);
      })
  }

  getProducts() {

    Axios.get('/products')
      .then( res => {
        let products = res.data;
        this.setState({products: products}, () => this.setState({loaded: true}));
      })
      .catch( err => {

        console.error('error with getting products', err);
      })
  }

  renderCarousel() {

    return(
      <div>
        <ItemCarousel data={this.state.products}/>
      </div>
    )
  }

  render() {

      return (
        
        <div className="mainContainer">
          {this.state.loaded === true ? this.renderCarousel() : null}
        </div>
      )

    }
}

export default App;
