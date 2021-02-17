''' Faça um programa que ajude um jogador da MEGA SENA a criar palpites.O programa vai perguntar quantos jogos
    serão gerados e vai sortear 6 números entre 1 e 60 para cada jogo, cadastrando tudo em uma lista composta. '''

from random import randint
from time import sleep

lista = list()
jogos = list()
print('_' * 40)
print('JOGO DA MEGA SENA'.center(40))
print('_' * 40)
qtd = int(input('Quantos jogos você quer eu sorteie: '))
total = 1
while total <= qtd:
    cont = 0
    while True:
        num = randint(1, 60)
        if num not in lista:
            lista.append(num)
            cont += 1
        if cont >= 6:
            break
    lista.sort()
    jogos.append(lista[:])
    lista.clear()
    total += 1
print('-' * 5, f'SORTEANDO {qtd} jogos !!!', '-' * 5)
for i, linha in enumerate(jogos):
    print(f'Jogo {i+1}: {linha} ')
    sleep (1)
print('-' * 5, 'BOA SORTE', '-' * 5)
