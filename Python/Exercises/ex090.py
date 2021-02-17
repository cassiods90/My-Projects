''' Faça um programa que leia nome e média de um aluno, guardando também a situação em um dicionário.
    No final, mostre o conteúdo da estrutura na tela.'''

aluno = dict()
print('_' * 50)
aluno['nome'] = str(input('Digite o seu nome: '))
aluno['media'] = float(input('Digite a sua media: '))
print('_' * 50)

if aluno['media'] >= 7:
    aluno['situacao'] = 'Aprovado'
else:
    aluno['situacao'] = 'Reprovado'


for k, v in aluno.items():
    print(f'   ->  {k} é igual a {v} ')

