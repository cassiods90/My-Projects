''' Faça um programa  que leia tres numeros e mostre qual é o maior  e qual é o menor deles.'''

n1 = int(input('Digite o primeiro numero: '))
n2 = int(input('Digite o segundo numero: '))
n3 = int(input('Digite o terceiro numero: '))

if n1<n2 and n1<n3:
    menor = n1
if n2<n3 and n2<n1:
    menor = n2
if n3<n2 and n3<n1:
    menor = n3

if n1>n2 and n1>n3:
    maior = n1
if n2>n3 and n2>n1:
    maior = n2
if n3>n2 and n3>n1:
    maior = n3

print('Os numeros digitados foram {}, {} e {}. O maior deles é {} e o menor deles é {}.'.format(n1, n2, n3, maior, menor))
