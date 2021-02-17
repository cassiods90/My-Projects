# Faça um programa que leia o salario de um funcionario e calcule o seu reajuste em 15%.

salarioAtual = float(input('Digite o valor do seu salario atual: R$'))
aumento = float(input('Digite a porcentagem de aumento do seu salario: '))


valorReajuste = salarioAtual * (aumento / 100)
salarioNovo = salarioAtual * (aumento / 100 + 1)

print('O valor do seu salario atual é R$ {:.2f} e o reajuste é de % {:.2f}.'.format(salarioAtual, aumento))
print('O valor do reajuste foi de R$ {:.2f} e o seu valor final é R$ {:.2f}.'.format(valorReajuste, salarioNovo))


