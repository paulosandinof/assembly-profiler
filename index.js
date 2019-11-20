const fs = require('fs')

const file = fs.readFileSync('exercicio3.asm', 'UTF-8')

const instructions = [
  'add', 'sub', 'addi', 'mult', 'div', 'and', 'or', 'xor', 'mfhi', 'mflo',
  'sll', 'srl', 'slt', 'bne', 'beq', 'lw', 'sw', 'j', 'jr'
];

const registers = [
  'zero', 'at', 'v0', 'v1', 'a0', 'a1', 'a2', 'a3', 't0', 't1', 't2',
  't3', 't4', 't5', 't6', 't7', 't8', 't9', 's0', 's1', 's2', 's3',
  's4', 's5', 's6', 's7', 'k0', 'k1', 'gp', 'sp', 'fp', 'ra', 'hi', 'lo'
]

function getInstructions(file) {
  const instructionArray = instructions.map((instruction) => {
    return file.match(new RegExp(instruction, 'gi'))
  })

  const filteredArray = instructionArray.filter((instruction) => {
    return instruction !== null
  })

  return totalInstructions = filteredArray.toString().split(',')
}

function getRegisters(file) {
  const registerArray = registers.map((register) => {
    return file.match(new RegExp('\\$' + register, 'gi'))
  })

  const filteredArray = registerArray.filter((register) => {
    return register !== null
  })

  return totalRegisters = filteredArray.toString().split(',')
}

console.log(getRegisters(file))
