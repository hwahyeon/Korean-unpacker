// function removeNumbers(text) {
//   return text.replace(/\d+/g, '');
// }

/**
 * Decomposes Korean character into its constituent parts.
 * 
 * @param {string} korean - The Korean character to decompose.
 * @returns {string} The decomposed character.
 */
function decompose(korean) {
    const LEADING_CONSONANTS = "ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ";
    const VOWELS = [
        'ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 
        'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 
        'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 
        'ㅡ', 'ㅢ', 'ㅣ'
    ];
    const TRAILING_CONSONANTS = [
        '', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 
        'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 
        'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 
        'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 
        'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
    ];

    const COMPLEX_CONSONANTS_MAP = {
        'ㄲ': ['ㄱ', 'ㄱ'],
        'ㄳ': ['ㄱ', 'ㅅ'],
        'ㄵ': ['ㄴ', 'ㅈ'],
        'ㄶ': ['ㄴ', 'ㅎ'],
        'ㄸ': ['ㄷ', 'ㄷ'],
        'ㄺ': ['ㄹ', 'ㄱ'],
        'ㄻ': ['ㄹ', 'ㅁ'],
        'ㄼ': ['ㄹ', 'ㅂ'],
        'ㄽ': ['ㄹ', 'ㅅ'],
        'ㄾ': ['ㄹ', 'ㅌ'],
        'ㄿ': ['ㄹ', 'ㅍ'],
        'ㅀ': ['ㄹ', 'ㅎ'],
        'ㅄ': ['ㅂ', 'ㅅ'],
        'ㅃ': ['ㅂ', 'ㅂ'],
        'ㅆ': ['ㅅ', 'ㅅ'],
        'ㅉ': ['ㅈ', 'ㅈ'],
    };

    const COMPLEX_VOWELS_MAP = {
        'ㅘ': ['ㅗ', 'ㅏ'],
        'ㅙ': ['ㅗ', 'ㅐ'],
        'ㅚ': ['ㅗ', 'ㅣ'],
        'ㅝ': ['ㅜ', 'ㅓ'],
        'ㅞ': ['ㅜ', 'ㅔ'],
        'ㅟ': ['ㅜ', 'ㅣ'],
        'ㅢ': ['ㅡ', 'ㅣ'],
        'ㅒ': ['ㅑ', 'ㅣ'],
        'ㅖ': ['ㅕ', 'ㅣ'],
    };

    if (korean >= '가' && korean <= '힣') {
        const base = korean.charCodeAt(0) - '가'.charCodeAt(0);
        const lead = Math.floor(base / (21 * 28));
        const vowel = Math.floor((base / 28) % 21);
        const trail = base % 28;
        
        let lead_char = LEADING_CONSONANTS[lead];
        if (lead_char in COMPLEX_CONSONANTS_MAP) {
            lead_char = COMPLEX_CONSONANTS_MAP[lead_char].join('');
        }
        
        let vowel_char = VOWELS[vowel];
        if (vowel_char in COMPLEX_VOWELS_MAP) {
            vowel_char = COMPLEX_VOWELS_MAP[vowel_char].join('');
        }
        
        let trail_char = TRAILING_CONSONANTS[trail];
        if (trail_char in COMPLEX_CONSONANTS_MAP) {
            trail_char = COMPLEX_CONSONANTS_MAP[trail_char].join('');
        }
        
        return `${lead_char}${vowel_char}${trail_char}`;
    } else {
        return korean;
    }
    }

/**
 * Decomposes Korean in a given string into its constituent parts.
 * Converts non-string inputs into strings before processing.
 * 
 * @param {any} input - The input to be unpacked. If it's not a string, it will be converted to a string.
 * @returns {string} The unpacked string with each Korean character decomposed.
 */
function unpack(input) {
    const string = String(input);
    return Array.from(string).map(ch => decompose(ch)).join('');
}

module.exports = {
    unpack
};
