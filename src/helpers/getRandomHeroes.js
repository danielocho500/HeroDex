import { heroes } from "../data/heroes";
import { getRandomNumber } from "./getRandomNumber";


export const getRandomHeroes = (amount = 10) => {

    const heroesTotal = [];

    for(let i=0;i<=amount;i++){
        const num = getRandomNumber(1,731);
        const hero = heroes[num];

        heroesTotal.push(hero);
    }

    return {
        loading: false,
        error: null,
        data: heroesTotal
    }
}