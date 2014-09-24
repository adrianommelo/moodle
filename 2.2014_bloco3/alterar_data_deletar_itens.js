//------------------------troca data DISCIPLINAS E---------------------
//
//
//armazenando a chave da sessão-----------------------------------SESSKEY
$urlParentNode=_getAttribute(_link('Sair'),'href');
$loggedSesskey= String($urlParentNode).substr(49);
//
//
//-------------------------------------------------------TÓPICOS VAZIOS
function procuraTopicosVazios()
{
    //traz qtde de tópicos q estão sobrando e retira da página(oculta, reduz a visão)
    $collectTopic= _collect('_heading3', '/Tópico .*/', _in(_div('region-content'))); 
    if($collectTopic.length > 0)
    {
        for($i=0; $i < $collectTopic.length; $i++)
        {
        _click(_link("reduce-sections"));
        _wait(3000);
        };
    }
};

//-------------------------------------------------------CHAT ONLINE
function procura_deletaChatOnline()
{
    //coleta os chat onlines
    $collectOnlineChats = _collect('_span', '/Chat Online com o professor/', _in(_div('region-content')));

    //array para receber os ID dos Fóruns
    $varIdDelete = new Array;
    //loop para popular a array com os IDs encontrados;
    for($i=0; $i < $collectOnlineChats.length; $i++)
    {
    $urlParentNode=_getAttribute(_parentNode($collectOnlineChats[$i]),'href');
    $varIdDelete[$i]= String($urlParentNode).substr(45);
    }//for

    if($collectOnlineChats.length > 0)
    {
        //loop para passar nos chats encontrados
        for($i=0; $i < $collectOnlineChats.length; $i++)
        {
        _navigateTo('http://ava.brazcubas.br/course/mod.php?sesskey='+$loggedSesskey+'&sr=0&delete='+$varIdDelete[$i]);
        _wait(3000);
        _click(_submit("Sim"));
        _wait(3000);
        };//for
    }//if

    //limpando a array
    $varIdDelete.length = 0;
};//function

//-------------------------------------------------------FÓRUM DISCUSSÃO
//função para procurar qtd de fóruns de discussão(url) e deleta-los do ava atual
function procura_deletaFDiscussao()
{
    $collectForumDiscussao = _collect('_span', '/Fórum de discussão.*/', _in(_div('region-content')));

    //array para receber os ID dos Fóruns
    $varIdDelete = new Array;
    //loop para popular a array com os IDs encontrados;
    for($i=0; $i < $collectForumDiscussao.length; $i++)
    {
    $urlParentNode=_getAttribute(_parentNode($collectForumDiscussao[$i]),'href');
    $varIdDelete[$i]= String($urlParentNode).substr(44);
    }//for


    //acessandos fóruns
    if($collectForumDiscussao.length > 0)
    {
       //loop para passar nos chats encontrados
       for($i=0; $i < $collectForumDiscussao.length; $i++)
       {
       _navigateTo('http://ava.brazcubas.br/course/mod.php?sesskey='+$loggedSesskey+'&sr=0&delete='+$varIdDelete[$i]);
       _wait(3000);
       _click(_submit("Sim"));
       _wait(3000);
       };
   }

   //limpando a array
   $varIdDelete.length = 0;
};


//-------------------------------------------------------FÓRUM DÚVIDAS
//função para procurar qtd de fóruns de dúvudas(fórum) e deleta-los do ava atual
function procura_deletaFDuvidas()
{
    $collectForumDuvidas = _collect('_span', '/Fórum de dúvidas.*/', _in(_div('region-content')));
    //array para receber os ID dos Fóruns
    $varIdDelete = new Array;

    for($i=0; $i < $collectForumDuvidas.length; $i++)
    {
    $urlParentNode=_getAttribute(_parentNode($collectForumDuvidas[$i]),'href');
    $varIdDelete[$i]= String($urlParentNode).substr(46);
    }//for


    //acessa aos fóruns
    if($collectForumDuvidas.length > 0)
    {
        //loop para passar nos chats encontrados
        for($i=0; $i < $collectForumDuvidas.length; $i++)
        {
        _navigateTo('http://ava.brazcubas.br/course/mod.php?sesskey='+$loggedSesskey+'&sr=0&delete='+$varIdDelete[$i]);
        _wait(3000);
        _click(_submit("Sim"));
        _wait(3000);
        };//for
    }//if

    //limpando a array
    $varIdDelete.length = 0;
};


