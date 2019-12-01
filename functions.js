const fs = require('fs')
const file = fs.readFileSync('testfile.asm', 'UTF-8')

function getTotalInstructions(instructions) {
  const instructionArray = instructions.map((instruction) => {
    return file.match(new RegExp(instruction + ' ', 'gi'))
  })

  const filteredArray = instructionArray.filter((instruction) => {
    return instruction !== null
  })

  return totalInstructions = filteredArray.toString().split(',').length
}

function getRegisters(registers) {
  const registerArray = registers.map((register) => {
    return file.match(new RegExp('\\$' + register, 'gi'))
  })

  const filteredArray = registerArray.filter((register) => {
    return register !== null
  })

  const totalRegisters = filteredArray.toString().split(',')

  return unrepeatedRegisters = [...new Set(totalRegisters)]
}

module.exports = { getTotalInstructions, getRegisters }