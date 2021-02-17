# Desenvolva um programa que leia as duas notas de um aluno, calcule e mostre a sua media.

n1 = float(input('Digite a primeira notas do aluno: '))
n2 = float(input('Digite a segunda nota do aluno: '))

# Calculo sem variavel

print('as notas do aluno foram: {} e {}. E a sua media foi: {}' .format(n1, n2, ((n1+n2) /2)))

# calculo com variavel

media = (n1+n2) / 2

print('as notas do aluno foram: {} e {}. E a sua media foi: {}' .format(n1, n2, media))

