''' Refaça o DESAFIO 035 dos triângulos, acrescentando o recurso de mostrar que tipo de triângulo será formado:
- EQUILÁTERO: todos os lados iguais
- ISÓSCELES: dois lados iguais, um diferente
- ESCALENO: todos os lados diferentes '''

reta1 = float(input('Primeira reta: '))
reta2 = float(input('Segunda reta: '))
reta3 = float(input('Terceira reta: '))

if reta1 < reta2 + reta3 and reta2 < reta1 + reta3 and reta3 < reta2 + reta1:
    print('As retas acima podem formar um triangulo.')

    if reta1 == reta2 == reta3:
        print('Todas as retas são IGUAIS, neste caso, temos um TRIANGULO EQUILATERO.')

    elif reta1 != reta2 != reta3 !=reta1:
        print('Todas as retas são DIFERENTES, neste caso, temos um TRIANGULO ESCALENO.')

    else:
        print('Temos dois lados IGUAIS  e apenas um DIFERENTE, neste caso, temos um TRIANGULO ISOSCELES.')

else:
    print('As retas acima não podem formar um trinagulo.')