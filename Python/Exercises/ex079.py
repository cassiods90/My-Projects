''' Crie um programa onde o usuário possa digitar vários valores numéricos e cadastre-os em uma lista.
    Caso o número já exista lá dentro, ele não será adicionado. No final, serão exibidos todos os valores
    únicos digitados, em ordem crescente. '''

print('_' * 45)
numeros = list()

while True:
    n = int(input('Digite um valor: '))
    if n not in numeros:
        numeros.append(n)
    else:
        print('Valor duplicado, adicione outro valor ou encerre o programa.')

    opcao = str(input('Você deseja adicionar outro valor (S / N)'))
    if opcao in 'Nn':
        break
print('_' * 45)
print(f'Você digitou os valores {numeros}')

