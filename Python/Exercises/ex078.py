''' Faça um programa que leia 5 valores numéricos e guarde-os em uma lista.
    No final, mostre qual foi o maior e o menor valor digitado e as suas respectivas posições na lista. '''

print('_' * 45)
qtd= int(input('Digite quantos valores você deseja informar: '))
print('_' * 45)
valores = []
maior = 0
menor = 0

for cont in range(1,qtd+1):
    valores.append(int(input(f'Digite o {cont}º valor: ')))
    maior = max(valores)
    menor = min(valores)
    
print('_' * 45)
print(valores)
print('_' * 45)
print(f'O maior valor foi {maior} e o menor valor foi {menor}.')

