import React, { Component } from 'react';

import Select from 'react-select';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
];

const customStyles = {
    option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? 'var(--white)' : 'var(--letter-color)',
        backgroundColor: state.isFocused ? "var(--grey-2)" : "var(--grey-3)",
        ':active': {
            backgroundColor: state.isSelected ? "var(--grey-3)" : "var(--grey-2)",
        }

    }),
    menu: () => ({
        backgroundColor: "var(--grey-3);",
        borderRadius: "0 0 .25rem .25rem",
    }),
    input: (provided) => ({
        color: "var(--letter-color);"
    }),
    menuList: () => ({
        borderRadius: "0 0 .25rem .25rem",
    }),
    container: (provided) => ({
        ...provided,    
        width: "100%",
        fontSize: "16px",
	    marginRight: "15px",
	    marginLeft: "15px",
    }),
    control: (provided, state) => ({
        ...provided,
        width: "100%",
        backgroundColor: "var(--grey-3)",
        borderColor: "var(--grey-3)",
        '&:hover': {
            borderColor: "var(--grey-3)",
        },
        borderRadius: state.isFocused ? ".25rem .25rem 0 0" : ".25rem", 
        boxShadow: state.isFocused ? "0 0 1px var(--theme) !important" : "",
    }),

    singleValue: (provided) => ({
        ...provided,
        color: "var(--letter-color) !important;"
    })
}

class MySelect extends Component {
    constructor(props) {
        super(props);
        this.state = {selectedOption: null}
        this.handleSelectChangeSystem = this.handleSelectChangeSystem.bind(this);
    }

    handleSelectChangeSystem = (selectedOption) =>  {
        this.setState(selectedOption);
        this.props.value(selectedOption);
    }

    render() {
        return(
            <Select
                styles={customStyles}
                value={this.state}
                onChange={this.handleSelectChangeSystem}
                options={options}
                id={this.props.baseId}
            />
        )
    }
}

export default MySelect;
