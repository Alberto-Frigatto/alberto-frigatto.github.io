const skillCards = document.querySelectorAll('.skill-grid .card')
const skillDescriptionContainer = document.getElementById('skill-description')
const skillDescriptionsPt = {
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

const skillDescriptionsEn = {
    python: `<p>With two years of experience, I dive deep into <b>Python</b> to explore two exciting areas: <b>data science</b> and <b>web development</b>.</p>
            <p>In data science, I make intensive use of libraries like <i>Pandas</i>, <i>Seaborn</i>, <i>NumPy</i>, <i>Matplotlib</i>, <i>SciPy</i>, <i>Scikit Learn</i>, and others where I work on statistics and artificial intelligence to extract meaningful insights.</p>
            <p>Furthermore, in web development, I use <i>Flask</i>, <i>Flask-RESTful</i>, <i>SQLAlchemy</i>, and other packages to build efficient and robust web applications.</p>
            <p>My journey with Python highlights how this versatile language meets the demands of complex projects in different fields, providing opportunities for continuous learning and innovation.</p>`,
    java: `<p>With one year of experience, I delve into the world of <b>Java</b> with a special focus on <b>web development</b>, utilizing the <i>Apache Tomcat</i> server and <i>servlets</i> to create dynamic and scalable applications.</p>
            <p>The learning journey at <b>FIAP</b> has been a source of inspiration, where I am immersed in fundamental and practical Java concepts.</p>
            <p>This year, I am excited to expand my horizons and dive into the world of <b>Spring Boot</b>, a powerful framework that promises to simplify Java application development with its convention-based approach.</p>
            <p>My journey with Java highlights the importance of continuous learning and adapting to emerging technologies to build efficient and innovative solutions in the world of web development.</p>`,
    html5: `<p>With three years of experience, I dive into the realm of <b>HTML5</b> with an approach centered on the use of semantic tags to organize code and promote accessibility.</p>
            <p>Semantic tags such as <i>&lt;header&gt;</i>, <i>&lt;nav&gt;</i>, <i>&lt;main&gt;</i>, <i>&lt;section&gt;</i>, <i>&lt;article&gt;</i>, and <i>&lt;footer&gt;</i> are essential for creating clear and understandable structures for developers and users.</p>
            <p>Furthermore, I prioritize accessibility in my <b>HTML5</b> projects, using descriptive attributes like <i>alt</i> for images and appropriate labels in forms to ensure that all users have an inclusive experience.</p>
            <p>My journey with <b>HTML5</b> underscores the importance of responsible development practices to create accessible and meaningful websites.</p>`,
    css3: `<p>With three years of experience, I excel in the world of <b>CSS3</b> using advanced techniques such as <i>Flexbox</i> and <i>Grid</i> to build optimized and appealing interfaces.</p>
            <p>Furthermore, I intelligently leverage CSS selector features to optimize my stylesheet, ensuring easier maintenance and cleaner code.</p>
            <p>Responsiveness is a priority in my CSS projects, ensuring that my interfaces seamlessly adapt to a wide range of devices, from smartphones to desktops.</p>
            <p>My journey with <b>CSS</b> underscores my commitment to excellence in design and usability, creating interfaces that not only visually impress but also offer an exceptional user experience in any context.</p>`,
    sass: `<p>With two years of experience, <b>Sass</b> has become an essential tool to optimize my <i>CSS</i> development.</p>
            <p>I make extensive use of features such as <i>nesting</i>, <i>modules</i>, <i>mixins</i>, <i>functions</i>, and <i>variables</i> to make my code more modular, reusable, and easy to maintain.</p>
            <p><b>Nesting</b> allows me to structure my code hierarchically, reflecting the structure of the <i>HTML</i>, while <b>modules</b> logically organize different parts of the style. <b>Mixins and functions</b> encapsulate common styles and repetitive logic, reducing code duplication. The use of <b>variables</b> makes it easier to manage colors, sizes, and other properties across the stylesheet.</p>
            <p>My journey with <b>Sass</b> underscores my continuous pursuit of efficiency and constant improvement in creating styles for my projects, providing a smoother and more productive development experience.</p>`,
    js: `<p>With three years of experience, <b>JavaScript</b> has become a fundamental tool in my development arsenal.</p>
            <p>I use it to make my pages more <b>interactive</b> and <b>dynamic</b>, providing an engaging experience to users.</p>
            <p>Furthermore, I make good use of the JavaScript <b>ecosystem</b>, including the package manager <i>npm</i> and the runtime environment <i>Node.js</i>.</p>
            <p>These technologies allow me to leverage powerful libraries and frameworks, develop server-side applications, and create scalable and efficient solutions.</p>
            <p>With JavaScript, I continue to explore new possibilities and refine my skills to deliver increasingly better web experiences.</p>`,
    react: `<p>With one year of experience, <b>ReactJS</b> has become a powerful tool in my web development arsenal.</p>
            <p>I make excellent use of modularization to optimize the code, not only of the components but also of the styles associated with them.</p>
            <p>Furthermore, I make the most of ReactJS's reactive properties, ensuring a smooth and responsive user experience.</p>
            <p>To speed up development, I make use of popular libraries like <i>React Bootstrap</i>, <i>React Icons</i>, <i>React Router</i>, and others, which offer a wide range of pre-built components and functionalities.</p>
            <p>With <b>ReactJS</b>, I continue to explore new ways to create modern and efficient user interfaces, propelling my web development journey to new heights.</p>`,
    oracle: `<p>With one year of experience, <b>Oracle Database</b> has become an essential part of my database skills.</p>
            <p>I have mastery in advanced features, including the creation and usage of <i>procedures</i> and <i>functions</i>, as well as crafting complex queries with <i>subqueries</i>, enabling efficient data manipulation and retrieval.</p>
            <p>Furthermore, I apply conventions appropriately, such as using sequences to ensure primary key uniqueness and employing more efficient native data types to optimize database performance.</p>
            <p>With <b>Oracle Database</b>, I continue to deepen my knowledge and explore new features to develop robust and efficient data management solutions.</p>`,
    sqlserver: `<p>With two and a half years of experience, <b>SQL Server</b> plays a key role in my database management journey.</p>
            <p>I have the ability to utilize advanced features, such as constructing queries with <i>subqueries</i>, enabling efficient and structured data manipulation.</p>
            <p>Furthermore, I apply conventions appropriately, including the use of the <i>GO</i> keyword to separate batches of commands, selecting more efficient native data types to enhance database performance and efficiency.</p>
            <p>Another area where I excel is in user administration, ensuring secure and controlled access to database data through proper permissions and configurations.</p>
            <p>With <b>SQL Server</b>, I continue to refine my skills and explore new ways to manage and optimize database performance, contributing to the success of data-related projects and operations.</p>`,
    mysql: `<p>With 2 and a half years of experience, <b>MySQL</b> is a crucial part of my database management skill set.</p>
            <p>I make use of advanced features, such as queries with <i>subqueries</i> and storage of binary files, expanding the capabilities of the database.</p>
            <p>I adhere to appropriate conventions, such as choosing efficient native data types to optimize performance. Additionally, I appreciate the simplicity and agility of <b>MySQL</b>, especially for prototyping and rapid application development.</p>
            <p>This platform is a valuable choice in my development journey due to its ease of use and efficiency in prototyping.</p>`,
    powerbi: `<p>With half a year of experience, <b>PowerBI</b> has been a powerful tool in my data analysis journey.</p>
            <p>Despite the relatively short period of experience, I can create interactive and appealing dashboards that provide high-value insights.</p>
            <p><b>PowerBI</b> allows me to visualize and analyze data dynamically, turning numbers into meaningful and understandable information.</p>
            <p>With its intuitive interface and advanced features, I can explore trends, identify patterns, and make informed decisions effectively.</p>
            <p>I am constantly refining my skills in <b>PowerBI</b> to deliver increasingly sophisticated and valuable analyses.</p>`,
    git: `<p>With two years of experience with <b>Git and GitHub</b>, these tools have become fundamental in my personal and academic projects.</p>
            <p>The use of Git and GitHub significantly facilitates <b>development</b>, <b>organization</b>, and <b>maintenance</b> of code, allowing precise version control, efficient collaboration, and change management.</p>
            <p>Through <i>branches</i>, <i>pull requests</i>, and other functionalities, I can work collaboratively on projects, track the history of changes, and implement new features safely.</p>
            <p><b>Git and GitHub</b> are essential elements in my development journey, providing a solid foundation for source code management and teamwork.</p>`
}

const skillContainer = document.querySelector('.skills')

skillCards.forEach(skillCard => {
    skillCard.addEventListener('click', () => {
        skillCards.forEach(card => card.classList.remove('active'))

        skillCard.classList.add('active')
        skillDescriptionContainer.innerHTML =
            skillContainer.classList.contains('portuguese') ? skillDescriptionsPt[skillCard.id] : skillDescriptionsEn[skillCard.id]
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
