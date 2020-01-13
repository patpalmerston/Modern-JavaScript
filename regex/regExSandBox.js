let re;
// Literal Characters
re = /hello/;
re = /hello/i; // i is case insesitive

// Metacharacter symbols
re = /^h/i; // Must start with (ceret inside expresion but outside of [])
re = /world$/i; // the $ stands for 'must end with'
re = /^hello$/i; // must begin and end with
re = /^h.llo$/i; // '.' matches any ONE character / str = 'h3llo' = true
re = /^h*llo$/i; // '*' Matches any character 0 or more times
re = /gre?a?y/i; // '?' makes the a and e optional, sometimes grey is spelt gray
re = /gre?a?y\?/i; // Escape character - use the '?' as a question mark with back slash

// Character sets using Brackets'[]'
re = /gr[ae]y/i; // whatever the character is has to be either and 'a' or 'e' [ae]
re = /[GF]ray/i; // Must be a G or F
re = /[^GF]ray/i; // Ceret inside the brackets = Match anything except a G or F
re = /[A-Z]ray/; // first letter needs to be any uppercase letter
re = /[a-z]ray/; // first letter needs to be any lowercase letter
re = /[A-za-z]ray/; // first character matches any letter of anycase
re = /[0-9]ray/; // first character matches any digit between 09
re = /[0-9][0-9]ray/; // first two characters match any digit between 09

// Braces {} - Quantifiers
re = /Hel{2}o/i; // Must occur exactly {m} amount of times (the 'l' happens 2 times)
re = /Hel{2,4}o/i; // Must occur exactly {m, m} between m to m times (the 'l' happens 2 to 4 times)
re = /Hel{2,}o/i; // Must occur atleast {m,} (the 'l' happens atleast(a min of) 2 times)

// Parentheses () - grouping
re = /^([0-9]x){3}$/; // any number between '0-9' with the letter 'x' attatched '2x2x2x'. The parens group the 3x together and the {} tell us how many times. The Ceret and money sign makes sure it begins then ends after the 3rd time.

// string to match
const str = '2x2x2x';
// Log results
const result = re.exec(str);
console.log('result', result);

function reTest(re, str) {
    if (re.test(str)) {
        console.log(`${str} matches ${re.source}`);
    } else {
        console.log(`${str} does NOT match ${re.source}`);
    }
}

reTest(re, str);
