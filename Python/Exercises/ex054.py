''' Crie um programa que leia o ano de nascimento de sete pessoas. No final,
    mostre quantas pessoas ainda não atingiram a maioridade e quantas já são maiores.'''
from datetime import date
qtd = int(input('Digite o numero de pessoas que voce vai informar o ano de nascimento: '))
atual = date.today().year
maior = 0
menor = 0
for c in range(1, qtd+1):
    ano = int(input('Digite o ano de nascimento da {} pessoa: '.format(c)))
    idade = atual - ano
    if idade >= 18:
        maior += 1
    else:
        menor += 1

print('Você digitou a idade de {} pessoas, existem {} maiores de idade e {} menores de idade'.format(qtd, maior, menor))
