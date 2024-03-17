import React, { Component } from "react";

class FooterComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <footer className="footer">
          <span>All In One Place</span>
          <br></br>
          <span>Wholesale Dealer & Agency</span>
          <span>
            <h3>
              Thanks <span className="footerlast">Visit Again....!</span>
            </h3>
          </span>
        </footer>
      </div>
    );
  }
}

export default FooterComponent;
