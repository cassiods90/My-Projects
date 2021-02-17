''' Crie um programa onde o usuário possa digitar cinco valores numéricos e cadastre-os em uma lista,
    já na posição correta de inserção (sem usar o sort()). No final, mostre a lista ordenada na tela. '''

print('_' * 45)
qtd= int(input('Digite quantos valores você deseja informar: '))
print('_' * 45)
valores = []


for cont in range(1,qtd+1):
    n = int(input(f'Digite o {cont}º valor: '))
    if cont == 1 or n > valores[-1]:
        valores.append(n)
    else:
        pos = 0
        while pos < len(valores):
            if n <= valores[pos]:
                valores.insert(pos, n)
                break
            pos += 1

print('_' * 45)
print(valores)