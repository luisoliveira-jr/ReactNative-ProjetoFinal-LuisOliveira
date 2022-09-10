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
          <p></p><b>Política de cookies</b>

          <p></p><b>Política de privacidade</b>

          <p></p><b>Política de cookies</b>

          <p></p><b>1. Introdução</b>

          <p></p>Esta Política de Cookies aplica-se a quaisquer websites, aplicativos ou plataformas operadas pela X-Professionals Online Ltda. (“Nós”) ou em nosso nome (“Nossas Plataformas Digitais”).
          É neste espírito que Nós procuramos explicar de forma transparente como, quando e porque utilizamos Cookies.
          Ao acessar as Nossas Plataformas Digitais, o Usuário autoriza o uso Cookies nos termos desta Política de Cookies.
          Caso não concorde com o uso de Cookies dessa forma, o Usuário poderá: (i) ajustar as configurações de seu navegador para não permitir o uso de Cookies ou (ii) não acessar as Nossas Plataformas Digitais.
          Lembramos que desabilitar o uso de Cookies poderá impactar na experiência do Usuário ao navegar em Nossas Plataformas Digitais.
          Para quaisquer questões ou dúvidas sobre a Política de Cookies das Nossas Plataformas Digitais, o Usuário poderá entrar em contato conosco por meio do endereço eletrônico: privacyX-Professionals@X-Professionals.com

          <p></p><b>2. O que são cookies?</b>

          <p></p>Cookies são arquivos digitais com pequenos fragmentos de dados (e geralmente com um identificador único), que são armazenados no dispositivo do Usuário por meio do navegador ou aplicativo e que guardam informações relacionadas com as preferências do Usuário.

          <p></p><b>3. Para que servem os cookies?</b>

          <p></p>Os Cookies servem para aprimorar a experiência do Usuário, tanto em termos de performance, como em termos de usabilidade, uma vez que os conteúdos disponibilizados serão direcionados às necessidades e expectativas do Usuário.
          Os Cookies permitem que Nossas Plataformas Digitais memorizem informações sobre a visita do Usuário, o seu idioma preferido, a sua localização, a recorrência das suas sessões e outras variáveis que Nós consideramos relevantes para tornar a experiência do Usuário muito mais eficiente.
          Os Cookies também poderão ser utilizados para compilar estatísticas anônimas e agregadas que permitem entender como os Usuários utilizam as Nossas Plataformas Digitais, bem como para aprimorar suas estruturas e conteúdo. Por serem estatísticas anônimas, não podemos identificá-lo pessoalmente por meio desses dados.
          A utilização de Cookies é algo comum em qualquer plataforma digital atualmente. O seu uso não prejudica de forma alguma os dispositivos (computadores, smartphones, tablets, etc.) em que são armazenados.

          <p></p><b>4. Que tipo de cookies utilizamos?</b>

          <p></p>Nós utilizamos dois tipos de Cookies nas Nossas Plataformas Digitais: Cookies de Sessão e Cookies Persistentes.

          <p></p>Cookies de Sessão: são os Cookies temporários que permanecem arquivados até que o Usuário saia do site ou encerre o navegador ou o aplicativo.

          <p></p>Cookies Persistentes: são os Cookies que ficam armazenados no dispositivo do Usuário até que sejam excluídos (o tempo que o Cookie permanecerá no dispositivo depende da duração do seu "tempo de vida" e das configurações do navegador).

          <p></p>Os Cookies (de Sessão ou Persistentes) podem ser categorizados de acordo com sua função:

          <p></p>Cookies Estritamente Necessários: Permitem a navegação no website e utilização das aplicações, bem como aceder a áreas seguras do website. Sem estes Cookies, os serviços requeridos não podem ser prestados para o correto funcionamento das plataformas.

          <p></p>Cookies Analíticos: Coletam dados estatísticos anônimos com a finalidade de analisar a utilização da plataforma e seu respectivo desempenho.

          <p></p>Cookies de Funcionalidade: São utilizados para assegurar a disponibilização de funcionalidades adicionais das plataformas ou para guardar as preferências definidas pelo usuário no uso da plataforma, sempre que utilizar o mesmo dispositivo.

          <p></p>Cookies de Publicidade: Direcionam a publicidade em função dos interesses do Usuário, ajudando a medir o sucesso de aplicações e a eficácia da publicidade de terceiros.

          <p></p><b>5. É possível controlar ou excluir Cookies?</b>

          <p></p>A maioria dos navegadores de Internet é configurada para aceitar automaticamente os Cookies. O Usuário pode alterar as configurações para bloquear o uso de Cookies ou alertá-lo quando um Cookie estiver sendo enviado para seu dispositivo. Existem várias formas de gerenciar Cookies. Consulte as instruções do seu navegador ou a seção de ajuda para saber mais sobre como ajustar ou alterar as configurações do seu navegador.
          Ao desabilitar Cookies, o Usuário talvez não consiga visitar certas áreas de uma página nossa ou talvez não receba informações personalizadas quando visitar uma página.
          Caso o Usuário utilize dispositivos diferentes para acessar as nossas Plataformas Digitais (por exemplo, computador, smartphone, tablet, etc.) deverá assegurar-se de que cada navegador de cada dispositivo esteja ajustado para atender suas preferências em relação aos Cookies.
          Para que o Usuário possa, de forma simples e intuitiva, gerir suas preferências quanto aos Cookies a partir do seu navegador, poderá utilizar um dos links abaixo:

          <p></p>Para mais informações sobre “Navegação Privada” e gestão de Cookies no browser Firefox, clique aqui;

          <p></p>Para mais informações sobre “Navegação como Incógnito” e gestão de Cookies no browser Chrome, clique aqui;

          <p></p>Para mais informações sobre “Navegação Privada” e gestão de Cookies a partir do browser Internet Explorer, clique aqui;

          <p></p>Para mais informações sobre “Navegação Privada” e gestão de Cookies a partir do Safari, clique aqui;

          <p></p>Para mais informações sobre “Navegação Privada” e gestão de Cookies no browser Opera, clique aqui;

          <p></p><b>6. Informações detalhadas sobre os cookies</b>

          <p></p>Apresentamos abaixo os detalhes sobre o uso dos Cookies em Nossas Plataformas Digitais, bem como as finalidades de tratamento dos dados que os justificam.

          <p></p>CookieFinalidadeTipoB2C-XXXXX-XXXXDado de transações do GAAnaliticoC_COUNTRYPaísFuncionalC_LANGIdiomaFuncionalX-ProfessionalsAutenticação/sessãoFuncionalS_TIPOEMPPerfil do usuárioFuncional_fbpUsado pelo Facebook para fazer segmentação de publicidade.Analitico_gaUsado para distinguir usuários.Funcional_gaexpUsado para determinar a inclusão de um usuário em um experimento e a validade dos experimentos em que ele foi incluído.Funcional_gidUsado para distinguir usuáriosAnaliticocactkAutenticação/sessãoFuncionalcampanha_empFuncionalidadeFuncionalck_emp_statusStatus da EmpresaFuncionalck_tb_malaControle de envio de emailFuncionalck_usr_statusempStatus do RecrutadorFuncionalckemp_idId da empresaFuncionalckidId do usuárioFuncionalckidControle de funcionalidades do siteFuncionalfromP1Controle de funcionalidades do siteFuncionalis_premiumControle de funcionalidades do siteFuncionallayoutPadraoControle de funcionalidades do siteFuncionalorigem_empOrigem do cadastroFuncionalpermiteControle de funcionalidades do siteFuncionalpermite_cadastroControle de funcionalidades do siteFuncionalpermite_concControle de funcionalidades do siteFuncionalregionalizacaoControle de funcionalidades do siteFuncionalsgtcControle de funcionalidades do siteFuncionaltracking_origemRegistro de navegação no siteAnaliticoudfcrInformações basicas do usuárioFuncionaluuidControle de funcionalidades do siteFuncionalDSIDVincula a atividade em todos os dispositivos, caso um usuário tenha feito login anteriormente com sua Conta do Google em outro dispositivoMarketingIDESelecionar publicidade com base no que é relevante para o usuário, melhorar os relatórios sobre o desempenho da campanha e evitar a exibição de anúncios que o usuário já viu.MarketingactCapta o tempo que o usuário permanece logadoMarketingc_userIdentificar o ID do usuárioMarketingdatrIdentificar o browser que está sendo usado para acessar o FacebookMarketingfrOperação de MídiaMarketingm_pixel_ratioOperação de MídiaMarketingpresenceCapta o status do chat do usuárioMarketingsbOperação de MídiaMarketingxsCapta informações sobre sessãoMarketing1P_JARSelecionar publicidade com base no que é relevante para o usuário, melhorar os relatórios sobre o desempenho da campanha e evitar a exibição de anúncios que o usuário já viu.MarketingANIDPermite que o website lembrem informações que mudam a forma como o site se comporta ou é exibido, como o idioma preferido ou a região em que o usuário está / Selecionar publicidade com base no que é relevante para o usuário, melhorar os relatórios sobre o desempenho da campanha e evitar a exibição de anúncios que o usuário já viu.MarketingAPISIDAutenticar usuários, evitar a utilização fraudulenta de credenciais de login e proteger os dados do usuário de terceiros não autorizados / Selecionar publicidade com base no que é relevante para o usuário, melhorar os relatórios sobre o desempenho da campanha e evitar a exibição de anúncios que o usuário já viu.MarketingHSIDAutenticar usuários, evitar a utilização fraudulenta de credenciais de login e proteger os dados do usuário de terceiros não autorizados / Selecionar publicidade com base no que é relevante para o usuário, melhorar os relatórios sobre o desempenho da campanha e evitar a exibição de anúncios que o usuário já viu.MarketingNIDPermite que o website lembrem informações que mudam a forma como o site se comporta ou é exibido, como o idioma preferido ou a região em que o usuário está / Selecionar publicidade com base no que é relevante para o usuário, melhorar os relatórios sobre o desempenho da campanha e evitar a exibição de anúncios que o usuário já viu.MarketingOGPSelecionar publicidade com base no que é relevante para o usuário, melhorar os relatórios sobre o desempenho da campanha e evitar a exibição de anúncios que o usuário já viu.MarketingOGPCSelecionar publicidade com base no que é relevante para o usuário, melhorar os relatórios sobre o desempenho da campanha e evitar a exibição de anúncios que o usuário já viu.MarketingSSelecionar publicidade com base no que é relevante para o usuário, melhorar os relatórios sobre o desempenho da campanha e evitar a exibição de anúncios que o usuário já viu.MarketingSAPISIDAutenticar usuários, evitar a utilização fraudulenta de credenciais de login e proteger os dados do usuário de terceiros não autorizados / Selecionar publicidade com base no que é relevante para o usuário, melhorar os relatórios sobre o desempenho da campanha e evitar a exibição de anúncios que o usuário já viu.MarketingSEARCH_SAMESITESelecionar publicidade com base no que é relevante para o usuário, melhorar os relatórios sobre o desempenho da campanha e evitar a exibição de anúncios que o usuário já viu.MarketingSIDAutenticar usuários, evitar a utilização fraudulenta de credenciais de login e proteger os dados do usuário de terceiros não autorizados / Selecionar publicidade com base no que é relevante para o usuário, melhorar os relatórios sobre o desempenho da campanha e evitar a exibição de anúncios que o usuário já viu.MarketingSIDCCAutenticar usuários, evitar a utilização fraudulenta de credenciais de login e proteger os dados do usuário de terceiros não autorizados / Selecionar publicidade com base no que é relevante para o usuário, melhorar os relatórios sobre o desempenho da campanha e evitar a exibição de anúncios que o usuário já viu.MarketingSSIDSelecionar publicidade com base no que é relevante para o usuário, melhorar os relatórios sobre o desempenho da campanha e evitar a exibição de anúncios que o usuário já viu / Selecionar publicidade com base no que é relevante para o usuário, melhorar os relatórios sobre o desempenho da campanha e evitar a exibição de anúncios que o usuário já viu.MarketingTZSelecionar publicidade com base no que é relevante para o usuário, melhorar os relatórios sobre o desempenho da campanha e evitar a exibição de anúncios que o usuário já viu.Marketing_Secure-3PAPISIDAutenticar usuários, evitar a utilização fraudulenta de credenciais de login e proteger os dados do usuário de terceiros não autorizados / Selecionar publicidade com base no que é relevante para o usuário, melhorar os relatórios sobre o desempenho da campanha e evitar a exibição de anúncios que o usuário já viu.MarketingSecure-3PSIDAutenticar usuários, evitar a utilização fraudulenta de credenciais de login e proteger os dados do usuário de terceiros não autorizados / Selecionar publicidade com base no que é relevante para o usuário, melhorar os relatórios sobre o desempenho da campanha e evitar a exibição de anúncios que o usuário já viu.MarketingSecure-3PSIDCCAutenticar usuários, evitar a utilização fraudulenta de credenciais de login e proteger os dados do usuário de terceiros não autorizados / Selecionar publicidade com base no que é relevante para o usuário, melhorar os relatórios sobre o desempenho da campanha e evitar a exibição de anúncios que o usuário já viu.MarketingSecure-APISIDAutenticar usuários, evitar a utilização fraudulenta de credenciais de login e proteger os dados do usuário de terceiros não autorizados / Selecionar publicidade com base no que é relevante para o usuário, melhorar os relatórios sobre o desempenho da campanha e evitar a exibição de anúncios que o usuário já viu.MarketingSecure-HSIDAutenticar usuários, evitar a utilização fraudulenta de credenciais de login e proteger os dados do usuário de terceiros não autorizados / Selecionar publicidade com base no que é relevante para o usuário, melhorar os relatórios sobre o desempenho da campanha e evita a exibição de anúncios que o usuário já viuMarketingSecure-SSIDAutenticar usuários, evitar a utilização fraudulenta de credenciais de login e proteger os dados do usuário de terceiros não autorizados / Selecionar publicidade com base no que é relevante para o usuário, melhorar os relatórios sobre o desempenho da campanha e evitar a exibição de anúncios que o usuário já viu.MarketingANIDPermite que o website lembrem informações que mudam a forma como o site se comporta ou é exibido, como o idioma preferido ou a região em que o usuário está / Selecionar publicidade com base no que é relevante para o usuário, melhorar os relatórios sobre o desempenho da campanha e evitar a exibição de anúncios que o usuário já viu.MarketingAPISIDAutenticar usuários, evitar a utilização fraudulenta de credenciais de login e proteger os dados do usuário de terceiros não autorizados / Selecionar publicidade com base no que é relevante para o usuário, melhorar os relatórios sobre o desempenho da campanha e evitar a exibição de anúncios que o usuário já viu.MarketingHSIDAutenticar usuários, evitar a utilização fraudulenta de credenciais de login e proteger os dados do usuário de terceiros não autorizados / Selecionar publicidade com base no que é relevante para o usuário, melhorar os relatórios sobre o desempenho da campanha e evitar a exibição de anúncios que o usuário já viu.MarketingNIDPermite que o website lembrem informações que mudam a forma como o site se comporta ou é exibido, como o idioma preferido ou a região em que o usuário está / Selecionar publicidade com base no que é relevante para o usuário, melhorar os relatórios sobre o desempenho da campanha e evitar a exibição de anúncios que o usuário já viu.MarketingSAPISIDAutenticar usuários, evitar a utilização fraudulenta de credenciais de login e proteger os dados do usuário de terceiros não autorizados / Selecionar publicidade com base no que é relevante para o usuário, melhorar os relatórios sobre o desempenho da campanha e evitar a exibição de anúncios que o usuário já viu.MarketingSIDAutenticar usuários, evitar a utilização fraudulenta de credenciais de login e proteger os dados do usuário de terceiros não autorizados / Selecionar publicidade com base no que é relevante para o usuário, melhorar os relatórios sobre o desempenho da campanha e evitar a exibição de anúncios que o usuário já viu.MarketingSSIDAutenticar usuários, evitar a utilização fraudulenta de credenciais de login e proteger os dados do usuário de terceiros não autorizados / Selecionar publicidade com base no que é relevante para o usuário, melhorar os relatórios sobre o desempenho da campanha e evitar a exibição de anúncios que o usuário já viu.MarketingSecure-3PAPISIDAutenticar usuários, evitar a utilização fraudulenta de credenciais de login e proteger os dados do usuário de terceiros não autorizados / Selecionar publicidade com base no que é relevante para o usuário, melhorar os relatórios sobre o desempenho da campanha e evitar a exibição de anúncios que o usuário já viu.MarketingSecure-3PSIDAutenticar usuários, evitar a utilização fraudulenta de credenciais de login e proteger os dados do usuário de terceiros não autorizados / Selecionar publicidade com base no que é relevante para o usuário, melhorar os relatórios sobre o desempenho da campanha e evitar a exibição de anúncios que o usuário já viu.MarketingSecure-APISIDAutenticar usuários, evitar a utilização fraudulenta de credenciais de login e proteger os dados do usuário de terceiros não autorizados / Selecionar publicidade com base no que é relevante para o usuário, melhorar os relatórios sobre o desempenho da campanha e evitar a exibição de anúncios que o usuário já viu.MarketingSecure-HSIDAutenticar usuários, evitar a utilização fraudulenta de credenciais de login e proteger os dados do usuário de terceiros não autorizados / Selecionar publicidade com base no que é relevante para o usuário, melhorar os relatórios sobre o desempenho da campanha e evitar a exibição de anúncios que o usuário já viu.MarketingSecure-SSIDAutenticar usuários, evitar a utilização fraudulenta de credenciais de login e proteger os dados do usuário de terceiros não autorizados / Selecionar publicidade com base no que é relevante para o usuário, melhorar os relatórios sobre o desempenho da campanha e evitar a exibição de anúncios que o usuário já viu.Marketing_cfduidIdentificação e controle de errosFuncional_gaUsado para distinguir usuários.Marketingmp_f3445c993b7e6599c7e62024fd8d7f30_mixpanelIdentificação e controle de errosFuncionalAMCVS_14215E3D5995C57C0A495C55Operação de MídiaMarketingAMCV_14215E3D5995C57C0A495C55%40AdobeOrgOperação de MídiaMarketingUserMatchHistoryOperação de MídiaMarketing_gaUsado para distinguir usuários.Marketing_guidIdentifica o browuserMarketingbcookieIdentifica o ID do browserMarketinglangConfigura o padrão da línguaMarketingli_oatmlIdentificador indireto de membro para acompanhamento de conversões, redirecionamento, análise.Marketingli_sugrIdentificador de BrowserMarketingliapOperação de MídiaMarketinglidcUsado para roteamentoMarketinglisscOperação de MídiaMarketingspectroscopyIdOperação de MídiaMarketing_gaUsado para distinguir usuários.Marketing_twitter_sessPermite que os visitantes do site usem recursos relacionados ao Twitter na página da Web que estão visitandoMarketingads_prefsPermite rastrear a atividade dos visitantes de nossos anúncios do Twitter em nosso site e também permitir que os usuários compartilhem conteúdo de nossos sites.Marketingauth_tokenPermite rastrear a atividade dos visitantes de nossos anúncios do Twitter em nosso site e também permitir que os usuários compartilhem conteúdo de nossos sites.MarketingdntPermite que usuários compartilhem conteúdos de sites no TwitterMarketingexternal_refererOperação de MídiaMarketingguest_idPermite rastrear a atividade dos visitantes de nossos anúncios do Twitter em nosso site e também permitir que os usuários compartilhem conteúdo de nossos sites.MarketingkdtPermite rastrear a atividade dos visitantes de nossos anúncios do Twitter em nosso site e também permitir que os usuários compartilhem conteúdo de nossos sites.Marketingpersonalization_idPermite rastrear a atividade dos visitantes de nossos anúncios do Twitter em nosso site e também permitir que os usuários compartilhem conteúdo de nossos sites.Marketingremember_checked_onPermite rastrear a atividade dos visitantes de nossos anúncios do Twitter em nosso site e também permitir que os usuários compartilhem conteúdo de nossos sites.Marketingrweb_optinPermite rastrear a atividade dos visitantes de nossos anúncios do Twitter em nosso site e também permitir que os usuários compartilhem conteúdo de nossos sites.Marketingtfw_expPermite rastrear a atividade dos visitantes de nossos anúncios do Twitter em nosso site e também permitir que os usuários compartilhem conteúdo de nossos sites.MarketingtwidPermite rastrear a atividade dos visitantes de nossos anúncios do Twitter em nosso site e também permitir que os usuários compartilhem conteúdo de nossos sites.Marketinggtm_authPermite gerenciar tags via Google Tag Manager para rastrear as atividades dos visitantes no nosso site.Marketinggtm_debugPermite gerenciar tags via Google Tag Manager para rastrear as atividades dos visitantes no nosso site.Marketinggtm_experimentPermite gerenciar tags via Google Tag Manager para rastrear as atividades dos visitantes no nosso site.Marketinggtm_previewPermite gerenciar tags via Google Tag Manager para rastrear as atividades dos visitantes no nosso site.Marketingoptimize_editorUsado para mapear as atividades dos usuários em um experimento.Marketing

          <p></p>Atualização: 20 de agosto de 2020.

          <p></p>Política de privacidade e tratamento de dados da X-Professionals ("política")

          <p></p>Razão Social:

          <p></p>X-Professionals Online Ltda.Endereço: Juari, 262, CEP 06460-090, Barueri, Estado de São PauloCNPJ: 03.753.088/0001-00
          Por meio desta Política, a X-Professionals demonstra seu compromisso com a privacidade e proteção de Dados Pessoais, além de estabelecer, de forma clara e transparente, as regras sobre o Tratamento de Dados Pessoais dos Usuários do site www.X-Professionals.com.br (“site da X-Professionals” ou “site”), de acordo com a legislação em vigor.
          Como condição de acesso e uso do site, Usuário declara que fez a leitura completa e atenta desta Política, tomando plena ciência dela, conferindo sua livre e expressa concordância com os termos aqui estipulados, incluindo a coleta dos Dados aqui mencionados, bem como sua utilização para os fins abaixo especificados. Caso o Usuário não esteja de acordo com as disposições desta Política, deverá descontinuar o seu acesso ou uso do site.

          <p></p>NOTA ESPECIAL PARA CRIANÇAS E ADOLESCENTES COM IDADE INFERIOR A 18 ANOS

          <p></p>Caso o Usuário seja menor de 18 anos, é imprescindível que seus pais ou representantes legais forneçam o consentimento específico para o tratamento dos Dados pela X-Professionals, de acordo com as finalidades apresentadas nesta Política. NOTA ESPECIAL PARA OS REPRESENTANTES LEGAIS
          Os pais ou responsáveis devem sempre supervisionar as atividades online dos seus filhos menores de idade.
          As atividades de adolescentes maiores de 16 anos e menores de 18 anos devem ser assistidas pelos pais ou representantes legais.

          <p></p>Esta Política se aplica a todos os produtos e aplicações disponibilizados pelo site da X-Professionals, podendo haver termos específicos para determinados produtos, o que será informado oportunamente ao Usuário

          <p></p>1. Dados que a X-Professionals coleta do usuário

          <p></p>1.1. Os Usuários do site podem acessá-lo para finalidades distintas, seja para utilizar uma assinatura paga, gratuita, para cadastrar um aviso de vagas ou ainda navegar e contribuir para um de nossos produtos de conteúdo colaborativo como, por exemplo o Guia de Profissões e o Por Dentro das Empresas

          <p></p>1.2. Durante essa utilização, a X-Professionals poderá coletar os Dados do Usuário quando este os submeter ou quando interagir na forma acima mencionada. :

          O que coletamos?Para que coletamos?Nome completo

          Identificar e autenticar o Usuário.

          Cumprir as obrigações decorrentes do uso dos nossos serviços.

          Enviar avisos de vagas compatíveis com o perfil do Usuário.

          Aproximar os Usuários (Empresas e Candidatos) e garantir a efetividade das suas ferramentas.

          Garantir a portabilidade dos Dados cadastrais para outro Controlador do mesmo ramo de nossa atuação, caso solicitado pelo Usuário, cumprindo com obrigação do artigo 18 da Lei Geral de Proteção de Dados Pessoais.

          Ampliar nosso relacionamento, mantendo o Usuário informado sobre novidades, funcionalidades, conteúdos, notícias e demais eventos.

          Enriquecer a experiência do Usuário e promover nossos produtos e serviços.

          Proporcionar ao Usuário uma experiência adequada ao seu perfil de cadastro.

          Proteger o Usuário realizando prevenção a fraudes, proteção ao crédito e riscos associados, além do cumprimento de obrigações legais e regulatórias.

          CPFE-mailData de nascimentoGêneroOnde trabalhaCargoSalárioHistórico profissionalTelefones para contatoFotoEndereçosDados de saúde

          Aproximar candidatos Candidatos com deficiência, que possuam laudo, de empresas que buscam profissionais portadores de deficiência.

          Dados de Identificação digitalEndereço IP e Porta Lógica de Origem

          Identificar e autenticar o Usuário.

          Cumprir com obrigações legais de manutenção de registros estabelecidas pelo Marco Civil da Internet - Lei 12.965/2014.

          Proteger o Usuário realizando prevenção a fraudes, proteção ao crédito e riscos associados, além do cumprimento de obrigações legais e regulatórias.

          Dados de questionáriosRespostas a questionário e pesquisas opcionais

          Melhorar nossa relação elaborando análises e estudos estatísticos.

          Dados de pagamentoNúmero do cartão de crédito e código de segurança

          Cumprir com obrigações legais e o com o nosso contrato ao compartilhar os Dados com a empresa terceira responsável em processar o pagamento.

          <p></p>1.3. Sempre que o Usuário visualizar uma vaga de emprego no site da X-Professionals e optar, ativamente, por aplicar seu currículo o currículo, as informações serão transmitidas na integralidade e abertas, não sendo mais possível à X-Professionals, após aplicação ativa do Usuário, apagar os seus dados pessoais em poder do destinatário.

          <p></p>1.4. Dados necessários. Muitos de nossos serviços dependem diretamente de alguns Dados informados na tabela acima, principalmente Dados cadastrais. Caso o Usuário opte por não fornecer alguns desses Dados, podemos ficar impossibilitados de prestar total ou parcialmente nossos serviços.

          <p></p>1.5. Atualização e Veracidade dos Dados. O Usuário é o único responsável pela precisão e veracidade em relação aos Dados fornecidos ou pela sua desatualização. É responsabilidade do Usuário garantir a atualização e exatidão dos Dados.

          <p></p>1.5.1. Da mesma forma, a X-Professionals não é obrigada a processar ou tratar quaisquer dos seus Dados se houver razões para crer que tal processamento ou tratamento possa nos imputar qualquer infração de qualquer lei aplicável, ou se o Usuário estiver utilizando o site para quaisquer fins ilegais, ilícitos ou contrários à moralidade.

          <p></p>1.6. Base de Dados. A base de dados formada por meio da coleta de Dados é de propriedade da X-Professionals e está sob nossa responsabilidade, sendo que seu uso, acesso e compartilhamento, quando necessários, serão feitos dentro dos limites e propósitos dos negócios descritos nesta Política.

          <p></p>2. Quais são os direitos do usuário e como exercê-los

          <p></p>2.1. Direitos Básicos do Usuário. O Usuário poderá solicitar a confirmação da existência tratamento de Dados Pessoais, além da exibição de seus Dados Pessoais, por meio do nosso Canal de Atendimento

          <p></p>2.1.2. Enquanto o Usuário mantiver conta na plataforma, a correção dos seus Dados Pessoais deverá ser realizada diretamente na área logada da plataforma.

          <p></p>2.1.3 Enquanto o Usuário mantiver conta ativa na plataforma, somente os pedidos de confirmação de existência de dados pessoais relacionados a outras espécies de relacionamento entre o Usuário e a X-Professionals, a exemplo de relação direta de emprego, prestação de serviços etc, serão direcionados ao Encarregado de Dados Pessoais.

          <p></p>2.2. Limitação, oposição e exclusão de dados. Pelos Canais de Atendimento, o Usuário poderá também requerer:

          Manifestar sua oposição e/ou revogar o consentimento quanto ao uso de seus Dados Pessoais; ou

          Solicitar a exclusão de seus Dados Pessoais que tenham sidos coletados pela X-Professionals.

          <p></p>2.2.1. Se o Usuário retirar seu consentimento para finalidades fundamentais para o funcionamento adequado do site e dos serviços, os serviços torna-se-ão indisponíveis.

          <p></p>2.2.2. Caso o Usuário solicite a exclusão de seus Dados Pessoais, situação em que imediatamente perderá acesso aos serviços X-Professionals, pode ocorrer que os Dados precisem ser mantidos por período superior ao pedido de exclusão, nos termos do artigo 16 da Lei Geral de Proteção de Dados Pessoais, para (i) cumprimento de obrigação legal ou regulatória, (ii) estudo por órgão de pesquisa, e (iii) transferência a terceiro (respeitados os requisitos de tratamento de dados dispostos na mesma Lei). Em todos os casos mediante a anonimização dos Dados Pessoais, desde que possível.

          <p></p>2.2.3. Findos o prazo de manutenção e a necessidade legal, os Dados Pessoais serão excluídos com uso de métodos de descarte seguro, ou utilizados de forma anonimizada para fins estatísticos.

          <p></p>2.2.4. Dados compartilhados com anunciantes de oportunidades de trabalho, profissionais, empresas de recrutamento e seleção e sistemas integradores (sistemas de gerenciamento de candidaturas) que acessam a plataforma da X-Professionals para obter dados de candidatos, pela natureza do objetivo da divulgação de currículos, não serão apagados pela X-Professionals em qualquer circunstância.

          <p></p>3. Como a X-Professionals compartilha dados e informações

          <p></p>3.1. Hipóteses de compartilhamento dos Dados. Além do compartilhamento com recrutadores, anunciantes de oportunidades de trabalho, os Dados coletados e as atividades registradas podem ser compartilhados:

          Com autoridades judiciais, administrativas ou governamentais competentes, sempre que houver determinação legal, requerimento, requisição ou ordem judicial; e

          De forma automática, em caso de movimentações societárias, como fusão, aquisição e incorporação.

          <p></p>3.2. Anonimização de Dados. Para as finalidades de pesquisas de inteligência de mercado, divulgação de dados à imprensa e realização de propagandas, os dados fornecidos pelo Usuário serão compartilhados de forma anonimizada, isto é, de forma que não possibilite a sua identificação.

          <p></p>4. Como protegemos os dados e como o usuário também pode protegê-los

          <p></p>4.1. Compartilhamento de senhas. O Usuário também é responsável pelo sigilo de seus Dados Pessoais e deve ter sempre ciência de que o compartilhamento de senhas e login de acesso viola esta Política e compromete a segurança dos seus Dados e do site.

          <p></p>4.2. Cuidados que o Usuário deve tomar. É muito importante que o Usuário proteja seus Dados contra acesso não autorizado ao seu computador, conta ou senha, além de se certificar de sempre clicar em “sair” ao encerrar sua navegação em um computador compartilhado. Também é muito importante que o Usuário saiba que a X-Professionals nunca enviará mensagens eletrônicas solicitando confirmação de dados ou com anexos que possam ser executados (extensões: .exe, .com, entre outros) ou ainda links para eventuais downloads.

          <p></p>4.3. Segurança da Informação. Todas as transações de pagamento, com cartão de crédito ou não, são executadas com a tecnologia SSL (secure socket layer), garantindo que todos os Dados do Usuário, tais como os dados de cartão de crédito não sejam ilicitamente divulgados. Além disso, essa tecnologia visa impedir que as informações sejam transmitidas ou acessadas por terceiros.

          <p></p>4.4. Acesso aos Dados Pessoais, proporcionalidade e relevância.Internamente, os Dados Pessoais coletados são acessados somente por profissionais devidamente autorizados, respeitando os princípios de proporcionalidade, necessidade e relevância para os objetivos do nosso negócio, além do compromisso de confidencialidade e preservação da sua privacidade nos termos desta Política.

          <p></p>4.5. Links externos. Quando o Usuário utilizar o site, o Usuário poderá ser conduzido, via link a outros portais ou plataformas, que poderão coletar suas informações e ter sua própria Política de Tratamento de Dados.

          <p></p>4.5.1 Caberá ao Usuário ler a Políticas de Privacidade e Tratamento de Dados de tais portais ou plataformas de terceiros e, sendo de sua responsabilidade aceitá-la ou rejeitá-la. A X-Professionals não é responsável pelas Políticas de Privacidade e Tratamento de Dados de terceiros e nem pelo conteúdo de quaisquer websites, conteúdos ou serviços ligados à ambientes que não os nossos.

          <p></p>4.5.2. Serviços de parceiros. A X-Professionals possui parceiros comerciais que, eventualmente, podem oferecer serviços por meio de funcionalidades ou sites que podem ser acessados a partir do site da X-Professionals. Os Dados fornecidos pelo Usuário a estes parceiros serão de responsabilidade destes, estando assim sujeitos às suas próprias práticas de coleta e uso de dados.

          <p></p>4.6. Processamento por terceiros sob diretriz da X-Professionals. Caso empresas terceirizadas realizem, em nome da X-Professionals, o Tratamento de quaisquer Dados Pessoais que coletamos, as mesmas respeitarão as condições aqui estipuladas e as normas de segurança da informação, obrigatoriamente.

          <p></p>4.7. Comunicação por e-mail. Para otimizar e melhorar a comunicação, quando a X-Professionals envia um e-mail para o Usuário, é possível que a X-Professionals receba uma notificação quando eles são abertos, desde que esta funcionalidade esteja disponível. É importante que o Usuário fique atento, pois os e-mails são enviados somente pelo(s) domínio(s): @X-Professionals.com e @X-Professionals.com.br

          <p></p>5. Como a X-Professionals armazena os dados pessoais e o registro de atividades

          <p></p>5.1. Os Dados Pessoais coletados e os registros de atividades são armazenados em ambiente seguro e controlado por um prazo mínimo que segue a tabela abaixo:

          Prazo de armazenamentoFundamento legalDados cadastrais5 anos após o término da relaçãoArt. 12 e 34 do Código de Defesa do ConsumidorDados de identificação digital6 mesesArt. 15, Marco Civil da InternetOutros dadosEnquanto durar a relação e não houver pedido de apagamento ou revogação de consentimentoArt. 9, Inciso II da Lei Geral de Proteção de Dados Pessoais

          <p></p>5.2. Prazos de armazenamento superiores. Para fins de auditoria, segurança, controle de fraudes, proteção ao crédito e preservação de direitos, a X-Professionals poderá permanecer com o histórico de registro dos Dados do Usuário por prazo maior nas hipóteses que a lei ou norma regulatória assim estabelecer ou para preservação de direitos

          <p></p>5.3. Os Dados coletados serão armazenados em servidores localizados no Brasil e em outros Países, bem como em ambiente de uso de recursos ou servidores na nuvem (cloud computing), o que exigirá transferência e/ou processamento destes Dados fora do Brasil.

          <p></p>6. Informações sobre essa política

          <p></p>6.1. Alteração do teor e atualização. O Usuário reconhece o direito da X-Professionals de alterar o teor desta Política a qualquer momento, conforme a finalidade ou necessidade, tal qual para adequação e conformidade legal de disposição de lei ou norma que tenha força jurídica equivalente, cabendo ao Usuário verificá-la sempre que efetuar o acesso ao site ou utilizar nossos serviços..

          <p></p>6.1.1. Ocorrendo atualizações neste documento e que demandem nova coleta de consentimento, o Usuário será notificado por meio do seu endereço de e-mail e/ou seu primeiro acesso na plataforma (site ou app) após a mudança.

          <p></p>6.2. Inaplicabilidade. Caso algum ponto desta Política seja considerado inaplicável por Autoridade de Dados ou judicial, as demais condições permanecerão em pleno vigor e efeito.

          <p></p>6.3. Comunicação Eletrônica. O Usuário reconhece que toda comunicação realizada por e-mail (informado no cadastro), SMS, aplicativos de comunicação instantânea ou qualquer outra forma digital, também são válidas, eficazes e suficiente para a divulgação de qualquer assunto que se refira aos serviços prestados pela X-Professionals, aos Dados, bem como às condições de sua prestação ou a qualquer outro assunto nele abordado, sendo exceção apenas o que essa Política prever como tal.

          <p></p>6.4. Canais de Atendimento. Em caso de qualquer dúvida com relação às disposições constantes desta Política de Privacidade e Tratamento de Dados, o Usuário poderá entrar em contato por meio do canal de atendimento apontado a seguir, 24 horas por dia, sete dias por semana, como prazo de resposta de até 10 (dez) dias corridos:

          <p></p>Site X-Professionals.com.br

          <p></p>6.5. Lei aplicável e foro. Essa Política será interpretada segundo a legislação brasileira, no idioma português, sendo eleito o foro do seu domicílio para dirimir qualquer controvérsia que envolva este documento, salvo ressalva específica de competência pessoal, territorial ou funcional pela legislação aplicável.

          Você, caso não possua domicílio no Brasil, e em razão dos serviços oferecidos pela Empresa apenas em território nacional, se submete à legislação brasileira, concordando, portanto, que em havendo litígio a ser solucionado, a ação deverá ser proposta no Foro da Comarca de São Paulo - SP.

          <p></p>7. Glossário

          <p></p>7.1. Para os fins desta Política, devem se considerar as seguintes definições e descrições para seu melhor entendimento:

          <p></p>Dados: Quaisquer informações inseridas, tratadas ou transmitidas através do site.

          <p></p>Dados Pessoais: Dados relacionados a pessoa natural identificada ou identificável.

          <p></p>Anonimização: Utilização de meios técnicos razoáveis e disponíveis no momento do Tratamento, por meio dos quais um dado perde a possibilidade de associação, direta ou indireta, a um indivíduo.

          <p></p>Encarregado (Data Protection Officer -DPO): Pessoa indicada pela X-Professionals para atuar como canal de comunicação entre o controlador, os titulares dos dados e a Autoridade Nacional de Proteção de Dados (ANPD).

          <p></p>Cloud Computing: Ou computação em nuvem, é tecnologia de virtualização de serviços construída a partir da interligação de mais de um servidor por meio de uma rede de informação comum (p.ex. a Internet), com objetivo de reduzir custos e aumentar a disponibilidade dos serviços sustentados.

          <p></p>Site: Designa o endereço eletrônico www.X-Professionals.com.br e seus subdomínios.

          <p></p>Conta de Acesso: Credencial de necessária para utilizar ou acessar as funcionalidades exclusivas do site.

          <p></p>Cookies: Pequenos arquivos enviados pelo site, salvos nos dispositivos do Usuário, que armazenam as preferências e poucas outras informações, com a finalidade de personalizar sua navegação de acordo com o perfil do Usuário.

          <p></p>IP: Abreviatura de Internet Protocol. É conjunto alfanumérico que identifica os dispositivos dos Usuários na Internet;

          <p></p>Logs: Registros de atividades de quaisquer Usuários que utilizem o site.

          <p></p>ID de Sessão: Identificação da sessão de Usuários quando é efetuado o acesso aos site.

          <p></p>Decisões unicamente automatizadas: Tratam-se de decisões que afetam um usuário que foram programadas para funcionar automaticamente, sem a necessidade de uma operação humana, com base em tratamento automatizado de dados pessoais.

          <p></p>Tratamento: Toda operação realizada com Dados Pessoais, como as que se referem a coleta, produção, recepção, classificação, utilização, acesso, reprodução, transmissão, distribuição, processamento, arquivamento, armazenamento, eliminação, avaliação ou controle da informação, modificação, comunicação, transferência, difusão ou extração.

          <p></p>Atualização: 20 de agosto de 2020.

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