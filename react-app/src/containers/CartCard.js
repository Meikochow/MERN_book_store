import React, { Component } from 'react';
import '../style/CartCard.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import { getUserCart } from '../actions/userAction';


class CartCard extends Component {
  constructor(props){
    super(props);
    this.deleteCardFromCart = this.deleteCardFromCart.bind(this);
  }
  deleteCardFromCart(){
    axios
    .put(`/api/user/removebook/${this.props.bookKey}`)
    .then(() => 
          this.props.getUserCart()
      )
    .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="CartCard">
        <img src={`data:image/jpeg;base64,${this.props.image}`} className="cartcardImage" alt="Item"/>
        <div className="detailsContainer">        
          <div className="title"><span>{this.props.title}</span></div>
          <div className="author">{this.props.author}</div>
          <div className="price">${this.props.price}</div>
        </div>
        <div className="description">
          {this.props.description}
        </div>
        <div className="btnContainer">
          <button onClick={this.deleteCardFromCart} className="removeFromCart">Remove</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getUserCart
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CartCard)