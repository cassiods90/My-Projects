''' Faça um programa que pergunte o salario de um funcionario e calcule o seu reajuste. Para salarios superiores a
    R$ 1.250,00, calcule um amunto de 10% e para os inferiores ou iguais, aumento de 15%'''

salarioVelho = float(input('Digite o seu salario atual: R$ '))

if salarioVelho <= 1250:
    novo = salarioVelho * 1,15
else:
    novo = SalarioVelho * 1,10

print('O seu salario antigo era R$ {:.2f} e o seu salario novo é R${:.2f}'.format(salarioVelho, novo))
