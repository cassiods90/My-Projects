''' Crie um programa onde o usuário possa digitar sete valores numéricos e cadastre-os em uma lista única que
    mantenha separados os valores pares e ímpares. No final, mostre os valores pares e ímpares em ordem crescente. '''


print('_' * 50)
qtd = int(input('Digite o numero de valores que voce deseja inserir: '))
numeros = [[], []]
valores = 0
for cont in range(1, qtd+1):
    valores = int(input(f'Digite o {cont}º valor: '))
    if valores % 2 ==0:
        numeros[0].append(valores)
    else:
        numeros[1].append(valores)

numeros[0].sort()
numeros[1].sort()
print('_' * 50)
print(f'Os valores pares são -> {numeros[0]}')
print(f'OS valores impares são -> {numeros[1]}')
