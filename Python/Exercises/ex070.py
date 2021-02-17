''' Crie um programa que leia o nome e o preço de vários produtos. O programa deverá perguntar se o usuário
    vai continuar ou não. No final, mostre:
    A) qual é o total gasto na compra.
    B) quantos produtos custam mais de R$1000.
    C) qual é o nome do produto mais barato. '''


total = totalmil = menor = cont = 0
while True:
    produto = str(input('Nome do Produto: '))
    preco = float(input('Preço: R$ '))
    cont += 1
    total += preco

    if preco > 1000:
        totalmil += 1
    if cont == 1:
        menor = preco
    else:
        if preco < menor:
            menor = preco

    opcao = ' '
    while opcao not in 'SN':
        opcao = str(input('Voce deseja continuar? [S/N]: ')).strip().upper()[0]
    if opcao == 'N':
        break

print('{:-^40}'.format('FIM DO PROGRAMA. '))
print(f'O total da compra foi R${total:.2f}')
print(f'Temos {totalmil} produtos custando mais de R$ 1000.00')
print(f'O produto mais barato custa R${menor:.2f}')

