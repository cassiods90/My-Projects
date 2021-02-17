'''  Faça um programa que leia nome e peso de várias pessoas, guardando tudo em uma lista. No final, mostre:
    A) Quantas pessoas foram cadastradas.
    B) Uma listagem com as pessoas mais pesadas.
    C) Uma listagem com as pessoas mais leves. '''

temp = []
principal = []
maior = menor = 0

while True:
    temp.append(str(input('Digite o Nome: ')))
    temp.append(int(input('Digite o peso: ')))
    if len(principal) == 0:
        maior = menor = temp[1]
    else:
        if temp[1] > maior:
            maior = temp[1]
        if temp[1] < menor:
            menor = temp[1]

    principal.append(temp[:])
    temp.clear()

    opcao = str(input('Quer continuar? [S/N]'))
    print('_' * 35)
    if opcao in 'Nn':
        break
print('_' * 35)
print(f'Os dados foram {principal}')
print(f'Você cadastrou {len(principal)} pessoas.')
print(f'O maior peso foi de {maior}Kg. Esta pessoa foi ', end = '')
for p in principal:
    if p[1] == maior:
        print(f'[{p[0]}]', end = '')
print()
print(f'O menor peso foi de {menor}Kg. Esta pessoa foi ', end = '')
for p in principal:
    if p[1] == menor:
        print(f'[{p[0]}]', end = '')
print()

