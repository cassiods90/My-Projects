'''  Crie um programa onde 4 jogadores joguem um dado e tenham resultados aleatórios. Guarde esses resultados
    em um dicionário em Python. No final, coloque esse dicionário em ordem, sabendo que o vencedor tirou o maior
    número no dado.'''

from random import randint
from time import sleep
from operator import itemgetter
jogo = {'jogador 1': randint(1, 6),
        'jogador 2': randint(1, 6),
        'jogador 3': randint(1, 6),
        'jogador 4': randint(1, 6)}

print('Valores sorteados: ')
rankin = dict()
for k, v in jogo.items():
    print(f'{k} tirou {v} no dado.')
    sleep(1)

ranking = sorted(jogo.items(), key = itemgetter(1), reverse = True)
print('_' * 40)
print('==Ranking dos jogadores=='.center(40))
print('-' * 40)
for i, v in enumerate(ranking):
    print(f'{i+1}º lugar: {v[0]} com {v[1]}.')
    sleep(1)
