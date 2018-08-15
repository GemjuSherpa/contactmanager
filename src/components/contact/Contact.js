import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../Context';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Contact extends Component {
  state = {
    showInfo: false
  };

  //Click events Method
  showOnClicked = e => {
    this.setState({ showInfo: !this.state.showInfo });
  };

  // deleteOnClicked = (id, dispatch)=>{
  //   axios.delete(`http://jsonplaceholder.typicode.com/users/${id}`)
  //     .then(res => dispatch({ type: 'DELETE_CONTACT', payload: id }))
  // }

  //async way

  deleteOnClicked = async (id, dispatch)=>{
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      dispatch({ type: 'DELETE_CONTACT', payload: id })
  }

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{" "}
                <i
                  onClick={this.showOnClicked}
                  className="fas fa-sort-down"
                  style={{ cursor: "pointer" }}
                />
                <i
                  className="fas fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  onClick={this.deleteOnClicked.bind(this, id, dispatch)}
                />
                <Link to={`contact/edit/${id}`} >
                  <i 
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: 'pointer',
                      float: 'right',
                      color: 'black',
                      marginRight: '1rem'
                    }}>

                  </i>
                </Link>
              </h4>

              {showInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">email: {email}</li>
                  <li className="list-group-item">phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

//Prototypes
Contact.protoTypes = {
    contact: PropTypes.object.isRequired
};


export default Contact;
