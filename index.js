const { getTotalInstructions, getRegisters } = require('./functions')

const readInstructions = ['lw'];
const writeInstructions = ['sw'];
const conditionalJumpInstructions = ['bne', 'beq'];
const incoditionalJumpInstructions = ['j', 'jr']
const logicAndArithimeticalInstructions = [
  'add', 'sub', 'addi', 'mult', 'div', 'and', 'or', 'xor', 'mfhi', 'mflo',
  'sll', 'srl', 'slt'];

const instructions = [...logicAndArithimeticalInstructions, ...conditionalJumpInstructions,
...writeInstructions, ...readInstructions, ...incoditionalJumpInstructions]

const registers = [
  'zero', 'at', 'v0', 'v1', 'a0', 'a1', 'a2', 'a3', 't0', 't1', 't2',
  't3', 't4', 't5', 't6', 't7', 't8', 't9', 's0', 's1', 's2', 's3',
  's4', 's5', 's6', 's7', 'k0', 'k1', 'gp', 'sp', 'fp', 'ra'];

console.log('Total de instruções da aplicação: ' + getTotalInstructions(instructions))

console.log('Total de instruções de leitura: ' + getTotalInstructions(readInstructions))
console.log('Percentual em relação ao total: ' + (getTotalInstructions(readInstructions) * 100) / getTotalInstructions(instructions) + '%');

console.log('Total de instruções de escrita: ' + getTotalInstructions(writeInstructions))
console.log('Percentual em relação ao total: ' + (getTotalInstructions(writeInstructions) * 100) / getTotalInstructions(instructions) + '%');

console.log('Total de instruções de salto condicional: ' + getTotalInstructions(conditionalJumpInstructions))
console.log('Percentual em relação ao total: ' + (getTotalInstructions(conditionalJumpInstructions) * 100) / getTotalInstructions(instructions) + '%');

console.log('Total de instruções de salto incondicional: ' + getTotalInstructions(incoditionalJumpInstructions))
console.log('Percentual em relação ao total: ' + (getTotalInstructions(incoditionalJumpInstructions) * 100) / getTotalInstructions(instructions) + '%');

console.log('Total de instruções de lógica e aritmética: ' + getTotalInstructions(logicAndArithimeticalInstructions));

console.log(getRegisters(registers))
