import * as React from 'react';

interface SquareProps {
    value: any;
}

export default class Square extends React.Component<SquareProps, {}> {
    constructor(props: any) {
        super(props);
        this.state = {
            value: null
        }
    }
    render() {
        return (
        <button className="square"  onClick={() => this.setState({value: 'X'})}>
            {this.props.value}
        </button>
        );
    }
}