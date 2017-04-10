import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);

    this.clicked = this.clicked.bind(this);
    this.handleAChange = this.handleAChange.bind(this);
    this.handleBChange = this.handleBChange.bind(this);
    this.handleCChange = this.handleCChange.bind(this);

    this.state = {

      a: '',
      b: '',
      c: '',
      x1: 0,
      x2: 0


    };
  }



  clicked(event){

    function rez(a, b, c) {

      a = parseFloat(a);
      b = parseFloat(b);
      c = parseFloat(c);

      var D = (b * b) - (4 * a * c),
          x1 = 0,
          x2 = 0;

      if (D > 0) {

        x1 = (-b + Math.sqrt(D)) / (2 * a);
        x2 = (-b - Math.sqrt(D)) / (2 * a);

        x1 = x1.toFixed(4);
        x2 = x2.toFixed(4);

      }
      else if (D === 0) {

        x1 = x2 = (-b / (2 * a));    

        x1.toFixed(4);
        x2.toFixed(4);

      } 
      else {

        x1 = x2 = 'немає дійсних розвязків';

      }


      console.log(x1);  
      console.log(x2); 

    
      return [x1, x2];

    } 

    var a =rez(this.state.a, this.state.b, this.state.c);

    this.setState({x1: a[0]});
    this.setState({x2: a[1]});
       
  }

    handleAChange(event){

      this.setState({a: event.target.value});
    }
    handleBChange(event){

      this.setState({b: event.target.value});
    }
    handleCChange(event){

      this.setState({c: event.target.value});
    }

  render() {
    return (
      <div>
        <form>
          <table>
          <tbody>
            <tr>
              <td><input type="text" value={this.state.a} onChange={this.handleAChange} /></td>
              <td> Х<sup>2</sup> + </td>
              <td><input type="text" value={this.state.b} onChange={this.handleBChange}/></td>
              <td>X +</td>
              <td><input type="text" value={this.state.c} onChange={this.handleCChange}/></td>
              <td> =0 </td>
              <td><button type="button" onClick={this.clicked}>Розрахувати</button></td>
            </tr>
            </tbody>
          </table>
        </form>
        <div>Перший корінь: {this.state.x1}</div>
        <div>Другий корінь: {this.state.x2}</div>
      </div>
    );
  }
}

export default App;
