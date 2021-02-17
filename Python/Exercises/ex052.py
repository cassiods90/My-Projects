''' Faça um programa que leia um número inteiro e diga se ele é ou não um número primo.'''

num = int(input('Digite um numero: '))
total = 0

for c in range(1, num + 1):
    if num % c ==0:
        print('Ele é divisel por {}'.format(c))
        total += 1

print('O numero {} foi divisel {} vezes'.format(num,total))

if total == 2:
    print('Este é de fato um numero primo.')
else:
    print('Este não é um numero primo.')
