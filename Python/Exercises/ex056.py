''' Desenvolva um programa que leia o nome, idade e sexo de 4 pessoas. No final do programa, mostre:
    a média de idade do grupo,
    qual é o nome do homem mais velho
    e quantas mulheres têm menos de 20 anos.'''


print('__' * 30)
qtd = int(input('Digite o numero de pessoas que voce quer informar: '))
print('__' * 30)

nomeVelho = 0
idadeVelho = 0
somaIdade = 0
mulher = 0

for c in range(1, qtd+1):
    print('------ {}º PESSOA -------'.format(c))
    nome = str(input('Nome: ')).strip().upper()
    idade = int(input('Idade: '))
    sexo = str(input('Digite M ou F:')).upper()

    somaIdade = somaIdade + idade
    if sexo == 'M' and idade > idadeVelho:
        idadeVelho = idade
        nomeVelho = nome
    if sexo == 'F' and idade < 20:
        mulher = mulher + 1

media = somaIdade / qtd

print('A media de idade do grupo de {} pessoas é {:.2f} anos.'.format(qtd, media))
print('O nome do homem mais velho é {} e sua idade é {} anos'.format(nomeVelho, idadeVelho ))
print('A quantidade de mulheres menores que 20 anos é {}.'.format(mulher))


