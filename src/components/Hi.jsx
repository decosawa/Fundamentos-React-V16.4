import React, { Component } from "react";

export default class Hi extends Component{

    state = {

        type: this.props.type,
        name: this.props.name

    }

    constructor(props){

        super(props);

        this.setType = this.setType.bind(this);
        this.setName = this.setName.bind(this);

    }

    setType(e){

        this.setState({type:e.target.value});

    }

    setName(e){

        this.setState({name:e.target.value});

    }

    render(){

        const { type, name } = this.state;

        return(
            
            <div>
                <h1>{type} {name}!</h1>
                <hr></hr>

                <input type='text' placeholder="Tipo..." value={type} onChange={this.setType}></input>
                <input type='text' placeholder="Nome..." value={name} onChange={this.setName}></input>
            </div>

        )

    }

}