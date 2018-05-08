import React from 'react';
import { endpoint } from '../../config';
import { EligibleScholarship } from './EligibleScholarship';

export class EligibleScholarshipsView extends React.Component {
  constructor(props) {
    super(props);
    var self = this;
    this.state=({
      eligible_scholarships: [],
      currentRecordset: self.props.currentRecordset
    })
  }
  componentWillReceiveProps(nextProps) {
    fetch(endpoint + '/recordsets/' + nextProps.currentRecordset.id + '/scholarships')
      .then(res => res.json())
      .then(data => this.setState({
        eligible_scholarships: data.data.eligible_scholarships
      }))
      .catch(error => console.log(error.message))
  }
  render() {
    var output;
    if (this.state.eligible_scholarships.length == 0) {
      output =
      <div style={{
        textShadow: '-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black',
        color: 'white',
        fontSize: 40,
        marginTop: 20
      }}>
        No Eligible Scholarships
      </div>
    } else {
      output = <div>{this.state.eligible_scholarships.map(scholarship => {
        return (
          <EligibleScholarship
            scholarship={scholarship}
          />
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
