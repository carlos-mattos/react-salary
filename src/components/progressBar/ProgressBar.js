import React, { Component } from 'react'

export default class ProgressBar extends Component {
  render() {
    const { totalSalary, inss, irpf, finalSalary } = this.props
    const inssPercent = (inss * 100) / totalSalary
    const irpfPercent = (irpf * 100) / totalSalary
    const finalSalaryPercent = (finalSalary * 100) / totalSalary
    return (
      <div style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "40px",
        marginBottom: "40px",
        width: "100%",
        height: "30px",
        background: `linear-gradient(to right, #e67e22 0, #e67e22 ${inssPercent}%, #c0392b ${inssPercent}%, #c0392b ${inssPercent + irpfPercent}%, #16a085 ${inssPercent + irpfPercent}%, #16a085 100%)`
      }
      }></div >
    )
  }
}
