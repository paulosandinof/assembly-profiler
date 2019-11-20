	.data
	.text
	.globl main
	
main:
	# Variável X
	li $t0, 2500
	
	# Variável t
	li $t1, 1
	
	# Variável d
	li, $t2, 2
	
	# Variável s
	li $t3, 4
	
	# Variável r
	li, $s0, 1
	
while:
	bne $t1, 1, end_while
	
	add $s0, $s0, 1
	add $t2, $t2, 2
	add $t3, $t3, $t2
	add $t3, $t3, 1
	
	ble $t3, $t0, while
	
	li $t1, 0

end_while:
	#Imprimir o int
	li $v0, 1
	move $a0, $s0
	syscall