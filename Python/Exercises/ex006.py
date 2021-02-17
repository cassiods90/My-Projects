# Crie um algoritmo que leia um numero e mostre o seu dobro, triplo e raiz quadrada.

numero = int(input('Digite um numero: '))

# Maneira de calcular sem declarar as variaveis

print('O numero digitado foi {}, o seu dobro é {}, o seu triplo é {} e a sua raiz quadrada é {}' .format(numero, (numero*2), (numero*3), (numero**(1/2))))

dobro = numero * 2
triplo = numero * 3
raiz = numero**(1/2)

# Declarando as variaveis

print('O numero digitado foi {}, o seu dobro é {}, o seu triplo é {} e a sua raiz quadrada é {}' .format(numero, dobro, triplo, raiz))


