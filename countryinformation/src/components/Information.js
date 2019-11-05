import React, { Component } from 'react';
import {ListGroup} from "react-bootstrap";
class Information extends Component {

    render() {
        return (
            <div className="infor">
                <ListGroup>
                    <ListGroup.Item variant="dark"><span>Name :</span><span >{this.props.name}</span></ListGroup.Item>
                    <ListGroup.Item variant="info"><span>Capital :</span><span >{this.props.capital}</span></ListGroup.Item>
                    <ListGroup.Item variant="dark"><span>Area :</span><span >{this.props.area}</span></ListGroup.Item>
                    <ListGroup.Item variant="info"><span>Two Charecter Code :</span><span >{this.props.two_character_code}</span></ListGroup.Item>
                    <ListGroup.Item variant="dark"><span>Three Charecter Code :</span><span >{this.props.three_character_code}</span></ListGroup.Item>
                    <ListGroup.Item variant="info"><span>Native Name :</span><span >{this.props.native_name}</span></ListGroup.Item>
                    <ListGroup.Item variant="dark"><span>Population :</span><span >{this.props.population}</span></ListGroup.Item>
                    <ListGroup.Item variant="info"><span>Region :</span><span >{this.props.region}</span></ListGroup.Item>
                    <ListGroup.Item variant="info"><span>Capital :</span><span ></span></ListGroup.Item>
                    <ListGroup.Item variant="dark"><span>Capital :</span><span ></span></ListGroup.Item>
                    



                </ListGroup>
                
                
                
                
                
                
                
                
            </div>
        );
    }
}

export default Information;

