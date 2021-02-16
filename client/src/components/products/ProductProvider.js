import React from "react";
import axios from "axios";

import ProductList from "./ProductList";

class ProductProvider extends React.Component {
  // workitem accept some range or filters for events to retrieve
  state = {
    products: [],
    loading: true,
    error: null,
  };

  renderLoading() {
    // workitem style loading banner
    return <div>Loading ...</div>;
  }

  renderError() {
    // workitem style error element and offer reload action...?
    return <div>Whoops, something went wrong! Reload</div>;
  }

  renderProducts() {
    return <ProductList products={this.state.products} />;
  }

  componentDidMount() {
    console.log("[ProductProvider] componentDidMount, great for making the first network calls");

    const requestConfig = {
      url: "http://localhost:4000/api/v1/productRouter/",
      method: "get",
      headers: { "Content-Type": "application/json"}
    };

    axios(requestConfig)
      .then((response) => {
        this.setState({
          products: response.data,
          loading: false,
        });
      })
      .catch((err) => {
        this.setState({
          error: err,
          loading: false,
        });
      });
  }

  componentDidUpdate() {
    console.log("[ProductProvider] componentDidUpdate, great for updating after state changes");
  }

  componentWillUnmount() {
    console.log("[ProductProvider] componentWillUnmount, great for cleaning up after a component");
  }

  render() {
    if (this.state.loading) {
      return this.renderLoading();
    } else if (this.state.products.length > 0) {
      return this.renderProducts();
    } else {
      return this.renderError();
    }
  }
}

export default ProductProvider;