''' Faça um programa que mostre na tela uma contagem regressiva para o estouro de fogos de artifício,
 indo de 10 até 0, com uma pausa de 1 segundo entre eles.'''

from time import sleep
print('*=' * 35)
opcao = input('Vamos começar a contagem regressiva dos fogos. Aperte qualquer tecla.')
print('*=' * 35)
for n in range(10, 0,-1):
    sleep(1)
    print(n)
print('*=' * 35)
print('BUUUUUUUUUUUMMMM, BUUUUUUUUUUUUUUMMMM, POOOOOOOOOOOWWWWWWWWWWWW !!!')
print('*=' * 35)
