import React, { Component } from 'react';

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: 0,
            firstName: '',
            lastName: '',
            age: 0,
            nationality: ''
        }
        this.createStudent = this.createStudent.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    createStudent(e) {
        e.preventDefault();

        const form = {
            id: this.state.id,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.state.age,
            nationality: this.state.nationality
        }

        fetch('http://localhost:9000/api/students', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(form)
        }).then(response => {
            window.location.reload();
        });

    }

    onChange(e) {
        if (e.target.id === 'id') {
            this.setState({ id: e.target.value });
        } else if (e.target.id === 'firstName') {
            this.setState({ firstName: e.target.value });
        } else if (e.target.id === 'lastName') {
            this.setState({ lastName: e.target.value });
        } else if (e.target.id === 'age') {
            this.setState({ age: e.target.value });
        } else if (e.target.id === 'nationality') {
            this.setState({ nationality: e.target.value});
        }
    }

    render() {
        return (
            <div className="Register">
                <div className="container">
                    <form onSubmit={this.createStudent}>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">ID:</label>
                            <div className="col-sm-10">
                                <input ref={(input) => this.id = input} onChange={this.onChange} className="form-control" id="id" placeholder="id"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">First Name:</label>
                            <div className="col-sm-10">
                                <input ref={(input) => this.firstName = input} onChange={this.onChange} className="form-control" id="firstName" placeholder="First Name"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Last Name:</label>
                            <div className="col-sm-10">
                                <input ref={(input) => this.lastName = input} onChange={this.onChange} className="form-control" id="lastName" placeholder="Last Name"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Age:</label>
                            <div className="col-sm-10">
                                <input ref={(input) => this.age = input} onChange={this.onChange} className="form-control" id="age" placeholder="Age"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Nationality:</label>
                            <div className="col-sm-10">
                                <input ref={(input) => this.nationality = input} onChange={this.onChange} className="form-control" id="nationality" placeholder="Nationality"/>
                            </div>
                        </div>
                        <button type="submit" method='post' className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Register;