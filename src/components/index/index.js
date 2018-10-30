import React, { Component } from 'react';
import { Qs } from '../../tools'
// import { BrowserRouter as Router,Route,Link } from 'react-router-dom'

const params = Qs();
const merchant = params.merchantNumber || params.merchant || 'cjxjx';
// let interval = null;
// let tagCount = 1;

export default class Index extends Component {
  constructor(props) {
    super(props);
    document.title = '第一个页面';
    this.state = {
      value: null
    }
  }

  componentDidMount () {
    const params = Qs();
    if (merchant == 'jxyp') {
      this.setState({
        isJx: true,
        colorWord: '#FF9600'
      });
    } else {
      this.setState({
        colorWord: '#3399ff'
      });
    }
    // this.getPaymentResult();
    // interval = setInterval(this.getPaymentResult.bind(this), 3000);
  }

  render () {
    return (
      <div className="indexBox">
        <div class="indexImg">
          <img src={require('../../images/slider/slide1.jpg')} />
          <img src={require('../../images/slider/slide2.jpg')} />
        </div>
        <div class="indexTop">
          
        </div>
      </div>
    )
  }
}