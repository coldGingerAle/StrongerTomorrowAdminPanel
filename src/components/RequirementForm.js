import React from 'react';
import { DropDown } from './DropDown';
import { endpoint } from '../config';

export class RequirementForm extends React.Component {
  constructor(props) {
    super(props);
    this.setRequirement = this.setRequirement.bind(this);
    this.handleOperation = this.handleOperation.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = ({
      name: 'Choose a Requirement',
      Operation: -1,
      input: '',
      requirementList: [],
      currentRequirement: {description: 'Requirement Description Here',
      type: 'Requirement Type Here', id: -999}});
  }

  setRequirement(data) {
    this.setState({
      currentRequirement: data.currentRequirement,
      requirementList: data.requirementList
    })
  }

  componentDidMount() {
    var self = this;
    this.setState({
      name: self.props.unaddedRequirements[0]
    })
    fetch(endpoint + '/requirements/')
      .then(res => res.json())
      .then(requirements => {
        let currentReq = requirements.data.requirements.find((x) => x.name == this.state.name)
        this.setState({
          currentRequirement: currentReq,
          requirementList: requirements.data.requirements})
      })
  }

  handleChange(e) {
    var self = this;
    this.setState({
      name: e.target.value
    })
    this.state.requirementList.forEach((requirement) => {
      if (requirement.name === e.target.value) {
        self.setState({currentRequirement: requirement})
      }
    })
    console.log(this.state.requirementList)
    console.log(this.props.unaddedRequirements)
  }

  handleOperation(e) {
    this.setState({
      Operation: e.target.value
    })
  }

  handleInput(e) {
    this.setState({
      input: e.target.value
    })
  }

  handleSubmit() {
    var self = this;
    fetch(endpoint + '/scholarships/' + self.props.scholarship.id + '/requirements/' + this.state.currentRequirement.id, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify ({
        operation: self.state.Operation,
        value: self.state.input
      })
    })
    .then(res => {
      res.json({
        message: 'Successfull post.'
      })
      .then(() => {
        self.props.updateScholarshipsChild();
      })
    })
    .then(() => {
        self.props.closeParent();
    })
  }

  render() {
    return(
        <div className='well container-fluid' style={{fontFamily: 'Raleway', fontWeight: 'bold', marginBottom: 10, border: '1px solid black'}}>
          <div className='container-fluid' style={{marginLeft: 0}}>
            <div className='col-md-3'>
              <DropDown
                updateScholarshipsChild={this.props.updateScholarshipsChild}
                setRequirement={this.setRequirement}
                setName={this.props.setName}
                style={{marginLeft: 0}}
                handleChange={this.handleChange}
                scholarship={this.props.scholarship}/>
            </div>
            <div className='col-md-6'>
            <h2 style={{textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
              color: 'yellow',
              marginTop: 3
              }}
              className='text-center'
              >
              <span>{this.state.currentRequirement.name}</span>
            </h2>
            </div>
          </div>

          <hr style={{borderTop: '3px double #8c8b8b', marginTop: 0}}/>

          <div className='well col-md-6' style={{marginBottom: 3}}>
            <div>
              <span className='badge' style={{backgroundColor: 'orange', marginRight: 10}}>
                Description
              </span>
              <span>{this.state.currentRequirement.description}</span>
            </div>
            <hr style={{marginTop: 5, marginBottom: 7, borderTop: '1px solid #8c8b8b'}}/>
            <div>
              <span className='badge' style={{backgroundColor: '#0091ea', marginRight: 10}}>
                Data Type
              </span>
                {this.state.currentRequirement.type}
            </div>
          </div>

          <div className='well col-md-6' style={{marginBottom: 3}}>
            <div className='text-center'>
              <span style={{fontWeight: 'bold'}}>Required Value</span>
            </div>
            <hr style={{marginTop: 5, marginBottom: 5, borderTop: '1px solid #8c8b8b'}}/>
            <div className='text-center'>

            <div className='col-md-6'>
            <select
              onChange={this.handleOperation}
              className="form-control" style={{width: 50}} style={{marginLeft: 0, height: '2em', marginTop: 0, marginBottom: -100}}>
              <option value='-1'>
                    Less Than
              </option>
              <option value='0'>
                    Equal To
              </option>
              <option value='1'>
                    Greater Than
              </option>
              <option value='2'>
                    Don't Care!
              </option>
            </select>
            </div>

            <div className='col-md-4'>
            <input placeholder='Enter Value' value={this.state.input} type='text'
              onChange={this.handleInput}
              style={{background: 'transparent', border: 'none'}}/>
            </div>

            </div>
          </div>

          <div className='row' style={{marginTop: 5, marginBottom: 0}}>
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
            <button className='badge pull-right' style={{backgroundColor: '#5CB85C'}} onClick={this.handleSubmit}>
            <span
            style={{
              textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
              marginBottom: 10,
              fontSize: 15
            }}>
                <i className="fa fa-pencil" aria-hidden="true"></i> Add Requirement
            </span>
            </button>
          </div>
        </div>
    )
  }
}
