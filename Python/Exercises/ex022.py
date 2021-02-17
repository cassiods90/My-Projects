''' Crie um programa que leia o nome de uma pessoa e mostre:
    * O nome com todas as letras maiusculas e minusculas.
    * Quantas letras no total sem considerar espaços
    * Quantas letras tem o primeiro nome '''

nome = str(input('Digite o seu nome completo: ')).strip() #Strip corta os espaços no inicio e no fim

print('Todas as letras maiusculas: {}'.format(nome.upper()))
print('Todas as letras minusculas: {} '.format(nome.lower()))
print('O nome completo possui {} letras.'.format(len(nome) - nome.count(' ')))
separa = nome.split()
print('Seu primeiro nome é {} e ele tem {} letras'.format(separa[0], len(separa[0])))

