// even though not making call to React, we still need the library
// <input/> is jsx and needs to be translated into vanilla js, aka React.createElement...
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//***********   (1) SearchBar as 'functional component'   *************//
// component is defined by a function expression

// const SearchBar = () => {
//   return  (
//     <input/>
//   )
// }

//***********   (2) SearchBar as 'class component'   *************//
// used whenever compoenent wants internal recording keeping
//es6 class is an actual javascript object with properties & methods

class SearchBar extends Component {
  // use constructor to initalize state in a class-based component
  // constructor does not exist in a function-based component
  constructor(props) {
    super(props);
    // only in the constructor would you set state like so beloooow
    this.state = { term: '' };
  }

  // every class component must have a render method
  // jsx must be returned in the render method
  render() {
    // when referencing javascript in JSX, must contain in curly braces
    // return <input onChange={this.onInputChange}/>

    // arrow function example
    return (
      <div>
        <input
        // setting value with state makes input into a controlled component, or form element
        // so, value would only change if the state were to change
        value = {this.state.term}
        onChange = {event => this.onInputChange({ term: event.target.value})}/>
      </div>
    );
  }

  onInputChange(term) {
    this.setState(term);
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
