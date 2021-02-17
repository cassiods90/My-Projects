''' Faça um programa que tenha uma função chamada maior(), que receba vários parâmetros com valores inteiros.
    Seu programa tem que analisar todos os valores e dizer qual deles é o maior.'''
from time import sleep

def maior(* numero):
    cont = maior = 0
    print('_' * 45)
    print('Analisando os valores passados...')
    for valor in numero:
        print(f'{valor} ', end ='')
        sleep(0.5)
        if cont == 0:
            maior = valor
        else:
            if valor > maior:
                maior = valor
        cont += 1
    print(f'Foram infomrados {cont} valores ao todo.')
    print(f'O maior valor informado foi {maior}')






maior(2 , 4, 5, 6, 7, 8, 9)
maior(4, 7, 0)
maior(1, 2)
maior(6)



