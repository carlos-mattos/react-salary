import React, { Component } from 'react';
import ReadOnlyInput from './components/ReadOnlyInput';
import { calculateSalaryFrom } from './components/helpers/salary.js'
import ProgressBar from './components/progressBar/ProgressBar';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      totalSalary: 1045,
      baseINSS: 1045,
      discountINSS: 78.47,
      baseIRPF: 966.62,
      discountIRPF: 0,
      finalSalary: 966.62
    }
  }

  handleTotalSalary = (event) => {
    const newValues = calculateSalaryFrom(event.target.value)
    this.setState({
      totalSalary: newValues.baseINSS,
      baseINSS: newValues.baseINSS,
      discountINSS: newValues.discountINSS,
      baseIRPF: newValues.baseIRPF,
      discountIRPF: newValues.discountIRPF,
      finalSalary: newValues.netSalary
    })

  }


  render() {
    const { totalSalary, baseINSS, discountINSS, baseIRPF, discountIRPF, finalSalary } = this.state;
    const inssPercent = ((discountINSS * 100) / totalSalary).toFixed(1) + "%"
    const irpfPercent = ((discountIRPF * 100) / totalSalary).toFixed(1) + "%"
    const finalSalaryPercent = ((finalSalary * 100) / totalSalary).toFixed(1) + "%"
    return (
      <div className="container">
        <h3 style={{ textAlign: 'center' }}>React Salary</h3>
        <label style={{ fontSize: '15px' }}>Salário Bruto</label>
        <input type="number" value={totalSalary} onChange={this.handleTotalSalary} />
        <div>
          <ReadOnlyInput label="Base INSS" value={baseINSS} />
          <ReadOnlyInput css="#e67e22" label="Disconto INSS" value={discountINSS} percentage={inssPercent} />
          <ReadOnlyInput label="Base IPRF" value={baseIRPF} />
          <ReadOnlyInput css="#c0392b" label="Disconto IPRF" value={discountIRPF} percentage={irpfPercent} />
          <ReadOnlyInput css="#16a085" label="Salário Liquido" value={finalSalary} percentage={finalSalaryPercent} />
        </div>
        <ProgressBar totalSalary={totalSalary}
          inss={discountINSS}
          irpf={discountIRPF}
          finalSalary={finalSalary} />
      </div>
    )
  }
}
