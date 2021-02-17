''' Melhore o jogo do DESAFIO 028 onde o computador vai "pensar" em um número entre 0 e 10. Só que agora o jogador
    vai tentar adivinhar até acertar, mostrando no final quantos palpites foram necessários para vencer. '''

from random import randint
computador = randint (0, 500)
print('-=-' * 20)
print('O computador pensou em um numero entre 0 e 500. Tente adivinhar')
print('-=-' * 20)
jogador = 0
tentativas = 0
while (jogador != computador):
    print('Você já tentou {} vezes'.format(tentativas))
    jogador = int(input('Digite um numero: '))


    if (jogador == computador):
        print('Parabens, você acertou !!!')

    else:
        if (jogador > computador):
            print('Você errou. Chute um numero menor')
            tentativas = tentativas + 1

        elif(jogador < computador):
            print('Você errou. Chute um numero maior')
            tentativas = tentativas + 1

print('Fim do jogo. O numero pensado pelo computador foi {} e você tentou {}X'.format(computador, tentativas))
