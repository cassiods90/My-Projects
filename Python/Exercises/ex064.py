''' Crie um programa que leia vários números inteiros pelo teclado. O programa só vai parar quando
    o usuário digitar o valor 999, que é a condição de parada. No final, mostre quantos números foram digitados
    e qual foi a soma entre eles (desconsiderando o flag).'''

print('__' * 25)
numero = 0
cont = 0
soma = 0
while numero != 999:
    numero = int(input('Digite um numero qualquer ou 999 para parar: '))
    if numero != 999:
        cont += 1
        soma += numero
print('Fim')
print(' Você digitou {} numeros e a soma deles foi {}.'.format(cont, soma))
