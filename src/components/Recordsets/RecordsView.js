import React from 'react';
import { Record } from './Record';

export class RecordsView extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var output;
    if (this.props.currentRecordset.records.length == 0) {
      output =
      <div style={{
        textShadow: '-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black',
        color: 'white',
        fontSize: 40,
        marginTop: 20
      }}>
        No Records Found
      </div>
    } else {
      output = <div>{this.props.currentRecordset.records.map(record => {
        return (
          <Record
            requirements={this.props.requirements}
            scholarships={this.props.scholarships}
            record={record} />
        )
      })}</div>
    }
    return(
      <div>
        {output}
      </div>
    )
  }
}
