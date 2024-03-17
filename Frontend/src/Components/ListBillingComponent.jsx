import React, { Component } from "react";
import BillingService from "../Services/BillingService";

class ListBillingComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      billings: [],
    };
    this.addBilling = this.addBilling.bind(this);
    this.editBilling = this.editBilling.bind(this);
    this.deleteBilling = this.deleteBilling.bind(this);
  }

  deleteBilling(id) {
    BillingService.deleteBilling(id).then((res) => {
      this.setState({
        billings: this.state.billings.filter((billing) => billing.id !== id),
      });
    });
  }

  viewBilling(id) {
    this.props.history.push(`/view-bill/${id}`);
  }

  editBilling(id) {
    this.props.history.push(`/update-bill/${id}`);
  }

  componentDidMount() {
    BillingService.getBillings().then((res) => {
      this.setState({ billings: res.data });
    });
  }

  addBilling() {
    this.props.history.push("/add-bill");
  }

  render() {
    return (
      <div>
        <h2 className="text-center">
          <b>PRODUCT DETAILS</b>
        </h2>
        <div className="add_btn">
          <button className="btn btn-primary" onClick={this.addBilling}>
            Add Bill
          </button>
        </div>
        <div className="row">
          <table className="table table-striped table-borderd">
            <thead>
              <tr>
                <th>Customer Name</th>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Phone No</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {this.state.billings.map((billing) => (
                <tr key={billing.id}>
                  <td>{billing.customerName}</td>
                  <td>{billing.itemName}</td>
                  <td>{billing.quantity}</td>
                  <td>{billing.phoneNo}</td>
                  <td>
                    <button
                      onClick={() => this.editBilling(billing.id)}
                      className="btn btn-info"
                    >
                      Update
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.deleteBilling(billing.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.viewBilling(billing.id)}
                      className="btn btn-warning"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListBillingComponent;
