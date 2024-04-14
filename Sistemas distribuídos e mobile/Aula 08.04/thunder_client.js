/* Com a extensão Thunder Client instalada:

abrir dois Terminais, um na pasta lembretes e o outro na pasta observacoes
dar 'npm start' em ambos


no Thunder Client:

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


podemos criar vários lembretes apenas mudando o texto do primeiro POST e clicando em Send novamente

também podemos fazer várias observações para o lembrete da mesma maneira
mudando o texto do segundo POST e clicando em Send novamente

mas para fazer observações nos lembretes de número 2, 3, 4...
devemos mudar a URL dos segundos GET e POST

localhost:5000/lembretes/1/observacoes é do lembrete número 1
localhost:5000/lembretes/2/observacoes é do lembrete número 2
localhost:5000/lembretes/3/observacoes é do lembrete número 3 e assim sucessivamente

*/