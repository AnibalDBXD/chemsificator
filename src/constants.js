export const LOWER_VOCALS = [
    "a",
    "e",
    "i",
    "o",
    "u",
];

export const CAPITAL_VOCALS = LOWER_VOCALS.map((vocal) => vocal.toUpperCase());

export const VOCALS = [...CAPITAL_VOCALS, ...LOWER_VOCALS];

export const LOWER_CONSONANT = [
    'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'
]

export const CAPITAL_CONSONANT = LOWER_CONSONANT.map(consonant => consonant.toUpperCase());

export const CAPITAL_LETTERS = [...CAPITAL_VOCALS, ...CAPITAL_CONSONANT];

export const PREFIX = "!c";
