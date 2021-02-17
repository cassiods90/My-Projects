''' Crie um programa que leia nome, sexo e idade de várias pessoas, guardando os dados de cada pessoa em um dicionário
    e todos os dicionários em uma lista. No final, mostre:
    A) Quantas pessoas foram cadastradas
    B) A média de idade
    C) Uma lista com as mulheres
    D) Uma lista de pessoas com idade acima da média '''
galera = list()
pessoa = dict()
soma = media = 0

while True:
    pessoa.clear()
    pessoa['nome'] = str(input('Nome: '))

    while True:
        pessoa['sexo'] = str(input('Sexo: [M/F] ')).upper()[0]
        if pessoa['sexo'] in 'MF':
            break
        print('ERRO! Por favor, tente novamente digitando apenas M ou F.')

    pessoa['idade'] = int(input('Idade: '))
    soma += pessoa['idade']
    galera.append(pessoa.copy())

    while True:
        opcao = str(input('Você deseja continuar ? [S / N]: ')).upper()[0]
        if opcao in 'SN':
            break
        print('ERRO! Por favor, tente novamente digitando apenas S ou N.')
    if opcao == 'N':
        break

print('-' * 40)
print(f'A) Ao todos temos {len(galera)} pessoas cadastradas.')
media = soma / len(galera)
print(f'B) A media de idade do grupo é de {media:5.2f} anos.')
print(f'C) As mulheres cadastradas foram: ', end = '')

for p in galera:
    if p['sexo'] in 'Ff':
        print(f'{p["nome"]}, ', end = '')

print()
print('D) A lista das pessoas que estão acima da média: ')
for p in galera:
    if p['idade'] >= media:
        print('    ', end ='')
        for k, v in p.items():
            print(f'{k} = {v}; ',  end='')
        print()

print('-' * 40)
print('Encerrado'. center(40))
print('-' * 40)

