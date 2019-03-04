import React, { Component } from 'react'
import '../style/Nav.scss';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setView } from '../actions/userAction';

class Nav extends Component {
  constructor(props){
    super(props);
    this.handleSetView = this.handleSetView.bind(this);
  }
  handleSetView(view){
    this.props.setView(view);
  }
  render() {
    return (
      <div className="Nav">
        <div className="LeftNavContainer" onClick={() => this.handleSetView('store')} title="Home">
        <div>Awesome Book Store</div>
        </div>
        <div className="RightNavContainer" onClick={() => this.handleSetView('profile')} title="Cart">
        <img src="./assets/user.png" alt="user" className="User"/>
        <img src="./assets/cart.png" alt="cart" className="Cart"/>
        <div className="CartContents">{this.props.cart.length}</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cart: state.user.userCart
})

const mapDispatchToProps = dispatch => bindActionCreators({
  setView
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Nav)