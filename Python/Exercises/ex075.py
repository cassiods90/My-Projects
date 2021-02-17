''' Desenvolva um programa que leia quatro valores pelo teclado e guarde-os em uma tupla. No final, mostre:
    A) Quantas vezes apareceu o valor 9.
    B) Em que posição foi digitado o primeiro valor 3.
    C) Quais foram os números pares.'''

numero = (int(input('Digite um numero: ')),
        int(input('Digite um numero: ')),
        int(input('Digite um numero: ')),
        int(input('Digite um numero: ')))
print(f'Você digitou os numeros {numero}')

print(f'O valor 9 apareceu {numero.count(9)} vezes.')

if 3 in numero:
    print(f'O valor 3 apareceu na {numero.index(3)+1}ª posição.')
else:
    print(f'O valor 3 não apareceu nenhuma vez.')

print('Os valores pares digitados foram ', end= ' ')
for cont in numero:
    if cont % 2 == 0:
        print(cont, end= ' ')




