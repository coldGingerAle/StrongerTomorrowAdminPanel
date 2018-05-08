import React from 'react';
import { NavButton } from './NavButton';
import { ScholarshipView } from './Scholarships/ScholarshipView';
import { RequirementView } from './Requirements/RequirementView';
import { RecordsetView } from './Recordsets/RecordsetView';
import { RecordView } from './Records/RecordView';

export class APIBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'Scholarships'
    }
    this.changeView = this.changeView.bind(this);
  }

  changeView(view) {
    this.setState({currentView: view})
  }

  render() {
    var currentView;
    switch(this.state.currentView) {
      case 'Scholarships':
        currentView = <ScholarshipView />;
        break;
      case 'Requirements':
        currentView = <RequirementView />;
        break;
      case 'Recordsets':
        currentView = <RecordsetView />;
        break;
      case 'Records':
        currentView = <RecordView />;
        break;
      }
    return(
      <div className='container-fluid'>
        <div className='row' style={{backgroundColor: 'blue', marginTop: -30, paddingTop: 25}}>
          <NavButton title='Scholarships' currentView={this.state.currentView} changeView={this.changeView}/>
          <NavButton title='Requirements' currentView={this.state.currentView} changeView={this.changeView}/>
          <NavButton title='Recordsets' currentView={this.state.currentView} changeView={this.changeView}/>
          <NavButton title='Records' currentView={this.state.currentView} changeView={this.changeView}/>
        </div>
        <div className='row'>
          {currentView}
        </div>
      </div>
    )
  }
}
