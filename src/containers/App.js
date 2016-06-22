import React from 'react'
import {Link} from 'react-router'

export default class extends React.Component {
  render () {
    return (<div style={ {  border: '1px solid #ccc'  } }>

      <p>
        <strong>App</strong>&nbsp;
        <Link to="/">Home</Link>&nbsp;
        <Link to="/about">About</Link>&nbsp;
        <Link to="/subpage">Subpage</Link>
      </p>

      {this.props.children}
    </div>);
  }
}
