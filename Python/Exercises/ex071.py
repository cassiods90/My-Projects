''' Crie um programa que simule o funcionamento de um caixa eletrônico. No início, pergunte ao usuário qual
    será o valor a ser sacado (número inteiro) e o programa vai informar quantas cédulas de cada valor serão entregues.
    OBS: considere que o caixa possui cédulas de R$50, R$20, R$10 e R$1.'''

print('_' * 40)
print('{:^40}'.format('BANCO MUNDIAL'))
print('_' * 40)

valor = int(input('Que valor você quer sacar? R$ '))

total = valor
ced = 50
totalced = 0

while True:
    if total >= ced:
        total -= ced
        totalced += 1
    else:
        if totalced > 0:
            print(f'Total de {totalced} cedulas de R$ {ced}')
        if ced == 50:
            ced = 20
        elif ced == 20:
            ced = 10
        elif ced == 10:
            ced = 1
        totalced = 0
        if total == 0:
            break

print('_' * 40)
print('{:^40}'.format('VOLTE SEMPRE AO BANCO MUNDIAL'))
