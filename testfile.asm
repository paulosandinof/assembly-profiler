	.data
	.text
	.globl main

main:
	add $s0,$t0,$t1
	sub $s0, $t0, $t1
	addi $s0, $t0, 1
	mult $s0, $t0
	div $s0, $t0
	and $s0,$t0,$t1
	or $s0,$t0,$t1
	xor $s0,$t0,$t1
	mfhi $s0
	mflo $s0
	sll $s0, $t0, $t1
	srl $s0, $t0, $t1
	slt $s0,$t0,$t1
	bne $s0,$t0, Label
	beq $s0,$t0, Label
	lw $s0, 1($t0)
	sw $s0, 1($t0)
	j Label
	jr $s0
