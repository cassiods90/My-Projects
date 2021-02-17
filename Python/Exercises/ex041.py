''' A Confederação Nacional de Natação precisa de um programa que leia o ano de nascimento de um atleta e mostre sua categoria, de acordo com a idade:
- Até 9 anos: MIRIM
- Até 14 anos: INFANTIL
- Até 19 anos: JÚNIOR
- Até 25 anos: SÊNIOR
- Acima de 25 anos: MASTER '''

from datetime import date
atual = date.today().year
nascimento = int(input('Digite o ano em que você nasceu: '))
idade = atual - nascimento
print('Você nasceu no ano de {} e tem {} anos de idade.'.format(nascimento, idade))

if idade > 25:
    print('Você pertence a categoria MASTER.')

elif idade < 25 and idade > 19:
    print('Você pertence a categoria SENIOR.')

elif idade < 19 and idade > 14:
    print('Você pertence a categoria JUNIOR.')

elif idade < 14 and idade > 9:
    print('Você pertence a categoria INFANTIL.')

else:
    print('Você pertence a categoria MIRIM.')
