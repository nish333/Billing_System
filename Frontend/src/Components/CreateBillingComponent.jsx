import React, { Component } from "react";
import BillingService from "../Services/BillingService";

class CreateBillingComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customerName: "",
      itemName: "",
      quantity: "",
      phoneNo: "",
    };
    this.changeCustomerNameHandler = this.changeCustomerNameHandler.bind(this);
    this.changeItemNameHandler = this.changeItemNameHandler.bind(this);
    // this.changequantityHandler = this.changequantityHandler.bind(this);
    // this.changephoneNoHandler = this.changephoneNoHandler.bind(this);
    this.saveBilling = this.saveBilling.bind(this);
  }

  saveBilling = (e) => {
    e.preventDefault();
    let billing = {
      customerName: this.state.customerName,
      itemName: this.state.itemName,
      quantity: this.state.quantity,
      phoneNo: this.state.phoneNo,
    };
    console.log("billing => " + JSON.stringify(billing));

    BillingService.createBilling(billing).then((res) => {
      this.props.history.push("/bill");
    });
  };

  changeCustomerNameHandler = (event) => {
    this.setState({ customerName: event.target.value });
  };

  changeItemNameHandler = (event) => {
    this.setState({ itemName: event.target.value });
  };

  changequantityHandler = (event) => {
    this.setState({ quantity: event.target.value });
  };

  changephoneNoHandler = (event) => {
    this.setState({ phoneNo: event.target.value });
  };

  cancel() {
    this.props.history.push("/bill");
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md3">
              <h3 className="text-center">Add Bill</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>
                      <b>Customer Name</b>
                    </label>
                    <input
                      placeholder="Customer Name"
                      name="customerName"
                      className="form-control"
                      value={this.state.customerName}
                      onChange={this.changeCustomerNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      <b>Item Name</b>
                    </label>
                    <input
                      placeholder="Item Name"
                      name="itemName"
                      className="form-control"
                      value={this.state.itemName}
                      onChange={this.changeItemNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      <b>Quantity</b>
                    </label>
                    <input
                      placeholder="Quantity"
                      name="quantity"
                      className="form-control"
                      value={this.state.quantity}
                      onChange={this.changequantityHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      <b>Phone No</b>
                    </label>
                    <input
                      placeholder="Phone No"
                      name="phoneNo"
                      className="form-control"
                      value={this.state.phoneNo}
                      onChange={this.changephoneNoHandler}
                    />
                  </div>

                  <button
                    className="btn btn-success"
                    onClick={this.saveBilling}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateBillingComponent;
