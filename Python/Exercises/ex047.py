''' Crie um programa que mostre na tela todos os números pares que estão no intervalo entre 1 e 50.'''

print('*=' * 35)
numero = int(input('Digite um numero para saber todos os pares ateh o valor digitado: '))
print('*=' * 35)

for numero in range (2, numero+1, 2):
        print(numero)
