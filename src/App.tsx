import React, { Component } from 'react';
import './App.css';
import Input from './components/controls/input/index'
class App extends Component<any, any> {
  constructor(props:any) {
    super(props)
    this.handlerChange = this.handlerChange.bind(this)
  }
  handlerChange(e:React.ChangeEvent<HTMLInputElement>) {
    console.log(e)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Input type="passWord" handlerChange = {this.handlerChange} ></Input>
        </header>
      </div>
    );
  }
}

export default App;
