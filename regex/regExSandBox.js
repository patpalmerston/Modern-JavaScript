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
re = /gre?a?y\?/i; // Escape character - use the '?' as a question mark

// string to match
const str = 'grey?';
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
