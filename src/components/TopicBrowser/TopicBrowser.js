import {components} from 'react';
import EvenAndOdd from '../Topics/EvenAndOdd';
import FilterObject from '../Topics/FilterObject';
import FilterString from '../Topics/FilterString';
import Palindrome from '../Topics/Palindrome';
import Sum from '../Topics/Sum';

class TopicBrowser extends components {
    render(){
        return(
            <section>
        <p>Hello World.</p>
            <EvenAndOdd />
            <FilterObject />
            <FilterString />
            <Palindrome />
            <Sum />
            </section>
        )
    }
}

export default TopicBrowser;