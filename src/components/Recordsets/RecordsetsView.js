import React from 'react';
import { RecordsetDisplay } from './RecordsetDisplay';
import { RecordsetInfo } from './RecordsetInfo';
import { RecordsView } from './RecordsView';
import { InfoView } from './InfoView';
import { endpoint } from '../../config';
import { EligibleScholarshipsView } from './EligibleScholarshipsView';


export class RecordsetsView extends React.Component {
  constructor(props) {
    super(props);
    this.changeCurrentRecordset = this.changeCurrentRecordset.bind(this);
    this.state = ({
      recordsets: [],
      currentRecordset: {
        records: []
      },
      requirements: [],
      scholarships: [],
      eligible_scholarships: [],
      test: []
    })
  }

  changeCurrentRecordset(recordset) {
    this.setState({
      currentRecordset: recordset
    })
  }

  componentDidMount() {
    var self = this;
    var tempArray= []
    fetch(endpoint + '/recordsets/')
      .then(res => res.json())
      .then(recordsets => this.setState({
        recordsets: recordsets.data.recordsets,
        currentRecordset: recordsets.data.recordsets[0]
      }))
      .catch(error => console.log(error.message))
    fetch(endpoint + '/scholarships/')
      .then(res => res.json())
      .then(scholarships => this.setState({
        scholarships: scholarships.data.scholarships
      }))
      .catch(error => console.log(error.message))
    fetch(endpoint + '/requirements/')
      .then(res => res.json())
      .then(requirements => this.setState({
        requirements: requirements.data.requirements
      }))
      .catch(error => console.log(error.message))
  }

  render() {
    return(
      <div className='container-fluid'>
        <div className='col-md-4 col-md-offset-1'>
          {this.state.recordsets.map(recordset => {
            return <RecordsetInfo
                    changeCurrentRecordset={this.changeCurrentRecordset}
                    recordset={recordset}
                    currentRecordset={this.state.currentRecordset}/>
          })}
        </div>
        <InfoView
          requirements={this.state.requirements}
          scholarships={this.state.scholarships}
          currentRecordset={this.state.currentRecordset}/>
      </div>
    )
  }
}
