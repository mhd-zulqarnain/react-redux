import {addCharacterById} from "../actions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Form , FormControl ,Button} from 'react-bootstrap';
import React from "react";
import '../App.css';

class CharacterList extends React.Component{

    render() {
        return (
            <div>
                <ul>
                    { this.props.characters.map(character=>{
                        return(
                            <li key={character.id}>
                                <div>{character.name}</div>
                                <div onClick ={()=>this.props.addCharacterById(character.id)}>+</div>
                            </li>

                        )
                    })
                    }
                </ul>
            </div>
        );
    }
}

/*
* Enable us to get data from store
* and use in componenet*/

function mapStateToProps(state) {
    return{
        character :state.character
    };
}


/*
* Enable us to get data from store
* and use in componenet*/

function mapStatetoProps(state) {
    return{
        characters: state.characters
    };
}

/*
* Enable us to change data in store
*using actions*/
function mapDispatchtoProps(dispatch) {
    return bindActionCreators({addCharacterById},dispatch)
}

export default connect(mapStatetoProps,mapDispatchtoProps) (CharacterList);