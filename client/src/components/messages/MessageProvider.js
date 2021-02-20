import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import MessageList from "./MessageList";

class MessageProvider extends Component {
  // workitem accept some range or filters for events to retrieve
  state = {
    users: [],
    messages: [],
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
    return <MessageList messages={this.state.messages} users ={this.state.users}/>;
  }
  
  
  componentDidMount() {
    console.log("[ProductProvider] componentDidMount, great for making the first network calls");
    const { id } = this.props.match.params;
    const requestConfig = {
      url: `http://localhost:4000/api/v1/conversation/${id}`,
      method: "get",
      headers: { "Content-Type": "application/json"}
    };

    axios(requestConfig)
      .then((response) => {
        this.setState({
          messages: response.data.messages,
          users: response.data.users,
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
    } else if (this.state.messages.length > 0) {
      return this.renderProducts();
    } else {
      return this.renderError();
    }
  }
}

export default withRouter(MessageProvider);