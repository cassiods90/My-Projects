# Escreva um programa que pergunte a quantidade de Km percorridos por um carro alugado e a quantidade de dias pelos
# quais ele foi alugado. Calcule o preço a pagar, sabendo que o carro custa R$ 60.00 e R$ 0.15 por Km rodado.

km = float(input('Quantos km você rodou com o carro alugado: '))
dias = int(input('Quantos dias voce ficou com o carro alugado: '))

preco = (dias * 60) + (km * 0.15)

print('Você alugou o carro por {} dias, neste periodo você rodou {} Km e deve pagar o valor de R$ {}'.format(dias, km, preco))
