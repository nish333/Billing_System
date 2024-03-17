import React, { Component } from "react";
import BillingService from "../Services/BillingService";

class ViewBillingComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      billing: {},
    };
  }

  componentDidMount() {
    BillingService.getBillingById(this.state.id).then((res) => {
      this.setState({ billing: res.data });
    });
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="card col-md-6 offset-md-3">
          <h3 className="text-center">Bill Details...</h3>
          <hr></hr>
          <div className="card-body">
            <div className="row">
              <label>Customer Name : </label>
              <div>{this.state.billing.customerName}</div>
            </div>
            <div className="row">
              <label>Item Name : </label>
              <div>{this.state.billing.itemName}</div>
            </div>
            <div className="row">
              <label>Quantity : </label>
              <div>{this.state.billing.quantity}</div>
            </div>
            <div className="row">
              <label>Phone No : </label>
              <div>{this.state.billing.phoneNo}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewBillingComponent;
