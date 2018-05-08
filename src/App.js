import React, { Component } from 'react';
import { Header } from './components/Header';
import { Body } from './components/Body';
import logo from './logo.svg';
import './App.css';
import { endpoint } from './config';
import { APIBody } from './components/Api/APIBody';
import { RecordsetsView } from './components/Recordsets/RecordsetsView';


class App extends Component {
  constructor(props) {
    super(props)
    this.update = this.update.bind(this);
    this.setView = this.setView.bind(this);
    this.state = {
              scholarships: [],
              requirements: [],
              viewShown: 'Scholarship'
            };
  }

  setView(view) {
    this.setState({viewShown: view})
  }

  componentDidMount() {
    fetch(endpoint + '/scholarships/')
      .then(res => res.json())
      .then(scholarships => this.setState({scholarships: scholarships.data.scholarships}))
      .catch(error => console.log(error.message))
    fetch(endpoint + '/requirements/')
      .then(res => res.json())
      .then(requirements => this.setState({requirements: requirements.data.requirements}))
      .catch(error => console.log(error.message))
  }

  update() {
    fetch(endpoint + '/scholarships/')
      .then(res => res.json())
      .then(scholarships => this.setState({scholarships: scholarships.data.scholarships}))
    fetch(endpoint + '/requirements/')
      .then(res => res.json())
      .then(requirements => this.setState({requirements: requirements.data.requirements}))
  }

  render() {
    const scholarshipGui = <Body updateApp={this.update}
      scholarships={this.state.scholarships}
      requirements={this.state.requirements}/>
    var view;
    switch(this.state.viewShown) {
      case 'Scholarship':
        view = scholarshipGui;
        break;
      case 'API':
        view = <APIBody />
        break;
      case 'Recordsets':
        view = <RecordsetsView />
        break;
    }
    return (
      <div className="App"
      style={{
        backgroundImage: 'url(cityAtNight.jpg)',
        minHeight: 'calc(100vh)'
      }}>
        <Header setView={this.setView} viewShown={this.state.viewShown}/>
        {view}
      </div>
    );
  }
}

export default App;
