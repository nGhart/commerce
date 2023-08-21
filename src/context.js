import React, { Component } from 'react';
import { saleItems, singleItem } from './SaleItems';
import { toHaveAccessibleDescription } from '@testing-library/jest-dom/matchers';

const cntxt = React.createContext();
class ContextProvider extends Component {
  state = {
    items: [],
    singleItem: singleItem,
    // cart: [],
    cart: saleItems,
    openModal: false,
    modalItem: singleItem,
    subtotal: 0,
    tax: 0,
    total: 0,
  };
  componentDidMount() {
    this.setProducts();
  }
  setProducts = () => {
    let tempProducts = [];
    saleItems.forEach((unit) => {
      const singleUnit = { ...unit };
      tempProducts = [...tempProducts, singleUnit];
    });
    this.setState(() => {
      return { items: tempProducts };
    });
  };
  handleGetItem = (id) => {
    const item = this.state.items.find((unit) => unit.id === id);
    return item;
  };
  handleDetail = (id) => {
    const item = this.handleGetItem(id);
    this.setState(() => {
      return { singleItem: item };
    });
  };
  handleAddCart = (id) => {
    let tempProducts = [...this.state.items];
    const index = tempProducts.indexOf(this.handleGetItem(id));
    const item = tempProducts[index];
    item.inCart = true;
    item.count = 1;
    const price = item.price;
    item.total = price;
    this.setState(
      () => {
        return { items: tempProducts, cart: [...this.state.cart, item] };
      },
      () => {
        console.log(this.state);
      }
    );
  };
  handleOpenModal = (id) => {
    const item = this.handleGetItem(id);
    this.setState(() => {
      return { modalItem: item, openModal: true };
    });
  };
  handleCloseModal = () => {
    this.setState(() => {
      return { openModal: false };
    });
  };

  increaseCount = (id) => {
    console.log('+1');
  };

  decreaseCount = (id) => {
    console.log('-1');
  };
  removeItem = (id) => {
    console.log('im gone');
  };
  clearCart = () => {
    console.log('its all gone');
  };
  render() {
    return (
      <cntxt.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          handleAddCart: this.handleAddCart,
          handleOpenModal: this.handleOpenModal,
          handleCloseModal: this.handleCloseModal,
          increaseCount: this.increaseCount,
          decreaseCount: this.decreaseCount,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
        }}
      >
        {this.props.children}
      </cntxt.Provider>
    );
  }
}
const ContextConsumer = cntxt.Consumer;
export { ContextProvider, ContextConsumer };
