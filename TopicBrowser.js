import React, { Component } from 'react';

//topics //
import EvenAndOdd from '../Topics/EvenAndOdd'
import FilterObject from '../Topics/FilterObject'
import FilterString from '../Topics/FilterString'
import Sum from '../Topics/Sum'
import Palindrome from '../Topics/Palindrome'



//Export //
export default class TopicBrowser extends Component{
    render(){
        return (
        <div>
            <EvenAndOdd />
            <FilterObject />
            <FilterString />
            <Palindrome />
            <Sum />
        </div>
        )
    }
}

