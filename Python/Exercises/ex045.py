''' Crie um programa que faça o computador jogar Jokenpô com você.'''

from random import randint
from time import sleep
itens = ('pedra', 'papel', 'tesoura')
computador = randint(0,2)
print(''' Suas opções: 
[ 0 ] -> PEDRA
[ 1 ] -> PAPEL
[ 2 ] -> TESOURA ''')
jogador = int(input('Digite qual a sua jogada: '))

print('JO')
sleep(1)
print('KEN')
sleep(1)
print('PO !!!')
sleep(1)

print('-=' * 15)
print('Computador jogou {}'.format(itens[computador]))
print('Jogador jogou {}'.format(itens[jogador]))
print('-=' * 15)

if computador == 0:     # Computador jogou pedra
    if jogador == 0 :    # Jogador jogou pedra
        print('EMPATE')
    elif jogador == 1:  # Jogador jogou papel
        print('JOGADOR VENCE')
    elif jogador ==2:   # Computador jogou tesoura
        print('COMPUTADOR VENCE')
    else:
        print('JOGADA INVALIDA')


elif computador == 1: # Computador jogou papel
    if jogador == 0:  # jogador jogou pedra
        print('COMPUTADOR VENCE')
    elif jogador == 1: # Jogador jogou papel
        print('EMPATE')
    elif jogador == 2: # Jogador jogou tesoura
        print('JOGADOR VENCE')
    else:
        print('JOGADA INVALIDA')


elif computador == 2: # Computador jogou tesoura
    if jogador == 0: # jogador jogou pedra
        print('JOGADOR VENCE')
    elif jogador == 1: # Jogador jogou papel
        print('COMPUTADOR VENCE')
    elif jogador == 2: # Jogador jogou tesoura
        print('EMPATE')
    else:
        print('JOGADA INVALIDA')