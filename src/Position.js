import React, { Component } from 'react';

import './Position.css';

class Position extends Component {


    render() {
        return (
            <div className="position backcolor">
                <div className={"up" 
                + (this.props.up === 1 ? " pathcolor" : "backcolor")
                + (!this.props.hide && this.props.p1 === 1 ? " findpathcolor " : " ")
                }></div>


                <div className={"right " 
                + (this.props.right === 1 ? " pathcolor" : "backcolor")
                + (!this.props.hide && this.props.p2 === 1 ? " findpathcolor " : " ")
                }></div>


                <div className={"down " 
                + (this.props.down === 1 ? " pathcolor" : "backcolor")
                + (!this.props.hide && this.props.p3 === 1 ? " findpathcolor " : " ")
                }></div>


                <div className={"left " 
                + (this.props.left === 1 ? " pathcolor" : "backcolor")
                + (!this.props.hide && this.props.p4 === 1 ? " findpathcolor " : " ")
                }></div>


                <div className={"spot "
                    + (!this.props.hide && this.props.numb === this.props.now ? " now " : " ")
                    + (!this.props.hide && this.props.numb === this.props.begin ? " begin " : " ")
                    // + (this.props.numb===this.props.end?" end ":" ")  
                    + (!this.props.hide && this.props.e === 1 ? " elements " : " ")
                    //+ (!this.props.hide && this.props.p === 1 ? " elements " : " ")
                    }></div>
            </div>
        );
    }
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.up !== this.props.up ||
            nextProps.right !== this.props.right ||
            nextProps.down !== this.props.down ||
            nextProps.left !== this.props.left ||
            nextProps.now !== this.props.now ||
            nextProps.e !== this.props.e ||
            nextProps.p1 !== this.props.p1 ||
            nextProps.p2 !== this.props.p2 ||
            nextProps.p3 !== this.props.p3 ||
            nextProps.p4 !== this.props.p4 ||
            nextProps.hide === !this.props.hide;
    }
}

export default Position;