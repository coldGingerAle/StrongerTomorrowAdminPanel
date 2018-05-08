import React from 'react';
import { Modal} from 'react-bootstrap';
import { Requirements } from './Requirements';
import { RequirementInfo } from './RequirementInfo';
import { NewScholarship } from './NewScholarship';
import { ScholarshipsGrandChild } from './ScholarshipsGrandChild';
import { DeleteButton } from './buttons/DeleteButton';
import { CannotAddMoreRequirements } from './CannotAddMoreRequirements';
import { endpoint } from '../config';

export class ScholarshipsChild extends React.Component {

  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
    this.state = ({
      showModal: false,
      scholarship: this.props.scholarship,
      unaddedRequirements: []
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      scholarship: nextProps.scholarship
    })
    this.update()
  }

  setUnaddedRequirements(x) {
    this.setState({unaddedRequirements: x})
  }

  update() {
    var self = this
    fetch(endpoint + '/scholarships/' + this.props.scholarship.id)
    .then(res => res.json())
    .then(scholarshipData => self.setState({scholarship: scholarshipData.data.scholarship, requirements: scholarshipData.data.scholarship.requirements}))

    // fetch(endpoint + '/scholarships/' + this.props.scholarship.id, {
    //   method: 'GET',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   }
    // })
    // .then(res => res.json())
    // .then(scholarship => self.setState({requirements: scholarship.requirements}))

    fetch(endpoint + '/requirements/')
      .then(res => res.json())
      .then(requirements => {
        let a = new Set(self.props.scholarship.requirements.map(function(x) {
          return x.name
        }));
        let b = new Set(requirements.data.requirements.map(function(x) {
          return x.name
        }));
        let c = new Set([...b].filter(x => !a.has(x)));
        this.setState({unaddedRequirements: Array.from(c)});
      })
  }

  componentDidMount() {
    var self = this
    fetch(endpoint + '/scholarships/' + this.props.scholarship.id, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(scholarship => self.setState({requirements: scholarship.requirements}))

    fetch(endpoint + '/requirements/')
      .then(res => res.json())
      .then(requirements => {
        let a = new Set(self.props.scholarship.requirements.map(function(x) {
          return x.name
        }));
        let b = new Set(requirements.data.requirements.map(function(x) {
          return x.name
        }));
        let c = new Set([...b].filter(x => !a.has(x)));
        this.setState({unaddedRequirements: Array.from(c)});
      })
  }

  delete() {
    var self = this;
    fetch(endpoint + '/scholarships/' + this.props.scholarship.id, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify ({
        message: 'Scholarship successfully deleted.'
      })
    }).then(() => {
      self.props.updateScholarships();
      self.props.updateApp();
      self.close();
      })
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    let nextChild = null;
    if (this.state.unaddedRequirements.length == 0) {
      nextChild = <CannotAddMoreRequirements scholarship={this.state.scholarship}/>
    } else {
      nextChild = <ScholarshipsGrandChild
                    unaddedRequirements={this.state.unaddedRequirements}
                    scholarship={this.state.scholarship}
                    updateScholarshipsChild={this.update}
                    updateApp={this.props.updateApp}
                  />
    }
    return (
        <span>
        <button style={{fontFamily: 'Raleway'}}
          onClick={this.open}
          className="badge btn-block"
          style={{
            textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
            backgroundColor: '#428bca',
            fontSize: 18,
            outline: 'none'
          }}>
          <strong>{this.state.scholarship.id} - {this.state.scholarship.name} </strong>
        </button>

        <Modal show={this.state.showModal} bsSize='large' onHide={this.close} style={{maxHeight: 'calc(100vh)', overflowY: 'auto'}}>
          <Modal.Header className='text-center' closeButton style={{backgroundColor: '#145ACC', marginBottom: -18}}>
            <Modal.Title className='text-center'>
              <h1 style={{color: 'white', fontFamily: 'Raleway', fontWeight: 'bold', textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'}}>
                {this.state.scholarship.name}
              </h1>
            </Modal.Title>
            <h3 style={{textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000', color: '#EC971F'}}
              className='text-center'
              >
              Scholarship Requirements
            </h3>
            { nextChild }
            <DeleteButton text='Scholarship' onClick={this.delete}/>
          </Modal.Header>
          <Modal.Body>
            <div className='container-fluid' style={{marginTop: 20}}>
            <div className='row'>
              <div className='col-md-12'>
                {this.state.scholarship.requirements.map(requirement => {
                  return <RequirementInfo updateApp={this.props.updateApp} scholarship={this.props.scholarship} requirement={requirement}/>
                })}
                <hr/>
                <button className='badge pull-right' style={{marginLeft:'5px', backgroundColor: '#D9534F'}} onClick={this.close}>
                  <span
                  style={{
                    textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
                    marginBottom: 10,
                    fontSize: 15
                  }}>
                    Cancel
                  </span>
                </button>
              </div>
            </div>
            </div>
          </Modal.Body>
        </Modal>
        </span>
    );
  }
}
