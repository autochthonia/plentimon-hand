const patterns: {[key: string]: string} = {
  baseCommand: 'roll(?: base | b)* (\\d{1,})',
  targetNumber: '(?: target number| tn) (\\d{1})',
  double: '(?: double| db) (\\db{1})',
  reroll: '(?: reroll| rr)* (\\d{1,2})',
  limitSuffix: '((?: up to| max| ut| m) \\d{1,})*'
}

const baseCommand: RegExp = new RegExp(`${patterns.baseCommand}`, 'i');

export default { baseCommand };
