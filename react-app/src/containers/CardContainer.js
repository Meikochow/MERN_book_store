import React, { Component } from 'react'
import '../style/CardContainer.scss';
import Card from './Card';
import {Icon} from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getGenreBooks} from '../actions/itemAction';

class CardContainer extends Component {
    componentDidMount(){
        this.props.getGenreBooks('science');
    }
  render() {
    return (
        <div className="CardContainer">
            {this.props.loading
            ? <Icon type="loading" className="loading"/>
            : this.props.items.map(v => 
                <Card
                key={Math.random() * 100000}
                btnId={v._id}
                title={v.name}
                author={v.author}
                description={v.description}
                price={v.price}
                binaryImage= {v.img.data.data}
                />
              )
            }
        </div>
    )
  }
}

const mapStateToProps = state => ({
  items : state.item.genreItems,
  loading : state.item.itemsLoading
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getGenreBooks
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer)


