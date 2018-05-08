import React from 'react';
import { endpoint } from '../config';
import { EditModal } from './EditModal';

export class EditModalCurrentValues extends React.Component {
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
    var operation;
    var value;
    if (this.props.requirement.scholarship_requirements == undefined) {
      operation = this.props.scholarship.scholarship_requirements.operation;
      value = this.props.scholarship.scholarship_requirements.value;
    } else {
      operation = this.props.requirement.scholarship_requirements.operation;
      value = this.props.requirement.scholarship_requirements.value;
    }
    return(
        <div className='well container-fluid' style={{fontFamily: 'Raleway', fontWeight: 'bold', marginBottom: 25, padding: 5, border: '1px solid black'}}>
          <h2 style={{textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
            color: 'yellow',
            marginTop: 3
            }}
            className='text-center'
            >
            <span style={{position: 'relative'}}>{this.props.requirement.name}</span>
          </h2>
          <hr style={{borderTop: '3px double #8c8b8b', marginTop: 0, marginBottom: 5}}/>
          <div className='well col-md-6' style={{marginBottom: 3, padding: 5}}>
            <div>
              <span className='badge' style={{backgroundColor: 'orange', marginRight: 10}}>
                Description
              </span>
              <span>{this.props.requirement.description}</span>
            </div>
            <hr style={{marginTop: 5, marginBottom: 5, borderTop: '1px solid #8c8b8b'}}/>
            <div>
              <span className='badge' style={{backgroundColor: '#0091ea', marginRight: 10}}>
                Data Type
              </span>
                {this.props.requirement.type}
            </div>
          </div>

          <div className='well col-md-6' style={{marginBottom: 3, padding: 5}}>
            <div className='text-center'>
              <span style={{fontWeight: 'bold'}}>Required Value</span>
            </div>
            <hr style={{marginTop: 5, marginBottom: 5, borderTop: '1px solid #8c8b8b'}}/>
            <div className='text-center'>
            <span className='badge' style={{backgroundColor: 'blue', marginRight: 10}}>
            {this.comparison(operation)}
            </span>
            {value}
            </div>
          </div>

        </div>
    )
  }
}
