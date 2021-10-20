
import { VOCALS, CAPITAL_LETTERS } from "./constants.js"

export const chemsificator = (string = "") => {
    return string.split("").map((letter, i, array) => {
        // One m if have two vocals
        if (VOCALS.includes(letter)) {
            if (VOCALS.includes(array[i + 1])) {
                return letter;
            }
            else {
                const previousLetterIsMayus = CAPITAL_LETTERS.includes(array[i - 1]);
                const forwardLetterIsMayus = CAPITAL_LETTERS.includes(array[i + 1]);

                const hasCapitalLettersAround = previousLetterIsMayus && forwardLetterIsMayus;
                const lastLetterIsCapital = previousLetterIsMayus && !array[i + 1];
                if (hasCapitalLettersAround || lastLetterIsCapital) {
                    return `${letter}M`
                } else {
                    return `${letter}m`
                }
            }
        } else {
            return letter;
        }
    }).join("")
}