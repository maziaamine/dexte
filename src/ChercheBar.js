import React, { Component } from 'react';
import './cherche.css'
class ChercheBar extends Component {
  state = {
    motCle: '',
  };

  handleChange = (e) => {
    this.setState({ motCle: e.target.value });
  };

  handleChercher = () => {
    this.props.onChercher(this.state.motCle);
  };

  render() {
    return (
      <div className='com'>
        <input
          type="text"
          placeholder="Entrer le mot clé de recherche"
          value={this.state.motCle}
          onChange={this.handleChange}
        />
        <button onClick={this.handleChercher}>Chercher</button>
      </div>
    );
  }
}

export default ChercheBar;
