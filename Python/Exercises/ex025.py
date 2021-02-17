''' Crie um programa que leia o nome de uma pessoa e diga se ela tem "silva" no nome.'''

nome = str(input('Digite o seu nome completo: ')).strip()
print('Seu nome tem silva ? {}'.format('silva' in nome.lower()))
