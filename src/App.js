import React, { Component } from 'react';
import ChercheBar from './ChercheBar';
import ResultatList from './ResultatList';
import './cherche.css'

class Apk extends Component {
  state = {
    motCle: '',
    afficherLegumes: false,
  };

  handleChercher = (motCle) => {
    if (motCle.toLowerCase() === 'légume') {
      this.setState({ afficherLegumes: true });
    }
    this.setState({ motCle });
  };

  render() {
    return (
      <div className='pr'>
        <ChercheBar onChercher={this.handleChercher} />
        {this.state.afficherLegumes && <ResultatList />}
      </div>
    );
  }
}



function App() {
  return (
    <div>
      <Apk />
     
    </div>
  );
}

export default App;
