''' Crie um programa que vai ler vários números e colocar em uma lista. Depois disso, crie duas listas extras
    que vão conter apenas os valores pares e os valores ímpares digitados, respectivamente. Ao final, mostre o
    conteúdo das três listas geradas.'''

numeros = list()
pares = list()
impares = list()
print('_' * 45)

while True:
    numeros.append(int(input('Digite um numero: ')))
    opcao = str(input('Quer continuar? [S/N]: '))
    print('_' * 45)
    if opcao in 'Nn':
        break

for i, v in enumerate(numeros):
    if v % 2 ==0:
        pares.append(v)
    elif v % 2 == 1:
        impares.append(v)

print(f'A lista completa é {numeros}')
print(f'A lista de pares é {pares}')
print(f'A lista de impares é {impares}')



