import React from 'react';
import { EligibleScholarshipsView } from './EligibleScholarshipsView';
import { RecordsView } from './RecordsView';
import { endpoint } from '../../config';

export class InfoView extends React.Component {
  constructor(props) {
    super(props);
    this.state=({
      currentRecordset: this.props.currentRecordset
    })
  }
  render() {
    return(
      <div>
        <div className='col-md-3'>
          <RecordsView
            requirements={this.props.requirements}
            scholarships={this.props.scholarships}
            currentRecordset={this.props.currentRecordset}/>
        </div>
        <div className='col-md-3'>
          <EligibleScholarshipsView
            requirements={this.props.requirements}
            scholarships={this.props.scholarships}
            currentRecordset={this.props.currentRecordset}/>
        </div>
      </div>
    )
  }
}
