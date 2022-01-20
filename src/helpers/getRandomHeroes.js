import { heroes } from "../data/heroes";
import { getRandomNumber } from "./getRandomNumber";


export const getRandomHeroes = (amount = 10) => {

    const heroesTotal = [];
    const indexes = []

    for (let i = 0; i <= amount; i++) {
        let hero = null
        while (hero == null) {
            const num = getRandomNumber(1, 731);
            while (indexes.includes(num)) {
                num = getRandomNumber(1, 731);
            }

            indexes.push(num);

            hero = heroes[num];

            heroesTotal.push(hero);
        }
    }

    return {
        loading: false,
        error: null,
        data: heroesTotal
    }
}