''' Faça um programa que tenha uma função chamada área(), que receba as dimensões de um terreno retangular
    (largura e comprimento) e mostre a área do terreno. '''

def titulo(msg):
    print('_' * 50)
    print(msg.center(50))
    print('_' * 50)


def linha():
    print('_' * 50)


def area(comprimento, largura):
    area = comprimento * largura
    print(f'A área do terreno é {area}m²')


titulo('= = = Calculo da Area = = =')
comprimento = float(input('Digite o comprimento do terreno: '))
largura = float(input('Digite a largura do terreno: '))
area(comprimento, largura)

