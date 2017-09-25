// @flow

import * as React from "react";
import NumberView from "../../reusable/NumberView/NumberView";
import RandomNumberGenerator from "../../utils/RandomNumberGenerator";
import "./randomNumber.css";

declare type State = {
    randomNumber: ?number
};

declare type Props = {
    min: number,
    max: number,
    interval: number
};

class RandomNumber extends React.Component<Props, State> {
    randomNumberGenerator: RandomNumberGenerator;

    static defaultProps = {
        min: 1,
        max: 5000,
        interval: 2000
    };

    state = {
        randomNumber: null
    };

    constructor(props: any, context: any) {
        super(props, context);
        this.randomNumberGenerator = new RandomNumberGenerator(
            this.props.min, this.props.max
        );
    }

    componentDidMount() {
        /*
         * Calls nextInt at a given interval {@link this.props.interval}
         * to get random number and clears the interval once all the number within
         * the given range are generated.
         */

        const interval =
            setInterval(() => {
                if (!this.randomNumberGenerator.isDone) {
                    this.setState({
                        randomNumber: this.randomNumberGenerator.nextInt()
                    });
                } else {
                    clearInterval(interval);
                }
            }, this.props.interval);
    }

    render() {
        return (
            <section className="random-number-wrapper">
                <div className="random-number-view">
                    <NumberView
                        number={this.state.randomNumber}
                        animate={true}
                        style={{
                            color: "white",
                            fontSize: "100px"
                        }}
                    />
                </div>
            </section>
        );
    }
}

export default RandomNumber;
