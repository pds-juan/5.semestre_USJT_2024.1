/* no Thunder Client:

fazer um New Request do tipo GET com a URL localhost:4000/lembretes
neste momento ao clicar em Send o retorno será vazio

fazer outro New Request agora com o tipo POST também com a URL localhost:4000/lembretes
em seu Body faremos em JSON o código {"texto":"o_texto_do_seu_lembrete_aqui"}
clicar em Send

voltar no primeiro Request de tipo GET e clicar em Send novamente
agora vemos o lembrete número 1


fazer mais um New Request do tipo GET agora com a URL localhost:5000/lembretes/1/observacoes
novamente ao clicar em Send o retorno será vazio

fazer mais um New Request do tipo POST também com a URL localhost:5000/lembretes/1/observacoes
em seu Body faremos em JSON o código {"texto":"a_observacao_do_seu_lembrete1_aqui"}
clicar em Send

voltar no segundo Request de tipo GET e clicar em Send novamente
agora vemos a observação do lembrete número 1


fazer um New Request do tipo GET com a URL localhost:6000/lembretes
ao clicar em Send veremos todos os lembretes e suas observações

*/