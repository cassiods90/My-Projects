''' Desenvolva um programa que leia seis números inteiros e mostre a soma apenas daqueles que forem pares.
    Se o valor digitado for ímpar, desconsidere-o.'''
print('__' * 15)
cont = int(input('Digite quantos numeros voce quer digitar: '))
print('__' * 15)

somaPar = 0
par = 0
somaImpar = 0
impar = 0

for cont in range (1, cont + 1):
    numero = int(input('Digite o {} valor: '.format(cont)))
    if numero % 2 == 0:
        somaPar = somaPar + numero
        par = par + 1
    else:
        somaImpar = somaImpar + numero
        impar = impar + 1

print('Você digitou {} valores PARES e a soma deles é {}.'.format(par, somaPar))
print('Você digitou {} valores IMPARES e a soma deles é {}.'.format(impar, somaImpar))


