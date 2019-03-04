import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../style/Card.scss';
import { getUserCart } from '../actions/userAction';

class Card extends Component {
  constructor(props){
    super(props);
    this.state = {
      addedToCart: false
    }
    this.handleCardClick = this.handleCardClick.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
  }

  handleCardClick(){
  console.log(this.props.btnId);
  axios
  .put(`/api/user/addbook/${this.props.btnId}`)
  .then(res => 
        this.props.getUserCart()
    )
  .catch(err => console.log(err));
  }
  handleDescription(str){
    if(str.length > 100){
      return `${str.substr(0, 100)} ...`
    } else {
      return str;
    }
  }
  render() {
    const btnText = !this.state.addedToCart ? "Add to cart" : "Added to cart";
    return (
      <div className="Card">
        <img src={`data:image/png;base64,${btoa(String.fromCharCode.apply(null, this.props.binaryImage))}`} className="cardImage" alt="Item"/>
        <div className="detailsContainer">
          <div className="titleText">{this.props.title}</div>
          <div className="authorText">{this.props.author}</div>
          <div className="price">${this.props.price}</div>
          <div className="description">{this.handleDescription(this.props.description)}</div>
        </div>
        <button className="addToCart" disabled={this.state.addedToCart} onClick={this.handleCardClick}>{btnText}</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getUserCart
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Card)