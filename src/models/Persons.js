import {PrioritisedArray}               from 'arva-ds/core/PrioritisedArray.js';
import {Person}                         from './Person.js';

export class Persons extends PrioritisedArray {
    constructor(){
        super(Person);
    }
}
