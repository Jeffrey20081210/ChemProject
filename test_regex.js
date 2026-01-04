
const f = 'Fe2+';
const regex = /^(.*?)((\d+)[+\-−]+|[+\-−]+(\d+)|[+\-−]+)$/;
const match = f.match(regex);

console.log('String:', f);
if (match) {
    console.log('Full match:', match[0]);
    console.log('Group 1 (pre):', match[1]);
    console.log('Group 2 (tail):', match[2]);
} else {
    console.log('No match');
}

const f2 = 'H+';
const match2 = f2.match(regex);
console.log('String:', f2);
if (match2) {
    console.log('Group 1 (pre):', match2[1]);
    console.log('Group 2 (tail):', match2[2]);
}
