''' Faça um programa que leia o peso de cinco pessoas. No final, mostre qual foi o maior e o menor peso lidos.'''

print('__' * 30)
qtd = int(input('Digite o numero de pessoas que voce quer informar o peso: '))
print('__' * 30)
maior = 0
menor = 0

for c in range(1, qtd+1):
    peso = float(input('Digite o peso da {}º pessoa: '.format(c)))
    if c == 1:
        maior = peso
        menor = peso
    else:
        if peso > maior:
            maior = peso
        if peso < menor:
            menor = peso

print('O maior peso digitado foi {}Kg'.format(maior))
print('O menor peso digitado foi {}Kg.'.format(menor))
