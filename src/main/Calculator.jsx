import { Component } from "react";
import "./Calculator.css";
import Button from "../components/Button";
import Display from "../components/Display";
//cpc
class Calculator extends Component {

  constructor(props){
    super(props)
    this.clearMemory = this.clearMemory.bind(this)
    this.setOperation = this.setOperation.bind(this)
    this.addDigit = this.addDigit.bind(this)
  }
  clearMemory() {

  }

  setOperation (operation) {

  }

  addDigit(n) {
    
  }
  render() {
    // const addDigit = n => this.addDigit(n)
    // const setOperation = op => this.setOperation(op)
    return (
      <div className="calculator">
        <Display value={0}></Display>
        <Button label="AC" click={ this.clearMemory} triple></Button>
        <Button label="/" click={this.operation} operation></Button>
        <Button label="7" click={this.addDigit}></Button>
        <Button label="8" click={this.addDigit}></Button>
        <Button label="9" click={this.addDigit}></Button>
        <Button label="*" click={this.operation} operation></Button>
        <Button label="4" click={this.addDigit}></Button>
        <Button label="5" click={this.addDigit}></Button>
        <Button label="6" click={this.addDigit}></Button>
        <Button label="-" click={this.operation} operation></Button>
        <Button label="1" click={this.addDigit}></Button>
        <Button label="2" click={this.addDigit}></Button>
        <Button label="3" click={this.addDigit}></Button>
        <Button label="+" click={this.operation} operation></Button>
        <Button label="0" click={this.addDigit} double></Button>
        <Button label="." click={this.operation}></Button>
        <Button label="=" click={this.operation} operation></Button>
      </div>
    );
  }
}

export default Calculator;
