import {components} from 'react';

class Palindrome extends components {
    constructor(){
        super();
        this.state = {
            userInput: '',
            palindrome: ''
        };
    }

handleChange(val){
    this.setState({
        userInput: val});
}
isPalindrome(userInput){

}
    render(){
        return(
            <section className='puzzleBox palindromePB'>
                <h4>Palindrome</h4>
                <input className= 'inputLine' onChange={ (e) => this.handleChange(e.target.value) }/>
                <button className= 'confirmationButton' onClick={() => this.isPalindrome(this.state.userImput)}> Check </button>
                <span className='resultsBox'>Palindrome: { this.state.palindrome}</span>
            </section>
        )
    }
}

export default Palindrome;