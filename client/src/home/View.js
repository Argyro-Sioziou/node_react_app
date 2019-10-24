import React, { Component } from 'react';

class View extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nationalities: [],
            filteredStudents: [],
        }

        this.filterStudents = this.filterStudents.bind(this);
    }

    componentDidMount() {
        this.setState( {nationalities: ([... new Set(this.props.list.map(item => item.nationality))]).sort()});
        let nationality = this.props.list[0].nationality;
        this.setState({filteredStudents: this.props.list.filter(function(item) {
            return item.nationality === nationality;
            })})
    }

    filterStudents(e) {
        let nationality = e.target.value;
        let students = this.props.list.filter(function(item) {
            return item.nationality === nationality;
        });

        this.setState({filteredStudents: students});
    }

    render() {

        return (
            <div className="View">
                <div className="container">
                    <div className="row">
                        <div className="form">
                            <select id="dropdown" onChange={this.filterStudents} className="form-control form-control-lg">
                                {this.state.nationalities.map(function (item) {
                                    return (
                                        <option value={item}>{item}</option>
                                    );
                                })}
                            </select>
                        </div>
                    </div>
                </div>
                {this.state.filteredStudents.map(function (item) {
                    return (
                        <h5 className="card-title">{item.firstName} {item.lastName} ({item.age})</h5>
                    );
                })}
            </div>
        );
    }
}

export default View;