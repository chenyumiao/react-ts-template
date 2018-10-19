import React, { Component } from 'react';
import  '../static/list.scss';


class Detail extends Component<any> {
    constructor(props:any){
        super(props);

    }
    componentDidMount() {
        let data  = this.props.location.state;
        console.log(data);
        console.log(data.name);
    }
    render() {
        return (
            <div> this is detail page</div>
        )
    }
}

export default Detail;