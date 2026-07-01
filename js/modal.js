const modalData = {
  pt: {
    p1: {
      icon: "🤖",
      title: "IA para Educadores",
      tags: ["IA Generativa", "Formação Docente", "Ética na IA", "Ferramentas", "Em andamento"],
      links: [],
      html: `
        <p style="font-size:0.95rem;color:var(--text);line-height:1.7;margin-bottom:1.5rem">
          Formações e cursos sobre o uso prático e responsável de Inteligência Artificial para educadores — do professor da educação básica ao pesquisador de pós-graduação. O objetivo é capacitar docentes a integrar IA generativa no seu cotidiano com segurança, criatividade e senso crítico.
        </p>

        <div class="modal-section">
          <h4 class="modal-section__title">Para quem é</h4>
          <ul class="modal-list">
            <li>Professores da <strong>Educação Básica</strong> (fundamental e médio)</li>
            <li>Docentes do <strong>Ensino Superior</strong></li>
            <li>Pesquisadores e orientadores de <strong>Mestrado e Doutorado</strong></li>
            <li>Coordenadores pedagógicos e gestores educacionais</li>
          </ul>
        </div>

        <div class="modal-section">
          <h4 class="modal-section__title">Criação de Aulas e Materiais</h4>
          <ul class="modal-list">
            <li>Geração de apresentações com IA (slides, roteiros, storyboards)</li>
            <li>Elaboração de planos de aula, rubricas e avaliações</li>
            <li>Criação de materiais didáticos personalizados por nível e perfil</li>
            <li>Geração de imagens, infográficos e recursos visuais</li>
          </ul>
        </div>

        <div class="modal-section">
          <h4 class="modal-section__title">Automação e Produtividade</h4>
          <ul class="modal-list">
            <li>Correção automatizada de exercícios e redações com feedback</li>
            <li>Geração de bancos de questões e exercícios diferenciados</li>
            <li>Plugins e extensões de IA para navegador e ambientes de trabalho</li>
            <li>Integração de IA com ferramentas já usadas em sala</li>
          </ul>
        </div>

        <div class="modal-section">
          <h4 class="modal-section__title">Pesquisa e Produção Acadêmica</h4>
          <ul class="modal-list">
            <li>Buscas científicas assistidas por IA (revisão de literatura, mapeamento)</li>
            <li>Geração e organização de referências bibliográficas</li>
            <li>Auxílio na escrita e revisão de textos acadêmicos</li>
            <li>Detecção de plágio e uso de ferramentas de verificação de autoria</li>
          </ul>
        </div>

        <div class="modal-section">
          <h4 class="modal-section__title">Ética e Senso Crítico</h4>
          <ul class="modal-list">
            <li>Uso ético e responsável da IA na educação e na pesquisa</li>
            <li>Limites e riscos: alucinações, vieses e desinformação</li>
            <li>Políticas institucionais e boas práticas para uso de IA</li>
            <li>Como avaliar, citar e declarar o uso de IA em trabalhos acadêmicos</li>
          </ul>
        </div>
      `
    },
    p2: {
      icon: "🤟🔬",
      title: "Pesquisa em IHC e LIBRAS",
      tags: ["IHC", "LIBRAS", "SignWriting", "Acessibilidade", "Comunidade Surda"],
      links: [
        { label: "Ver tese", url: "https://acervodigital.ufpr.br/handle/1884/59384" },
        { label: "Ver dissertação", url: "https://acervodigital.ufpr.br/xmlui/handle/1884/35199" }
      ],
      html: `
        <div class="modal-section">
          <h4 class="modal-section__title">Doutorado — UFPR <span class="modal-year">2014–2018</span></h4>
          <p class="modal-section__inst">Programa de Pós-Graduação em Informática · Orientadora: Laura Sánchez García · Coorientadora: Tanya Amara Felipe</p>
          <ul class="modal-list">
            <li><strong>CORE-SL-SW-GENERATOR: Gerador Automático da Escrita da LIBRAS a partir de um Modelo de Especificação Formal dos Sinais</strong></li>
          </ul>
          <p style="font-size:0.85rem;color:var(--text-secondary);margin-top:0.75rem;line-height:1.6">
            A pesquisa propõe a geração automática de sinais da LIBRAS em SignWriting — um sistema capaz de representar graficamente qualquer Língua de Sinais. O trabalho está inserido na Arquitetura HCI-SL (Interação Humano-Computador em Língua de Sinais) e utiliza o Modelo Computacional CORE-SL para resolver questões de armazenamento, indexação, reconhecimento e síntese de sinais. O objetivo central é ampliar o acesso à informação e ao letramento na língua preferencial da Comunidade Surda, na sua forma escrita.
          </p>
        </div>

        <div class="modal-section">
          <h4 class="modal-section__title">Mestrado — UFPR <span class="modal-year">2012–2014</span></h4>
          <p class="modal-section__inst">Programa de Pós-Graduação em Informática · Orientadora: Laura Sánchez García</p>
          <ul class="modal-list">
            <li><strong>Sistema Web para a Interpretação do Modelo Computacional da LIBRAS para os Símbolos do SignWriting</strong></li>
          </ul>
          <p style="font-size:0.85rem;color:var(--text-secondary);margin-top:0.75rem;line-height:1.6">
            A dissertação propôs uma nova abordagem para gerar registros gráficos da Língua Brasileira de Sinais por meio do sistema de escrita SignWriting, por meio de uma aplicação web. O trabalho estudou sistemas de escrita para línguas de sinais e ferramentas existentes, propondo uma solução voltada à inclusão da Comunidade Surda e ao exercício pleno da cidadania.
          </p>
        </div>
      `
    },
    p3: {
      icon: "📚",
      title: "Experiência Docente",
      tags: ["Web", "Mobile", "IHC", "Graduação", "Pós-Graduação"],
      links: [],
      html: `
        <div class="modal-section">
          <h4 class="modal-section__title">UTFPR — Câmpus Guarapuava · Docência em Graduação</h4>
          <p class="modal-section__inst">Tecnologia em Sistemas para a Internet · 2016–2017 | 2017–presente</p>
          <ul class="modal-list">
            <li>Interação Humano-Computador</li>
            <li>Análise e Projeto Orientado a Objetos</li>
            <li>Engenharia de Software</li>
            <li>Sistemas Operacionais</li>
            <li>Tópicos Especiais em Computação</li>
            <li>Metodologia de Pesquisa</li>
          </ul>
        </div>

        <div class="modal-section">
          <h4 class="modal-section__title">UniGuairacá — Centro Universitário Guairacá</h4>
          <p class="modal-section__inst">Graduação · Especialização · Mestrado · 2017–2026</p>
          <ul class="modal-list">
            <li style="font-size:0.72rem;font-weight:700;color:var(--accent);text-transform:uppercase;letter-spacing:0.05em;border-left:none;padding-left:0;margin-top:0.25rem">Graduação — ADS · Eng. Software · Administração · Ciências Contábeis · Direito · Pedagogia</li>
            <li><strong>Desenvolvimento Mobile</strong></li>
            <li><strong>Programação para Dispositivos Móveis</strong></li>
            <li><strong>Framework para Desenvolvimento para Dispositivos Móveis</strong></li>
            <li><strong>Fábrica de Software / Fábrica de Software Avançado</strong></li>
            <li>Interação Humano-Computador</li>
            <li>Análise, Projeto e Desenvolvimento de Sistemas</li>
            <li>Programação Orientada a Objetos</li>
            <li>Computação Aplicada</li>
            <li>Qualidade em Software</li>
            <li>Mineração de Dados</li>
            <li>Práticas e Projetos</li>
            <li>Tecnologia, Ciência e Profissão</li>
            <li>Estrutura de Dados</li>
            <li>Sistemas de Informações Gerenciais / Gestão Integrada da Informação</li>
            <li>Software Livre em Ambientes Corporativos</li>
            <li>Pensamento Computacional</li>
            <li>Mídia, Tecnologia e Educação</li>
            <li style="font-size:0.72rem;font-weight:700;color:var(--accent);text-transform:uppercase;letter-spacing:0.05em;border-left:none;padding-left:0;margin-top:0.75rem">Especialização — Desenvolvimento de Aplicações Web Mobile · Desenvolvimento de Aplicações Web</li>
            <li><strong>Design Thinking e User Experience</strong></li>
            <li>Metodologia da Pesquisa</li>
            <li style="font-size:0.72rem;font-weight:700;color:var(--accent);text-transform:uppercase;letter-spacing:0.05em;border-left:none;padding-left:0;margin-top:0.75rem">Mestrado — Mestrado Profissional em Promoção da Saúde</li>
            <li>Inovação e Promoção Tecnológica na Saúde</li>
          </ul>
        </div>

        <div class="modal-section">
          <h4 class="modal-section__title">UNICENTRO — Universidade Estadual do Centro-Oeste · Docência em Graduação</h4>
          <p class="modal-section__inst">Ciência da Computação · Matemática Aplicada e Computacional · Agronomia · Graduação · 2021–2026</p>
          <ul class="modal-list">
            <li><strong>Desenvolvimento de Interface Web</strong></li>
            <li><strong>Desenvolvimento de Sistemas Web</strong></li>
            <li><strong>Desenvolvimento para Dispositivos Móveis</strong></li>
            <li><strong>Computação Móvel</strong></li>
            <li>Programação Orientada a Objetos / POO III</li>
            <li>Banco de Dados III</li>
            <li>Algoritmos e Programação de Computadores II</li>
            <li>Tópicos Especiais em Ciência da Computação II</li>
            <li>Lógica Digital</li>
            <li>Sistemas de Informação</li>
            <li>Segurança em Redes</li>
            <li>Estrutura de Dados</li>
            <li>Computadores e Sociedade</li>
            <li>Estágio Supervisionado</li>
            <li>Informática <em>(Agronomia)</em></li>
          </ul>
        </div>
      `
    },
    p4: {
      icon: "🎓",
      title: "Coordenação de Cursos",
      tags: ["Gestão Acadêmica", "ADS", "Engenharia de Software", "EAD", "Especialização"],
      links: [],
      html: `
        <div class="modal-section">
          <h4 class="modal-section__title">UniGuairacá — Centro Universitário Guairacá · Graduação</h4>
          <p class="modal-section__inst">Coordenação de cursos presenciais e EAD · 2018–2026</p>
          <ul class="modal-list">
            <li><strong>Tecnologia em Análise e Desenvolvimento de Sistemas — Presencial</strong> <span class="modal-year">2018–2026</span></li>
            <li><strong>Tecnologia em Análise e Desenvolvimento de Sistemas — EAD</strong> <span class="modal-year">2021–2026</span> <em>· implantação</em></li>
            <li><strong>Engenharia de Software — Presencial</strong> <span class="modal-year">2021–2026</span> <em>· implantação</em></li>
            <li><strong>Engenharia de Software — EAD</strong> <span class="modal-year">2022–2026</span> <em>· implantação</em></li>
          </ul>
        </div>

        <div class="modal-section">
          <h4 class="modal-section__title">UniGuairacá — Centro Universitário Guairacá · Especialização e MBA</h4>
          <p class="modal-section__inst">Coordenação de cursos lato sensu · 2018–2026</p>
          <ul class="modal-list">
            <li><strong>Desenvolvimento de Aplicações Web — Presencial</strong> <span class="modal-year">2018–2020</span></li>
            <li><strong>Desenvolvimento de Aplicações Web Mobile — Presencial</strong> <span class="modal-year">2019–2021</span></li>
            <li><strong>Engenharia de Software — EAD</strong> <span class="modal-year">2021–2026</span></li>
            <li><strong>MBA em Inteligência Artificial — EAD</strong> <span class="modal-year">2021–2026</span></li>
            <li><strong>Desenvolvimento Web — EAD</strong> <span class="modal-year">2021–2026</span></li>
            <li><strong>Desenvolvimento Mobile — EAD</strong> <span class="modal-year">2022–2026</span></li>
            <li><strong>MBA em Segurança da Informação — EAD</strong> <span class="modal-year">2022–2026</span></li>
            <li><strong>Governança de Tecnologia da Informação — EAD</strong> <span class="modal-year">2022–2026</span></li>
            <li><strong>MBA em Ciência de Dados (Big Data Processing and Analytics) — EAD</strong> <span class="modal-year">2026</span></li>
          </ul>
        </div>
      `
    },
    p5: {
      icon: "📋",
      title: "Orientações Acadêmicas",
      tags: ["Mestrado", "Especialização", "TCC", "Graduação"],
      links: [],
      html: `
        <div class="modal-section">
          <h4 class="modal-section__title">Mestrado Profissional em Promoção da Saúde</h4>
          <p class="modal-section__inst">UniGuairacá — Centro Universitário Guairacá</p>
          <ul class="modal-list">
            <li><strong>Cristian Manuel Zarate Gonzalez</strong> — RCP JÁ: Inovação Tecnológica para Salvamento de Vidas na Parada Cardiorrespiratória <span class="modal-year">2025</span></li>
            <li><strong>Glauco Antonio Ribas</strong> — Prontuário Interdisciplinar para Atendimento dos Pacientes dos Cursos da Área da Saúde da Unicentro <span class="modal-year">2025 · coorient.</span></li>
            <li><strong>Aline Bernar</strong> — Pré-natal Odontológico e Saúde Bucal da Gestante: Proposta de um Aplicativo para Informação e Atendimento das Gestantes da Atenção Básica de Saúde <span class="modal-year">2023 · coorient.</span></li>
            <li><strong>Monica da Silva Tavares</strong> — Integralidade no Cuidado do TEA: Inclusão do M-CHAT na Puericultura e na Rotina de Atendimento na Saúde Pública de Guarapuava/PR <span class="modal-year">2022</span></li>
            <li><strong>Mayara Karine Maoski</strong> — PSICOMED SCANNER: Aplicativo com Reconhecimento de Embalagens de Psicofármacos para Educação em Saúde <span class="modal-year">2020 · coorient.</span></li>
            <li><strong>Lilian Karin Nogueira Soares</strong> — Sistema Digital de Gestão de Prontuários Aplicado a uma Clínica Multiprofissional <span class="modal-year">2020 · coorient.</span></li>
          </ul>
        </div>

        <div class="modal-section">
          <h4 class="modal-section__title">Especialização — Inovação, Transformação Digital e E-GOV</h4>
          <p class="modal-section__inst">UNICENTRO — Universidade Estadual do Centro-Oeste</p>
          <ul class="modal-list">
            <li><strong>Kelly Crystina Gomes</strong> — PFC Kelly Crystina Gomes <span class="modal-year">2025</span></li>
            <li><strong>Bruna Eduarda Azuma</strong> — Proposta de um Sistema Online para Entrega de Documentos para Investigação de Óbito Materno, Infantil e Fetal <span class="modal-year">2025</span></li>
            <li><strong>Stefani Lopes de Souza</strong> — Aprimoramento no Preenchimento da Declaração de Óbito: Desenvolvimento de Material Didático Instrucional <span class="modal-year">2025</span></li>
            <li><strong>José Antonio Vernille Junior</strong> — Transformação Digital na Saúde: Plano de Ação para Implementação de Soluções Tecnológicas no SUS do Paraná <span class="modal-year">2025</span></li>
            <li><strong>Vitória Regina Franco</strong> — App Hemepar: Um Protótipo para Melhorar a Experiência de Doadores de Sangue <span class="modal-year">2025</span></li>
            <li><strong>Matheus Eduardo de Cristo Hudziak</strong> — Desenvolvimento de um Sistema Intuitivo para Solicitação de Suporte Técnico <span class="modal-year">2025</span></li>
            <li><strong>Tayala Erculano de Lima Lacerda</strong> — Atividade Física para População Jovem e Adulta: Prototipagem do Aplicativo + Movimento <span class="modal-year">2025</span></li>
          </ul>
        </div>

        <div class="modal-section">
          <h4 class="modal-section__title">Especialização — Desenvolvimento de Aplicações Web Mobile</h4>
          <p class="modal-section__inst">UniGuairacá — Centro Universitário Guairacá</p>
          <ul class="modal-list">
            <li><strong>Fábio José Dukievicz</strong> — Sistemas em Laravel para Consumo de Dados Extraídos por Web Crawler em Python <span class="modal-year">2021</span></li>
            <li><strong>Guilherme Fontana Matoso</strong> — Projeto Justin: Aplicação Web para Auxílio Administrativo e Judiciário <span class="modal-year">2021</span></li>
            <li><strong>Guilherme Leonhardt Santa Maria</strong> — FinanceControl: Sistema para Controle de Gastos <span class="modal-year">2021</span></li>
            <li><strong>Luiz Felipe Kirchbaner</strong> — BARBERSYS: Desenvolvimento de Software de Gestão para Barbearia <span class="modal-year">2021</span></li>
            <li><strong>Matheus Henrique Souto</strong> — House Hair Barber Shop: Sistema para Gerenciamento Interno de uma Barbearia <span class="modal-year">2021</span></li>
            <li><strong>Moacir Guedes Oliveira</strong> — Lhama: Sistema Web para Agendamento de Serviços <span class="modal-year">2021</span></li>
            <li><strong>Renan Amorim Morais Blecha</strong> — Shooting House: Refatoração do Módulo de Declarações <span class="modal-year">2021</span></li>
            <li><strong>Thiago Felipe Ribeiro Domingues</strong> — E-PLUS: Sistema de Gestão Integrado <span class="modal-year">2021</span></li>
            <li><strong>Eduardo Mateus dos Santos Gonçalves</strong> — NDNSYS: Sistema de Notificação de Desastres Naturais <span class="modal-year">2021</span></li>
            <li><strong>Samuel Alles Remlinger</strong> — Ticket-Center: Sistema Help-Desk para Controle de Solicitações de Suporte Baseado em RBC <span class="modal-year">2019</span></li>
            <li><strong>Willian Ricardo Fialka Agner</strong> — RFM: Desenvolvimento de Software de Gestão Logística <span class="modal-year">2019</span></li>
          </ul>
        </div>

        <div class="modal-section">
          <h4 class="modal-section__title">Especialização — Desenvolvimento de Aplicações Web</h4>
          <p class="modal-section__inst">UniGuairacá — Centro Universitário Guairacá</p>
          <ul class="modal-list">
            <li><strong>Matheus Felipe Zanin</strong> — Projeto Hub: Aplicativo de Busca por Músicos <span class="modal-year">2020</span></li>
            <li><strong>Salles Henrique da Silva</strong> — Sistema Web para Gerenciamento de Certificado de Eventos de Curso <span class="modal-year">2020</span></li>
            <li><strong>Mateus Junior Monteiro</strong> — Global Ticket: Sistema de Gerenciamento de Eventos <span class="modal-year">2020</span></li>
            <li><strong>Marcos Latchuk</strong> — Doutor Web: Sistema Web para Diagnóstico de Doenças e Auxílio com Tratamento de Auto-ajuda <span class="modal-year">2020</span></li>
            <li><strong>Guilherme Mazur</strong> — IKONE: Plataforma Colaborativa para Soluções de Problemas Sociais Complexos <span class="modal-year">2020</span></li>
            <li><strong>Giovane Marcos Zarembski</strong> — Materiais Store: E-commerce para Materiais de Construção <span class="modal-year">2020</span></li>
            <li><strong>Daniel Lucas de Paula</strong> — Sistema de Solicitação de Alvará <span class="modal-year">2020</span></li>
            <li><strong>Anderson Scherdovski</strong> — Stock System: Sistema Web para Controle de Estoque Online <span class="modal-year">2020</span></li>
          </ul>
        </div>

        <div class="modal-section">
          <h4 class="modal-section__title">TCC — Ciência da Computação</h4>
          <p class="modal-section__inst">UNICENTRO — Universidade Estadual do Centro-Oeste</p>
          <ul class="modal-list">
            <li><strong>Misael Mainardes Alexandrinho</strong> — Interpront: Prontuário Interdisciplinar Unicentro <span class="modal-year">2025</span></li>
            <li><strong>Maria Elisa Lima Pedro</strong> — Faalo: Uma Aplicação Web para Gerenciamento de Estudo Multilíngue <span class="modal-year">2025</span></li>
            <li><strong>Rafael Hiert Rech</strong> — Desenvolvimento de um Aplicativo para o Ensino de Teoria Musical voltado para Guitarristas <span class="modal-year">2025</span></li>
            <li><strong>Guilherme Rogério Lavagnoli Bertagna</strong> — WanderWord: Leitor de Livros Digitais Personalizável <span class="modal-year">2024</span></li>
            <li><strong>Alexon Hian Wieczorkovski Vanes</strong> — Conecta Produtor: Aplicativo para Promover e Facilitar o Comércio da Agricultura Familiar <span class="modal-year">2024</span></li>
            <li><strong>Matheus Debtil Souza</strong> — TounchDownMarket: Um Sistema para Venda de Produtos de Futebol Americano <span class="modal-year">2024</span></li>
            <li><strong>Rafael Rakaloski Barboza</strong> — LearnHub: Uma Plataforma Web para Aprendizado e Debates por meio de um Fórum de Discussão <span class="modal-year">2023</span></li>
            <li><strong>Vinicius Ferreira dos Santos</strong> — Site Institucional de Divulgação de Notícias e Projetos de Ciência, Tecnologia e Inovação de Guarapuava <span class="modal-year">2023</span></li>
            <li><strong>Marcos Vinicius Schimaichel Boava</strong> — Sci.Match: Um Sistema para Encontrar Parcerias para Projetos Científicos <span class="modal-year">2023</span></li>
            <li><strong>Guilherme Alex Ferreira</strong> — Sistema Web Mobile para Gerenciamento de Pedidos de uma Distribuidora de Bebidas <span class="modal-year">2022</span></li>
            <li><strong>Rafaela Aparecida Remes de Lima</strong> — Aluno Online UNICENTRO: Uma Proposta de Redesign Baseada nas 10 Heurísticas de Nielsen <span class="modal-year">2022</span></li>
            <li><strong>Rafael Roesler Otto</strong> — Woundware: Sistema Especialista para Atendimento de Feridas Crônicas/Complexas <span class="modal-year">2022</span></li>
            <li><strong>Erick Alan Kramer</strong> — Impacto da Desinformação na Aceitação de Tecnologias Emergentes pela Sociedade: Um Estudo de Caso com a 5G <span class="modal-year">2021</span></li>
          </ul>
        </div>

        <div class="modal-section">
          <h4 class="modal-section__title">TCC — Análise e Desenvolvimento de Sistemas</h4>
          <p class="modal-section__inst">UniGuairacá — Centro Universitário Guairacá</p>
          <ul class="modal-list">
            <li><strong>Lucas Barbosa Rodrigues</strong> — US Controller: Aplicativo Android de Controle de Máquinas para uma PCH <span class="modal-year">2018</span></li>
            <li><strong>Matheus Felipe Zanin</strong> — Aplicativo Mobile para o Auxílio de Pessoas com Deficiência na Comunicação <span class="modal-year">2018</span></li>
            <li><strong>Rafaela Zastavny</strong> — Web Feira: Aplicativo Mobile para Localização de Feiras <span class="modal-year">2018</span></li>
            <li><strong>Samuel Alles Remlinger</strong> — Shadow Slayer: Jogo 2D de Plataforma, Ação e Furtividade <span class="modal-year">2018</span></li>
            <li><strong>Diego Vinicius de Lima Pereira</strong> — Pelada 10 <span class="modal-year">2018</span></li>
            <li><strong>Ernani Gelinski Junior</strong> — App Moda <span class="modal-year">2018</span></li>
            <li><strong>Daniel Martins de Oliveira</strong> — Método de Verificação Automática para Detecção de Fake News <span class="modal-year">2018</span></li>
            <li><strong>Jefferson Galvão</strong> — Novas Tecnologias de Desenvolvimento de Software no Mundo, no Mercado e Acadêmicas de Guarapuava <span class="modal-year">2018</span></li>
            <li><strong>Victor Eduardo Cofferi</strong> — Estudo Comparativo da Eficiência de Diferentes Tipos de Conexões Utilizadas em Cantagalo-PR <span class="modal-year">2018</span></li>
            <li><strong>Eduardo Dalla Vecchia</strong> — Avaliação de IHC e Remodelagem do Site do Grupo Reinhofer <span class="modal-year">2017</span></li>
          </ul>
        </div>

        <div class="modal-section">
          <h4 class="modal-section__title">TCC — Administração</h4>
          <p class="modal-section__inst">UniGuairacá — Centro Universitário Guairacá</p>
          <ul class="modal-list">
            <li><strong>Daiana Aparecida da Luz</strong> — A Inovação como Vantagem Competitiva em Livrarias de Guarapuava e Região <span class="modal-year">2020</span></li>
            <li><strong>André Ricardo Marcondes de Souza</strong> — Inovação Empresarial como Vantagem Competitiva no Ramo de Fast Foods <span class="modal-year">2020</span></li>
          </ul>
        </div>
      `
    }
  },
  en: {
    p1: {
      icon: "🤖",
      title: "AI for Educators",
      desc: "[ Expanded description to fill in — project context, motivation, methodology, expected or achieved results. ]",
      tags: ["Artificial Intelligence", "Education", "Teaching", "In progress"],
      links: []
    },
    p2: {
      icon: "🤟🔬",
      title: "HCI & LIBRAS Research",
      desc: "[ Expanded description to fill in — HCI research lines, tools developed for LIBRAS/SignWriting, related publications, impact on the deaf community. ]",
      tags: ["HCI", "LIBRAS", "SignWriting", "Accessibility", "Usability"],
      links: [
        { label: "View thesis", url: "https://acervodigital.ufpr.br/handle/1884/59384" },
        { label: "View dissertation", url: "https://acervodigital.ufpr.br/xmlui/handle/1884/35199" }
      ]
    },
    p3: {
      icon: "📚",
      title: "Teaching Experience",
      tags: ["Web", "Mobile", "HCI", "Undergraduate", "Graduate"],
      links: [],
      desc: "Teaching experience across undergraduate and graduate programs at UTFPR, UniGuairacá, and UNICENTRO — with emphasis on web and mobile development disciplines."
    },
    p4: {
      icon: "🎓",
      title: "Program Coordination",
      desc: "[ Expanded description to fill in — programs created and coordinated, period, graduates, notable initiatives. ]",
      tags: ["Academic Management", "ADS", "Software Engineering", "Distance Learning"],
      links: []
    },
    p5: {
      icon: "📋",
      title: "Academic Advising",
      tags: ["Master's", "Specialization", "Undergrad", "Advising"],
      links: [],
      desc: "See the Portuguese version for the full list of advised students and works."
    }
  }
};

