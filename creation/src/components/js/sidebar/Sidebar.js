import React, { Component } from 'react';
import Item from './Item.js';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {sidebarOpen: false, hoverSide: false};
        this.setStateSide = this.setStateSide.bind(this);
        this.handleHover = this.handleHover.bind(this);
        this.handleHoverOut = this.handleHoverOut.bind(this);
        this.setOpenPage = this.setOpenPage.bind(this);
    }

    setStateSide(val) {
        this.setState({sidebarOpen: val});
        this.props.actualState(val);
    }

    setOpenPage(val) {
        this.props.actualPage(val);
    }

    handleHover() {
        this.setState({hoverSide: true});
    }

    handleHoverOut() {
        this.setState({hoverSide: false});
    }

    render() {
        return(
            <div
                onMouseOver={this.handleHover}
                onMouseLeave={this.handleHoverOut}
            >
                <SidebarPart
                    stateSide={this.state.sidebarOpen}
                    openPage={this.setOpenPage}
                />
                <ForHoverSide
                    sendData={this.setStateSide}
                    stateHove={this.state.hoverSide}
                />
            </div>
        )
    }
}

class SidebarPart extends Component {
    constructor(props) {
        super(props);
        this.state = {open: this.props.open};
        this.openPage = this.openPage.bind(this);
    }

    componentWillReceiveProps(props) {
        this.setState({open: props.stateSide});
    }

    openPage(page) {
        this.props.openPage(page);
    }

    render() {
        return (
            <div id="mySidenav" className={"sidenav " + (this.state.open ? "open" : "")}>
                <Item
                    icoClass="ico-settings"
                    name="Settings"
                    type="settings"
                    openPage={this.openPage}
                />
                <Item
                    icoClass="ico-book"
                    name="Campaing"
                    type="campaing"
                    openPage={this.openPage}
                />
                <Item
                    icoClass="ico-plus-circle"
                    name="New Campaing"
                    type="new"
                    openPage={this.openPage}
                />
            </div>
        );
    }
}


class ForHoverSide extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false, hovered: false}
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (this.state.open) {
            this.setState({open: false});
            this.props.sendData(false);
        }else {
            this.setState({open: true});
            this.props.sendData(true);
        }
    }

    componentWillReceiveProps(props) {
        this.setState({hovered: props.stateHove});
    }

    render() {
        return (
            <div className="for-hover-side" id="side-bar-open" style={{marginLeft: this.state.open ? "250px" : "55px"}}>
                <button type="button" name="button" className={"button-open-sidebar " + (this.state.hovered ? "" : "hide-button")} onClick={this.handleClick}>
                    <span id="side-button" className={(this.state.open ? "ico-left " : "ico-right ") + (this.state.hovered ? "" : "hide")} ></span>
                </button>
            </div>
        );
    }
}

export default Sidebar;
