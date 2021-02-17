# Faça um programa que leia algo pelo teclado e mostre na tela o seu primitivo e todas as informações possiveis sobre ele.

algo= input('Digite algo: ')
print('O tipo primitivo desse valor é ', type(a))
print('O que foi digitado só tem espaços ? ', algo.isspace())
print('O que foi digitado é um numero ?', algo.isnumeric())
print('O que foi digitado é alfabetico ?', algo.isalpha())
print('O que foi digitado é alfanumerico ?', algo.isalnum())
print('O que foi digitado esta em maiusculo ?', algo.isupper())
print('O que foi digitado esta em minusculo ?', algo.islower())
print('O que foi digitado esta capitalizado ?', algo.istitle())
