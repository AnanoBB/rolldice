import React ,{Component} from 'react';
import './RollDice.css'
import Die from './Die';

class RollDice extends Component {
   
    constructor(props){
        super(props);
        this.state = {
            firstDice : 'one' ,
            secondDice : 'one',
            rolling : false
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
                secondDice : faces[Math.floor(Math.random()*faces.length)],
                rolling : true
            }
        )

        setTimeout(() => {
            this.setState({rolling:false})
        },1000);
    }


    render(){
        return(
            <div className='DiceBox'>
                <div className="Dices">
                <Die face={this.state.firstDice} />
                <Die face={this.state.secondDice} />
                </div>
        <button onClick={this.roll}>{
            this.state.rolling ? 'Rolling ...' :'Roll Dice'
        }</button>
            </div>
        )
    }
}

export default RollDice;