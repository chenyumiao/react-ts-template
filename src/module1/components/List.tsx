import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import  '../static/list.scss';

interface goods{
    id:number,
    imgUrl?:string,
    link?:string,
    location?:string
}
interface Props{
    isFetching:boolean,
    data:goods[],
    initGoods:()=> void,
    plusGoods:(param:string)=> void,
    minusGoods:()=>void,
}
class List extends Component<Props> {
    constructor(props:Props){
        super(props);
       this.props.initGoods();
    }
    componentDidMount() {

    }
    render() {
        return this.props.isFetching ? (<div className="loading"><p className="loader"></p></div>) : (
            <div>
                <ul className="goods">
                    {
                        this.props.data.map((ele, idx) => (
                        <Link to={{ pathname :"/detail" , state : {name:ele.id}}} key={idx}>
                            <li key={idx} >
                                <span>{ele.id}</span>
                            </li>
                        </Link>
                        ))
                    }
                </ul>
                <p className="plus" onClick={()=>{this.props.plusGoods('plus')}}>
                    +
                </p>
                <p className="minus" onClick={this.props.minusGoods}>
                    -
                </p>
            </div>
            );
    }
}

export default List;