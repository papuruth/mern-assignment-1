import React, { Component } from 'react';
import Axios from 'axios';
import history from '../../routes/history';
import { Link } from 'react-router-dom';
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  async componentDidMount() {
    const { response, error } = await this.fetchItems();
    if (response) {
      this.setState({
        items: response
      });
    } else {
      console.log(error);
    }
  }

  fetchItems = async () => {
    try {
      const response = await Axios.get(
        'https://5ec7b3e1155c130016a90448.mockapi.io/api/vi/items'
      );
      return { response: response.data };
    } catch (error) {
      return { error };
    }
  };

  addNewItem = () => {
    const { items } = this.state;
    history.push('/create-item', { id: items.length });
  };

  buyItem = async (itemId) => {
    try {
      const response = await Axios.put(
        `https://5ec7b3e1155c130016a90448.mockapi.io/api/vi/items/${itemId}`,
        {
          item_availability: false
        }
      );
      if (response) {
        const { response, error } = await this.fetchItems();
        alert('Item bought!')
        if (response) {
          this.setState({
            items: response
          });
        } else {
          console.log(error);
        }
      }
    } catch (error) {
     console.log(error);
    }
  };

  render() {
    const { items } = this.state;
    return (
      <div className="items-container">
        {items.length > 0 && (
          <div className="items-header">
            <button className="btn btn-primary" onClick={this.addNewItem}>
              <i className="fa fa-plus" /> Add New Item
            </button>
          </div>
        )}
        <ul className="lists">
          {items.length > 0 &&
            items.reverse().map((item) => {
              const { id, item_name, item_price, item_availability } = item;
              return (
                <li key={id} className="list-item">
                  <div>
                    <p>
                      <span className="item-keys">Name:</span>
                      <span className="span-right">{item_name}</span>
                    </p>
                    <p>
                      <span className="item-keys">Price ($):</span>
                      <span className="span-right">{item_price}</span>
                    </p>
                    <p>
                      <span className="item-keys">Status:</span>
                      <span className="span-right">
                        {item_availability ? 'Available' : 'Sold'}
                      </span>
                    </p>
                    <p>
                      <span className="item-keys">
                        <Link
                          to={{
                            pathname: `/item-details/${id}`,
                            state: item
                          }}
                          className="btn btn-primary"
                        >
                          View Details
                        </Link>
                      </span>
                      <span className="span-right">
                        <button
                          className="btn btn-primary"
                          onClick={() => this.buyItem(id)}
                          disabled={!item_availability}
                        >
                          Buy Now
                        </button>
                      </span>
                    </p>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}
