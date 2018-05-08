import React from 'react';
import { endpoint } from '../config';

export class EditModalNewValues extends React.Component {
  constructor(props) {
    super(props);
    this.comparison = this.comparison.bind(this);
    this.state = ({
      comparison: -1,
      value: ''
    })
    this.handleComparison = this.handleComparison.bind(this);
    this.handleValue = this.handleValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleComparison(e) {
    this.setState({
      comparison: e.target.value
    })
  }

  handleValue(e) {
    this.setState({
      value: e.target.value
    })
  }

  handleSubmit() {
    var self = this;
    fetch(endpoint + '/scholarships/' + this.props.requirement.id + '/requirements/' + this.props.scholarship.id, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify ({
        operation: self.state.comparison,
        value: self.state.value
      })
    })
    .then(res => {
      res.json()
    })
    .then(() => {
      self.props.updateApp();
    })
    .then(() => {
      self.props.closeParent();
    })
  }

  comparison(val) {
    if (val === 1) return "Greater than or equal to";
    else if (val === 0) return "Exactly equal to";
    else return "Less than or equal to"
  }

  render() {
    return(
        <div>
        <div className='well container-fluid' style={{fontFamily: 'Raleway', fontWeight: 'bold', marginBottom: 10, padding: 5, border: '1px solid black'}}>
          <h2 style={{textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
            color: '#4fc3f7',
            marginTop: 3
            }}
            className='text-center'
            >
            <span style={{position: 'relative'}}>{this.props.scholarship.name}</span>
          </h2>
          <hr style={{borderTop: '3px double #8c8b8b', marginTop: 0, marginBottom: 5}}/>
            <div className='well col-md-4 text-center' style={{marginBottom: 3, fontWeight: 'bold'}}>
              <span style={{textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000', color:'white'}}>Required Value</span>
            </div>
            <div className='well col-md-4 text-center' style={{marginBottom: 3, paddingTop: 15, paddingBottom: 15}}>
              <select onChange={this.handleComparison} style={{height: 28}}>
                <option value='-1'>Less than</option>
                <option value='0'>Equal to</option>
                <option value='1'>Greather than</option>
                <option value='2'>Don't Care!</option>
              </select>
            </div>
            <div className='well col-md-4 text-center' style={{marginBottom: 3, padding: 10}}>
              <input value={this.state.value} onChange={this.handleValue} placeholder='New Value' style={{width: '80%', marginTop: 6, marginBottom: 6}} type='text'/>
            </div>
        </div>

        <hr/>
        <button className='badge pull-right' style={{marginLeft:'5px', backgroundColor: '#D9534F'}} onClick={this.props.closeParent}>
          <span
          style={{
            textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
            marginBottom: 10,
            fontSize: 15
          }}>
            Cancel
          </span>
        </button>

        <button className='badge pull-right' style={{marginLeft:'5px', backgroundColor: '#D9534F'}} onClick={this.handleSubmit}>
          <span
          style={{
            textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
            marginBottom: 10,
            fontSize: 15
          }}>
            Confirm Changes
          </span>
        </button>

        </div>
    )
  }
}
