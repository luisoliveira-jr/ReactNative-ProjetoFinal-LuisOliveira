/*Código Login
FATEC Barueri - Design de Mídias Digitais
Programação para Mobile II
Professora Denise Lemes Fernandes Neves
Luis Carlos Oliveira Santos Junior*/

import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';

import logo from './../img/logo.jpg';

export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>

        <Image source={logo} style={styles.logo} />

        <Text style={styles.titulo}>
          <b>CONTRATO DE ASSINATURA</b>
          <p></p><b>X-PROFESSIONALS ONLINE LTDA.</b>, com sede no Estado de São Paulo, Município de Barueri, na Alameda Juari, nº 262, 1º, 2º, 4º e 5º andares, Tamboré, CEP 06460-090, inscrita no CNPJ/MF sob nº. 03.753.088/0001-00, constituída e devidamente representada na forma do seu Contrato Social, doravante denominada, simplesmente por X-PROFESSIONALS; e,

          <p></p><b>PESSOA FÍSICA</b>, neste ato portadora dos documentos informados e devidamente cadastrados em nosso banco de dados e identificados pelo seu nome de identificação, por meio de seu login e senha ("ASSINANTE").

          <p></p>Este é um contrato entre você (ASSINANTE) e nós (X-PROFESSIONALS). Ele descreve os serviços que forneceremos a você, como trabalharemos juntos e outros aspectos da nossa relação comercial. É um documento legal e, por isso, parte da linguagem inclui "termos legais", mas, considerando o nosso compromisso de transparência e simplicidade tentamos reduzir o contrato e deixá-lo o mais claro possível.

          <p></p>Este contrato é tão importante que não podemos fornecer o nosso produto a você, sem antes obter o seu aceite. Ao assinar eletronicamente o presente contrato você está tomando conhecimento prévio do contrato em nosso SITE, tendo, inclusive, a possibilidade de imprimi-lo e avaliá-lo. Em caso de dúvidas, nos contate pelo tel.: (11) 4134-3579 ou no e-mail: oi.consultoria@X-Professionals.com. Ficaremos felizes em poder ajudá-lo.

          <p></p>Aqui você terá um resumo dos principais pontos do nosso contrato, conhecendo seus principais direitos e também obrigações.

          <p></p><b>SEUS PRINCIPAIS DIREITOS</b>

          <p></p>(a) Utilizar a sua assinatura para buscar vagas de acordo com o seu perfil profissional, enviar currículos via nossa plataforma, ter os benefícios e acesso às funcionalidades específicas do plano contratado, receber orientações do nosso Consultor Virtual e ter direitos a conteúdos diversos sobre carreira e empregabilidade;
          (b) Visualizar a qualquer momento as condições da sua contratação, com informações relacionadas à data da contratação, plano de pagamento escolhido entre outras informações sobre as suas despesas;
          (c) Ser atendido pela nossa Equipe de atendimento, através de chat online, e-mail ou telefone, observados os horários estabelecidos pela nossa Central de Relacionamento;
          (d) Cancelar a sua assinatura.

          <p></p><b>SUAS PRINCIPAIS OBRIGAÇÕES</b>

          (a) Estar em dia com os seus pagamentos, evitando bloqueio ou cancelamento da sua assinatura por falta de pagamento quando se tratar de plano pago;
          (b) Manter seus dados cadastrais e currículo atualizados;
          (c) Proteger seu login e senha, nunca os divulgando nem permitindo o seu uso por terceiros.

          <p></p>Agora vamos listar, de forma resumida, o assunto de cada cláusula do Contrato. É bem resumido mesmo com a intenção de dar a você uma visão geral do contrato.

          <p></p><b>Cláusula 1:</b> traz as características básicas da assinatura contratada e descreve as suas funcionalidades;
          <p></p><b>Cláusula 2:</b> traz detalhes sobre os procedimentos de pagamento, prazo do contrato e também sobre as diferentes situações em que o Contrato poderá ser terminado;
          <p></p><b>Cláusula 3:</b> traz informações sobre a “Promoção 30 dias Gratuitos”;
          <p></p><b>Cláusula 4:</b> relata os procedimentos de como você deve usar a ferramenta e o que não deve fazer;
          <p></p><b>Cláusula 5:</b> trata dos direitos e obrigações da X-PROFESSIONALS;
          <p></p><b>Cláusula 6:</b> trata dos seus direitos e obrigações;
          <p></p><b>Cláusula 7:</b> traz detalhes de como são feitas e comunicadas a você quaisquer alterações ao Contrato;
          <p></p><b>Cláusula 8:</b> traz detalhes de como poderão ser feitos os reajustes de preço do Contrato;
          <p></p><b>Cláusula 9:</b> traz detalhes sobre a marca e toda a propriedade intelectual da X-PROFESSIONALS e as obrigações a serem observadas por você;
          <p></p><b>Cláusula 10:</b> traz detalhes sobre a realização de testes na plataforma durante o uso, para permitir a publicação de melhorias para a sua experiência de Usuário;
          <p></p><b>Cláusula 11:</b> trata de disposições gerais do Contrato estabelecidas para tratar de diferentes assuntos relacionados à sua assinatura.
          <p></p><b>Cláusula 12:</b> trata da segurança no uso e operação da plataforma
          <p></p><b>Cláusula 13:</b> trata do conteúdo e dados submetidos a plataforma por USUÁRIOS, uso da plataforma e dados de propriedade do USUÁRIO
          <p></p><b>Cláusula 14:</b> trata da proteção dos dados pessoais
          <p></p><b>Cláusula 15:</b> trata da isenção e limitação de responsabilidades
          <p></p><b>Cláusula 16:</b> Trata das disposições finais

          <p></p><b>1. OBJETO</b>

          <p></p>1.1. Pelo presente contrato você passa a ter direito à disponibilização por meio do nosso website www.X-Professionals.com.br (“Site”) as seguintes funcionalidades: (1) divulgação, visualização, inclusão e alteração do seu currículo;(2) busca de vagas; (3) envio de currículo via e-mail (Sistema Click); (4) orientações sobre busca de vagas pela ferramenta denominada Consultor Virtual; (5) acessar conteúdos relacionados à carreira e empregabilidade.

          <p></p>1.2. AO EFETUAR A PRESENTE CONTRATAÇÃO, VOCÊ TEM CONHECIMENTO DE QUE NÃO OFERECEMOS QUAISQUER GARANTIAS À CONTRATAÇÃO OU GARANTIAS PRESENTES OU FUTURAS DE RECOLOCAÇÃO OU OBTENÇÃO DE EMPREGO.

          <p></p><b>2. PAGAMENTO, PRAZO DO CONTRATO E CANCELAMENTO</b>

          <p></p>2.1. Este Contrato terá início na data da sua adesão e vigerá por prazo indeterminado. Você desde já nos autoriza, bem como à empresa autorizadora do débito (banco ou administradora de cartões de crédito) a efetuar a cobrança na forma e meio escolhidos no momento da contratação em nosso SITE.

          <p></p>2.1.1. O PLANO DE PAGAMENTO ESCOLHIDO POR VOCÊ NÃO SE CONFUNDE COM A VIGÊNCIA DESTE CONTRATO QUE É INDETERMINADA. O FATO DE VOCÊ OPTAR POR UMA FORMA E PRAZO ESPECÍFICO DE PAGAMENTO NÃO DETERMINA A VIGÊNCIA DESTE CONTRATO, QUE SERÁ SEMPRE INDETERMINADA.

          <p></p>2.2. Caso você não efetue o pagamento da obrigação devida por conta desse Contrato, nós nos reservamos ao direito de não disponibilizarmos as funcionalidades aqui previstas.

          <p></p>2.3. Você poderá solicitar o cancelamento da sua assinatura na “Área do Candidato” ao clicar no link “Cancelar a Assinatura” e em seguida responder a uma pesquisa de qualidade. Para realizar a solicitação de cancelamento você deverá estar adimplente com os seus pagamentos.

          <p></p>2.3.1. Você poderá realizar o cancelamento da sua assinatura por meio das opções: a) “Cancelamento Programado”; ou b) “Rescisão Imediata“. Na opção“Cancelamento Programado”, o cancelamento será programado na data final do plano de pagamento escolhido. Na opção “Rescisão Imediata”, se você tiver escolhido o plano de pagamento trimestral, semestral ou anual e já estiver utilizando seu acesso há mais de um mês, poderá efetuar o cancelamento imediato, hipótese que realizará o pagamento apenas do período em que a assinatura permaneceu ativa, considerando:(I) A PERDA INTEGRAL DO DESCONTO DECORRENTE DO PLANO DE PAGAMENTO CONTRATADO; (II) O PAGAMENTO PELOS PRODUTOS AVULSOS OFERECIDOS PROMOCIONALMENTE EM DECORRÊNCIA DO PLANO DE PAGAMENTO CONTRATADO.

          <p></p>2.3.1.1. Se você optar pela “Rescisão Imediata”, eventual crédito a ser restituído ou débito a ser cobrado, será realizado da mesma forma escolhida por você para pagamento do plano contratado.

          <p></p>2.4. Nós oferecemos ainda a opção de “Congelamento” do seu contrato. O congelamento poderá ser escolhido por uma única vez, hipótese em que ocorrerá a suspensão da sua assinatura. Nessa situação, você permanecerá com um crédito conosco, correspondente aos dias restantes do seu plano, podendo utilizar esse crédito a qualquer momento, usando o mesmo login e senha no Site, sem qualquer custo adicional,DENTRO DO PRAZO DE ATÉ DOIS ANOS A CONTAR DO CONGELAMENTO DA SUA ASSINATURA. CASO VOCÊ NÃO REALIZE O “DESCONGELAMENTO” NO PRAZO MENCIONADO, O CONTRATO SERÁ AUTOMATICAMENTE CANCELADO.

          <p></p>2.5. Primando sempre pela segurança dos dados e informações dos nossos clientes, poderemos cancelar o presente Contrato, mediante comunicação por e-mail a você, sem qualquer ônus, caso seja constatado em nossos processos de inspetoria, auditoria e qualidade, incluindo, mas não se limitando a indício de fraude, irregularidades, inconsistências, duplicidade de dados cadastrais ou utilização indevida de dados de terceiros.

          <p></p>2.6. Em qualquer das hipóteses de cancelamento, sempre que for realizado o cancelamento da assinatura, você receberá um comprovante escrito do cancelamento, o qual será encaminhado, por e-mail, dentro do prazo de 24 (vinte e quatro) horas.

          <p></p><b>3. PROMOÇÃO 30 DIAS GRATUITOS</b>
          <p></p>3.1. Ao realizar a contratação da sua assinatura escolhendo método e plano de pagamento válidos, você poderá participar da “Promoção 30 dias Gratuitos”. O acesso gratuito à Assinatura será concedido por 30 (trinta) dias corridos. Os dias do período promocional serão contabilizados normalmente, independentemente de coincidir com finais de semana ou feriados.
          <p></p>3.2. Lembrando que você poderá participar da promoção por uma única vez, sendo assim, nas hipóteses de reativação e/ou nova contratação de assinatura, os 30 (trinta) dias gratuitos não serão concedidos novamente, exceto em condições especiais ou ofertas promocionais.
          <p></p>3.3. Caso você não queira continuar com a gente, deverá solicitar o cancelamento da sua assinatura dentro do período promocional, ou seja, até o 30º (trigésimo) dia da contratação, hipótese em que nenhuma quantia será cobrada. Mas caso optar pela continuidade do plano contratado após o seu período promocional, ou seja, sem a manifestação de cancelamento até o 30º (trigésimo) dia após a contratação, nós procederemos com a cobrança dos valores devidos de acordo com o plano de pagamento escolhido.
          <p></p>3.4. VOCÊ FICA DESDE JÁ CIENTE QUE SOMENTE PODERÁ UTILIZAR A "PROMOÇÃO DOS 30 DIAS GRATUITOS" APÓS A EFETIVA CONTRATAÇÃO DA ASSINATURA.
          <p></p>3.5. A X-PROFESSIONALS reserva para si o direito de ofertar período de gratuidade com quantidade de dias diversos do previsto aqui, sob seu exclusivo critério, essa informação será passada a você no momento da oferta.

          <p></p><b>4. USO E LIMITAÇÕES DE USO</b>

          <p></p>4.1. Você cumprirá a nossa Política de Privacidade disponível em nosso site através do endereço: https://www.X-Professionals.com.br/institucional/privacidade-relacionamento/.

          <p></p>4.2. Você não vai: (i) apresentar inveracidades, divergências de dados ou que não estejam compatíveis com as nossas políticas de uso; (ii) realizar procedimento indevido, como tentar acessar ou acessar páginas que não estejam claramente colocados à disposição do público, que sejam de uso reservado ou protegido por senha de outrem, que tenham qualquer tipo de limitação de acesso ou que estejam em diretórios internos do Site; (iii) usar dados divergentes envolvendo o nome e o número de CPF fornecido; (iv) realizar o compartilhamento dos conteúdos disponíveis em nosso site destinados a Usuários pagantes ou não, exceto se por links do próprio site da X-PROFESSIONALS, seja em redes sociais, por e-mail, ou quaisquer outros meios de divulgação.

          <p></p>4.3. Você é o único responsável: (i) pela veracidade de seus dados, tais como seu CPF ou, CPF de um responsável legal informado, bem como dos dados cadastrados para cobrança e demais informações, as quais deverão estar sempre completas e atualizadas; (ii) pela correta utilização de seu login e senha, que são de uso pessoal e intransferível; (iii) pelo conteúdo e veracidade das informações contidas em seu currículo; (iv) por qualquer atividade que ocorra no âmbito de seus acessos; (v) por seu acesso à internet, respondendo isoladamente, portanto, por quaisquer ônus e/ou sanções civis e/ou penais que eventualmente decorram de erro ou dolo porventura cometido quando da utilização indevida do Site; e ainda (vi) por atos que terceiros praticarem em seu nome, por meio de uso de seu login e senha de acesso.

          <p></p>4.4. Em qualquer das hipóteses de uso indevido elencados nesse capítulo, ou caso se comprove qualquer procedimento indevido, inveracidade ou divergências de dados que não sejam compatíveis com as nossas políticas, nós poderemos excluir o seu registro de login e senha, bem como realizar a exclusão do seu currículo da nossa plataforma, sem que isso importe em quaisquer ônus para a X-PROFESSIONALS.

          <p></p>4.5. Você nos autoriza a manter as informações constantes em seu cadastro em nossa base de dados, bem como realizar o fornecimento das informações à: (i) autoridades públicas competentes que as solicitarem formalmente, nos termos da Constituição Federal Brasileira e legislação aplicável; (ii) parceiros estratégicos, comerciais ou técnicos.

          <p></p>4.6. Ao aderir a este Contrato, você nos autoriza expressamente a manter o seu currículo em nossa base de dados, bem como qualquer outra informação que você porventura vier a incluir no Site, tais como, mas não se limitando a cartas de apresentação, cartas de referência, pesquisas de qualidade e outras informações relacionadas, podendo utilizá-las exclusivamente para fins de divulgação em nosso Site. Você está ciente e concorda que poderá revogar tal autorização mediante simples comunicação por e-mail, a qualquer momento, sem nenhum prejuízo.

          <p></p>4.7. Você também nos autoriza a usar o seu nome, imagem do perfil, dados inseridos em seu currículo e em outros campos disponíveis no site, sem que haja qualquer compensação financeira.

          <p></p>4.8. Você está ciente que nós registraremos os dados de utilização da nossa plataforma para fins estatísticos, por exemplo, número de currículos enviados por você e empresas que visualizaram o seu currículo, isso tem o objetivo de dar maior transparência sobre a usabilidade, bem como você ter feedback sobre as interações realizadas na plataforma. Nós poderemos exibir essas informações a você na “Área do Candidato” e também encaminhar pelos canais de comunicação, caso você seja um ASSINANTE pagante.

          <p></p><b>5. NOSSOS DIREITOS E OBRIGAÇÕES</b>

          <p></p>5.1. Permitir acesso à ferramenta 24 (vinte e quatro) horas por dia e 07 (sete) dias por semana, no entanto, por se tratar de uma ferramenta online, tendo inclusive a dependência de serviços de telecomunicações prestados por terceiros e suscetíveis à falhas, você reconhece que poderá, eventualmente, ocorrer a interrupção ou suspensão do acesso, sem que isso importe em responsabilidade para nós ou desobrigue você a realizar os pagamentos devidos.

          <p></p>5.2. Atualizamos as funcionalidades periodicamente, adicionando ou excluindo recursos e funções, em um esforço para melhorar a sua experiência. Desta forma, nos reservamos o direito de: (i) efetuar eventuais manutenções, visando melhorias na qualidade das ferramentas e conteúdos disponibilizados, independente de prévio aviso; (ii) efetuar modificações ou alterações, independente de prévio aviso, quando da existência de situações extraordinárias ou imprevisíveis.

          <p></p><b>6. SEUS DIREITOS E OBRIGAÇÕES</b>

          <p></p>6.1. Pagar o serviço objeto deste contrato na forma e prazo escolhidos no momento em que optar pelo plano pago.

          <p></p>6.2. Providenciar, por conta própria, o acesso à internet, sendo este de sua responsabilidade única e exclusiva.

          <p></p>6.3. Utilizar corretamente seu login e senha, que são de uso pessoal e intransferíveis, mantendo seus dados cadastrais atualizados, respondendo isoladamente por quaisquer ônus e ou sanções civis e ou penais que eventualmente decorram de erro ou dolo porventura cometido na utilização do SITE. É de sua única e exclusiva responsabilidade o acesso à rede mundial de computadores (internet), para uso da sua assinatura.

          <p></p>6.4. Você é o único e exclusivo responsável pelo envio de currículos para as vagas cadastradas em nosso Site.

          <p></p><b>7. ALTERAÇÃO DE CONTRATO</b>

          <p></p>7.1. A X-PROFESSIONALS poderá eventualmente modificar os termos deste contrato sem aviso prévio, sendo que, neste caso, você deverá acessar o Site para verificar eventuais atualizações.

          <p></p><b>8. REAJUSTE DE PREÇO</b>

          <p></p>8.1. O preço da assinatura para os planos pagos poderá ser reajustado a cada 12 (doze) meses, a contar da data da efetivação da contratação, com base na variação positiva do IGP-M ou, em caso de extinção, por outro índice que vier a substituí-lo, sendo que, em caso de variação negativa o valor será mantido.

          <p></p><b>9. PROPRIEDADE INTELECTUAL</b>

          <p></p>9.1. Você reconhece que é de nossa titularidade toda a propriedade intelectual empregada no Site www.X-Professionals.com.br ou em qualquer material criado ou disponibilizado pela X-PROFESSIONALS. Tal propriedade intelectual engloba o seguinte: (a) marcas, denominações sociais, nomes de serviços, slogans, trade dress, logotipos, nome de domínio da internet e outros sinais distintivos, assim como todos os pedidos, registros, extensões e renovações relacionadas;(b) patentes, pedidos de patente e todas as renovações relacionadas, modelos de utilidade, pedidos de modelos de utilidade, certificados de adição, pedidos de certificados de adição, extensões e renovações relacionadas e registros de invenções; (c) registros de desenhos industriais e pedidos de registros de desenho industrial, extensões e renovações relacionadas; (d) direitos autorais, programas de computador, layouts, formas de apresentação, combinações de cores,códigos fonte e registros e pedidos de registro relacionados; (e) Segredos industriais e know-how.

          <p></p>9.2. Você se compromete a não violar, reproduzir, imitar, total ou parcialmente, qualquer propriedade intelectual da X-PROFESSIONALS, bem como a não utilizar qualquer propriedade intelectual para quaisquer finalidades além das previstas neste contrato e permitidas por lei.

          <p></p><b>10. REALIZAÇÃO DE TESTES NA PLATAFORMA X-PROFESSIONALS</b>

          <p></p>10.1. A X-PROFESSIONALS trabalha continuamente para atualizar, substituir ou ampliar as funcionalidades disponíveis na plataforma, sempre focado em proporcionar melhores experiências aos Usuários. Para permitir o lançamento do conteúdo produzido é imprescindível a realização de testes para que possamos compreender o que faz mais sentido e mais se adapta às preferências dos Usuários.

          <p></p>10.2. Você Usuário fica ciente de que ao criar uma conta aqui, será elegível aos testes que consistem em ter monitoramento do comportamento durante o uso da aplicação. Assim, ao concluir o cadastro, e iniciar o acesso, independente da opção por uma assinatura e plano de pagamento estará vinculado a estas regras e concorda em participar dos testes.

          <p></p>10.3. A X-Professionals declara que os testes aqui mencionados visam entender o comportamento e preferências dos Usuários durante o uso, sob perspectiva despersonalizada, isto é, sem identificá-lo pessoalmente, logo, buscará, na medida do possível, tratar e compreender os resultados obtidos a partir do monitoramento de um grupo de Usuários, e não sob a perspectiva individualizada, respeitando a privacidade por padrão.

          <p></p>10.4. Os testes que serão realizados abrangerão as interfaces de Usuários, tanto em dispositivos desktop, quanto móveis, a disponibilidade de ofertas, promoções, planos de pagamento, opções de pagamento, entre outros.

          <p></p>10.5. Tanto quanto o desenvolvimento de novas funcionalidades, a conclusão dos testes poderá implicar na descontinuidade de alguma característica.

          <p></p>10.6. Se você Usuário não concorda que seu comportamento ou experiência de acesso sejam impactadas pelas iniciativas de teste, você deverá encerrar o seu acesso imediatamente, ou então cancelar sua assinatura, caso seja Usuário pagante em nossa plataforma.

          <p></p><b>11. CONDIÇÕES GERAIS</b>

          <p></p>11.1. As cláusulas apresentadas no presente contrato estarão aceitas a partir do momento em que você concordar, clicando o botão "QUERO CONTINUAR" ou quando manifestar a sua concordância ao(s) nosso(s) atendente(s) pelo telefone ou e-mail. No caso de compra realizada pelo telefone ou e-mail, o presente contrato e o comprovante de compra serão enviados ao e-mail cadastrado.

          <p></p>11.2. Na impossibilidade de você ser caracterizado como responsável, as obrigações apresentadas neste contrato serão transferidas para seus responsáveis legais.

          <p></p>11.3. Considerando que a X-PROFESSIONALS não participa de negociações entre você e anunciantes, recrutadores ou demais terceiros, bem como que são as empresas anunciantes responsáveis pelo descritivo dos anúncios de emprego constantes em nossa plataforma, você reconhece e concorda expressamente que a X-PROFESSIONALS não poderá ser responsabilizada por perdas e danos de qualquer espécie que venham a ser conhecidas em decorrência de:

          <p>(a) recrutadores que lhe exijam como condição para participação em processo seletivo anunciado - antes, durante ou após o seu término -, o pagamento de qualquer taxa ou valor para quaisquer fins, incluindo, mas não se limitando à emissão de passaporte, visto, custos de hospedagem, ou, ainda, a prestação de serviços sem a devida remuneração;
          (b) recrutadores que se refiram à pirâmide, sistema "trabalhe em casa", parcerias e correntes irregulares, ilegais ou imorais;
          (c) recrutadores que se refiram a serviços particulares, como por exemplo, diarista;
          (d) anúncios que contenham conotação preconceituosa, socialmente excludente ou que de alguma forma contrarie a Constituição Federal e seus princípios, a legislação vigente ou, ainda, direito de terceiros, salvo quando a natureza da atividade a ser exercida, pública e notoriamente, assim exigir;
          (e) anúncios que exijam ou requeiram do candidato à vaga, comprovação de experiência prévia por tempo superior a 6 (seis) meses no mesmo tipo de atividade;
          (f) que ofereçam serviços de consultoria distintos de uma oportunidade real de emprego;
          (g) anúncios em que o descritivo da vaga e ou perfil profissional solicitados não sejam condizentes com o ramo de atuação do anunciante ou da empresa titular da vaga anunciada.</p>

          <p></p>11.4. É expressamente vedada a cessão ou transferência deste contrato a terceiros, salvo de comum acordo entre as partes.

          <p></p>11.5. Você nos autoriza a contatá-lo por qualquer meio, inclusive telefônico, plataformas de comunicação, e-mail, SMS e correspondência, para enviar comunicações de seu interesse referentes a oferta, conteúdo publicitário, produtos ou serviços da X-Professionals e seus parceiros. Você poderá cancelar essa autorização a qualquer momento.

          <p></p>11.6. A eventual tolerância quanto a qualquer violação dos termos e condições deste contrato será considerada mera liberalidade e nem será interpretada como novação, renúncia ou alteração tácita de seus termos, e tampouco implicará na tolerância com qualquer violação de seus termos e condições.

          <p></p>11.7. Na forma da Lei, prevalecerá o foro do consumidor.

          <p></p>11.8. O acesso e utilização da plataforma é livre para todos, porém algumas funcionalidades como cadastros em determinados ambientes exigem que o Usuário seja capaz e maior de 18 (dezoito) anos, assim, sempre que aplicável, os representantes legais deverão supervisionar e representar as crianças e adolescentes com idade inferior a 16 (dezesseis) anos e assistir os adolescentes em idade superior à 16 (dezesseis) anos e inferior à 18 (dezoito) anos.

          <p></p>11.9. Nos termos deste contrato, X-PROFESSIONALS possui a faculdade de se recusar a conceder, suspender ou cancelar o cadastro de qualquer Usuário que utilizar a plataforma de maneira fraudulenta, violar ou tentar violar os presentes termos, a Política de Privacidade ou qualquer documento legal da X-Professionals.

          <p></p>11.10. É expressamente vedado ao Usuário utilizar informações cadastrais de terceiros.

          <p></p>11.11. A X-Professionals se compromete a preservar a funcionalidade e segurança da Plataforma mediante esforços razoáveis, considerando o estado da técnica.

          <p></p><b>12. SEGURANÇA NO USO E OPERAÇÃO DA PLATAFORMA</b>

          <p></p>12.1. Para eficiência desta cláusula, o Usuário deverá manter o sigilo dos dados de sua Conta de Acesso em relação a terceiros e utilizá-la de modo individual e intransferível, não disponibilizando, divulgando ou compartilhando sua senha ou qualquer mecanismo de autenticação com quem quer que seja. Caso suspeite que a confidencialidade de sua senha foi violada, o Usuário deverá proceder sua troca ou atualização o mais rápido possível. O Usuário está ciente e reconhece que todos os acessos e operações realizadas após sua autenticação digital bem-sucedida são interpretados como sendo de sua responsabilidade de forma incontestável, inclusive aqueles derivados de uso indevido ou divulgação desta para terceiros.

          <p></p>12.2. O Usuário se compromete a não acessar áreas de programação da plataforma, seu banco de dados, códigos fonte ou qualquer outro conjunto de dados disponíveis nestes ambientes, bem como não realizar ou permitir engenharia reversa, nem traduzir, decompilar, copiar, modificar, reproduzir, alugar, sublicenciar, publicar, divulgar, transmitir, emprestar, distribuir ou, de outra maneira, dispor inapropriadamente das funcionalidades da Plataforma.

          <p></p>12.3. É expressamente proibida a utilização de dispositivos, softwares, scripts, ou qualquer outro mecanismo de mineração de dados na plataforma, como robot, crawler, data mining, data scraping, além de outro aqui não tipificado que atue de modo similar.

          <p></p>12.4. Da mesma forma, é expressamente proibida qualquer forma de engenharia reversa, seja para desmontar, decifrar, descompilar ou de alguma maneira tentar copiar o código fonte ou qualquer outro conteúdo de Propriedade Intelectual disponível na plataforma. É proibida qualquer ação que possa comprometer as funcionalidades da plataforma.

          <p></p>12.5. Na incidência de danos à X-Professionals ou a terceiros, o responsável se compromete a arcar com todas as obrigações de indenizar o sujeito lesado, inclusive aqueles cuja origem for de atos praticados por meio de sua Conta de Acesso, assumindo o pólo passivo de ação judicial ou procedimento administrativo e requerendo a exclusão da X-Professionals, devendo arcar totalmente com as despesas e custas processuais atinentes, deixando-a livre de prejuízos e ônus.

          <p></p><b>13. CONTEÚDO E DADOS SUBMETIDOS A PLATAFORMA POR USUÁRIOS</b>

          <p></p>13.1. O Usuário é e continuará sendo o titular e proprietário de todos os dados, informações, textos, imagens, mensagens, vídeos, áudios, gráficos ou qualquer outro material de qualquer forma for submetido e/ou compartilhado por ele na plataforma (“Dados do Usuário”) bem como será o exclusivo responsável por eles, cabendo exclusivamente ao Usuário o cuidado em respeitar a propriedade intelectual de terceiros ou quaisquer outros direitos conexos.

          <p></p>13.2. A X-Professionals não se obrigará a processar ou tratar quaisquer dos Dados do Usuário se houver razões para crer que tal processamento ou tratamento possa imputar à X-Professionals qualquer infração de qualquer lei aplicável ou que a plataforma esteja sendo utilizada, sob critério exclusivo da X-Professionals, para quaisquer fins ilegais, ilícitos ou contrários à moralidade.

          <p></p>13.3. A X-Professionals não garante a qualidade, coerência, integridade, forma, atualização ou fonte do Conteúdo ou dos Dados do Usuário, pois não controla, verifica ou faz juízo deste Conteúdo e dos Dados do Usuário. A X-Professionals não é responsável, portanto, por quaisquer inveracidade, desatualização ou erro deste Conteúdo ou dos Dados do Usuário, bem como não é responsável por quaisquer danos oriundos deste Conteúdo, a qualquer título.

          <p></p>13.4. Sem prejuízo do disposto acima, o Usuário fica ciente e concorda que a X-Professionals não possui qualquer obrigação real ou presumida de publicar qualquer Conteúdo ou Dados dos Usuários, bem como poderá remover tal Conteúdo ou os Dados do Usuário com ou sem aviso prévio.

          <p></p>13.5. A plataforma não constitui serviço de armazenamento, portanto a X-Professionals não possui qualquer obrigação de armazenar, reter ou fornecer ao Usuário ou a quaisquer terceiros cópia dos Dados do Usuário ou qualquer Conteúdo.

          <p></p>13.6. A plataforma, de forma impessoal e automática, poderá aplicar modelos estatísticos e inteligência algorítmica para indexar, filtrar e organizar o Conteúdo ou os Dados do Usuário, gerados ou compartilhados por meio da Plataforma.

          <p></p>13.7. O Usuário se declara ciente que a X-Professionals, senão por seu exclusivo critério, não divulgará ou fornecerá ao Usuário ou a qualquer terceiro quaisquer informações sistêmicas ou algorítmicas relacionadas à Plataforma.

          <p></p><b>14. PRIVACIDADE E DADOS PESSOAIS</b>

          <p></p>14.1. As informações sobre a privacidade do Usuário e as práticas de proteção de dados pessoais adotadas pela X-Professionals podem ser encontradas na Política de Privacidade https://www.X-Professionals.com.br/institucional/privacidade-relacionamento e na Política de Cookies https://terms.funnel.X-Professionals.com.br/politica-cookies-privacidade-v1.html da Plataforma.

          <p></p>14.2. A X-Professionals monitorará, por meios adequados, sua própria conformidade com as respectivas obrigações de proteção de Dados Pessoais, caso aplicável.

          <p></p>14.3. A X-Professionals poderá registrar todas as atividades efetuadas pelo Usuário na plataforma, incluindo dados de identificação, do dispositivo e da conexão utilizada (“Registros”).

          <p></p>14.4. Os Registros poderão ser utilizados com a finalidade de: (i) identificar o Usuário e atendê-lo (ii) cumprir as obrigações deste Termo (iii) aperfeiçoar a plataforma; (iv) resguardar direitos e obrigações relacionadas ao uso da plataforma; (v) cumprir ordem judicial e/ou de autoridade administrativa; (vi) compartilhá-los com outras empresas ligadas à X-Professionals para que possam comunicar, fazer propaganda de seus produtos, funcionalidades e serviços ou difundir ainda mais amplamente o perfil do Usuário; (vi) compartilhar com outras empresas para testes de verificação das competências pessoais e profissionais do candidato; e (vi) compartilhá-los, através de aplicação do candidato em processos de seleção ou não, com a finalidade de ampliar a exposição do currículo e dados pessoais do Usuário em outras ferramentas e plataformas de vagas (cumprimento deste contrato), certo que na hipótese deste item (vi) será de inteira responsabilidade do agregador de vagas cumprir as normas de proteção de dados.

          <p></p><b>15. ISENÇÃO E LIMITAÇÕES DE RESPONSABILIDADE</b>

          <p></p>15.1. A X-Professionals envida seus esforços para a manutenção da disponibilidade contínua e permanente da plataforma. No entanto, pode ocorrer, eventualmente, alguma indisponibilidade temporária decorrente de manutenção necessária ou mesmo gerada por motivo de força maior, como desastres naturais, falhas nos sistemas de comunicação e acesso à Internet, ataques cibernético invasivos, ou quaisquer fatos de terceiro que fogem da esfera de vigilância e responsabilidade da X-Professionals.

          <p></p>15.1.1. Se isso ocorrer, a X-Professionals fará o que estiver ao seu alcance para restabelecer o acesso à plataforma o mais breve possível, dentro das limitações técnicas de seus serviços e serviços de terceiros, dos quais depende para ficar online. Por essa razão, o Usuário fica ciente que não poderá pleitear indenização ou reparação de danos no caso da Plataforma permanecer fora do ar, independente da motivação.

          <p></p>15.1.2. Eventuais procedimentos de manutenção que acarretem a indisponibilidade da plataforma por longos períodos serão informados por meio dos canais oficiais de comunicação da X-Professionals.

          <p></p>15.2. Sem prejuízo de outras condições destes Termos, a X-Professionals não se responsabiliza:

          <p>i. Por quaisquer problemas, bugs, glitches ou funcionamentos indevidos que ocorrerem nos dispositivos e equipamentos;
          ii. Por qualquer dano direto ou indireto ocasionado por eventos de terceiros, a exemplo, mas não se limitando a ataque de hackers, falhas no sistema, no servidor ou na conexão à internet, inclusive por ações de softwares que possam, de algum modo, danificar os ativos físicos ou lógicos do Usuário em decorrência do acesso, utilização ou navegação na Plataforma, bem como a transferência de dados, arquivos, imagens, textos, áudios ou vídeos contidos na Plataforma; iii. Pela navegação do Usuário em quaisquer links externos disponibilizados na Plataforma, sendo seus deveres a leitura dos Termos e Condições de Uso e da Política de Privacidade do recurso acessado e agir conforme o determinado; e iv. Por verificar, controlar, aprovar ou garantir a adequação ou exatidão das informações ou dados disponibilizados em tais links, não sendo, portanto, responsável por prejuízos, perdas ou danos ocorridos pela visita de tais sites, cabendo ao Usuário verificar a confiabilidade das informações e dados ali exibidos antes de tomar alguma decisão ou praticar algum ato.</p>

          <p></p><b>16. DISPOSIÇÕES FINAIS</b>

          <p></p>16.1. O descumprimento de quaisquer disposições destes Termos acarretará a exclusão do Usuário, podendo ser temporária ou definitiva a critério da X-Professionals, sem prejuízo às cominações legais pertinentes,independente de comunicação prévia.

          <p></p>16.2. O Usuário reconhece que toda comunicação realizada por e-mail (ao endereço de e-mail informado no seu cadastro) é válida, eficaz e suficiente para a divulgação de qualquer assunto que se refira à plataforma.

          <p></p>---------------------------------------------------------------------------

          <p></p>Termos e Condições de uso da PLATAFORMA X-PROFESSIONALS, disciplinando especificamente o cadastro gratuito de USUÁRIOS exclusivamente localizados nos Estados de Goiás, Mato Grosso, Mato Grosso do Sul, Bahia e o Distrito Federal.

          <p></p>Os Termos e Condições de Uso (“Termos”) devem ser observados por quem acessa e se cadastra na Plataforma X-Professionals (“Usuário”) ou utiliza suas funcionalidades (“Assinante”).

          <p></p>Como condição para acesso e uso das funcionalidades da Plataforma X-Professionals, o “Usuário” cadastrado declara que fez a leitura completa e atenta das regras deste documento, estando plenamente ciente e de acordo com elas.

          <p></p><b>IMPORTANTE! AO DAR O ACEITE AO FINAL DO DOCUMENTO, O USUÁRIO ESTARÁ LEGALMENTE VINCULADO A TODOS OS TERMOS E CONDIÇÕES AQUI PREVISTOS. CASO NÃO CONCORDE COM QUALQUER DAS DISPOSIÇÕES PREVISTAS, O USUÁRIO NÃO DEVERÁ ACEITAR ESTE TERMO E CONSEQUENTEMENTE NÃO UTILIZAR A PLATAFORMA X-PROFESSIONALS, QUE É GRÁTIS.</b>

          <p></p><b>1. O USUÁRIO somente poderá utilizar a PLATAFORMA X-PROFESSIONALS caso concorde integralmente em cumprir com todos os termos e condições abaixo estabelecidos:</b>

          <p>I. A X-Professionals é uma Plataforma de Tecnologia que disponibiliza vagas de emprego divulgadas por empresas e recrutadores, e que opera no endereço [www.X-Professionals.com.br], possibilitando, a pessoas físicas interessadas, o acesso as vagas, mediante as condições ofertadas na plataforma X-Professionals.
          II. Para utilização da Plataforma X-Professionals, será necessário que o Usuário efetue um cadastro. A utilização dos dados dos Usuários está regulada de acordo com a nossa Política de Privacidade disponível na Plataforma X-Professionals e que pode ser acessada a qualquer momento.
          III. Através da utilização da Plataforma X-Professionals, mediante o cadastro, a plataforma disponibilizará o acesso gratuito ao Usuário.
          IV. O consumidor que é ou já foi Usuário da Plataforma X-Professionals, também poderá se beneficiar do acesso gratuito.
          V. O número de aplicações diárias passa a ser ilimitado.
          VI. A X-Professionals não garante que haverá vagas para o perfil do Assinante, bem como não garante a colocação e recolocação profissional do Assinante.
          VII. O Usuário reconhece e concorda com os Termos e condições de uso da X-Professionals.
          VIII. A X-Professionals reserva-se o direito de encerrar o cadastro gratuito ou limitar o número de aplicações diárias a qualquer momento e por qualquer motivo, independente de prévio aviso.
          IX. Após o encerramento, a X-Professionals não terá nenhuma obrigação de resgatar qualquer outra Oferta no período de gratuidade.
          X. O acesso e utilização da plataforma é livre para todos, porém algumas funcionalidades como cadastros em determinados ambientes exigem que o Usuário seja capaz e maior de 18 (dezoito) anos, assim, sempre que aplicável, os representantes legais deverão supervisionar e representar as crianças e adolescentes com idade inferior a 16 (dezesseis) anos e assistir os adolescentes em idade superior à 16 (dezesseis) anos e inferior à 18 (dezoito) anos.
          XI. A X-Professionals possui a faculdade de se recusar a conceder, suspender ou cancelar o cadastro de qualquer Usuário que utilizar a plataforma de maneira fraudulenta, violar ou tentar violar os presentes termos, a Política de Privacidade ou qualquer documento legal da X-Professionals.
          XII. É expressamente vedado ao Usuário utilizar informações cadastrais de terceiros.</p>

          <p></p><b>2. PRIVACIDADE E DADOS PESSOAIS</b>

          <p></p>2.1. As informações sobre a privacidade do Usuário e as práticas de proteção de dados pessoais adotadas pela X-Professionals podem ser encontradas na Política de Privacidade https://www.X-Professionals.com.br/institucional/privacidade-relacionamento e na Política de Cookies https://terms.funnel.X-Professionals.com.br/politica-cookies-privacidade-v1.html da Plataforma.
          <p></p>2.2. A X-Professionals monitorará, por meios adequados, sua própria conformidade com as respectivas obrigações de proteção de Dados Pessoais, caso aplicável.
          <p></p>2.3. A X-Professionals poderá registrar todas as atividades efetuadas pelo Usuário na plataforma, incluindo dados de identificação, do dispositivo e da conexão utilizada (“Registros”).
          <p></p>2.4. Os Registros poderão ser utilizados com a finalidade de: (i) identificar o Usuário e atendê-lo (ii) cumprir as obrigações deste Termo (iii) aperfeiçoar a plataforma; (iv) resguardar direitos e obrigações relacionadas ao uso da plataforma; (v) cumprir ordem judicial e/ou de autoridade administrativa; (vi) compartilhá-los com outras empresas ligadas à X-Professionals para que possam comunicar, fazer propaganda de seus produtos, funcionalidades e serviços ou difundir ainda mais amplamente o perfil do Usuário; (vi) compartilhar com outras empresas para testes de verificação das competências pessoais e profissionais do candidato; e (vi) compartilhá-los, através de aplicação do candidato em processos de seleção ou não, com a finalidade de ampliar a exposição do currículo e dados pessoais do Usuário em outras ferramentas e plataformas de vagas (cumprimento deste contrato), certo que na hipótese deste item (vi) será de inteira responsabilidade do agregador de vagas cumprir as normas de proteção de dados.

          <p></p><b>3. ISENÇÃO E LIMITAÇÕES DE RESPONSABILIDADE</b>

          <p></p>3.1. A X-Professionals envida seus esforços para a manutenção da disponibilidade contínua e permanente da plataforma. No entanto, pode ocorrer, eventualmente, alguma indisponibilidade temporária decorrente de manutenção necessária ou mesmo gerada por motivo de força maior, como desastres naturais, falhas nos sistemas de comunicação e acesso à Internet, ataques cibernético invasivos, ou quaisquer fatos de terceiro que fogem da esfera de vigilância e responsabilidade da X-Professionals.
          <p></p>3.1.1. Se isso ocorrer, a X-Professionals fará o que estiver ao seu alcance para restabelecer o acesso à plataforma o mais breve possível, dentro das limitações técnicas de seus serviços e serviços de terceiros, dos quais depende para ficar online. Por essa razão, o Usuário fica ciente que não poderá pleitear indenização ou reparação de danos no caso da Plataforma permanecer fora do ar, independente da motivação.
          Eventuais procedimentos de manutenção que acarretem a indisponibilidade da plataforma por longos períodos serão informados por meio dos canais oficiais de comunicação da X-Professionals.
          <p></p>3.2. Sem prejuízo de outras condições destes Termos, a X-Professionals não se responsabiliza:
          <p></p>3.2.1. Por quaisquer problemas, bugs, glitches ou funcionamentos indevidos que ocorrerem nos dispositivos e equipamentos;
          <p></p>3.2.2. Por qualquer dano direto ou indireto ocasionado por eventos de terceiros, a exemplo, mas não se limitando a ataque de hackers, falhas no sistema, no servidor ou na conexão à internet, inclusive por ações de softwares que possam, de algum modo, danificar os ativos físicos ou lógicos do Usuário em decorrência do acesso, utilização ou navegação na Plataforma, bem como a transferência de dados, arquivos, imagens, textos, áudios ou vídeos contidos na Plataforma;
          <p></p>3.2.3. Pela navegação do Usuário em quaisquer links externos disponibilizados na Plataforma, sendo seus deveres a leitura dos Termos e Condições de Uso e da Política de Privacidade do recurso acessado e agir conforme o determinado; e
          <p></p>3.2.4. Por verificar, controlar, aprovar ou garantir a adequação ou exatidão das informações ou dados disponibilizados em tais links, não sendo, portanto, responsável por prejuízos, perdas ou danos ocorridos pela visita de tais sites, cabendo ao Usuário verificar a confiabilidade das informações e dados ali exibidos antes de tomar alguma decisão ou praticar algum ato.

          <p></p><b>4. CONTEÚDO E DADOS SUBMETIDOS A PLATAFORMA POR USUÁRIOS</b>

          <p></p>4.1. O Usuário é e continuará sendo o titular e proprietário de todos os dados, informações, textos, imagens, mensagens, vídeos, áudios, gráficos ou qualquer outro material de qualquer forma for submetido e/ou compartilhado por ele na plataforma (“Dados do Usuário”) bem como será o exclusivo responsável por eles, cabendo exclusivamente ao Usuário o cuidado em respeitar a propriedade intelectual de terceiros ou quaisquer outros direitos conexos.
          <p></p>4.2. A X-Professionals não se obrigará a processar ou tratar quaisquer dos Dados do Usuário se houver razões para crer que tal processamento ou tratamento possa imputar à X-Professionals qualquer infração de qualquer lei aplicável ou que a plataforma esteja sendo utilizada, sob critério exclusivo da X-Professionals, para quaisquer fins ilegais, ilícitos ou contrários à moralidade.
          <p></p>4.3. A X-Professionals não garante a qualidade, coerência, integridade, forma, atualização ou fonte do Conteúdo ou dos Dados do Usuário, pois não controla, verifica ou faz juízo deste Conteúdo e dos Dados do Usuário. A X-Professionals não é responsável, portanto, por quaisquer inveracidade, desatualização ou erro deste Conteúdo ou dos Dados do Usuário, bem como não é responsável por quaisquer danos oriundos deste Conteúdo, a qualquer título.
          <p></p>4.4. Sem prejuízo do disposto acima, o Usuário fica ciente e concorda que a X-Professionals não possui qualquer obrigação real ou presumida de publicar qualquer Conteúdo ou Dados dos Usuários, bem como poderá remover tal Conteúdo ou os Dados do Usuário com ou sem aviso prévio.
          <p></p>4.5. A plataforma não constitui serviço de armazenamento, portanto a X-Professionals não possui qualquer obrigação de armazenar, reter ou fornecer ao Usuário ou a quaisquer terceiros cópia dos Dados do Usuário ou qualquer Conteúdo.
          <p></p>4.6. A plataforma, de forma impessoal e automática, poderá aplicar modelos estatísticos e inteligência algorítmica para indexar, filtrar e organizar o Conteúdo ou os Dados do Usuário, gerados ou compartilhados por meio da Plataforma.
          <p></p>4.7. O Usuário se declara ciente que a X-Professionals, senão por seu exclusivo critério, não divulgará ou fornecerá ao Usuário ou a qualquer terceiro quaisquer informações sistêmicas ou algorítmicas relacionadas à Plataforma.

          <p></p><b>ATENÇÃO!</b>
          <p></p>Considerando que a X-PROFESSIONALS não participa de negociações entre o você e anunciantes, recrutadores ou demais terceiros, bem como que são as empresas anunciantes responsáveis pelo descritivo dos anúncios de emprego constantes em nossa plataforma, você reconhece e concorda expressamente que a X-PROFESSIONALS não poderá ser responsabilizada por perdas e danos de qualquer espécie que venham a ser conhecidas em decorrência de:
          <p>(a) recrutadores que lhe exijam como condição para participação em processo seletivo anunciado - antes, durante ou após o seu término -, o pagamento de qualquer taxa ou valor para quaisquer fins, incluindo, mas não se limitando à emissão de passaporte, visto, custos de hospedagem, ou, ainda, a prestação de serviços sem a devida remuneração;
          (b) recrutadores que se refiram à pirâmide, sistema "trabalhe em casa", parcerias e correntes irregulares, ilegais ou imorais;
          (c) recrutadores que se refiram a serviços particulares, como por exemplo, diarista;
          (d) anúncios que contenham conotação preconceituosa, socialmente excludente ou que de alguma forma contrarie a Constituição Federal e seus princípios, a legislação vigente ou, ainda, direito de terceiros, salvo quando a natureza da atividade a ser exercida, pública e notoriamente, assim exigir;
          (e) anúncios que exijam ou requeiram do candidato à vaga, comprovação de experiência prévia por tempo superior a 6 (seis) meses no mesmo tipo de atividade;
          (f) que ofereçam serviços de consultoria distintos de uma oportunidade real de emprego;
          (g) anúncios em que o descritivo da vaga e ou perfil profissional solicitados não sejam condizentes com o ramo de atuação do anunciante ou da empresa titular da vaga anunciada.</p>

          <p></p>O presente termo, assim como a utilização da nossa plataforma, será regido pelas leis vigentes na República Federativa do Brasil, observados também os usos e costumes que regem o comportamento ético na internet, e a mais estrita boa fé.

          <p></p>O USUÁRIO declara ter lido e estar de pleno acordo com os termos e condições de uso e com nossa Política de Privacidade disponível em nosso site através do endereço: https://www.X-Professionals.com.br/institucional/privacidade-relacionamento/.

          <p></p>De acordo em:
          <br></br>Cliente:
          <br></br>CPF:
          <br></br>Última atualização em 29/10/2020
          <p>---------------------------------------------------------------------------</p>

        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingTop: 45,
  },

  logo: {
    marginTop: 10,
    marginBottom: 10,
    alignSelf: "center",
    width: 100,
    height: 30,
  },

  titulo: {
    fontSize: 10,
    marginTop: 10,
    width: 300,
    height: 45,
    alignSelf: "center",
    textAlign: "Justify"
  },

});