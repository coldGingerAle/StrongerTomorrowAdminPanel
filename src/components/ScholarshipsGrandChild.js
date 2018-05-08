import React from 'react';
import { Button, Modal} from 'react-bootstrap';
import { RequirementForm } from './RequirementForm';
import { DropDown } from './DropDown';

export class ScholarshipsGrandChild extends React.Component {

  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.setName = this.setName.bind(this);
    this.state = ({
      showModal: false,
      scholarship: this.props.scholarship
    })
  }

  close() {
    this.props.updateApp()
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  setName(name) {
    this.setState({scholarshipName: name});
  }

  handleInput(e) {
    var curReq = this.props.requirementList.find((requirement) => {
      return requirement.name == e.target.value
    });
    this.setState({scholarshipName: e.target.value});
  }

  render() {
    return (
        <span>

        <button onClick={this.open} style={{fontFamily: 'Raleway'}}
          className="badge"
          style={{
            textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
            marginBottom: 10,
            backgroundColor:'#5cb85c',
          }}>
          <strong style={{fontSize: 15}}><i className="fa fa-plus" aria-hidden="true"></i> Add Requirement</strong>
        </button>

        <Modal show={this.state.showModal} bsSize='large' onHide={this.close} style={{maxHeight: 'calc(100vh)', overflowY: 'auto'}}>
          <Modal.Header className='text-center' closeButton style={{backgroundColor: '#145ACC', marginBottom: -18}}>
            <Modal.Title className='text-center'>
              <h1 style={{color: 'white', fontFamily: 'Raleway', fontWeight: 'bold', textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'}}>
                {this.props.scholarship.name}
              </h1>
            </Modal.Title>
            <h3 style={{textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000', color: '#EC971F'}}
              className='text-center'
              >
              Adding Requirement
            </h3>
          </Modal.Header>
          <Modal.Body>
            <div className='container-fluid form-group' style={{marginTop: 20}}>
            <RequirementForm
              unaddedRequirements={this.props.unaddedRequirements}
              setName={this.setName}
              scholarship={this.state.scholarship}
              updateScholarshipsChild={this.props.updateScholarshipsChild}
              closeParent={this.close}/>
            </div>
          </Modal.Body>
        </Modal>
        </span>

    );
  }
}
