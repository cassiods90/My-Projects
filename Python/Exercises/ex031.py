''' Desenvolva um programa que pergunte a distancia de uma viagem em Km. O preço da passagem deve ser de R$0,50 por Km,
    para viagens de até 200km e R$ 0,45 para viagens mais longas.'''

distancia = float(input('Digite a distancia da sua viagem: '))

if distancia <= 200:
    preco = distancia * 0,50
else:
    preco = distancia * 0,45

print('o valor da sua passagem é R${:.2f}'.format(preco))



