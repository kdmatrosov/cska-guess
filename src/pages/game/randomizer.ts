import type {Country, Person} from "../../types";
import {shuffleArray, getCountriesMap} from "../../utils";

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

export class Randomizer {
    private filteredPersons: Person[];
    private memoryPersons: Person[] = [];
    private readonly memory: number;
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
        let result: Person[] = [];
        let similar: Person[] = [];
        let from = this.filteredPersons.concat(this.memoryPersons.slice(0, -this.memory))
        if (person.similar?.length) {
            similar = from.filter(({id}) => {
                if (!id) {
                    return false;
                }
                return person.similar!.includes(id);
            })
        }
        const exclude = new Set([person.surname + person.name].concat(similar.map((sp) => sp.surname + sp.name)))
        from = from.filter((fp) => !exclude.has(fp.surname + fp.name));
        shuffleArray(from);
        let index = 0;
        const countries = this.countriesMap[person.country];
        const total = 4 - exclude.size;
        while (result.length < total) {
            const elem = from[index];
            index++;
            if (!countries || !countries.size || countries.has(elem.country)) {
                result.push(elem)
            }
        }
        result = result.concat(similar);
        shuffleArray(result);
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
