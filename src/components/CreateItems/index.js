import React, { Component } from 'react';
import Axios from 'axios';
import history from '../../routes/history';

export default class CreateItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      car_name: '',
      car_maker: '',
      car_model: '',
      car_year: '',
      car_price: ''
    };
  }

  componentDidMount() {
    let { id } = this.props.location.state;
    this.setState({
      id: parseInt(id, 10) + 1
    });
  }

  addNewItem = async (event) => {
    event.preventDefault();
    try {
      const {
        id,
        car_name,
        car_maker,
        car_model,
        car_price,
        car_year
      } = this.state;
      alert(
        `Forn Submission Details.\n\nCar Name: ${car_name}\nCar Id: ${this.generateId()}\nCar Maker: ${car_maker}\nCar Model: ${car_model}\nCar Price: ${car_price}\nCar Year: ${car_year}`
      );
      const response = await Axios.post(
        'https://5ec7b3e1155c130016a90448.mockapi.io/api/vi/items',
        {
          id,
          item_id: this.generateId(),
          item_name: car_name,
          item_maker: car_maker,
          item_model: car_model,
          item_price: car_price,
          item_availability: true,
          item_model_year: car_year
        }
      );
      if (response) {
        history.push('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  handleUserInput = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  generateId = () => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < 17; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  cancel = () => {
      history.goBack();
  }

  render() {
    const { car_name, car_maker, car_model, car_price, car_year } = this.state;
    return (
      <div className="create-item-container">
        <div className="create-item-header">
          <h1>Add New Item</h1>
        </div>
        <div className="new-item-form">
          <form onSubmit={this.addNewItem} method="POST">
            <div className="form-group">
              <label htmlFor="car_name" className="new-item-label">
                Car Name
              </label>
              <input
                id="car_name"
                name="car_name"
                type="text"
                value={car_name}
                onChange={this.handleUserInput}
                className="form-control col-sm-4"
                placeholder="Honda E350s"
                autoComplete="off"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="car_maker" className="new-item-label">
                Car Maker
              </label>
              <input
                id="car_maker"
                name="car_maker"
                type="text"
                value={car_maker}
                onChange={this.handleUserInput}
                className="form-control col-sm-4"
                placeholder="Honda"
                autoComplete="off"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="car_model" className="new-item-label">
                Car Model
              </label>
              <input
                id="car_model"
                name="car_model"
                type="text"
                value={car_model}
                onChange={this.handleUserInput}
                className="form-control col-sm-4"
                placeholder="XJ Series"
                autoComplete="off"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="car_year" className="new-item-label">
                Make Year
              </label>
              <input
                id="car_year"
                name="car_year"
                type="text"
                value={car_year}
                onChange={this.handleUserInput}
                className="form-control col-sm-4"
                placeholder="2020"
                autoComplete="off"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="car_price" className="new-item-label">
                Car Price ($)
              </label>
              <input
                id="car_price"
                name="car_price"
                type="text"
                value={car_price}
                onChange={this.handleUserInput}
                className="form-control col-sm-4"
                placeholder="10000"
                autoComplete="off"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="submit_form"></label>
              <button
                id="new_item_submit"
                type="submit"
                className="btn btn-success"
              >
                Submit
              </button>
              <button className="btn btn-secondary span-right" onClick={this.cancel}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
