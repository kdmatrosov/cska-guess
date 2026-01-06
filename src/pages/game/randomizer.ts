import type {Country, Person} from "../../types";
import {shuffleArray, getCountriesMap} from "../../utils";

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

export class Randomizer {
    private filteredPersons: Person[];
    private memoryPersons: Person[] = [];
    private memory: number;
    private countriesMap = getCountriesMap()

    constructor(persons: Person[], memory = 4) {
        this.filteredPersons = persons;
        this.memory = memory;
    }

    getPerson(): Person {
        const index = getRandomInt(this.filteredPersons.length);
        const person = this.filteredPersons[index];
        this.filteredPersons = this.filteredPersons.filter(({
                                                                surname,
                                                                name
                                                            }) => surname !== person.surname || name !== person.name);
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
        let index = 0;
        const countries = this.countriesMap[person.country];
        while (result.length < 3) {
            const elem = from[index];
            index++;
            if (!countries || !countries.size || countries.has(elem.country)) {
                result.push(elem)
            }
        }
        return result;
    }

    getExtraCountries(country: Country): Country[] {
        let result: Country[] = [country];
        const list = Array.from(this.countriesMap[country] ?? new Set<Country>()).filter((c) => c !== country);
        shuffleArray(list);
        result = result.concat(list.slice(0, 3))
        shuffleArray(result);
        return result;
    }
}
