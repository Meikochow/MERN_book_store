import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from '../containers/Home';
import UserProfile from '../containers/UserProfile';
import '../style/View.scss';

export class View extends Component {

  render() {
    return (
      <div className="View">
        {this.props.view === "store"
        ? <Home/>
        : <UserProfile/>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  view : state.user.view
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(View)