//-------------------------------------------------------SUMÁRIO
//array de objetos para contém texto dos nomes e descrições para os sumários encontrados (unidadeI até enceramento)
$textoSumarios = new Array(
    uniddadeI={titulo:'Unidade I – PERÍODO DE: 29/09 a 04/10', texto:'<p>Para esta semana, você tem:</p> <table> <tbody> <tr> <td><img src="http://bc-media.s3.amazonaws.com/images/stickNote.png" width="48" height="65"> <span style="text-align: center; margin-top: -42px; width: 47px; display: block;"><strong>Até 13/10</strong> </span> </td> <td> <p style="margin-bottom: 0;">Uma atividade virtual objetiva que deverá ser respondida diretamente no ícone “Atividade Unidade 1” em seu AVA. </p> </td> </tr> </tbody> </table> <p>Prepare-se e organize seus estudos conforme as indicações abaixo:</p> <p>1º) Faça a leitura da <strong>unidade I</strong> do <strong>livro didático</strong> , assista a <strong>primeira teleaula</strong> e consulte os materiais complementares, quando disponibilizados. Além de buscar outras fontes (seguras) de pesquisa.</p><p>2º) Em caso de dúvida, envie uma mensagem ao seu professor ou tutor.</p> <div style="border: solid 1px #000000; -webkit-border-radius: 10px; -moz-border-radius: 10px; border-radius: 10px; padding: 5px;"> <p><b>Importante: </b>a conclusão dessa atividade deve ser feita na plataforma, não é necessário entregar nada no polo de apoio presencial.</p> </div>'},
    uniddadeII={titulo:'Unidade II – PERÍODO DE: 06/10 a 11/10', texto:'<p>Para esta semana, você tem:</p> <table> <tbody> <tr> <td><img src="http://bc-media.s3.amazonaws.com/images/stickNote.png" width="48" height="65"> <span style="text-align: center; margin-top: -42px; width: 47px; display: block;"><strong>Até 20/10</strong> </span> </td> <td> <p style="margin-bottom: 0;">Uma atividade virtual objetiva que deverá ser respondida diretamente no ícone “Atividade Unidade 2” em seu AVA. </p> </td> </tr> </tbody> </table> <p>Prepare-se e organize seus estudos conforme as indicações abaixo:</p> <p>1º) Faça a leitura da <strong>unidade I</strong> do <strong>livro didático</strong> , assista a <strong>primeira teleaula</strong> e consulte os materiais complementares, quando disponibilizados. Além de buscar outras fontes (seguras) de pesquisa.</p><p>2º) Em caso de dúvida, envie uma mensagem ao seu professor ou tutor.</p> <div style="border: solid 1px #000000; -webkit-border-radius: 10px; -moz-border-radius: 10px; border-radius: 10px; padding: 5px;"> <p><b>Importante: </b>a conclusão dessa atividade deve ser feita na plataforma, não é necessário entregar nada no polo de apoio presencial.</p> </div>'},
    uniddadeVer={titulo:'Avaliação de Verificação – PERÍODO DE: 20/10 a 25/10', texto:'<p>Nesse momento, você realizará uma atividade que vamos chamar de <strong>“AVALIAÇÃO DE VERIFICAÇÃO”</strong> . Para realizar essa atividade você deverá estudar os conteúdos das semanas anteriores, pois ela é uma atividade de integração de conteúdos.</p> <p>A realização da <b>Avaliação de Verificação</b> deverá ser entregue pelo ícone “Avaliação de Verificação”.</p><p>Em caso de dúvida, envie uma mensagem ao seu professor ou tutor.</p> <table> <tbody> <tr> <td><img src="http://bc-media.s3.amazonaws.com/images/stickNote.png" width="48" height="65"> <span style="text-align: center; margin-top: -42px; width: 47px; display: block;"><strong>Até 29/10</strong> </span> </td> <td> <p style="margin-bottom: 0;">Prazo para entrega da avaliação.</p> </td> </tr> </tbody> </table>'},
    uniddadeIII={titulo:'Unidade III – PERÍODO DE: 27/10 a 01/11', texto:'<p>Para esta semana, você tem:</p> <table> <tbody> <tr> <td><img src="http://bc-media.s3.amazonaws.com/images/stickNote.png" width="48" height="65"> <span style="text-align: center; margin-top: -42px; width: 47px; display: block;"><strong>Até 10/11</strong> </span> </td> <td> <p style="margin-bottom: 0;">Uma atividade virtual objetiva que deverá ser respondida diretamente no ícone “Atividade Unidade 3” em seu AVA. </p> </td> </tr> </tbody> </table> <p>Prepare-se e organize seus estudos conforme as indicações abaixo:</p> <p>1º) Faça a leitura da <strong>unidade I</strong> do <strong>livro didático</strong> , assista a <strong>primeira teleaula</strong> e consulte os materiais complementares, quando disponibilizados. Além de buscar outras fontes (seguras) de pesquisa.</p><p>2º) Em caso de dúvida, envie uma mensagem ao seu professor ou tutor.</p> <div style="border: solid 1px #000000; -webkit-border-radius: 10px; -moz-border-radius: 10px; border-radius: 10px; padding: 5px;"> <p><b>Importante: </b>a conclusão dessa atividade deve ser feita na plataforma, não é necessário entregar nada no polo de apoio presencial.</p> </div>'},
    uniddadeIV={titulo:'Unidade IV E REVISÃO– PERÍODO DE: 10/11 a 14/11', texto:'<p>Para esta semana, você tem:</p> <table> <tbody> <tr> <td><img src="http://bc-media.s3.amazonaws.com/images/stickNote.png" width="48" height="65"> <span style="text-align: center; margin-top: -42px; width: 47px; display: block;"><strong>Até 18/11</strong> </span> </td> <td> <p style="margin-bottom: 0;">Uma atividade virtual objetiva que deverá ser respondida diretamente no ícone “Atividade Unidade 4” em seu AVA. </p> </td> </tr> </tbody> </table> <p>Prepare-se e organize seus estudos conforme as indicações abaixo:</p> <p>1º) Faça a leitura da <strong>unidade I</strong> do <strong>livro didático</strong> , assista a <strong>primeira teleaula</strong> e consulte os materiais complementares, quando disponibilizados. Além de buscar outras fontes (seguras) de pesquisa.</p><p>2º) Em caso de dúvida, envie uma mensagem ao seu professor ou tutor.</p> <div style="border: solid 1px #000000; -webkit-border-radius: 10px; -moz-border-radius: 10px; border-radius: 10px; padding: 5px;"> <p><b>Importante: </b>a conclusão dessa atividade deve ser feita na plataforma, não é necessário entregar nada no polo de apoio presencial.</p> </div>'},
    uniddadeEnc={titulo:'ENCERRAMENTO – PERÍODO DE: 17/11 a 22/11', texto:'<p>Chegamos ao final desta disciplina. É importante que você faça uma revisão no conteúdo e em suas principais dúvidas.</p> <p>Verifique se entregou todas as atividades e prepare-se para realizar, no polo de apoio presencial no qual está matriculado, a <strong>AVALIAÇÃO DA DISCIPLINA</strong> . Ela é presencial, sem consulta e individual. Você irá respondê-la no caderno de prova que não pode ser rasurado, conter erros, furos e/ou outras marcações que danifiquem a folha e impossibilite a leitura ótica.</p> <p>Se você realizou as atividades, está preparado para essa avaliação. Faça-a com segurança e tranquilidade.</p> <p><strong>Boa avaliação!</strong></p> <p><strong>Equipe Acadêmica EaD-UBC</strong></p>'}
);

