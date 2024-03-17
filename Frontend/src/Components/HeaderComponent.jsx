import React, { Component } from "react";

class HeaderComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="navbar-brand">
              <h4>Kandhavelan Super Market</h4>
            </div>
            <div>
              <span>
                <h4 className="address">
                  Kuthalam,Mayiladuthurai,<br></br>Tamil Nadu,609 801.
                </h4>
              </span>
              <span className="phone">
                <h5>+91 92458 29243</h5>
              </span>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}
export default HeaderComponent;
