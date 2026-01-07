import type {Country} from "./country.ts";

export type Person = {
    name: string;
    surname: string;
    country: Country;
    images: string[];
    similar?: string[];
    id?: string;
}
