function CenturyOfYear(ano) {
    return Math.trunc((ano - 1) / 100) + 1;
}


console.log(CenturyOfYear(100));
console.log(CenturyOfYear(101));
console.log(CenturyOfYear(102));
console.log(CenturyOfYear(2000));
console.log(CenturyOfYear(2100));
console.log(CenturyOfYear(2200));