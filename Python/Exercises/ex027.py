''' Faça um programa que leia o nome completo de uma pessoa, mostrando em seguida o primeiro e o ultimo nome separadamente.'''

n = str(input('Digite o seu nome completo: ')).strip()
nome = n.split()

print('Muito prazerem te conhecer !!!')
print('Seu primeiro nome é {}'.format(nome[0]))
print('Seu ultimo nome é {}'.format(nome[len(nome)-1]))
