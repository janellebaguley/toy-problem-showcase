import {components} from 'react';

class FilterString extends components {
    constructor(){
        super();
        this.state = {
            names: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
            userInput: '',
            filteredNames: []
        };
    }
handleChange(val){
    this.setState({
       userInput: val });
}
filterNames(userInput){
    let names = this.state.names;
    let filteredNames = [];
}

    render(){
        return(
        <section className= 'puzzleBox filterSTringPB'>
            <h4>Filter String</h4>
        <span className ='puzzleText'>Names: {JSON.stringify(this.state.names, null, 10)}</span>
        <input className='inputLine' onChange={ (e) => this.handleChange(e.target.value) }/>
        <button className ='confirmationButton' onClick={ () => this.filterNames(this.state.userInput)}></button>
        <span className='resultsBox filterStringRB'>Filtered Names: {JSON.stringify(this.state.filteredNames, null, 10)}</span>
        </section>
        )
    }
}

export default FilterString;