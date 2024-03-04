const skillCards = document.querySelectorAll('.skill-grid .card')
const skillDescriptionContainer = document.getElementById('skill-description')
const skillDescriptions = {
    python: `<p>Com dois anos de experiência, eu mergulho fundo no <b>Python</b> para explorar duas áreas empolgantes: <b>ciência de dados</b> e <b>desenvolvimento web</b>.</p>
            <p>Na ciência de dados, faço uso intensivo de bibliotecas como <i>Pandas</i>, <i>Seaborn</i>, <i>NumPy</i>, <i>Matplotlib</i>, <i>SciPy</i>, <i>Scikit Learn</i>, e outras onde trabalho em estatística e inteligência artificial para extrair insights significativos.</p>
            <p>Além disso, no desenvolvimento web, uso o <i>Flask</i>, <i>Flask-RESTful</i>, <i>SQLAlchemy</i>, e outros pacotes para construir aplicações web eficientes e robustas.</p>
            <p>Minha jornada no Python destaca como esta linguagem versátil atende às demandas de projetos complexos em diferentes campos, proporcionando oportunidades de aprendizado e inovação contínuos.</p>`,
    java: `<p>Com um ano de experiência, mergulho no mundo do <b>Java</b> com um foco especial em <b>desenvolvimento web</b>, utilizando o servidor <i>Apache Tomcat</i> e <i>servlets</i> para criar aplicações dinâmicas e escaláveis.</p>
            <p>A jornada de aprendizado na <b>FIAP</b> tem sido uma fonte de inspiração, onde estou imerso em conceitos fundamentais e práticos do Java.</p>
            <p>Este ano, estou entusiasmado em expandir meus horizontes e mergulhar no mundo do <b>Spring Boot</b>, uma poderosa estrutura que promete simplificar o desenvolvimento de aplicativos Java com sua abordagem baseada em convenções.</p>
            <p>Minha jornada com o Java destaca a importância da aprendizagem contínua e da adaptação às tecnologias emergentes para construir soluções eficientes e inovadoras no mundo do desenvolvimento web.</p>`,
    html5: `<p>Com três anos de experiência, eu mergulho no universo do <b>HTML5</b> com uma abordagem centrada na utilização de tags semânticas para organizar o código e promover acessibilidade.</p>
            <p>As tags semânticas, como <i>&lt;header&gt;</i>, <i>&lt;nav&gt;</i>, <i>&lt;main&gt;</i>, <i>&lt;section&gt;</i>, <i>&lt;article&gt;</i> e <i>&lt;footer&gt;</i>, são essenciais para criar estruturas claras e compreensíveis para desenvolvedores e usuários.</p>
            <p>Além disso, priorizo a acessibilidade em meus projetos <b>HTML5</b>, utilizando atributos descritivos como <i>alt</i> em imagens e rótulos adequados em formulários para garantir que todos os usuários tenham uma experiência inclusiva.</p>
            <p>Minha jornada com o <b>HTML5</b> ressalta a importância de práticas de desenvolvimento responsáveis para criar websites acessíveis e significativos.</p>`,
    css3: `<p>Com três anos de experiência, eu me destaco no mundo do <b>CSS3</b> utilizando técnicas avançadas como <i>Flexbox</i> e <i>Grid</i> para construir interfaces otimizadas e atrativas.</p>
            <p>Além disso, faço uso inteligente dos recursos do seletor CSS para otimizar minha folha de estilos, garantindo uma manutenção mais fácil e um código mais limpo.</p>
            <p>Responsividade é uma prioridade em meus projetos de <b>CSS</b>, garantindo que minhas interfaces se adaptem perfeitamente a uma ampla gama de dispositivos, desde smartphones até desktops.</p>
            <p>Minha jornada com <b>CSS</b> destaca meu compromisso com a excelência no design e na usabilidade, criando interfaces que não apenas impressionam visualmente, mas também oferecem uma experiência de usuário excepcional em qualquer contexto.</p>`,
    sass: `<p>Com dois anos de experiência, o <b>Sass</b> se tornou uma ferramenta essencial para otimizar meu desenvolvimento <i>CSS</i>.</p>
            <p>Faço uso extensivo de recursos como <i>aninhamento</i>, <i>módulos</i>, <i>mixins</i>, <i>funções</i> e <i>variáveis</i> para tornar meu código mais modular, reutilizável e fácil de manter.</p>
            <p>O <b>aninhamento</b> me permite estruturar meu código de forma hierárquica, refletindo a estrutura do <i>HTML<i>, enquanto os <b>módulos</b> organizam logicamente diferentes partes do estilo. <b>Mixins e funções</b> encapsulam estilos comuns e lógica repetitiva, reduzindo a duplicação de código. O uso de <b>variáveis</b> facilita o gerenciamento de cores, tamanhos e outras propriedades em toda a folha de estilos.</p>
            <p>Minha jornada com o <b>Sass</b> destaca minha busca contínua pela eficiência e pela melhoria constante na criação de estilos para meus projetos, proporcionando uma experiência de desenvolvimento mais suave e produtiva.<p>`,
    js: `<p>Com três anos de experiência, o <b>JavaScript</b> se tornou uma ferramenta fundamental em meu arsenal de desenvolvimento.</p>
            <p>Faço uso dele para tornar minhas páginas mais <b>interativas</b> e <b>dinâmicas</b>, proporcionando uma experiência envolvente aos usuários.</p>
            <p>Além disso, faço bom uso do <b>ecossistema</b> JavaScript, incluindo o gerenciador de pacotes <i>npm</i> e o ambiente de execução <i>Node.js</i>.</p>
            <p>Essas tecnologias me permitem aproveitar bibliotecas e frameworks poderosos, desenvolver aplicativos do lado do servidor e criar soluções escaláveis e eficientes.</p>
            <p>Com o JavaScript, continuo explorando novas possibilidades e aprimorando minhas habilidades para oferecer experiências web cada vez melhores.</p>`,
    react: `<p>Com um ano de experiência, o <b>ReactJS</b> se tornou uma ferramenta poderosa em meu arsenal de desenvolvimento web.</p>
            <p>Faço um excelente uso de modularização para otimizar o código, não apenas dos componentes, mas também dos estilos associados a eles.</p>
            <p>Além disso, aproveito ao máximo as propriedades reativas do ReactJS, garantindo uma experiência de usuário fluida e responsiva.</p>
            <p>Para acelerar o desenvolvimento, faço uso de bibliotecas populares como <i>React Bootstrap</i>, <i>React Icons</i>, <i>React Router</i> e outras, que oferecem uma ampla gama de componentes e funcionalidades pré-construídas.</p>
            <p>Com o <b>ReactJS</b>, continuo explorando novas maneiras de criar interfaces de usuário modernas e eficientes, impulsionando minha jornada de desenvolvimento web para novos patamares.</p>`,
    oracle: `<p>Com um ano de experiência, o <b>Oracle Database</b> tornou-se uma parte essencial do meu conjunto de habilidades em bancos de dados.</p>
            <p>Tenho domínio em recursos avançados, incluindo a criação e uso de <i>procedures</i> e <i>functions</i>, bem como a elaboração de consultas complexas com <i>subqueries</i>, permitindo a manipulação e recuperação eficientes de dados.</p>
            <p>Além disso, aplico as convenções de forma adequada, como o uso de sequências para garantir a unicidade de chaves primárias e o emprego de tipos de dados nativos mais eficientes para otimizar o desempenho do banco de dados.</p>
            <p>Com o <b>Oracle Database</b>, continuo aprofundando meu conhecimento e explorando novos recursos para desenvolver soluções robustas e eficientes em gerenciamento de dados.</p>`,
    sqlserver: `<p>Com dois anos e meio de experiência, o <b>SQL Server</b> desempenha um papel fundamental em minha jornada de gerenciamento de bancos de dados.</p>
            <p>Tenho habilidade para utilizar recursos avançados, como a construção de consultas com <i>subqueries</i>, o que permite uma manipulação eficiente e estruturada dos dados.</p>
            <p>Além disso, aplico as convenções de forma adequada, incluindo o uso da palavra-chave <i>GO</i> para separar lotes de comandos, a seleção de tipos de dados nativos mais eficientes para melhorar o desempenho e a eficiência do banco de dados.</p>
            <p>Outro aspecto em que me destaco é na administração de usuários, garantindo acesso seguro e controlado aos dados do banco por meio de permissões e configurações adequadas.</p>
            <p>Com o <b>SQL Server</b>, continuo aprimorando minhas habilidades e explorando novas maneiras de gerenciar e otimizar o desempenho de bancos de dados, contribuindo para o sucesso de projetos e operações relacionadas a dados.</p>`,
    mysql: `<p>Com 2 anos e meio de experiência, o <b>MySQL</b> é uma parte crucial do meu conjunto de habilidades em gerenciamento de bancos de dados.</p>
            <p>Faço uso de recursos avançados, como consultas com <i>subconsultas</i> e armazenamento de arquivos binários, ampliando as capacidades do banco de dados.</p>
            <p>Adoto convenções adequadas, como a escolha de tipos de dados nativos eficientes para otimizar o desempenho. Além disso, aprecio a simplicidade e agilidade do <b>MySQL</b>, especialmente para prototipagem e desenvolvimento rápido de aplicações.</p>
            <p>Essa plataforma é uma escolha valiosa em minha jornada de desenvolvimento devido à sua facilidade de uso e eficiência em prototipagem.</p>`,
    powerbi: `<p>Com meio ano de experiência, o <b>PowerBI</b> tem sido uma ferramenta poderosa em minha jornada de análise de dados.</p>
            <p>Apesar do tempo relativamente curto de experiência, consigo criar dashboards interativos e atrativos que fornecem alto valor em insights.</p>
            <p>O <b>PowerBI</b> permite que eu visualize e analise dados de forma dinâmica, transformando números em informações significativas e compreensíveis.</p>
            <p>Com sua interface intuitiva e recursos avançados, consigo explorar tendências, identificar padrões e tomar decisões fundamentadas de maneira eficaz.</p>
            <p>Estou constantemente aprimorando minhas habilidades no <b>PowerBI</b> para oferecer análises cada vez mais sofisticadas e valiosas.</p>`,
    git: `<p>Com dois anos de experiência com o <b>Git e GitHub</b>, essas ferramentas se tornaram fundamentais em meus projetos pessoais e acadêmicos.</p>
            <p>O uso do Git e GitHub facilita significativamente o <b>desenvolvimento</b>, <b>organização</b> e <b>manutenção</b> do código, permitindo um controle preciso das versões, colaboração eficiente e gerenciamento de mudanças.</p>
            <p>Por meio de <i>branches</i>, <i>pull requests</i> e outras funcionalidades, consigo trabalhar de forma colaborativa em projetos, acompanhar o histórico de alterações e implementar novos recursos com segurança.</p>
            <p>O <b>Git e GitHub<b> são elementos essenciais em minha jornada de desenvolvimento, proporcionando uma base sólida para a gestão de código-fonte e o trabalho em equipe.</p>`
}

