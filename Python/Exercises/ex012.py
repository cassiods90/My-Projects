# Faça um programa que leia o preço de um produto e mostre o seu novo preço com 5% de desconto.

valorNormal = float(input('Digite o preço do produto que você deseja comprar: R$'))
desconto = float(input('Digite a porcentagem de desconto: '))


valorDesconto = valorNormal * (desconto/100)
valorFinal = valorNormal - valorDesconto

print('O valor normal do produto é {:.2f} e o desconto é de %{:.2f}.'.format(valorNormal, desconto))
print('O valor de desconto  foi de R${:.2f} e o seu valor final é R${:.2f}.'.format(valorDesconto, valorFinal))

