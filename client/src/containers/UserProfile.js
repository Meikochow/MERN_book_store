import React, { Component } from 'react';
import CartCard from './CartCard';
import '../style/UserProfile.scss';
import { Modal } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { getUserCart } from '../actions/userAction';

export class UserProfile extends Component {
  constructor(props){
    super(props);
    this.state={
      modalVisible: false
    }
    this.emptyCart = this.emptyCart.bind(this);
    this.processTransaction = this.processTransaction.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.getTotal = this.getTotal.bind(this);
  }
  componentDidMount() {
    this.props.getUserCart()
  }
  emptyCart() {
    console.log('removing cards...');
    axios
    .put('/api/user/removeAllBooks')
     .then(() => {this.props.getUserCart()});
  }
  processTransaction(){
    this.setState({modalVisible:true});
    console.log('click');
    axios
    .put('/api/user/removeAllBooks')
     .then(() => {this.props.getUserCart()});
  }
  closeModal(){
    this.setState({
      modalVisible:false
    })
  }
  getTotal(cart){
    let total=0;
    cart.map( v => {return total += v.price});
    return total.toFixed(2);
  }
  render() {
    const totalPrice = this.getTotal(this.props.cart)
    return (
      <div className="UserProfile">
      <Modal
          visible={this.state.modalVisible}
          onCancel = {this.closeModal}
          footer={false}
        >
        <div className="success">Transaction Successful</div>
        </Modal>
        <div className="cartSummary">
            <div className="thx">Thank you for shopping with us!</div>
            <div className="summary">Below is your summary:</div>
            <div className="summary">You have selected <span className="value">{this.props.cart.length}</span> items</div>
            <div className="summary">Your total is: <span className="value">{totalPrice}$</span> </div>
            <button onClick={this.processTransaction} className="processOrderBtn">Process Order</button>
        </div>
        <div className="cartItems">
            {this.props.cart.map(v => 
            <CartCard
            key={Math.random() * 100000}
            bookKey = {v.key} 
            title = {v.name}
            author = {v.author}
            price = {v.price}
            description = {v.description}
            image = {v.img.data}
            quantity = {v.quantity}
            />)}
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cart: state.user.userCart
})

const mapDispatchToProps = {
  getUserCart
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
