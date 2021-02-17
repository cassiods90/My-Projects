# Crie um programa que leia quanto dinheiro uma pessoa tem na carteira e mostre quantos dolares ela pode comprar

real = float(input('Digite quantos R$ você possui: R$'))

dolar = real / 4.15

print('R${:.2f} convertidos em dolar, equivalem a US${:.2f}'.format(real, dolar))

