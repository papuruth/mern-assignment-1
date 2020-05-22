import React, { Component } from 'react';
import history from '../../routes/history';
import Axios from 'axios';

export default class ItemsDetails extends Component {

  buyItem = async (itemId) => {
    try {
      const response = await Axios.put(
        `https://5ec7b3e1155c130016a90448.mockapi.io/api/vi/items/${itemId}`,
        {
          item_availability: false
        }
      );
      if (response) {
        alert('Item bought!');
        history.push('/')
      }
    } catch (error) {
     console.log(error);
    }
  }

  cancel = () => {
    history.goBack();
  }

  render() {
    const item = this.props.location.state;
    const {
      id,
      item_id,
      item_name,
      item_maker,
      item_model,
      item_model_year,
      item_price,
      item_availability
    } = item;
    return (
      <div className="item-details-container">
        <h1 className="item-details-heading">Item Detials</h1>
        <ul className="lists">
          <li className="list-item">
            <div>
              <p>
                <span className="item-keys">Car Id:</span>
                <span className="span-right">{item_id}</span>
              </p>
              <p>
                <span className="item-keys">Name:</span>
                <span className="span-right">{item_name}</span>
              </p>
              <p>
                <span className="item-keys">Make:</span>
                <span className="span-right">{item_maker}</span>
              </p>
              <p>
                <span className="item-keys">Model:</span>
                <span className="span-right">{item_model}</span>
              </p>
              <p>
                <span className="item-keys">Make Year:</span>
                <span className="span-right">{item_model_year}</span>
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
                <span className="items-keys">
                  <button
                    className="btn btn-primary"
                    onClick={() => this.buyItem(id)}
                    disabled={!item_availability}
                  >
                    Buy Now
                  </button>
                </span>
                <span className="span-right">
                  <button
                    className="btn btn-secondary"
                    onClick={this.cancel}
                  >
                    Cancel
                  </button>
                </span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
