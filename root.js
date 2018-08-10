import React from 'react';
import ReactDOM from 'react-dom';

const options = [
    'Açaí', 'Apple', 'Akee', 'Apricot', 'Avocado', 'Banana', 'Bilberry', 
    'Blackberry', 'Blackcurrant', 'Black sapote', 'Blueberry', 'Boysenberry',
    'Crab apples', 'Currant', 'Cherry', 'Cloudberry', 'Coconut', 'Cranberry',
    'Cucumber', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 
    'Feijoa', 'Fig', 'Goji berry', 'Gooseberry', 'Grape', 'Raisin', 
    'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba',
    'Jackfruit', 'Jambul', 'Japanese plum', 'Jostaberry', 'Jujube',
    'Juniper berry', 'Kiwano', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime',
    'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon',
    'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry',
    'Nectarine', 'Nance', 'Olive', 'Orange', 'Blood orange', 'Clementine',
    'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear',
    'Persimmon', 'Plantain', 'Plum', 'Prune', 'Pineapple', 'Pineberry',
    'Plumcot', 'Pomegranate', 'Pomelo', 'Purple mangosteen', 'Quince', 
    'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salal berry',
    'Salak', 'Satsuma', 'Soursop', 'Star apple', 'Star fruit', 'Strawberry',
    'Surinam cherry', 'Tamarillo', 'Tamarind', 'Ugli fruit', 'Yuzu',
    'White currant', 'White Sapote'
]

class Typeahead extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.typeahead = this.typeahead.bind(this);
  }
  
  typeahead() {

  }

  render() {
      return (
          <div>
              <input id='typeahead' onInput={this.typeahead}/>
          </div>
     );
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(<Typeahead/>, domContainer);