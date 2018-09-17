import React, { Component } from 'react';
import { Qs } from '../../tools'
// import { BrowserRouter as Router,Route,Link } from 'react-router-dom'

const params = Qs();
const merchant = params.merchantNumber || params.merchant || 'cjxjx';
let interval = null;
let tagCount = 1;

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
      <div className="box">
        <h2>公司介绍</h2>
        <p>匠心有品隶属安徽普靖金融服务外包有限公司，致力于为年轻人服务，提供海量优质商品。</p>
        <button onClick={() => this.setState({value:'x'})}>{this.state.value}</button>
      </div>
    )
  }
}