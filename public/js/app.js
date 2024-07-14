const skillCards = document.querySelectorAll('.skill-grid .card')
const skillDescriptionContainer = document.getElementById('skill-description')
const skillDescriptionsPt = {
    python: `<p>Com dois anos de experiência, eu mergulho fundo no <b>Python</b> para explorar duas áreas empolgantes: <b>desenvolvimento de software</b> e <b>ciência de dados</b>.</p>
            <p>No desenvolvimento de software, uso pacotes como <i>Flask</i>, <i>SQLAlchemy</i>, <i>Pydantic</i>, <i>PyJWT</i>, e outros pacotes, além de também utilizar o <i>Pytest</i> e <i>unittest</i> para construir aplicações robustas, seguras e eficientes.</p>
            <p>Na ciência de dados, faço uso intensivo de bibliotecas como <i>Pandas</i>, <i>Seaborn</i>, <i>NumPy</i>, <i>Matplotlib</i>, <i>SciPy</i>, <i>Scikit Learn</i>, e outras onde trabalho em estatística e inteligência artificial para extrair insights significativos.</p>
            <p>Minha jornada no Python destaca como esta linguagem versátil atende às demandas de projetos complexos em diferentes campos, proporcionando oportunidades de aprendizado e inovação contínuos.</p>`,
    java: `<p>Com dois anos de experiência, o <b>Java</b> tem sido uma peça fundamental no meu desenvolvimento como programador.</p>
            <p>Meu principal foco é a construção de <b>APIs REST</b> utilizando o <i>Spring Boot</i>, criando soluções robustas e eficientes.</p>
            <p>Prezo pela <b>escalabilidade</b> e <b>modularidade</b> das aplicações, garantindo que elas possam crescer e se adaptar conforme necessário.</p>
            <p>Minha jornada através do <b>Java</b> tem influenciado minha abordagem em outras linguagens, promovendo boas práticas e padrões de design que aplico em diversos projetos.</p>
            <p>Com o uso do <i>Spring Boot</i>, posso construir APIs de alto desempenho, aproveitando a vasta gama de funcionalidades e a comunidade ativa que o ecossistema Java oferece.</p>
            `,
    csharp: `<p>Com meio ano de experiência, o <b>C#</b> tem sido uma adição valiosa ao meu conjunto de habilidades de desenvolvimento.</p>
            <p>Meu principal foco é a construção de <b>aplicações web</b>, seja websites ou APIs REST, utilizando o <i>ASP.NET</i>.</p>
            <p>O <b>ASP.NET</b> me permite criar aplicações web robustas e escaláveis, aproveitando a sintaxe poderosa e as capacidades avançadas do <b>C#</b>.</p>
            <p>Com o uso de <i>Entity Framework</i>, <i>ASP.NET Core MVC</i> e <i>ASP.NET Core Web API</i>, posso construir desde pequenas APIs até sistemas complexos de gerenciamento de dados.</p>
            <p>Estou constantemente aprimorando minhas habilidades no <b>C#</b> e no <b>ASP.NET</b>, explorando novas ferramentas e práticas para oferecer soluções web eficientes e modernas.</p>`,
    kotlin: `<p>Com meio ano de experiência, o <b>Kotlin</b> tem se mostrado uma ferramenta essencial em minha jornada de desenvolvimento.</p>
            <p>Meu principal foco é a construção de <b>aplicações Android</b> utilizando o <i>Jetpack Compose</i>, garantindo interfaces modernas e dinâmicas.</p>
            <p>Prezo muito pela <b>acessibilidade</b> e <b>clareza</b> das minhas interfaces, buscando proporcionar a melhor experiência possível para todos os usuários.</p>
            <p>Além disso, faço uso de bibliotecas como <i>Retrofit2</i> para consumir serviços web de forma eficiente, integrando dados externos às minhas aplicações de maneira fluida.</p>
            <p>Estou continuamente aprimorando minhas habilidades no <b>Kotlin</b> e explorando o ecossistema do <i>Jetpack Compose</i> para criar aplicações Android cada vez mais inovadoras e acessíveis.</p>`,
    sass: `<p>Com dois anos de experiência, o <b>Sass</b> se tornou uma ferramenta essencial para otimizar meu desenvolvimento <i>CSS</i>.</p>
            <p>Faço uso extensivo de recursos como <i>aninhamento</i>, <i>módulos</i>, <i>mixins</i>, <i>funções</i> e <i>variáveis</i> para tornar meu código mais modular, reutilizável e fácil de manter.</p>
            <p>O <b>aninhamento</b> me permite estruturar meu código de forma hierárquica, refletindo a estrutura do <i>HTML</i>, enquanto os <b>módulos</b> organizam logicamente diferentes partes do estilo. <b>Mixins e funções</b> encapsulam estilos comuns e lógica repetitiva, reduzindo a duplicação de código. O uso de <b>variáveis</b> facilita o gerenciamento de cores, tamanhos e outras propriedades em toda a folha de estilos.</p>
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
    database: `<p>Com três anos de experiência na construção, gerenciamento e utilização de <b>bancos de dados SQL</b>, desenvolvi uma forte expertise nessa área.</p>
            <p>Meus bancos principais são o <b>Oracle</b>, onde faço uso avançado de <i>procedures</i> e <i>functions</i>, e o <b>MySQL</b>, que utilizo para aplicações de menor escopo devido à sua simplicidade.</p>
            <p>Além disso, trabalho com <b>SQL Server</b> e <b>SQLite</b>, sendo este último geralmente utilizado para ambientes de testes.</p>
            <p>Prezando pela <b>normalização dos dados</b> e pela <b>eficiência</b> na utilização do banco, busco sempre implementar práticas que garantam a integridade e o desempenho das minhas bases de dados.</p>
            <p>Minha experiência com bancos de dados SQL fortalece minhas habilidades em desenvolvimento, contribuindo para aplicações mais robustas e eficientes.</p>`,
    docker: `<p>Com meio ano de experiência, o <b>Docker</b> tem se tornado uma ferramenta essencial na minha stack de desenvolvimento.</p>
            <p>O maior benefício que ele proporciona é a capacidade de tornar as aplicações <b>distribuíveis</b> e <b>executáveis</b> em qualquer ambiente, simplificando o processo de deployment.</p>
            <p>Além disso, o Docker permite a criação de versões do mesmo aplicativo ao longo do tempo, facilitando a gestão de mudanças e a continuidade dos projetos.</p>
            <p>Minha experiência com o <b>Docker</b> fortalece minha abordagem de desenvolvimento, promovendo práticas modernas e eficientes na criação e manutenção de aplicações.</p>`,
    cloud: `<p>Com meio ano de experiência, a <b>nuvem</b> se tornou uma parte fundamental da minha abordagem de desenvolvimento.</p>
            <p>Possuo conhecimentos em <b>AWS</b>, <b>Azure</b> e <b>Google Cloud</b>, abrangendo a criação e gestão de <i>VMs</i>, <i>buckets de armazenamento</i>, <i>redes virtuais</i> e o <i>deploy</i> de aplicações.</p>
            <p>Essas habilidades me permitem desenvolver soluções escaláveis e flexíveis, aproveitando ao máximo os recursos oferecidos por cada plataforma.</p>
            <p>Estou sempre em busca de expandir meu conhecimento em <b>cloud computing</b> para oferecer soluções ainda mais eficientes e inovadoras.</p>`,
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
    python: `<p>With two years of experience, I dive deep into <b>Python</b> to explore two exciting areas: <b>software development</b> and <b>data science</b>.</p>
            <p>In software development, I use packages like <i>Flask</i>, <i>SQLAlchemy</i>, <i>Pydantic</i>, <i>PyJWT</i>, and others, also utilizing <i>Pytest</i> and <i>unittest</i> to build robust, secure, and efficient applications.</p>
            <p>In data science, I extensively use libraries like <i>Pandas</i>, <i>Seaborn</i>, <i>NumPy</i>, <i>Matplotlib</i>, <i>SciPy</i>, <i>Scikit Learn</i>, and others to work in statistics and artificial intelligence to extract meaningful insights.</p>
            <p>My journey with Python highlights how this versatile language meets the demands of complex projects in various fields, providing continuous opportunities for learning and innovation.</p>`,
    java: `<p>With two years of experience, <b>Java</b> has been a fundamental part of my development as a programmer.</p>
            <p>My main focus is building <b>REST APIs</b> using <i>Spring Boot</i>, creating robust and efficient solutions.</p>
            <p>I value <b>scalability</b> and <b>modularity</b> of applications, ensuring they can grow and adapt as needed.</p>
            <p>My journey through <b>Java</b> has influenced my approach in other languages, promoting best practices and design patterns that I apply in various projects.</p>
            <p>Using <i>Spring Boot</i>, I can build high-performance APIs, leveraging the wide range of features and the active community that the Java ecosystem offers.</p>`,
    csharp: `<p>With half a year of experience, <b>C#</b> has been a valuable addition to my development skill set.</p>
            <p>My main focus is building <b>web applications</b>, whether websites or REST APIs, using <i>ASP.NET</i>.</p>
            <p><b>ASP.NET</b> allows me to create robust and scalable web applications, leveraging the powerful syntax and advanced capabilities of <b>C#</b>.</p>
            <p>Using <i>Entity Framework</i>, <i>ASP.NET Core MVC</i>, and <i>ASP.NET Core Web API</i>, I can build everything from small APIs to complex data management systems.</p>
            <p>I am constantly improving my skills in <b>C#</b> and <b>ASP.NET</b>, exploring new tools and practices to deliver efficient and modern web solutions.</p>`,
    kotlin: `<p>With half a year of experience, <b>Kotlin</b> has proven to be an essential tool in my development journey.</p>
            <p>My main focus is building <b>Android applications</b> using <i>Jetpack Compose</i>, ensuring modern and dynamic interfaces.</p>
            <p>I greatly value the <b>accessibility</b> and <b>clarity</b> of my interfaces, aiming to provide the best possible experience for all users.</p>
            <p>Additionally, I use libraries like <i>Retrofit2</i> to consume web services efficiently, integrating external data into my applications seamlessly.</p>
            <p>I am continually improving my skills in <b>Kotlin</b> and exploring the <i>Jetpack Compose</i> ecosystem to create increasingly innovative and accessible Android applications.</p>`,
    sass: `<p>With two years of experience, <b>Sass</b> has become an essential tool for optimizing my <i>CSS</i> development.</p>
            <p>I extensively use features like <i>nesting</i>, <i>modules</i>, <i>mixins</i>, <i>functions</i>, and <i>variables</i> to make my code more modular, reusable, and easy to maintain.</p>
            <p><b>Nesting</b> allows me to structure my code hierarchically, reflecting the structure of <i>HTML</i>, while <b>modules</b> logically organize different parts of the style. <b>Mixins and functions</b> encapsulate common styles and repetitive logic, reducing code duplication. Using <b>variables</b> facilitates the management of colors, sizes, and other properties across the stylesheet.</p>
            <p>My journey with <b>Sass</b> highlights my continuous pursuit of efficiency and constant improvement in creating styles for my projects, providing a smoother and more productive development experience.</p>`,
    js: `<p>With three years of experience, <b>JavaScript</b> has become a fundamental tool in my development arsenal.</p>
            <p>I use it to make my pages more <b>interactive</b> and <b>dynamic</b>, providing an engaging experience for users.</p>
            <p>Additionally, I make good use of the <b>JavaScript ecosystem</b>, including the package manager <i>npm</i> and the runtime environment <i>Node.js</i>.</p>
            <p>These technologies allow me to leverage powerful libraries and frameworks, develop server-side applications, and create scalable and efficient solutions.</p>
            <p>With JavaScript, I continue to explore new possibilities and enhance my skills to deliver increasingly better web experiences.</p>`,
    react: `<p>With one year of experience, <b>ReactJS</b> has become a powerful tool in my web development arsenal.</p>
            <p>I make excellent use of modularization to optimize the code, not only of the components but also of the associated styles.</p>
            <p>Furthermore, I fully leverage ReactJS's reactive properties, ensuring a smooth and responsive user experience.</p>
            <p>To accelerate development, I use popular libraries like <i>React Bootstrap</i>, <i>React Icons</i>, <i>React Router</i>, and others, which offer a wide range of pre-built components and functionalities.</p>
            <p>With <b>ReactJS</b>, I continue to explore new ways to create modern and efficient user interfaces, elevating my web development journey to new heights.</p>`,
    database: `<p>With three years of experience in building, managing, and utilizing <b>SQL databases</b>, I have developed strong expertise in this area.</p>
            <p>My main databases are <b>Oracle</b>, where I use <i>procedures</i> and <i>functions</i> extensively, and <b>MySQL</b>, which I use for smaller scope applications due to its simplicity.</p>
            <p>Additionally, I work with <b>SQL Server</b> and <b>SQLite</b>, the latter usually utilized for testing environments.</p>
            <p>Valuing <b>data normalization</b> and <b>efficiency</b> in database usage, I always seek to implement practices that ensure the integrity and performance of my databases.</p>
            <p>My experience with SQL databases strengthens my development skills, contributing to more robust and efficient applications.</p>`,
    docker: `<p>With half a year of experience, <b>Docker</b> has become an essential tool in my development stack.</p>
            <p>The greatest benefit it provides is the ability to make applications <b>distributable</b> and <b>executable</b> in any environment, simplifying the deployment process.</p>
            <p>Moreover, Docker allows for the creation of versions of the same application over time, facilitating change management and project continuity.</p>
            <p>My experience with <b>Docker</b> strengthens my development approach, promoting modern and efficient practices in creating and maintaining applications.</p>`,
    cloud: `<p>With half a year of experience, <b>cloud computing</b> has become a fundamental part of my development approach.</p>
            <p>I have knowledge in <b>AWS</b>, <b>Azure</b>, and <b>Google Cloud</b>, covering the creation and management of <i>VMs</i>, <i>storage buckets</i>, <i>virtual networks</i>, and <i>application deployments</i>.</p>
            <p>These skills enable me to develop scalable and flexible solutions, fully leveraging the resources offered by each platform.</p>
            <p>I am always seeking to expand my knowledge in <b>cloud computing</b> to provide even more efficient and innovative solutions.</p>`,
    powerbi: `<p>With half a year of experience, <b>Power BI</b> has been a powerful tool in my data analysis journey.</p>
            <p>Despite my relatively short experience, I can create interactive and engaging dashboards that provide high value in insights.</p>
            <p><b>Power BI</b> allows me to visualize and analyze data dynamically, transforming numbers into meaningful and understandable information.</p>
            <p>With its intuitive interface and advanced features, I can explore trends, identify patterns, and make informed decisions effectively.</p>
            <p>I am constantly improving my skills in <b>Power BI</b> to offer increasingly sophisticated and valuable analyses.</p>`,
    git: `<p>With two years of experience with <b>Git and GitHub</b>, these tools have become fundamental in my personal and academic projects.</p>
            <p>Using Git and GitHub significantly facilitates <b>development</b>, <b>organization</b>, and <b>maintenance</b> of code, allowing precise version control, efficient collaboration, and change management.</p>
            <p>Through <i>branches</i>, <i>pull requests</i>, and other features, I can work collaboratively on projects, track the history of changes, and implement new features safely.</p>
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
