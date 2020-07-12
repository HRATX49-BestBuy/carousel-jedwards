import React, {Component} from 'react';
import ItemCarousel from './Components/ItemCarousel';
import Axios from 'axios';
import _ from 'underscore';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      products: [],
      // conditional that determines whether my component renders
      loaded: false,
    }

    // used to seed db, not used at the moment
    this.seedDB = this.seedDB.bind(this);
    // retreives all products from the database
    this.getProducts = this.getProducts.bind(this);
    // reders the carousel compnents or any other element inside it
    this.renderCarousel = this.renderCarousel.bind(this);
    // used to capture the id of any carousel element clicked on and sets the window.id to it's value
    this.getId = this.getId.bind(this);
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
        // create a variable that shuffles the order of the products once received
        // to gaurantee they appear differently every time
        let products = _.shuffle(res.data);
        // once the products are received and state update, we allow the components to be rendered
        this.setState({products: products}, () => this.setState({loaded: true}));
      })
      .catch( err => {

        console.error('error with getting products', err);
      })
  }
  
  // used to talk to the other components on our page
  // other components will grab the window.id
  getId(event) {

    window.id = event;

    console.log('Here is the window id', window.id);
  }

  // will be called if this.state.loaded === true
  renderCarousel() {

    return(
      <div>
        <ItemCarousel data={this.state.products} getId={this.getId}/>
      </div>
    )
  }

  render() {

      return (
        // ternary opperator to make sure component doesn't load before we have 
        // the product data.
        <div className="mainContainer">
          {this.state.loaded === true ? this.renderCarousel() : null}
        </div>
      )

    }
}

export default App;
