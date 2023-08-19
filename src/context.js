import React, { Component } from 'react';
import { saleItems, singleItem } from './SaleItems';
import { toHaveAccessibleDescription } from '@testing-library/jest-dom/matchers';

const cntxt = React.createContext();
class ContextProvider extends Component {
  state = {
    items: [],
    singleItem: singleItem,
    cart: [],
    modal: true,
    modalItem: singleItem,
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
      return { modalItem: item, modal: true };
    });
  };
  handleCloseModal = () => {
    this.setState(() => {
      return { modal: false };
    });
  };

  render() {
    return (
      <cntxt.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          handleAddCart: this.handleAddCart,
          modal: this.modal,
          handleCloseModal: this.handleCloseModal,
        }}
      >
        {this.props.children}
      </cntxt.Provider>
    );
  }
}
const ContextConsumer = cntxt.Consumer;
export { ContextProvider, ContextConsumer };