//Paramentros de entrada
//  Entrada:    Array de objeto, que contenha:
//                                  titulo- para ser inserido no textbox("id_name")
//                                  texto - para ser inserido no textarea("id_summary_editor")
//Exemplo:
//$textoSumarios = new Array(
//    uniddadeI={titulo:'insira o aqui o texto do título', texto:'insira aqui o texto para descrição'}
//
function trocaTextoSumarios($textoSumarios)
{
    //troca texto:                  titulo e descrição

    //coletando sumarios de unidade I até encerramento
    $collectTopicSummary= _collect('_heading3', '/.*PERÍODO .*/' , _in(_div("region-content")));


    //loop para interagir com os tópicos
    for ($i = 0; $i < $collectTopicSummary.length; $i++)
    {
        _wait(2000);
        //link para editar sumarios das unidades
        _click(_link('Editar sumário', _under(_heading3($collectTopicSummary[$i]))));
        _wait(1000);

        //titulo
        _setValue(_textbox("id_name"), $textoSumarios[$i].titulo);
        //texto descrição
        _setValue(_textarea("id_summary_editor"), $textoSumarios[$i].texto);

        //salvando alterações
        _click(_submit("submitbutton"));
        _wait(1500);
    };
};

//-------------------------------------------------------ATIVIDADES
//array de objetos para setar nome e prazo de realização das atividades
$textoAtividade = new Array(
    uniddadeI={titulo:'Atividade Unidade I - prazo 13/10', diaI:'29', mesI:'9', anoI:'2014', diaF:'13', mesF:'10', anoF:'2014', horaF:'23', minutoF:'59'},
    uniddadeII={titulo:'Atividade Unidade II - prazo 20/10', diaI:'6', mesI:'10', anoI:'2014', diaF:'20', mesF:'10', anoF:'2014', horaF:'23', minutoF:'59'},
    uniddadeVer={titulo:'Avaliação de verificação - prazo 29/10', diaI:'20', mesI:'10', anoI:'2014', diaF:'29', mesF:'10', anoF:'2014', horaF:'23', minutoF:'59'},
    uniddadeIII={titulo:'Atividade Unidade III - prazo 10/11', diaI:'27', mesI:'10', anoI:'2014', diaF:'10', mesF:'11', anoF:'2014', horaF:'23', minutoF:'59'},
    uniddadeIV={titulo:'Atividade Unidade IV - prazo 18/11', diaI:'10', mesI:'11', anoI:'2014', diaF:'18', mesF:'11', anoF:'2014', horaF:'23', minutoF:'59'}
);