(function () {
  // Inject modal HTML into the page
  const modalHTML = `
    <div class="modal" id="portfolio-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" hidden>
      <div class="modal__overlay"></div>
      <div class="modal__box">
        <button class="modal__close" aria-label="Fechar">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
        <div class="modal__icon" id="modal-icon"></div>
        <h2 class="modal__title" id="modal-title"></h2>
        <p class="modal__desc" id="modal-desc"></p>
        <div class="modal__tags" id="modal-tags"></div>
        <div class="modal__links" id="modal-links"></div>
      </div>
    </div>`;
  document.body.insertAdjacentHTML("beforeend", modalHTML);

  // Make cards interactive
  ["p1","p2","p3","p4","p5"].forEach(key => {
    const card = document.getElementById("card-" + key);
    if (!card) return;
    card.setAttribute("data-modal", key);
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    const more = document.createElement("span");
    more.className = "project-card__more";
    more.setAttribute("data-i18n", "portfolio.more");
    more.textContent = getCurrentLang() === "en" ? "See more →" : "Ver mais →";
    card.appendChild(more);
  });

  const modal = document.getElementById("portfolio-modal");
  const overlay = modal.querySelector(".modal__overlay");
  const closeBtn = modal.querySelector(".modal__close");

  function openModal(key) {
    const lang = getCurrentLang();
    const data = (modalData[lang] || modalData.pt)[key];
    if (!data) return;

    document.getElementById("modal-icon").textContent = data.icon;
    document.getElementById("modal-title").textContent = data.title;

    const descEl = document.getElementById("modal-desc");
    if (data.html) {
      descEl.innerHTML = data.html;
    } else {
      descEl.textContent = data.desc || "";
    }

    const tagsEl = document.getElementById("modal-tags");
    tagsEl.innerHTML = data.tags.map(t => `<span class="modal__tag">${t}</span>`).join("");

    const linksEl = document.getElementById("modal-links");
    linksEl.innerHTML = (data.links || []).map(l =>
      `<a class="modal__link" href="${l.url}" target="_blank" rel="noopener">${l.label}</a>`
    ).join("");

    modal.hidden = false;
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  }

  function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = "";
  }

  document.querySelectorAll("[data-modal]").forEach(card => {
    card.addEventListener("click", () => openModal(card.dataset.modal));
    card.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openModal(card.dataset.modal); }
    });
  });

  closeBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });
})();
