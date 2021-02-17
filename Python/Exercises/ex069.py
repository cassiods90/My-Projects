''' Crie um programa que leia a idade e o sexo de várias pessoas. A cada pessoa cadastrada, o programa deverá
    perguntar se o usuário quer ou não continuar. No final, mostre:
    A) quantas pessoas tem mais de 18 anos.
    B) quantos homens foram cadastrados.
    C) quantas mulheres tem menos de 20 anos. '''

maiores = homens = mulheres = 0
while True:
    print('__' * 20)
    idade = int(input('Digite a sua idade: '))

    sexo = ' '
    while sexo not in 'MF':
        sexo = str(input('Digite o seu sexo. [M / F]: ')).strip().upper()[0]

        if idade>= 18:
            maiores += 1
        if sexo == 'M':
             homens += 1
        if sexo == 'F' and idade < 20:
            mulheres += 1

    resp = ' '
    while resp not in 'SN':
        resp = str(input('Você quer continuar? [S / N]: ')).strip().upper()[0]
        if resp == 'N':
            print('Você desejou não continuar.')
            print('Encerrando...')
            print('Fim.')
            break



print(f'Foram cadastradas {maiores} pessoas maiores de idade.')
print(f'Foram cadastrados {homens} homens.')
print(f'Foram cadastradas {mulheres} mulheres menores de 20 anos de idade.')