//função para alterar nome e data das atividades encontradas.
function trocaTextoDataAtividade($textoAtividade)
{
    //atividades
    $collectTopicAtv= _collect('_span', '/.*- prazo.*/', _in(_div("region-content")));


    //array para receber os ID dos Fóruns
    $varIdUpdate = new Array;

    for($i=0; $i < $collectTopicAtv.length; $i++)
    {
    $urlParentNode=_getAttribute(_parentNode($collectTopicAtv[$i]),'href');
    $varIdUpdate[$i]= String($urlParentNode).substr(45);//quiz
    }//for


    if($collectTopicAtv.length > 0)
    {

        for ($i = 0; $i < $collectTopicAtv.length; $i++)
        {

        _navigateTo('http://ava.brazcubas.br/course/mod.php?sesskey='+$loggedSesskey+'&sr=0&update='+$varIdUpdate[$i]);
        _wait(3000);

        //expandindo opções
        _click(_link("Expandir tudo"));
        //titulo
        _setValue(_textbox("id_name"), $textoAtividade[$i].titulo);
        _wait(3000);

        //ativando checkbox das datas
        _check(_checkbox("id_timeopen_enabled"));
        _check(_checkbox("id_timeclose_enabled"));

        //atribui datas desejadas
        _setSelected(_select("timeopen[day]"), $textoAtividade[$i].diaI);
        _setSelected(_select("timeopen[month]"), $textoAtividade[$i].mesI);
        _setSelected(_select("timeopen[year]"), $textoAtividade[$i].anoI);
        _wait(1500);

        //definindo a data de termino para acesso ao conteúdo do tópico corrente

        //atribui datas desejadas
        _setSelected(_select("timeclose[day]"), $textoAtividade[$i].diaF);
        _setSelected(_select("timeclose[month]"),$textoAtividade[$i].mesF);
        _setSelected(_select("timeclose[year]"), $textoAtividade[$i].anoF);
        _setSelected(_select("timeclose[hour]"), $textoAtividade[$i].horaF);
        _setSelected(_select("timeclose[minute]"), $textoAtividade[$i].minutoF);
        _wait(1500);

        _click(_submit("submitbutton2"));
        _wait(1500);

        };//for
    }//if
    //limpando a array
    $varIdUpdate.length = 0;

};

$disciplinasID = new Array({ava:1562}, {ava:1524});

//chamando a Função de acesso aos AVAs da array
acessaAVA($disciplinasID,'ava');

function acessaAVA($id_AVAS, $nomepropriedade)
{
  $url = "http://ava.brazcubas.br/course/view.php?id=";
  //$url = "http://54.207.51.47/BETA/course/view.php?id=";
  for(var $posicao in $id_AVAS)
  {
    //verificação se dentre o indice da propriedade ava não é string, se não for
    //ele pega e concatena na url do ava que queremos acessar
    _navigateTo($url+$id_AVAS[$posicao][$nomepropriedade]);

    _wait(2000);
    ////chamada de funções
    //procuraTopicosVazios();
    //_wait(1000);
    //procura_deletaChatOnline();
    //_wait(1000);
    //procura_deletaFDiscussao();
    //_wait(1000);
    //procura_deletaFDuvidas();
    //_wait(1000);
    trocaTextoSumarios($textoSumarios);
    //_wait(1000);
    //trocaTextoDataAtividade($textoAtividade);

  };
}


//-------------------------------------------------------TÓPICOS VAZIOS
//Variação para usar essa função de forma individual
function procuraTopicosVazios($avaListIds)
{
  //looping que faz a remoção em mais de um ava
    for ($i = 0; $i < $avaListIds.length; $i++) {
      _navigateTo($str_url+'course/view.php?id='+$avaListIds[$i]);
    _wait(2000);
      //traz qtde de tópicos q estão sobrando e retira da página(oculta, reduz a visão)
    $collectTopic= _collect('_heading3', '/Tópico .*/', _in(_div('region-content')));
    if($collectTopic.length > 0)
    {
        for($j=0; $j < $collectTopic.length; $j++)
        {
        _click(_link("reduce-sections"));
        _wait(3000);
        }
        $collectTopic.length=0;
    }
  }
}
