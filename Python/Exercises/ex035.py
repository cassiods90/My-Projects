''' Desenvolva um programa que leia o comprimento de três retas e diga ao usuário se elas podem ou não formar um triângulo.'''

reta1 = float(input('Primeira reta: '))
reta2 = float(input('Segunda reta: '))
reta3 = float(input('Terceira reta: '))

if reta1 < reta2 + reta3 and reta2 < reta1 + reta3 and reta3 < reta2 + reta1:
    print('As retas acima podem formar um triangulo.')
else:
    print('As retas acima não podem formar um trinagulo.')
    
    