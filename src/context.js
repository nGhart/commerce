import React, { Component } from 'react';
import { saleItems, singleItem } from './SaleItems';

const cntxt = React.createContext();
class ContextProvider extends Component {
  state = {
    items: [],
    singleItem: singleItem,
    cart: [],
    //cart: saleItems,
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
        this.handleGetTotals();
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
    let tempCart = [...this.state.cart];
    const selectedItem = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedItem);
    const pdt = tempCart[index];
    pdt.count = pdt.count + 1;
    pdt.total = pdt.count * pdt.price;

    this.setState(
      () => {
        return { cart: [...tempCart] };
      },
      () => {
        this.handleGetTotals();
      }
    );
  };

  decreaseCount = (id) => {
    let tempCart = [...this.state.cart];
    const selectedItem = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedItem);
    const pdt = tempCart[index];
    pdt.count = pdt.count - 1;

    if (pdt.count === 0) {
      this.removeItem(id);
    } else {
      pdt.total = pdt.count * pdt.price;
      this.setState(
        () => {
          return { cart: [...tempCart] };
        },
        () => {
          this.handleGetTotals();
        }
      );
    }
  };
  removeItem = (id) => {
    let tempPrdt = [...this.state.items];
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter((item) => item.id !== id);
    const index = tempPrdt.indexOf(this.handleGetItem(id));
    let removed = tempPrdt[index];
    removed.inCart = false;
    removed.count = 0;
    removed.total = 0;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
          items: [...tempPrdt],
        };
      },
      () => {
        this.handleGetTotals();
      }
    );
  };
  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.setProducts();
        this.handleGetTotals();
      }
    );
  };
  handleGetTotals = () => {
    let subtotal = 0;
    this.state.cart.map((item) => (subtotal += item.total));
    const tempTax = subtotal * 0.15;
    const taxes = parseFloat(tempTax.toFixed(2));
    const total = subtotal + taxes;
    this.setState(() => {
      return { subtotal: subtotal, tax: taxes, total: total };
    });
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
