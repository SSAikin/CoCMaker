import React, { Component } from 'react';
import MySelect from './../form/MySelect.js';


class NewCampaing extends Component {
    constructor(props) {
        super(props);
        this.state = {campaingName: "", system: {selectedOption: null}}
        this.setFunctions();
    }

    setFunctions() {
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSelectChangeSystem = this.handleSelectChangeSystem.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSelectChangeSystem = (selectedOption) =>  {
        this.setState({system: selectedOption})
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="form-row">
                    <div className="form-col">
                        <label htmlFor="name" className="label">Campaing name</label>
                        <input type="text" name="campaingName" value={this.state.campaingName} onChange={this.handleInputChange} className="input w-100" placeholder="Campaing name" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-col">
                        <label htmlFor="system" className="label">System</label>
                        <MySelect
                            value={this.handleSelectChangeSystem}
                            baseId="system"
                        />
                    </div>
                </div>
            </form>
        )
    }
}
export default NewCampaing;