# Faça um programa que leia o comprimento do cateto oposto e a do cateto adjacente de um triangulo retangulo,
# calcule e mostre o comprimento da hipotenusa.

import math
catetoOposto = float(input('Comprimento do cateto Oposto: '))
catetoAdjacente = float(input('Comprimento do cateto adjacente: '))
hipotenusa = math.hypot(catetoOposto, catetoAdjacente)
print('A hipotenusa vai medir {:.2f}'.format(hipotenusa))
