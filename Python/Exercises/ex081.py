''' Crie um programa que vai ler vários números e colocar em uma lista. Depois disso, mostre:
    A) Quantos números foram digitados.
    B) A lista de valores, ordenada de forma decrescente.
    C) Se o valor 5 foi digitado e está ou não na lista.'''

numeros = []
print('_' * 45)
opcao = 's'
n5 = 0

while opcao in 'Ss':
    numeros.append(int(input('Digite um numero: ')))
    opcao = str(input('Você deseja inserir mais numeros? [S /N]: '))
    if opcao in 'Nn':
        break
    print('_' * 45)

print(f'Foram Digitados {len(numeros)} numeros.')
numeros.sort(reverse=True)
print(f'A lista de valores de forma descrescente é  {numeros}')
if 5 in valores:
    print('O valor 5 faz parte da lista.')
else:
    print('O valor 5 não faz parte da lista.')
