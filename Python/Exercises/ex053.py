'''  Crie um programa que leia uma frase qualquer e diga se ela é um palíndromo, desconsiderando os espaços.'''

frase = str(input('Digite uma frase qualquer: ')).strip().upper()  #strip tira os espaços da frase e upper deixa tudo em maiusculo.

palavras = frase.split()
junto = ''.join(palavras)
inverso = junto [::-1]# percorre toda a string de tras pra frente

print('O inverso de {} é {}'.format(junto, inverso))
if inverso == junto:
    print('A frase digitada é palindromo.')
else:
    print('A frase digitada não é palindromo.')
