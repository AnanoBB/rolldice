import React ,{Component} from 'react';
import Die from './Die';

class RollDice extends Component {
   
    constructor(props){
        super(props);
        this.state = {
            firstDice : 'one' ,
            secondDice : 'one'
        };

        this.roll = this.roll.bind(this);
    };

    roll(e){
        let faces = [
            'one','two','three','four','five','six'
           ]
        this.setState(
            {
                firstDice : faces[Math.floor(Math.random()*faces.length)],
                secondDice : faces[Math.floor(Math.random()*faces.length)]
            }
        )
    }


    render(){
        return(
            <div>
                <Die face={this.state.firstDice} />
                <Die face={this.state.secondDice} />
                <button onClick={this.roll}>Roll Dice</button>
            </div>
        )
    }
}

export default RollDice;