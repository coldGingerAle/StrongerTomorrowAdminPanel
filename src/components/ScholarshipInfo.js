import React from 'react';
import { endpoint } from '../config';
import { EditModal } from './EditModal';

export class ScholarshipInfo extends React.Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
    this.comparison = this.comparison.bind(this);
  }

  comparison(val) {
    if (val === 1) return "Greater than or equal to";
    else if (val === 0) return "Exactly equal to";
    else if (val == -1) return "Less than or equal to";
    else return "Don't Care!";
  }

  delete() {
    var self = this;
    fetch(endpoint + '/scholarships/' + this.props.scholarship.id + '/requirements/' + this.props.requirement.id, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify ({
        message: 'Association successfully removed.'
      })
    }).then(() => {
      self.props.updateApp();
      })
  }

  render() {
    return(
        <div className='well container-fluid' style={{fontFamily: 'Raleway', fontWeight: 'bold', marginBottom: 10, padding: 5, border: '1px solid black'}}>
          <h2 style={{textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
            color: '#4fc3f7',
            marginTop: 3
            }}
            className='text-center'
            >
            <span style={{position: 'relative'}}>{this.props.scholarship.name}</span>
              <EditModal scholarship={this.props.scholarship} requirement={this.props.requirement} updateApp={this.props.updateApp}/>
          </h2>
          <hr style={{borderTop: '3px double #8c8b8b', marginTop: 0, marginBottom: 5}}/>
            <div className='well col-md-4 text-center' style={{marginBottom: 3, fontWeight: 'bold'}}>
              <span style={{textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000', color:'white'}}>Required Value</span>
            </div>
            <div className='well col-md-4 text-center' style={{marginBottom: 3}}>
              <span className='badge' style={{backgroundColor: 'blue', marginRight: 10}}>
            {this.comparison(this.props.scholarship.scholarship_requirements.operation)}
            </span>
            </div>
            <div className='well col-md-4 text-center' style={{marginBottom: 3, padding: 10}}>
              <span style={{color: '#20AA2A', textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000', fontSize: 27}}>
                {this.props.scholarship.scholarship_requirements.value}
              </span>
            </div>
        </div>
    )
  }
}
