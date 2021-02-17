''' Crie um programa que leia duas notas de um aluno e calcule sua média, mostrando uma mensagem no final, de acordo com a média atingida:
- Média abaixo de 5.0: REPROVADO
- Média entre 5.0 e 6.9: RECUPERAÇÃO
- Média 7.0 ou superior: APROVADO '''

nota1 = float(input('Digite a sua primeira nota: '))
nota2 = float(input('Digite a sua segunda nota: '))

media = (nota1 + nota2) / 2

print('A sua primeira nota foi {:.1f}, a segunda nota foi {:.1f} e a sua média foi {:.1f}'.format(nota1, nota2, media))

if media < 5:
    print('Infelizmente, você foi reprovado.')

elif media >= 5 and media < 7:
    print('Você esta em recuperação.')

else:
    print('Parabens, voce foi aprovado.')