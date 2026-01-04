import type {Person} from "../../types";
import {shuffleArray} from "../../utils/shuffle-array.ts";

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

export class Randomizer {
    private filteredPersons: Person[];
    private memoryPersons: Person[] = [];
    private memory: number;

    constructor(persons: Person[], memory = 4) {
        this.filteredPersons = persons;
        this.memory = memory;
    }

    getPerson(): Person {
        const index = getRandomInt(this.filteredPersons.length);
        const person = this.filteredPersons[index];
        console.log('getPerson', person, index, this.filteredPersons)
        this.filteredPersons = this.filteredPersons.filter(({surname}) => surname !== person.surname);
        this.memoryPersons.push(person);
        return person;
    }

    getImageFromPerson(person: Person | undefined): string {
        if (!person) {
            return '';
        }
        const index = getRandomInt(person.images.length);
        return person.images[index];
    }

    getExtraPersons(person: Person): Person[] {
        const result: Person[] = [];
        const from = this.filteredPersons.concat(this.memoryPersons.slice(0, -this.memory)).filter((fp) => fp.surname !== person.surname);
        shuffleArray(from);
        for (let i = 0; i < 3; i++) {
            result.push(from[i]);
        }
        return result;
    }
}
