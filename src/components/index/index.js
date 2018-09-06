import React, {Component} from 'react';
// import { BrowserRouter as Router,Route,Link } from 'react-router-dom'

export default class Index extends Component {
  constructor(props) {
    super(props);
    document.title = '第一个页面';
    this.state = {}
  }

  render () {
    return (
      <div className="box">
        <h2>公司介绍</h2>
        <p>匠心有品隶属安徽普靖金融服务外包有限公司，致力于为年轻人服务，提供海量优质商品。</p>
      </div>
    )
  }
}