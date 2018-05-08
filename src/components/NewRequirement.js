import React from 'react';
import { Button, Modal} from 'react-bootstrap';
import { RequirementForm } from './RequirementForm';
import { DropDown } from './DropDown';
import { endpoint } from '../config';

export class NewRequirement extends React.Component {

  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleType = this.handleType.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = ({
    showModal: false,
    requirements: [],
    requirementName: '',
    requirementType: 'Integer',
    requirementDescription: ''
  })

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  handleInput(e) {
    this.setState({requirementName: e.target.value})
  }

  handleType(e) {
    this.setState({requirementType: e.target.value})
  }

  handleDescription(e) {
    this.setState({requirementDescription: e.target.value})
  }

  handleSubmit() {
    var self = this;
    fetch(endpoint + '/requirements/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify ({
        name: self.state.requirementName,
        type: self.state.requirementType,
        description: self.state.requirementDescription
      })
    }).then(() => {
        self.setState({requirementName: ''})
        self.props.updateApp();
        self.close();
      })
  }

  render() {
    return (

        <span>
        <button onClick={this.open} style={{fontFamily: 'Raleway'}}
          className="badge"
          style={{
            textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
            marginBottom: 10,
            outline: 'none'
          }}>
          <strong style={{fontSize: 15}}><i className="fa fa-plus" aria-hidden="true"></i> New Requirement</strong>
        </button>

        <Modal show={this.state.showModal} bsSize='medium' onHide={this.close} style={{maxHeight: 'calc(100vh)', overflowY: 'auto'}}>
          <Modal.Header className='text-center' closeButton style={{backgroundColor: '#1B5E20', marginBottom: -18}}>
            <Modal.Title className='text-center'><h1 style={{color: 'white', fontFamily: 'Raleway', fontWeight: 'bold', textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'}}>New Requirement</h1></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className='container-fluid form-group' style={{marginTop: 20}}>
            <div className='row' style={{width: '90%', margin: '0 auto'}}>

              <form className='col-md-12 text-center well' style={{backgroundColor: 'white', border: '1px solid black', paddingTop: 0}}>
                <div className="row">
                  <label for="usr">
                    <h3 style={{textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000', color: 'yellow'}}                    >
                      Requirement Name
                    </h3>
                  </label>
                  <hr style={{borderTop: '3px double #8c8b8b', marginTop: 0, marginBottom: 18}}/>
                </div>
                <div className='col-md-8 col-md-offset-2'>
                  <input type="text" onChange={this.handleInput}
                    required
                    style={{fontFamily: 'Raleway, sans-serif'}}
                    className="form-control"
                    id="usr"
                    value={this.state.requirementName}
                    placeholder='Requirement Name'/>
                </div>
              </form>

              <form className='col-md-12 text-center well' style={{backgroundColor: 'white', border: '1px solid black', paddingTop: 0}}>
                <div className="row">
                  <label for="usr">
                    <h3 style={{textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000', color: '#0091EA'}}                    >
                      Data Type
                    </h3>
                  </label>
                  <hr style={{borderTop: '3px double #8c8b8b', marginTop: 0, marginBottom: 18}}/>
                </div>
                <div className='col-md-8 col-md-offset-2'>
                  <select onClick={this.handleType}
                    onChange={this.handleType}
                    style={{fontFamily: 'Raleway, sans-serif'}}
                  value={this.state.requirementType}>

                    <option value='Integer'>Integer</option>
                    <option value='Text'>Text</option>
                    <option value='Boolean'>Boolean</option>
                  </select>
                </div>
              </form>

              <form className='col-md-12 text-center well' style={{backgroundColor: 'white', border: '1px solid black', paddingTop: 0}}>
                <div className="row">
                  <label for="description">
                    <h3 style={{textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000', color: '#FFA500'}}                    >
                      Requirement Description
                    </h3>
                  </label>
                  <hr style={{borderTop: '3px double #8c8b8b', marginTop: 0, marginBottom: 18}}/>
                </div>
                <div className='col-md-8 col-md-offset-2'>
                  <textarea
                    required
                    style={{fontFamily: 'Raleway, sans-serif'}}
                    onChange={this.handleDescription}
                    placeholder='Requirement Description'
                    value={this.state.requirementDescription}
                    className="form-control" rows="5">
                  </textarea>
                </div>
              </form>

            </div>
              <div className='row' style={{marginTop: 5, marginTop: -17}}>
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
                <button className='badge pull-right' style={{backgroundColor: '#5CB85C'}} onClick={this.handleSubmit}>
                <span
                  style={{
                    textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
                    marginBottom: 10,
                    fontSize: 15
                  }}>
                  <i className="fa fa-pencil" aria-hidden="true"></i> Create Requirement
                </span>
                </button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
        </span>
    );
  }
}
