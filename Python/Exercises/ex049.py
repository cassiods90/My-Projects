''' Refaça o DESAFIO 009, mostrando a tabuada de um número que o usuário escolher, só que agora utilizando um laço for.'''

print('__' * 25)
numero = int(input('Digite um numero para calcular a sua tabuada: '))
print('__' * 25)


for cont in range (1, 11):
    print('{} X {} = {}'.format(numero, cont, (numero*cont)))


