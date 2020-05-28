import React, { Component } from 'react';
import './Grid.css';
import Position from './Position';

class Grid extends Component{
    renderPositions(){
        var width = this.props.width;
        var height = this.props.height;
        var dynamicMatrix = this.props.dynamicMatrix;
       var list = [];
       var e = 0;
       var p = [];
       for(var i = 1; i <= width*height; i++){
            e = this.props.elements[i];
            p = this.props.arr[i];
           var position = (
            <div key={i} className="pos" style={{width:this.props.pixel+"px", height:this.props.pixel+"px"}}>
            <Position 
            now = {this.props.now}
            numb={i} 
            up={dynamicMatrix[i][1]}
            right={dynamicMatrix[i][2]}
            down={dynamicMatrix[i][3]}
            left={dynamicMatrix[i][4]}
            e = {e}
            p1 = {p[1]}
            p2 = {p[2]}
            p3 = {p[3]}
            p4 = {p[4]}
            hide={this.props.hide}
            begin = {this.props.begin}
            end = {this.props.end}
            /></div>
        );
        list.push(position);
       }
        return list;
    }
    render(){
        
        return(
            <div className="gridPane" style={{width:(this.props.width*this.props.pixel)+"px", height:(this.props.height*this.props.pixel+30)+"px"}}>
                <span className="path" style={{ margin: "10px auto 0px 0px", height:"30px", width: "300px", display: "inline-block" }}>{this.props.width}&nbsp;:&nbsp;{this.props.height}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.props.width*this.props.pixel}px&nbsp;:&nbsp;{this.props.height*this.props.pixel}px</span>
                <div className="grid" style={{width:(this.props.width*this.props.pixel)+"px", height:(this.props.height*this.props.pixel)+"px"}}>
                    {
                        this.renderPositions()
                    }
                </div>
            </div>
        );
    }
    containElements(next) {//判断下一个位置是否已经存在当下路径中。
        var r = false;
        for (var i = 0; i < this.props.elements.length; i++) {
            r = this.props.elements[i] === next;
            if (r) {
                break;
            }
        }
        return r;
    }
}

export default Grid;