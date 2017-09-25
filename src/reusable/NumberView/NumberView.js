// @flow

import * as React from "react";
import "./numberView.css";

declare type Props = {
    number: ?number,
    animate: ?boolean,
    style: { [key: string]: string }
};

class NumberView extends React.Component<Props> {
    static defaultProps = {
        animate: false,
        style: {
            color: "white"
        }
    };

    render() {
        return (
            <div
                className={`number-view-wrapper ${this.props.animate ? "animate" : ""}`}
                key={this.props.number}
                style={this.props.style}
            >
                {this.props.number}
            </div>
        );
    }
}

export default NumberView;