skillCards.forEach(skillCard => {
    skillCard.addEventListener('click', () => {
        skillCards.forEach(card => card.classList.remove('active'))

        skillCard.classList.add('active')
        skillDescriptionContainer.innerHTML = skillDescriptions[skillCard.id]
        skillDescriptionContainer.classList.add('mt-4')
    })
})

const form = document.getElementById('email-form')

async function handleSubmit(event) {
    event.preventDefault()
    const status = document.getElementById('email-form-status')
    let data = new FormData(event.target)

    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            status.innerHTML = event.target.classList.contains('portuguese') ?
                '<i class="bi bi-check-lg text-success"></i><span>Mensagem enviada!</span>' :
                '<i class="bi bi-check-lg text-success"></i><span>Message sent!</span>'
            status.classList.add('d-flex')
            status.classList.remove('d-none')

            event.target.reset()
        } else {
            response.json().then(data => {
                status.innerHTML = event.target.classList.contains('portuguese') ?
                    '<i class="bi bi-x-circle text-danger"></i><span>Houve um problema e não foi possível enviar a mensagem</span>' :
                    '<i class="bi bi-x-circle text-danger"></i><span>There was a problem and the mensage couldn\'t be sent</span>'
                status.classList.add('d-flex')
                status.classList.remove('d-none')
            })
        }
    }).catch(error => {
        status.innerHTML = event.target.classList.contains('portuguese') ?
            '<i class="bi bi-x-circle text-danger"></i><span>Houve um problema e não foi possível enviar a mensagem</span>' :
            '<i class="bi bi-x-circle text-danger"></i><span>There was a problem and the mensage couldn\'t be sent</span>'
        status.classList.add('d-flex')
        status.classList.remove('d-none')
    })
}

if (form)
    form.addEventListener('submit', handleSubmit)
