import React from 'react';
import { endpoint } from '../config';
import { EditModal } from './EditModal';

export class RequirementInfo extends React.Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
    this.comparison = this.comparison.bind(this);
  }

  comparison(val) {
    if (val === 1) return "Greater than or equal to";
    else if (val === 0) return "Exactly equal to";
    else if (val == -1) return "Less than or equal to";
    else return "Don't Care!"
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
            color: 'yellow',
            marginTop: 3
            }}
            className='text-center'
            >
            <span style={{position: 'relative', left: 65}}>{this.props.requirement.name}</span>
            <button onClick={this.delete} className='pull-right badge' style={{backgroundColor: 'red'}}><i className="fa fa-trash-o" aria-hidden="true"></i> Delete</button>
            <EditModal scholarship={this.props.scholarship} requirement={this.props.requirement} updateApp={this.props.updateApp}/>
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
            {this.comparison(this.props.requirement.scholarship_requirements.operation)}
            </span>
            {this.props.requirement.scholarship_requirements.value}
            </div>
          </div>

        </div>
    )
  }
}
