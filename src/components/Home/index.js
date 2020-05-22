import React, { Component } from 'react';
import Axios from 'axios';

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
        'http://my-json-server.typicode.com/papuruth/mern-assignment-1/items'
      );
      return { response: response.data };
    } catch (error) {
      return { error };
    }
  };
  render() {
    const { items } = this.state;
    return (
      <div>
        <ul>
          {items.length > 0 &&
            items.map(
              ({
                id,
                item_id,
                item_name,
                item_make,
                item_model,
                item_model_year,
                item_price
              }) => (
                <li key={id}>
                  <div>
                    <p>
                      <span>Car Id</span>
                      <span>{item_id}</span>
                    </p>
                  </div>
                </li>
              )
            )}
        </ul>
      </div>
    );
  }
}
