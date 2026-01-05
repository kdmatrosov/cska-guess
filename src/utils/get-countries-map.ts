import type {Country} from "../types";

const america = new Set<Country>(['Бразилия', "Аргентина", "Венесуэла", "Парагвай", "Уругвай", "Чили", "Колумбия", "Коста-Рика", "Ямайка"])
const africa = new Set<Country>(['Нигер', "Нигерия", "Алжир", "Мали", "Кот-д'Ивуар", "Камерун"])
const asia = new Set<Country>(['Узбекистан', "Иран", "Турция", "Израиль", 'Южная Корея', "Япония", "Казахстан"])
const europe = new Set<Country>(['Россия', "Армения", "Белоруссия", "Сербия", 'Швейцария',
    "Босния и Герцеговина", "Норвегия", "Хорватия", "Чехия", "Польша", "Швеция", "Финляндия",
    "Болгария", "Латвия", "Словения", "Литва", "Исландия"])

const list = [
    america,
    asia,
    africa,
    europe,
]
export const getCountriesMap = (): Partial<Record<Country, Set<Country>>> => {
    const countriesMap: Partial<Record<Country, Set<Country>>> = {}
    list.forEach((countries) => {
        for (const country of countries) {
            countriesMap[country] = countries
        }
    })
    return countriesMap;
}
