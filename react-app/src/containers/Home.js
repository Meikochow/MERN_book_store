import React, { Component } from 'react'
import CardContainer from './CardContainer';
import '../style/Home.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getGenreBooks} from '../actions/itemAction';
import {getUserCart} from '../actions/userAction';

class Home extends Component {
  constructor(props){
    super(props);
    this.state={
      btnObj: {
        'science': "selectedBtn",
        'sci-fy': "",
        'technology': "",
        'romance': "",
        'manga': ""
      }
    }
    this.handleNavClick = this.handleNavClick.bind(this);
  }
  componentDidMount(){
    this.props.getUserCart();
  }
  handleNavClick(btn){
    let btnObj= {
            'science': "",
            'sci-fy': "",
            'technology': "",
            'romance': "",
            'manga': ""
          }
    btnObj[btn] = "selectedBtn"
          this.setState({
            btnObj: btnObj
          })
          this.props.getGenreBooks(btn)
  }
  render() {
    return (
      <div className="Home">
        <div className="HomeNavigation">
          <button className={`navButton ${this.state.btnObj['science']}`}    onClick={() => this.handleNavClick('science')}>Science</button>
          <button className={`navButton ${this.state.btnObj['sci-fy']}`}     onClick={() => this.handleNavClick('sci-fy')}>Sci-fi</button>
          <button className={`navButton ${this.state.btnObj['technology']}`} onClick={() => this.handleNavClick('technology')}>Technology</button>
          <button className={`navButton ${this.state.btnObj['romance']}`}    onClick={() => this.handleNavClick('romance')}>Romance</button>
          <button className={`navButton ${this.state.btnObj['manga']}`}      onClick={() => this.handleNavClick('manga')}>Manga</button>
        </div>
        <CardContainer/>
      </div>
    )
  }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => bindActionCreators({
    getGenreBooks,
    getUserCart
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home)
