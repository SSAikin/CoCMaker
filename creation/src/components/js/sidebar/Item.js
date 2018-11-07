import React, { Component } from 'react';

class Item extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.openPage(this.props.type)
    }

    render() {
        return(
            <div className={"item-nav inline " + this.props.classPassed} onClick={this.handleClick}>
                <span className={this.props.icoClass}></span>
                <a href="#" className="">{this.props.name}</a>
            </div>
        )
    }
}

export default Item;
