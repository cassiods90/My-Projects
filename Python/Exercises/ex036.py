''' Escreva um programa para aprovar o empréstimo bancário para a compra de uma casa. Pergunte o valor da casa,
    o salário do comprador e em quantos anos ele vai pagar. A prestação mensal não pode exceder 30% do salário
    ou então o empréstimo será negado. '''

valorCasa = float(input('Digite qual o valor da casa: R$ '))
salario = float(input('Digite qual o seu salario: R$ '))
anos = int(input('Digite em quantos anos pretende pagar a casa: '))

prestacao = valorCasa / (anos*12)

if prestacao <= (salario * 0.30):
    print('Parabens, o emprestimo foi aprovado e o valor da prestação sera de R$ {:.2f}'.format(prestacao))
else:
    print('Infelizmente a prestação ficou no valor de R$ {:.2f} e excede o limite de 30% do seu salario'.format(prestacao))
