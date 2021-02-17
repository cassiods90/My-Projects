''' Faça um programa que leia o ano de nascimento de um jovem e informe, de acordo com a sua idade, se ele ainda vai se
    alistar ao serviço militar, se é a hora exata de se alistar ou se já passou do tempo do alistamento.
    Seu programa também deverá mostrar o tempo que falta ou que passou do prazo.'''

from datetime import date
ano = int(input('Digite o ano do seu nascimento: '))

idade = date.today().year - ano

if idade > 19:
    print('Você ja passou da fase de se alistar.')

elif idade == 18:
    print('Você precisa se alistar este ano.')

else:
    print('Você ainda não esta na dase de alistamento.')

