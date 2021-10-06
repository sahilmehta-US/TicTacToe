import React, { Component } from 'react';
import Square from './Square';

export default class Board extends Component {
    renderBlock(i){
        return <Square value={this.props.squares[i]}
        onClick={()=>this.props.onClick(i)}
        />
    }
    render() {
        return (
            <div>
                <div className="border-row">
                    {this.renderBlock(0)}
                    {this.renderBlock(1)}
                    {this.renderBlock(2)}
                </div>
                <div className="border-row">
                    {this.renderBlock(3)}
                    {this.renderBlock(4)}
                    {this.renderBlock(5)}
                </div>
                <div className="border-row">
                    {this.renderBlock(6)}
                    {this.renderBlock(7)}
                    {this.renderBlock(8)}
                </div>

            </div>
        )
    }
}
