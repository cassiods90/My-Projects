''' Faça um programa que faça o computador "Pensar" em um numero inteiro entre 0 e 5 e peça para o usuario tentar descobrir 
    qual foi o numero escolhido pelo computador. O programa devera escrever na tela se o usuario venceu ou perdeu.'''

from random import randint
computador = randint (0, 1000)
print('-=-' * 20)
print('O computador pensou em um numero entre 0 e 1000. Tente adivinhar')
print('-=-' * 20)

tentativas = 10
while (tentativas > 0):
    print('Tentativas restantes {}'.format(tentativas))
    jogador = int(input('Digite um numero: '))


    if (jogador == computador):
        print('Parabens, você acertou !!!')
        tentativas = 0
    else:
        if (jogador > computador):
            print('Você errou. Chute um numero menor')
            tentativas = tentativas - 1

        elif(jogador < computador):
            print('Você errou. Chute um numero maior')
            tentativas = tentativas - 1

print('Fim do jogo. O numero pensado pelo computador foi {}'.format(computador))


