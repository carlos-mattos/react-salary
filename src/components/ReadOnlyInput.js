import React, { Component } from 'react'
import formatNumber from './helpers/formatHelpers'

export default class ReadOnlyInput extends Component {


  render() {
    const { value, label, css, percentage } = this.props
    console.log(percentage);
    if (typeof (percentage) != 'undefined') {
      return (
        <div>
          <label style={{ fontSize: '15px' }}>{label}</label>
          <input style={{ color: `${css}` }} type='text' readOnly value={"R$ " + formatNumber(value) + " --- " + percentage} />
        </div >
      )
    }

    return (
      <div>
        <label style={{ fontSize: '15px' }}>{label}</label>
        <input style={{ color: `${css}` }} type='text' readOnly value={"R$ " + formatNumber(value)} />
      </div >
    )
  }
}
