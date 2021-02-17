''' Elabore um programa que calcule o valor a ser pago por um produto, considerando o seu preço normal e condição de pagamento:
- à vista dinheiro/cheque: 10% de desconto
- à vista no cartão: 5% de desconto
- em até 2x no cartão: preço formal
- 3x ou mais no cartão: 20% de juros'''

preco = float(input('Digite o valor das suas compras: R$ '))
print(''' formas de pagamento: 
[ 1 ] -> A vista no dinheiro ou cheque.
[ 2 ] -> A vista no cartão.
[ 3 ] -> Até 2x no cartão.
[ 4 ] -> Em 3x ou mais no cartão''')
opcao = int(input('Qual é a opção escolhida: '))


if opcao == 1:
    total = preco * 0.90
    print('O valor das suas compras é de R$ {:.2f} e você vai pagar R$ {:.2f}'.format(preco, total))

elif opcao == 2:
    total = preco * 0.95
    print('O valor das suas compras é de R$ {:.2f} e você vai pagar R$ {:.2f}'.format(preco, total))

elif opcao == 3:
    total = preco
    parcela = preco / 2
    print('O valor das suas compras é de R$ {:.2f} e você não vai receber desconto.'.format(preco, total))
    print('A sua compra sera parcelada em 2X de R$ {:.2f}'.format(parcela))

elif opcao == 4:
    total = preco * 1.2
    qtdParcela = int(input("Quantas parcelas você vai fazer: "))
    parcela = total / qtdParcela
    print('O valor das suas compras é de R$ {:.2f} e você vai pagar R$ {:.2f}'.format(preco, total))
    print('A sua compra sera parcelada em {}X de R$ {:.2f}'.format(qtdParcela, parcela))





