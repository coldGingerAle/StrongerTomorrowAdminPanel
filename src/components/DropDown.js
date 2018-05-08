import React from 'react';
import { endpoint } from '../config';

export class DropDown extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({
      requirements: [],
      requirementList: []})
  }

  componentDidMount() {
    var self = this;
    fetch(endpoint + '/scholarships/' + this.props.scholarship.id, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(scholarship => self.setState({requirements: scholarship.data.scholarship.requirements}))
    .then(() =>
      fetch(endpoint + '/requirements/')
        .then(res => res.json())
        .then(requirements => {
          let a = new Set(self.state.requirements.map(function(x) {
            return x.name
          }));
          let b = new Set(requirements.data.requirements.map(function(x) {
            return x.name
          }));
          let c = new Set([...b].filter(x => !a.has(x)));
          this.setState({requirementList: Array.from(c)});
          let firstReq = requirements.data.requirements.find((x) => x.name == this.state.requirementList[0])
          var newreqList = [];
          requirements.data.requirements.forEach((x) => {
            if (this.state.requirementList.indexOf(x.name) != -1) {
              newreqList.push(x);
            }
          })
          this.props.setRequirement({
            currentRequirement: firstReq,
            requirementList: newreqList
          })
        })
      )
  }

  render() {
    let notEmpty = this.state.requirementList.map(requirement => {
      return <option>
            {requirement}
        </option>
    })
    let empty = <option>Cannot Add More</option>;
    return(
      <select onClick={this.props.handleChange} onChange={this.props.handleChange} className="form-control" style={{width: 100}} style={{marginLeft: 0}}>
        {this.state.requirementList.length ? notEmpty : empty}
      </select>
    )
  }
}
