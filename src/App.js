import './App.css';
import React from 'react';

class App extends React.Component {
  state = {
    value: null,
    array: [
      '89',
      '30',
      '25',
      '32',
      '72',
      '70',
      '51',
      '42',
      '25',
      '24',
      '53',
      '55',
      '78',
      '50',
      '13',
      '40',
      '48',
      '32',
      '26',
      '2',
      '14',
      '33',
      '45',
      '72',
      '56',
      '44',
      '21',
      '88',
      '27',
      '68',
      '15',
      '62',
      '93',
      '98',
      '73',
      '28',
      '16',
      '46',
      '87',
      '28',
      '65',
      '38',
      '67',
      '16',
      '85',
      '63',
      '23',
      '69',
      '64',
      '91',
      '9',
      '70',
      '81',
      '27',
      '97',
      '82',
      '6',
      '88',
      '3',
      '7',
      '46',
      '13',
      '11',
      '64',
      '76',
      '31',
      '26',
      '38',
      '28',
      '13',
      '17',
      '69',
      '90',
      '1',
      '6',
      '7',
      '64',
      '43',
      '9',
      '73',
      '80',
      '98',
      '46',
      '27',
      '22',
      '87',
      '49',
      '83',
      '6',
      '39',
      '42',
      '51',
      '54',
      '84',
      '34',
      '53',
      '78',
      '40',
      '14',
      '5',
    ],
    tries: null,
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSearch = (e) => {
    e.preventDefault();

    this.setState({ result: false });
    let cleanStr = this.state.value.split(' ').join('');
    cleanStr.trim();
    let strArray = cleanStr.split(',');

    let result = this.linearSearch(this.state.array, strArray);
    this.setState({ result });
    this.setState({ value: null });
  };

  linearSearch = (array, value) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i] == value) {
        let tries = i;
        this.setState({ tries });
        return true;
      }
    }
    return false;
  };

  binarySearch = (array, value, start = 0, end = array.length) => {
    if (start > end) {
      console.log('Item not found');
      return -1;
    }

    let index = Math.floor((start + end) / 2);
    let item = array[index];

    if (item === value) {
      console.log('Item found');
      return item;
    } else if (item > value) {
      return this.binarySearch(array, value, start, index - 1);
    } else if (item < value) {
      return this.binarySearch(array, value, index + 1, end);
    }
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={(e) => this.handleSearch(e)}>
          <label htmlFor="text">Search:</label>
          <input type="text" id="text" onChange={this.handleChange}></input>
          <button type="submit">Search</button>
        </form>
        {this.state.result === true && (
          <p>{`We found your item in ${this.state.tries} move${
            this.state.tries > 1 ? 's' : ''
          }!`}</p>
        )}
        {this.state.result === false && <p>Item was not found</p>}
      </div>
    );
  }
}

export default App;
