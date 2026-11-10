import './style.css';

const assets = {
  ubuntu: new URL('../imgs/ubuntu.png', import.meta.url).href,
  debian: new URL('../imgs/debian.png', import.meta.url).href,
  rocky: new URL('../imgs/Rocky_Linux.png', import.meta.url).href,
  centos: new URL('../imgs/CentOS.png', import.meta.url).href,
  kali: new URL('../imgs/Kali-linux.png', import.meta.url).href,
  alpine: new URL('../imgs/alpine-linux.png', import.meta.url).href,
  virtualBox: new URL('../imgs/VirtualBox.png', import.meta.url).href,
  libvirt: new URL('../imgs/libvirt.png', import.meta.url).href,
  vmware: new URL('../imgs/Vmware.png', import.meta.url).href,
  hyperV: new URL('../imgs/hyper-v.png', import.meta.url).href,
  docker: new URL('../imgs/docker.png', import.meta.url).href,
  parallels: new URL('../imgs/Parallels.png', import.meta.url).href,
  fedora: new URL('../imgs/Fedora.png', import.meta.url).href,
  arch: new URL('../imgs/arch-linux.png', import.meta.url).href,
  opensuse: new URL('../imgs/opensuse.png', import.meta.url).href,
  almaLinux: new URL('../imgs/AlmaLinux.png', import.meta.url).href,
  windows: new URL('../imgs/Windows.png', import.meta.url).href,
  avatar: new URL('../imgs/avatar.png', import.meta.url).href,
};
const creatorAvatarUrl = 'https://avatars.githubusercontent.com/u/143227938?v=4';

const favicon = document.createElement('link');
favicon.rel = 'icon';
favicon.type = 'image/png';
favicon.href = assets.avatar;
document.head.appendChild(favicon);

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) {
  throw new Error('Elemento principal da aplicação não encontrado.');
}

app.innerHTML = `
  <header class="topbar" id="topbar">
    <a class="brand" href="${import.meta.env.BASE_URL}" aria-label="Vagrant Builder - início"><img class="brand-avatar" src="${assets.avatar}" alt="Logo do Vagrant Builder" width="30" height="30" /><span>Vagrant <strong>Builder</strong></span></a>
    <nav class="main-nav" aria-label="Navegação principal"><a class="active nav-route" data-route="home" href="${import.meta.env.BASE_URL}">Builder</a><a class="nav-route" data-route="templates" href="${import.meta.env.BASE_URL}templates">Templates</a><a class="nav-route" data-route="docs" href="${import.meta.env.BASE_URL}docs">Docs</a></nav>
    <a class="github-link nav-route" data-route="about" href="${import.meta.env.BASE_URL}about">Sobre mim <span aria-hidden="true">↗</span></a>
  </header>

  <main>
    <h1 id="page-title" class="sr-only">Vagrant Builder — Gere seu ambiente Vagrant</h1>
    <section class="welcome-screen" id="welcome-screen">
      <div class="eyebrow">VAGRANT BUILDER</div>
      <h2 class="page-heading">Construa seu ambiente<br /><em>Vagrant.</em></h2>
      <p class="hero-copy">Escolha como você quer configurar seu projeto Vagrant.<br />Você poderá ajustar cada máquina em detalhes na próxima etapa.</p>
      <div class="template-actions">
        <button class="template-card" type="button" data-mode="basic">
          <span class="template-icon">✦</span>
          <span><strong>Modo Básico</strong><small>Comece rápido com as opções essenciais.</small></span>
          <span class="template-arrow">→</span>
        </button>
        <button class="template-card professional" type="button" data-mode="professional">
          <span class="template-icon">◈</span>
          <span><strong>Modo Profissional</strong><small>Tenha controle completo do seu ambiente.</small></span>
          <span class="template-arrow">→</span>
        </button>
      </div>
    </section>

    <section class="templates-screen" id="templates-screen" hidden>
      <div class="templates-heading">
        <div class="eyebrow"><span class="pulse"></span> AMBIENTES PRONTOS</div>
        <h2 class="page-heading">Comece com um <em>template.</em></h2>
        <p class="hero-copy">Escolha uma base preparada e personalize os detalhes no gerador profissional.</p>
      </div>
      <div class="template-library">
        <article class="ready-template">
          <div class="ready-template-icon">⌂</div>
          <div class="ready-template-content"><span class="template-category">DESENVOLVIMENTO</span><h2>Ambiente Web</h2><p>Nginx, PHP, Composer e banco de dados para começar um projeto web.</p><div class="template-tags"><span>Nginx</span><span>PHP</span><span>PostgreSQL</span></div></div>
          <button class="use-template" type="button" data-template="web">Usar template <span>→</span></button>
        </article>
        <article class="ready-template">
          <div class="ready-template-icon">◈</div>
          <div class="ready-template-content"><span class="template-category">SEGURANÇA</span><h2>Laboratórios de Segurança</h2><p>Ambiente para testes, análise e estudos de segurança da informação.</p><div class="template-tags"><span>Kali Linux</span><span>Docker</span><span>Ferramentas de rede</span></div></div>
          <button class="use-template" type="button" data-template="security">Usar template <span>→</span></button>
        </article>
        <article class="ready-template">
          <div class="ready-template-icon">⌁</div>
          <div class="ready-template-content"><span class="template-category">INFRAESTRUTURA</span><h2>Laboratório de Redes e IoT</h2><p>Máquinas para simular redes, serviços e dispositivos conectados.</p><div class="template-tags"><span>Ubuntu</span><span> VirtualBox</span><span>Multi-VM</span></div></div>
          <button class="use-template" type="button" data-template="network">Usar template <span>→</span></button>
        </article>
        <article class="ready-template">
          <div class="ready-template-icon">◉</div>
          <div class="ready-template-content"><span class="template-category">CONTAINERS</span><h2>Host Docker Minimalista</h2><p>Uma VM enxuta com Docker Engine pronta para executar seus containers.</p><div class="template-tags"><span>Docker</span><span>Ubuntu</span><span>Minimal</span></div></div>
          <button class="use-template" type="button" data-template="docker">Usar template <span>→</span></button>
        </article>
        <article class="ready-template">
          <div class="ready-template-icon">▥</div>
          <div class="ready-template-content"><span class="template-category">OBSERVABILIDADE</span><h2>NOC / Monitoramento</h2><p>Stack de monitoramento com Zabbix, banco de dados e utilitários de operação.</p><div class="template-tags"><span>Zabbix</span><span>MariaDB</span><span>Sysadmin</span></div></div>
          <button class="use-template" type="button" data-template="noc">Usar template <span>→</span></button>
        </article>
      </div>
    </section>

    <section class="docs-screen info-screen" id="docs-screen" hidden>
      <div class="info-heading">
        <div class="eyebrow"><span class="pulse"></span> DOCUMENTAÇÃO</div>
        <h2 class="page-heading">Do primeiro clique<br /><em>ao ambiente em execução.</em></h2>
        <p class="hero-copy">O Vagrant Builder transforma suas escolhas em um projeto Vagrant organizado. A geração acontece no navegador; a criação e o provisionamento das máquinas acontecem na sua própria máquina.</p>
      </div>
      <div class="docs-grid">
        <article class="info-card">
          <span class="info-number">01</span>
          <h2>Pré-requisitos</h2>
          <p>Antes de executar um projeto, instale na máquina física o <strong>Vagrant</strong> e pelo menos um provider compatível. Para começar, recomendamos o VirtualBox.</p>
          <div class="info-links"><a href="https://developer.hashicorp.com/vagrant/install" target="_blank" rel="noreferrer">Baixar Vagrant ↗</a><a href="https://www.virtualbox.org/wiki/Downloads" target="_blank" rel="noreferrer">Baixar VirtualBox ↗</a></div>
          <ul class="docs-list"><li>Ative <strong>VT-x</strong> (Intel) ou <strong>AMD-V</strong> (AMD) na BIOS/UEFI.</li><li>Verifique se o computador tem memória, armazenamento e permissões suficientes.</li><li>Use versões compatíveis do Vagrant, do provider e das boxes selecionadas.</li></ul>
        </article>
        <article class="info-card">
          <span class="info-number">02</span>
          <h2>Fluxo de utilização</h2>
          <ol class="docs-list"><li>Escolha o modo Básico ou Profissional.</li><li>Configure a box, o provider, as VMs, a rede e os provisionadores.</li><li>Baixe o <code>Vagrantfile</code> e coloque-o em uma pasta exclusiva do projeto.</li><li>Abra o terminal nessa pasta e execute <code>vagrant up</code>.</li></ol>
          <p>O Builder não executa Vagrant, Ansible ou Docker no navegador. Ele apenas prepara os arquivos de configuração.</p>
        </article>
        <article class="info-card">
          <span class="info-number">03</span>
          <h2>Comandos essenciais do Vagrant</h2>
          <p>Execute os comandos dentro da pasta que contém o <code>Vagrantfile</code>:</p>
          <pre><code>vagrant up          # cria, inicia e provisiona
vagrant status      # mostra o estado das VMs
vagrant ssh         # acessa uma VM
vagrant provision   # executa o provisionamento novamente
vagrant halt        # desliga as VMs
vagrant destroy     # remove as VMs e libera espaço</code></pre>
        </article>
        <article class="info-card">
          <span class="info-number">04</span>
          <h2>O que o projeto gera</h2>
          <p>O arquivo principal é o <code>Vagrantfile</code>. Ele contém a box, as máquinas, recursos, redes, portas, plugins e provisionadores escolhidos.</p>
          <ul class="docs-list"><li><strong>Shell:</strong> comandos de instalação executados durante o provisionamento.</li><li><strong>Ansible:</strong> referência para <code>ansible/playbook.yml</code>.</li><li><strong>Multi-VM:</strong> um bloco <code>config.vm.define</code> para cada máquina.</li></ul>
        </article>
        <article class="info-card">
          <span class="info-number">05</span>
          <h2>Plugins disponíveis</h2>
          <ul class="docs-list"><li><strong>vagrant-vbguest</strong> mantém as Guest Additions compatíveis com o VirtualBox.</li><li><strong>vagrant-disksize</strong> aplica um tamanho de disco personalizado. Ele é necessário quando o disco for diferente do padrão.</li><li><strong>vagrant-hostmanager</strong> configura nomes de host para facilitar a comunicação entre máquinas.</li></ul>
          <p>O Vagrantfile exibe o comando <code>vagrant plugin install</code> para cada plugin selecionado. Instale os plugins antes de executar a configuração que depende deles.</p>
        </article>
        <article class="info-card">
          <span class="info-number">06</span>
          <h2>Shell, Ansible e Docker</h2>
          <p>O Shell instala pacotes e executa comandos dentro da VM. O Ansible aplica um playbook externo. O Docker é instalado dentro da VM quando essa opção é selecionada; ele não é executado pelo navegador.</p>
          <p>Ao usar Ansible, mantenha a estrutura:</p>
          <pre><code>meu-projeto/
├── Vagrantfile
└── ansible/
    └── playbook.yml</code></pre>
        </article>
        <article class="info-card">
          <span class="info-number">07</span>
          <h2>Validação e diagnóstico</h2>
          <p>Antes de iniciar máquinas, valide a sintaxe do arquivo e consulte o estado do projeto:</p>
          <pre><code>vagrant validate
vagrant status
vagrant up --no-provision</code></pre>
          <p>Se houver falha de pacote, rede ou provider, leia a primeira mensagem de erro do terminal. Confirme também a box, o provider instalado e a virtualização habilitada.</p>
        </article>
        <article class="info-card">
          <span class="info-number">08</span>
          <h2>Boas práticas</h2>
          <ul class="docs-list"><li>Use nomes simples para projetos e máquinas, sem espaços ou caracteres especiais.</li><li>Não compartilhe senhas ou chaves privadas em scripts e playbooks.</li><li>Faça backup de playbooks personalizados antes de regenerar o projeto.</li><li>Use <code>vagrant destroy</code> apenas quando tiver certeza: ele remove as VMs e seus discos.</li></ul>
        </article>
      </div>
    </section>

    <section class="about-screen info-screen" id="about-screen" hidden>
      <div class="about-card">
        <a class="about-avatar-link" href="${creatorAvatarUrl}" target="_blank" rel="noreferrer"><img class="about-avatar" src="${creatorAvatarUrl}" alt="Avatar de Jaaziel Silva" width="170" height="170" loading="lazy" decoding="async" /></a>
        <div class="eyebrow">SOBRE O CRIADOR</div>
        <h2 class="page-heading">Olá, eu sou <em>Jaaziel Silva.</em></h2>
        <p class="about-copy">Criei o Vagrant Builder para facilitar a criação de ambientes Vagrant. A ideia é transformar uma configuração que normalmente exige vários arquivos e comandos em uma experiência visual, simples e acessível para estudantes, desenvolvedores e administradores de sistemas.</p>
        <p class="about-copy">Você escolhe a imagem, o provider, as máquinas e os provisionadores; o site organiza tudo em um Vagrantfile pronto para baixar e usar localmente.</p>
        <p class="about-copy">Aceito sugestões e críticas para continuar melhorando o projeto.</p>
        <div class="about-links"><a href="https://jaazielsilva.me" target="_blank" rel="noreferrer">Portfólio ↗</a><a href="https://github.com/JaazielSlv" target="_blank" rel="noreferrer">GitHub · JaazielSlv ↗</a></div>
      </div>
    </section>

    <section class="creation-screen" id="creation-screen" hidden>
      <div class="creation-heading">
        <button class="back-button" id="back-button" type="button">← Voltar</button>
        <div>
          <div class="eyebrow"><span class="pulse"></span> CONFIGURAÇÃO DO PROJETO</div>
          <h2 class="page-heading">Monte seu <em>ambiente.</em></h2>
        </div>
      </div>
    </section>

    <section class="builder-grid" id="builder" hidden aria-label="Configuração do projeto">
      <div class="config-panel base-panel">
        <div class="panel-heading"><div><h2>Escolha sua base</h2></div><span class="step-label">ISO</span></div>
        <p class="panel-description">Defina a imagem e o provider que irão sustentar suas máquinas.</p>
        <span class="field-label">IMAGEM BASE</span>
        <div class="image-grid" id="image-grid">
          <button class="image-card selected" type="button"><img class="os-icon" src="${assets.ubuntu}" alt="Ubuntu" width="40" height="40" /><strong>Ubuntu</strong><small>22.04 LTS</small></button>
          <button class="image-card" type="button"><img class="os-icon" src="${assets.debian}" alt="Debian" width="40" height="40" /><strong>Debian</strong><small>Bookworm 12</small></button>
          <button class="image-card" type="button"><img class="os-icon" src="${assets.rocky}" alt="Rocky Linux" width="40" height="40" /><strong>Rocky Linux</strong><small>Version 9</small></button>
          <button class="image-card" type="button"><img class="os-icon" src="${assets.centos}" alt="CentOS" width="40" height="40" /><strong>CentOS</strong><small>Stream 9</small></button>
          <button class="image-card" type="button"><img class="os-icon" src="${assets.kali}" alt="Kali Linux" width="40" height="40" /><strong>Kali Linux</strong><small>Rolling</small></button>
          <button class="image-card" type="button"><img class="os-icon" src="${assets.fedora}" alt="Fedora" width="40" height="40" /><strong>Fedora</strong><small>40</small></button>
          <button class="image-card professional-only" type="button"><img class="os-icon" src="${assets.alpine}" alt="Alpine Linux" width="40" height="40" /><strong>Alpine</strong><small>Linux 3.17</small></button>
          <button class="image-card professional-only" type="button"><img class="os-icon" src="${assets.arch}" alt="Arch Linux" width="40" height="40" /><strong>Arch Linux</strong><small>Rolling</small></button>
          <button class="image-card professional-only" type="button"><img class="os-icon" src="${assets.windows}" alt="Windows 10" width="40" height="40" /><strong>Windows 10</strong><small>Desktop</small></button>
          <button class="image-card professional-only" type="button"><img class="os-icon" src="${assets.windows}" alt="Windows 11" width="40" height="40" /><strong>Windows 11</strong><small>Desktop</small></button>
          <button class="image-card professional-only" type="button"><img class="os-icon" src="${assets.opensuse}" alt="openSUSE" width="40" height="40" /><strong>openSUSE</strong><small>Leap 15</small></button>
          <button class="image-card professional-only" type="button"><img class="os-icon" src="${assets.almaLinux}" alt="AlmaLinux" width="40" height="40" /><strong>AlmaLinux</strong><small>9</small></button>
        </div>
      </div>

      <div class="config-panel provider-panel">
        <div class="panel-heading"><div><h2>Provider</h2></div><span class="step-label">VIRTUALIZAÇÃO</span></div>
        <p class="panel-description">Escolha onde suas máquinas serão executadas.</p>
        <span class="field-label">PROVIDER</span>
        <div class="choice-grid providers" id="provider">
          <button class="choice-card selected" type="button"><img class="provider-icon" src="${assets.virtualBox}" alt="VirtualBox" width="28" height="28" /><span>VirtualBox</span></button>
          <button class="choice-card professional-only" type="button"><img class="provider-icon" src="${assets.libvirt}" alt="Libvirt" width="28" height="28" /><span>Libvirt</span></button>
          <button class="choice-card" type="button"><img class="provider-icon" src="${assets.vmware}" alt="VMware" width="28" height="28" /><span>VMware</span></button>
          <button class="choice-card professional-only" type="button"><img class="provider-icon" src="${assets.hyperV}" alt="Hyper-V" width="28" height="28" /><span>Hyper-V</span></button>
          <button class="choice-card" type="button"><img class="provider-icon" src="${assets.docker}" alt="Docker" width="28" height="28" /><span>Docker</span></button>
          <button class="choice-card professional-only" type="button"><img class="provider-icon" src="${assets.parallels}" alt="Parallels" width="28" height="28" /><span>Parallels</span></button>
        </div>
      </div>

      <div class="config-panel vm-panel full-width">
        <div class="panel-heading"><div><h2>Suas máquinas</h2></div><span class="step-label">MULTI-VM</span></div>
        <p class="panel-description">Adicione quantas VMs precisar e dê um nome para cada uma.</p>
        <div class="vm-list" id="vm-list">
          <div class="vm-card">
            <div class="vm-card-heading"><label class="vm-name-field"><span class="field-label">NOME DA VM</span><input class="text-field vm-name" value="vagrant-dev" aria-label="Nome da máquina 1" /></label><button class="remove-vm" type="button" aria-label="Remover máquina" disabled>×</button></div>
            <div class="vm-resources"><label class="field-label">RAM<select class="select-field vm-ram"><option>1 GB</option><option selected>2 GB</option><option>4 GB</option><option>8 GB</option></select></label><label class="field-label">CPUs<select class="select-field vm-cpu"><option>1 núcleo</option><option selected>2 núcleos</option><option>4 núcleos</option></select></label></div>
            <div class="professional-vm-options"><label class="field-label">DISCO (GB)<input class="text-field vm-disk" type="number" value="20" min="10" /></label><div class="port-forwarding-control"><span class="field-label">PORT FORWARDING</span><button class="plugins-button port-toggle" type="button" aria-expanded="false">Ativar configuração</button><div class="vm-port-row" hidden><input class="text-field vm-host-port" value="8080" aria-label="Porta do host" /><span>→</span><input class="text-field vm-guest-port" value="80" aria-label="Porta da VM" /></div></div><label class="field-label vm-ip-field">IP DA VM (OPCIONAL)<input class="text-field vm-ip" placeholder="192.168.56.10" /></label></div>
          </div>
        </div>
        <button class="add-vm-button" id="add-vm" type="button"><span>＋</span> Adicionar outra VM</button>
      </div>

      <div class="config-panel full-width plugins-section" id="plugins-section">
        <button class="plugins-button" id="plugins-button" type="button" aria-expanded="false"><span>＋</span> Plugins</button>
        <div class="plugins-panel" id="plugins-panel" hidden>
          <div class="plugins-heading"><strong>Plugins do Vagrant</strong><span>selecione os que deseja instalar</span></div>
          <div class="plugin-options">
            <label><input type="checkbox" /> vagrant-vbguest <small>Guest Additions atualizadas</small></label>
            <label><input id="disksize-plugin" type="checkbox" /> vagrant-disksize <small>Ajuste o tamanho do disco</small></label>
            <label><input type="checkbox" /> vagrant-hostmanager <small>Nomes de host automáticos</small></label>
          </div>
        </div>
        <p class="plugin-warning" id="disksize-warning" hidden>O tamanho personalizado do disco não será aplicado enquanto o plugin vagrant-disksize estiver desativado.</p>
      </div>
      <div class="config-panel full-width basic-tools-section" id="basic-tools-section">
        <button class="plugins-button" id="basic-tools-toggle" type="button" aria-expanded="false"><span>＋</span> Utilitários básicos</button>
        <div class="language-options" id="basic-tools-options" hidden>
          <label><input type="checkbox" checked /> git</label>
          <label><input type="checkbox" checked /> curl</label>
          <label><input type="checkbox" checked /> wget</label>
          <label><input type="checkbox" checked /> unzip</label>
          <label><input type="checkbox" checked /> htop</label>
        </div>
      </div>

      <section class="professional-options full-width" id="professional-options" hidden aria-label="Opções profissionais">
        <div class="professional-heading">
          <div><span class="eyebrow"><span class="pulse"></span> MODO PROFISSIONAL</span><h2>Controle detalhado do projeto</h2></div>
          <span class="step-label">CONFIGURAÇÃO AVANÇADA</span>
        </div>
        <div class="advanced-grid">
          <div class="config-panel project-network-panel">
            <h3>Projeto e rede</h3>
            <label class="field-label" for="project-name">NOME DO PROJETO</label>
            <input id="project-name" class="text-field" value="meu-ambiente-vagrant" />
            <label class="field-label" for="private-network">REDE PRIVADA</label>
            <div class="inline-fields"><input id="private-network" class="text-field" value="192.168.56.10" /><select id="private-network-type" class="select-field"><option value="static">IP estático</option><option value="dhcp">DHCP</option></select></div>
            <label class="field-label" for="public-network">REDE PÚBLICA</label>
            <select id="public-network" class="select-field"><option>Desativada</option><option>Usar interface padrão</option><option>Selecionar interface</option></select>
          </div>
          <div class="config-panel provisioners-panel">
            <h3>Provisionadores</h3>
            <div class="advanced-options">
              <label class="check-line"><input id="shell-toggle" type="checkbox" /> Shell Script <small>setup.sh</small></label>
              <div class="conditional-provisioner" id="shell-fields" hidden><label class="field-label" for="shell-script">SCRIPT SHELL PERSONALIZADO</label><textarea id="shell-script" class="text-area" placeholder="apt-get update"></textarea></div>
              <label class="check-line"><input id="ansible-toggle" type="checkbox" /> Ansible <small>ansible/playbook.yml</small></label>
              <div class="conditional-provisioner" id="ansible-fields" hidden><label class="field-label" for="ansible-playbook">PLAYBOOK ANSIBLE</label><textarea id="ansible-playbook" class="text-area" placeholder="- hosts: all&#10;  become: true"></textarea></div>
            </div>
            <h4>Servidores Web</h4>
            <div class="advanced-options"><label class="check-line"><input type="checkbox" /> Nginx</label><label class="check-line"><input type="checkbox" /> Apache2</label></div>
            <h4>Bancos de Dados</h4>
            <div class="advanced-options"><label class="check-line"><input type="checkbox" /> MySQL</label><label class="check-line"><input type="checkbox" /> MariaDB</label><label class="check-line"><input type="checkbox" /> PostgreSQL</label></div>
            <h4>Ambientes de Linguagens</h4>
            <div class="advanced-options"><label class="check-line expandable-option"><input id="php-toggle" type="checkbox" /> PHP</label><div class="language-options" id="php-options" hidden><label><input type="checkbox" checked /> php-xml</label><label><input type="checkbox" checked /> php-mbstring</label><label><input type="checkbox" checked /> php-mysql</label><label><input type="checkbox" checked /> php-pgsql</label><label><input type="checkbox" checked /> Composer</label></div><label class="check-line expandable-option"><input id="python-toggle" type="checkbox" /> Python</label><div class="language-options" id="python-options" hidden><label><input type="checkbox" checked /> python3</label><label><input type="checkbox" checked /> pip</label><label><input type="checkbox" checked /> venv</label></div><label class="check-line"><input type="checkbox" /> Node.js</label></div>
            <h4>Ferramentas Base</h4>
            <label class="check-line expandable-option"><input id="professional-tools-toggle" type="checkbox" /> Instalar utilitários básicos <small>git · curl · wget · unzip · htop</small></label>
            <div class="language-options" id="professional-tools-options" hidden><label><input type="checkbox" checked /> git</label><label><input type="checkbox" checked /> curl</label><label><input type="checkbox" checked /> wget</label><label><input type="checkbox" checked /> unzip</label><label><input type="checkbox" checked /> htop</label></div>
          </div>
        </div>
      </section>
    </section>

    <section class="output-bar" id="output-bar" hidden><button class="generate-button" id="generate-button" type="button">Gerar projeto <span>→</span></button></section>
  </main>
  <footer id="footer" hidden><span>VAGRANT BUILDER <span class="muted">/ OPEN SOURCE TOOL</span></span><span>Feito para quem constrói.</span></footer>
  <div class="modal-backdrop" id="summary-modal" hidden>
    <section class="summary-modal" role="dialog" aria-modal="true" aria-labelledby="summary-title">
      <button class="modal-close" id="modal-close" type="button" aria-label="Fechar resumo">×</button>
      <div class="eyebrow">RESUMO DO PROJETO</div>
      <h2 id="summary-title">Tudo pronto para gerar.</h2>
      <p class="panel-description">Confira os detalhes selecionados antes de baixar os arquivos.</p>
      <div class="summary-details" id="summary-details"></div>
      <button class="generate-button modal-action" id="download-vagrantfile" type="button">Baixar Vagrantfile <span>↓</span></button>
    </section>
  </div>
`;

const updateVmIndexes = (): void => {
  const machines = [...document.querySelectorAll<HTMLElement>('.vm-card')];
  machines.forEach((row, index) => {
    const input = row.querySelector<HTMLInputElement>('.vm-name');
    if (input) input.setAttribute('aria-label', `Nome da máquina ${index + 1}`);
    const removeButton = row.querySelector<HTMLButtonElement>('.remove-vm');
    if (removeButton) removeButton.disabled = machines.length === 1;
  });
};

const updateDiskPluginState = (): void => {
  const plugin = document.querySelector<HTMLInputElement>('#disksize-plugin');
  const hasCustomDisk = [...document.querySelectorAll<HTMLInputElement>('.vm-disk')]
    .some((input) => input.value.trim() !== '' && Number(input.value) > 0 && input.value.trim() !== '20');
  const warning = document.querySelector<HTMLElement>('#disksize-warning');
  if (warning) warning.hidden = !hasCustomDisk || Boolean(plugin?.checked);
};

document.querySelector<HTMLInputElement>('#disksize-plugin')?.addEventListener('change', updateDiskPluginState);
document.querySelector<HTMLDivElement>('#vm-list')?.addEventListener('input', (event) => {
  if ((event.target as HTMLElement).classList.contains('vm-disk')) updateDiskPluginState();
});

document.querySelector<HTMLButtonElement>('#add-vm')?.addEventListener('click', () => {
  const list = document.querySelector<HTMLDivElement>('#vm-list');
  if (!list) return;
  const row = document.createElement('div');
  row.className = 'vm-card';
  row.innerHTML = '<div class="vm-card-heading"><label class="vm-name-field"><span class="field-label">NOME DA VM</span><input class="text-field vm-name" value="vagrant-node" aria-label="Nova máquina" /></label><button class="remove-vm" type="button" aria-label="Remover máquina">×</button></div><div class="vm-resources"><label class="field-label">RAM<select class="select-field vm-ram"><option>1 GB</option><option selected>2 GB</option><option>4 GB</option><option>8 GB</option></select></label><label class="field-label">CPUs<select class="select-field vm-cpu"><option>1 núcleo</option><option selected>2 núcleos</option><option>4 núcleos</option></select></label></div><div class="professional-vm-options"><label class="field-label">DISCO (GB)<input class="text-field vm-disk" type="number" value="20" min="10" /></label><div class="port-forwarding-control"><span class="field-label">PORT FORWARDING</span><button class="plugins-button port-toggle" type="button" aria-expanded="false">Ativar configuração</button><div class="vm-port-row" hidden><input class="text-field vm-host-port" value="8080" aria-label="Porta do host" /><span>→</span><input class="text-field vm-guest-port" value="80" aria-label="Porta da VM" /></div></div><label class="field-label vm-ip-field">IP DA VM (OPCIONAL)<input class="text-field vm-ip" placeholder="192.168.56.10" /></label></div>';
  list.append(row);
  updateVmIndexes();
});

document.querySelector<HTMLDivElement>('#vm-list')?.addEventListener('click', (event) => {
  const target = event.target as HTMLElement;
  const portToggle = target.closest<HTMLButtonElement>('.port-toggle');
  if (portToggle) {
    const portRow = portToggle.parentElement?.querySelector<HTMLElement>('.vm-port-row');
    if (portRow) {
      portRow.hidden = !portRow.hidden;
      portToggle.setAttribute('aria-expanded', String(!portRow.hidden));
      portToggle.textContent = portRow.hidden ? 'Ativar configuração' : 'Ocultar configuração';
    }
  }
  if (target.closest('.remove-vm') && document.querySelectorAll('.vm-card').length > 1) {
    target.closest('.vm-card')?.remove();
    updateVmIndexes();
  }
});

document.querySelector<HTMLButtonElement>('#plugins-button')?.addEventListener('click', (event) => {
  const button = event.currentTarget as HTMLButtonElement;
  const panel = document.querySelector<HTMLDivElement>('#plugins-panel');
  if (!panel) return;
  panel.hidden = !panel.hidden;
  button.setAttribute('aria-expanded', String(!panel.hidden));
});

const bindConditionalField = (toggleId: string, fieldsId: string): void => {
  const toggle = document.querySelector<HTMLInputElement>(`#${toggleId}`);
  const fields = document.querySelector<HTMLElement>(`#${fieldsId}`);
  toggle?.addEventListener('change', () => {
    if (fields) fields.hidden = !toggle.checked;
  });
};
bindConditionalField('shell-toggle', 'shell-fields');
bindConditionalField('ansible-toggle', 'ansible-fields');
bindConditionalField('php-toggle', 'php-options');
bindConditionalField('python-toggle', 'python-options');
bindConditionalField('professional-tools-toggle', 'professional-tools-options');

let shellPreferenceTouched = false;
let applyingTemplate = false;
document.querySelector<HTMLInputElement>('#shell-toggle')?.addEventListener('change', () => {
  if (!applyingTemplate) shellPreferenceTouched = true;
});

document.querySelector<HTMLButtonElement>('#basic-tools-toggle')?.addEventListener('click', (event) => {
  const button = event.currentTarget as HTMLButtonElement;
  const options = document.querySelector<HTMLElement>('#basic-tools-options');
  if (!options) return;
  options.hidden = !options.hidden;
  button.setAttribute('aria-expanded', String(!options.hidden));
});

document.querySelectorAll<HTMLButtonElement>('.choice-card').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.choice-card').forEach((item) => item.classList.remove('selected'));
    button.classList.add('selected');
  });
});

document.querySelectorAll<HTMLButtonElement>('.image-card').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.image-card').forEach((item) => item.classList.remove('selected'));
    button.classList.add('selected');
  });
});

const welcomeScreen = document.querySelector<HTMLElement>('#welcome-screen');
const templatesScreen = document.querySelector<HTMLElement>('#templates-screen');
const docsScreen = document.querySelector<HTMLElement>('#docs-screen');
const aboutScreen = document.querySelector<HTMLElement>('#about-screen');
const creationScreen = document.querySelector<HTMLElement>('#creation-screen');
const builder = document.querySelector<HTMLElement>('#builder');
const appBasePath = import.meta.env.BASE_URL.replace(/\/+$/, '');
const currentRoute = (): string => {
  const path = window.location.pathname.replace(/\/+$/, '');
  return path.startsWith(appBasePath) ? path.slice(appBasePath.length).replace(/^\/+/, '') : '';
};

const siteUrl = 'https://jaazielslv.github.io/vagrant-builder';
const routeSeo: Record<string, { title: string; description: string }> = {
  home: {
    title: 'Vagrant Builder — Gere seu ambiente Vagrant',
    description: 'Gere Vagrantfiles, ambientes multi-VM e configurações de provisionamento diretamente no navegador.',
  },
  templates: {
    title: 'Templates Vagrant prontos | Vagrant Builder',
    description: 'Escolha templates Vagrant para ambientes web, segurança, redes, Docker e monitoramento.',
  },
  docs: {
    title: 'Documentação do Vagrant Builder',
    description: 'Aprenda a gerar, baixar e executar projetos Vagrant com providers e provisionadores.',
  },
  about: {
    title: 'Sobre o Vagrant Builder',
    description: 'Conheça o criador e o projeto open source Vagrant Builder.',
  },
  basic: {
    title: 'Gerador Vagrant básico | Vagrant Builder',
    description: 'Monte rapidamente um Vagrantfile com as opções essenciais de imagem, provider e recursos.',
  },
  professional: {
    title: 'Gerador Vagrant profissional | Vagrant Builder',
    description: 'Configure VMs, redes, plugins e provisionadores em um projeto Vagrant completo.',
  },
};

const updateSeo = (route: string): void => {
  const seo = routeSeo[route] ?? routeSeo.home;
  const canonicalUrl = `${siteUrl}${route === 'home' ? '/' : `/${route}`}`;
  const pageTitle = document.querySelector<HTMLElement>('#page-title');
  document.title = seo.title;
  if (pageTitle) pageTitle.textContent = seo.title;
  const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
  if (description) description.content = seo.description;
  const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (canonical) canonical.href = canonicalUrl;
  document.querySelectorAll<HTMLMetaElement>('meta[property="og:title"], meta[name="twitter:title"]').forEach((meta) => {
    meta.content = seo.title;
  });
  document.querySelectorAll<HTMLMetaElement>('meta[property="og:description"], meta[name="twitter:description"]').forEach((meta) => {
    meta.content = seo.description;
  });
  const ogUrl = document.querySelector<HTMLMetaElement>('meta[property="og:url"]');
  if (ogUrl) ogUrl.content = canonicalUrl;
};

type TemplateId = 'web' | 'security' | 'network' | 'docker' | 'noc';

const setCardSelection = (selector: string, value: string): void => {
  document.querySelectorAll<HTMLButtonElement>(selector).forEach((card) => {
    const matches = card.textContent?.toLowerCase().includes(value.toLowerCase()) ?? false;
    card.classList.toggle('selected', matches);
  });
};

const setOption = (text: string, checked: boolean): void => {
  document.querySelectorAll<HTMLInputElement>('.check-line input').forEach((input) => {
    const label = input.parentElement?.textContent?.toLowerCase() ?? '';
    if (label.includes(text.toLowerCase())) input.checked = checked;
  });
};

const setToggle = (id: string, checked: boolean): void => {
  const toggle = document.querySelector<HTMLInputElement>(`#${id}`);
  if (toggle && toggle.checked !== checked) {
    toggle.checked = checked;
    toggle.dispatchEvent(new Event('change'));
  }
};

const createVmCard = (name: string, ip = '', role = ''): HTMLDivElement => {
  const row = document.createElement('div');
  row.className = 'vm-card';
  row.dataset.role = role;
  row.innerHTML = `<div class="vm-card-heading"><label class="vm-name-field"><span class="field-label">NOME DA VM</span><input class="text-field vm-name" value="${escapeHtml(name)}" aria-label="Nome da máquina" /></label><button class="remove-vm" type="button" aria-label="Remover máquina">×</button></div><div class="vm-resources"><label class="field-label">RAM<select class="select-field vm-ram"><option>1 GB</option><option selected>2 GB</option><option>4 GB</option><option>8 GB</option></select></label><label class="field-label">CPUs<select class="select-field vm-cpu"><option>1 núcleo</option><option selected>2 núcleos</option><option>4 núcleos</option></select></label></div><div class="professional-vm-options"><label class="field-label">DISCO (GB)<input class="text-field vm-disk" type="number" value="20" min="10" /></label><div class="port-forwarding-control"><span class="field-label">PORT FORWARDING</span><button class="plugins-button port-toggle" type="button" aria-expanded="false">Ativar configuração</button><div class="vm-port-row" hidden><input class="text-field vm-host-port" value="8080" aria-label="Porta do host" /><span>→</span><input class="text-field vm-guest-port" value="80" aria-label="Porta da VM" /></div></div><label class="field-label vm-ip-field">IP DA VM (OPCIONAL)<input class="text-field vm-ip" placeholder="192.168.56.10" value="${escapeHtml(ip)}" /></label></div>`;
  return row;
};

const applyTemplate = (template: TemplateId): void => {
  const names: Record<TemplateId, string> = {
    web: 'Ambiente Web',
    security: 'Laboratórios de Segurança',
    network: 'Laboratório de Redes e IoT',
    docker: 'Host Docker Minimalista',
    noc: 'NOC Monitoramento',
  };
  const images: Record<TemplateId, string> = {
    web: 'ubuntu', security: 'kali linux', network: 'ubuntu', docker: 'ubuntu', noc: 'ubuntu',
  };
  const providers: Record<TemplateId, string> = {
    web: 'virtualbox', security: 'virtualbox', network: 'virtualbox', docker: 'docker', noc: 'virtualbox',
  };
  const projectName = document.querySelector<HTMLInputElement>('#project-name');
  if (builder) builder.dataset.template = template;
  if (projectName) projectName.value = names[template];
  setCardSelection('.image-card', images[template]);
  setCardSelection('.choice-card', providers[template]);

  const vmList = document.querySelector<HTMLDivElement>('#vm-list');
  if (!vmList) return;
  const vmNames: Record<TemplateId, string[]> = {
    web: ['web-server'],
    security: ['security-lab'],
    network: ['router', 'iot-node'],
    docker: ['docker-host'],
    noc: ['zabbix-server', 'monitoring-db'],
  };
  const roles: Record<TemplateId, string[]> = {
    web: ['web'],
    security: ['security'],
    network: ['router', 'iot'],
    docker: ['docker'],
    noc: ['zabbix-server', 'monitoring-db'],
  };
  vmList.replaceChildren(...vmNames[template].map((name, index) => createVmCard(name, template === 'noc' ? `192.168.56.${10 + index}` : '', roles[template][index])));
  updateVmIndexes();

  applyingTemplate = true;
  if (!shellPreferenceTouched) setToggle('shell-toggle', true);
  setToggle('ansible-toggle', false);
  setToggle('php-toggle', template === 'web');
  setToggle('python-toggle', template === 'network');
  setToggle('professional-tools-toggle', true);
  applyingTemplate = false;
  const disksizePlugin = document.querySelector<HTMLInputElement>('#disksize-plugin');
  if (disksizePlugin) disksizePlugin.checked = template !== 'noc';
  document.querySelectorAll<HTMLInputElement>('.vm-disk').forEach((input) => {
    input.value = template === 'noc' ? '' : '20';
  });
  updateDiskPluginState();
  setOption('nginx', template === 'web');
  setOption('apache2', false);
  setOption('postgresql', template === 'web');
  setOption('mariadb', template === 'noc');
  setOption('mysql', false);
  setOption('node.js', template === 'docker');
  const shellScript = document.querySelector<HTMLTextAreaElement>('#shell-script');
  if (shellScript) shellScript.value = template === 'noc'
    ? 'apt-get update\napt-get install -y zabbix-server-mysql zabbix-frontend-php mariadb-server\nsystemctl enable --now mariadb zabbix-server'
    : '';
  document.title = `${names[template]} | Vagrant Builder`;
};

const openCreationRoute = (mode: 'basic' | 'professional', replace = false): void => {
  const outputBar = document.querySelector<HTMLElement>('#output-bar');
  const topbar = document.querySelector<HTMLElement>('#topbar');
  const footer = document.querySelector<HTMLElement>('#footer');
  const pluginsSection = document.querySelector<HTMLElement>('#plugins-section');
  const basicToolsSection = document.querySelector<HTMLElement>('#basic-tools-section');
  const professionalOptions = document.querySelector<HTMLElement>('#professional-options');
  if (welcomeScreen && templatesScreen && creationScreen && builder && outputBar && topbar && footer) {
    welcomeScreen.hidden = true;
    templatesScreen.hidden = true;
    creationScreen.hidden = false;
    builder.hidden = false;
    builder.classList.toggle('professional-active', mode === 'professional');
    outputBar.hidden = false;
    topbar.hidden = false;
    footer.hidden = false;
    if (docsScreen) docsScreen.hidden = true;
    if (aboutScreen) aboutScreen.hidden = true;
    if (pluginsSection) pluginsSection.hidden = mode === 'basic';
    if (basicToolsSection) basicToolsSection.hidden = mode !== 'basic';
    if (professionalOptions) professionalOptions.hidden = mode !== 'professional';
    document.querySelectorAll<HTMLElement>('.professional-only').forEach((element) => {
      element.hidden = mode === 'basic';
    });
    if (mode === 'basic' && document.querySelector<HTMLButtonElement>('.choice-card.selected')?.classList.contains('professional-only')) {
      document.querySelectorAll<HTMLButtonElement>('.choice-card').forEach((card) => card.classList.remove('selected'));
      document.querySelector<HTMLButtonElement>('.choice-card:not(.professional-only)')?.classList.add('selected');
    }
    if (mode === 'basic' && document.querySelector<HTMLButtonElement>('.image-card.selected')?.classList.contains('professional-only')) {
      document.querySelectorAll<HTMLButtonElement>('.image-card').forEach((card) => card.classList.remove('selected'));
      document.querySelector<HTMLButtonElement>('.image-card:not(.professional-only)')?.classList.add('selected');
    }
    updateSeo(mode);
    if (!replace) {
      window.history.pushState({ mode }, '', `${appBasePath}/${mode}`);
    }
    window.scrollTo(0, 0);
  }
};

const openTemplatesRoute = (replace = false): void => {
  const outputBar = document.querySelector<HTMLElement>('#output-bar');
  const topbar = document.querySelector<HTMLElement>('#topbar');
  const footer = document.querySelector<HTMLElement>('#footer');
  const docsScreen = document.querySelector<HTMLElement>('#docs-screen');
  const aboutScreen = document.querySelector<HTMLElement>('#about-screen');
  if (welcomeScreen && templatesScreen && creationScreen && builder && outputBar && topbar && footer) {
    welcomeScreen.hidden = true;
    templatesScreen.hidden = false;
    creationScreen.hidden = true;
    builder.hidden = true;
    outputBar.hidden = true;
    footer.hidden = false;
    if (docsScreen) docsScreen.hidden = true;
    if (aboutScreen) aboutScreen.hidden = true;
    updateSeo('templates');
    document.querySelectorAll('.main-nav a').forEach((link) => link.classList.remove('active'));
    document.querySelector<HTMLAnchorElement>('[data-route="templates"]')?.classList.add('active');
    if (!replace) window.history.pushState({}, '', `${appBasePath}/templates`);
    window.scrollTo(0, 0);
  }
};

const openInfoRoute = (route: 'docs' | 'about', replace = false): void => {
  const outputBar = document.querySelector<HTMLElement>('#output-bar');
  const topbar = document.querySelector<HTMLElement>('#topbar');
  const footer = document.querySelector<HTMLElement>('#footer');
  if (!welcomeScreen || !templatesScreen || !docsScreen || !aboutScreen || !creationScreen || !builder || !outputBar || !topbar || !footer) return;
  welcomeScreen.hidden = true;
  templatesScreen.hidden = true;
  docsScreen.hidden = route !== 'docs';
  aboutScreen.hidden = route !== 'about';
  creationScreen.hidden = true;
  builder.hidden = true;
  outputBar.hidden = true;
  footer.hidden = false;
  document.querySelectorAll('.main-nav a, .github-link').forEach((link) => link.classList.remove('active'));
  document.querySelector<HTMLElement>(`[data-route="${route}"]`)?.classList.add('active');
  updateSeo(route);
  if (!replace) window.history.pushState({}, '', `${appBasePath}/${route}`);
  window.scrollTo(0, 0);
};

document.querySelectorAll<HTMLButtonElement>('.template-card').forEach((button) => {
  button.addEventListener('click', () => {
    const mode = button.dataset.mode === 'professional' ? 'professional' : 'basic';
    openCreationRoute(mode);
  });
});

document.querySelectorAll<HTMLAnchorElement>('.nav-route').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      if (link.dataset.route === 'templates') openTemplatesRoute();
      else if (link.dataset.route === 'docs' || link.dataset.route === 'about') openInfoRoute(link.dataset.route);
      else showHomeRoute();
    });
});

document.querySelectorAll<HTMLButtonElement>('.use-template').forEach((button) => {
    button.addEventListener('click', () => {
      const template = button.dataset.template as TemplateId | undefined;
      openCreationRoute('professional');
      if (template) applyTemplate(template);
  });
});
document.querySelector<HTMLButtonElement>('#back-button')?.addEventListener('click', () => {
  const outputBar = document.querySelector<HTMLElement>('#output-bar');
  const topbar = document.querySelector<HTMLElement>('#topbar');
  const footer = document.querySelector<HTMLElement>('#footer');
  const pluginsSection = document.querySelector<HTMLElement>('#plugins-section');
  const basicToolsSection = document.querySelector<HTMLElement>('#basic-tools-section');
  const professionalOptions = document.querySelector<HTMLElement>('#professional-options');
  if (welcomeScreen && creationScreen && builder && outputBar && topbar && footer) {
    welcomeScreen.hidden = false;
    if (templatesScreen) templatesScreen.hidden = true;
    creationScreen.hidden = true;
    builder.hidden = true;
    builder.classList.remove('professional-active');
    outputBar.hidden = true;
    topbar.hidden = false;
    footer.hidden = true;
    if (pluginsSection) pluginsSection.hidden = true;
    if (basicToolsSection) basicToolsSection.hidden = true;
    if (professionalOptions) professionalOptions.hidden = true;
    if (docsScreen) docsScreen.hidden = true;
    if (aboutScreen) aboutScreen.hidden = true;
    if (docsScreen) docsScreen.hidden = true;
    if (aboutScreen) aboutScreen.hidden = true;
    updateSeo('home');
    window.history.pushState({}, '', `${appBasePath}/`);
    window.scrollTo(0, 0);
  }
});

const escapeHtml = (value: string): string => value.replace(/[&<>"']/g, (character) => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#039;',
}[character] ?? character));

const rubyString = (value: string): string => value.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\r?\n/g, '\\n');

const selectedImageBox = (): string => {
  const image = document.querySelector<HTMLButtonElement>('.image-card.selected')?.querySelector('strong')?.textContent?.trim().toLowerCase();
  const boxes: Record<string, string> = {
    ubuntu: 'ubuntu/jammy64',
    debian: 'debian/bookworm64',
    'rocky linux': 'rockylinux/9',
    centos: 'centos/stream9',
    'kali linux': 'kalilinux/rolling',
    alpine: 'generic/alpine317',
    fedora: 'bento/fedora-40',
    'arch linux': 'archlinux/archlinux',
    'windows 10': 'gusztavvargadr/windows-10',
    'windows 11': 'gusztavvargadr/windows-11',
    opensuse: 'bento/opensuse-leap-15',
    almalinux: 'almalinux/9',
  };
  return image ? boxes[image] ?? 'ubuntu/jammy64' : 'ubuntu/jammy64';
};

const checkedOption = (text: string): boolean => [...document.querySelectorAll<HTMLInputElement>('.check-line input:checked')]
  .some((input) => (input.parentElement?.textContent ?? '').toLowerCase().includes(text.toLowerCase()));

const checkedLanguageOptions = (id: string): string[] => [...document.querySelectorAll<HTMLInputElement>(`#${id} input:checked`)]
  .map((input) => input.parentElement?.textContent?.trim() ?? '')
  .filter(Boolean);

const checkedBasicTool = (name: string): boolean => [...document.querySelectorAll<HTMLInputElement>('#basic-tools-options input:checked')]
  .some((input) => input.parentElement?.textContent?.trim().toLowerCase() === name.toLowerCase());

const checkedProfessionalTool = (name: string): boolean => {
  const toggle = document.querySelector<HTMLInputElement>('#professional-tools-toggle');
  return Boolean(toggle?.checked && [...document.querySelectorAll<HTMLInputElement>('#professional-tools-options input:checked')]
    .some((input) => input.parentElement?.textContent?.trim().toLowerCase() === name.toLowerCase()));
};

const selectedBase = (): 'debian' | 'alpine' | 'rpm' | 'arch' | 'suse' | 'windows' => {
  const image = document.querySelector<HTMLButtonElement>('.image-card.selected')?.querySelector('strong')?.textContent?.trim().toLowerCase();
  if (image === 'alpine') return 'alpine';
  if (image === 'arch linux') return 'arch';
  if (image === 'windows 10' || image === 'windows 11') return 'windows';
  if (image === 'opensuse') return 'suse';
  if (image === 'rocky linux' || image === 'centos' || image === 'fedora' || image === 'almalinux') return 'rpm';
  return 'debian';
};

const shellForMachine = (machine: HTMLElement, customScript: string): string => {
  const role = machine.dataset.role ?? '';
  const base = selectedBase();
  const commands = ['set -e'];
  const install = (packages: string): void => {
    if (base === 'alpine') commands.push(`apk add --no-cache ${packages}`);
    else if (base === 'rpm') commands.push(`dnf install -y ${packages}`);
    else if (base === 'arch') commands.push(`pacman -Sy --noconfirm ${packages}`);
    else if (base === 'suse') commands.push(`zypper --non-interactive install ${packages}`);
    else if (base === 'windows') commands.push(`choco install -y ${packages}`);
    else commands.push(`apt-get install -y ${packages}`);
  };
  if (base === 'debian') {
    commands.push('export DEBIAN_FRONTEND=noninteractive', 'apt-get update');
  } else if (base === 'rpm') {
    commands.push('dnf makecache');
  } else if (base === 'arch') {
    commands.push('pacman -Sy --noconfirm');
  } else if (base === 'suse') {
    commands.push('zypper --non-interactive refresh');
  }
  if (role === 'zabbix-server') {
    install('wget');
    commands.push('wget -q https://repo.zabbix.com/zabbix/7.0/ubuntu/pool/main/z/zabbix-release/zabbix-release_7.0-2+ubuntu22.04_all.deb -O /tmp/zabbix-release.deb');
    commands.push('dpkg -i /tmp/zabbix-release.deb');
    commands.push('apt-get update');
    install('zabbix-server-mysql zabbix-frontend-php zabbix-apache-conf zabbix-sql-scripts mariadb-client');
    commands.push('systemctl enable --now apache2 zabbix-server');
  } else if (role === 'monitoring-db') {
    install('mariadb-server');
    commands.push("sed -i 's/^bind-address.*/bind-address = 0.0.0.0/' /etc/mysql/mariadb.conf.d/50-server.cnf");
    commands.push('systemctl enable --now mariadb');
    commands.push('systemctl restart mariadb');
    commands.push(`mysql -e "CREATE DATABASE IF NOT EXISTS zabbix CHARACTER SET utf8mb4 COLLATE utf8mb4_bin; CREATE USER IF NOT EXISTS 'zabbix'@'192.168.56.%' IDENTIFIED BY 'zabbix'; GRANT ALL PRIVILEGES ON zabbix.* TO 'zabbix'@'192.168.56.%'; FLUSH PRIVILEGES;"`);
  } else if (role === 'security') {
    install(base === 'alpine' ? 'docker nmap tcpdump' : 'docker.io nmap tcpdump net-tools');
  } else {
    if (checkedOption('nginx')) install('nginx');
    if (checkedOption('apache2')) install('apache2');
    if (checkedOption('postgresql')) install('postgresql');
    if (checkedOption('mariadb')) install('mariadb-server');
    if (checkedOption('mysql')) install('mysql-server');
    if (document.querySelector<HTMLInputElement>('#php-toggle')?.checked) {
      const phpOptions = checkedLanguageOptions('php-options').map((packageName) => {
        const normalized = packageName.toLowerCase();
        return normalized === 'composer' ? '' : normalized;
      }).filter(Boolean);
      install(`php ${phpOptions.join(' ') || 'php-xml php-mbstring php-mysql php-pgsql'}`);
      if (checkedLanguageOptions('php-options').some((packageName) => packageName.toLowerCase() === 'composer')) {
        commands.push('php -r "copy(\'https://getcomposer.org/installer\', \'composer-setup.php\');"', 'php composer-setup.php --install-dir=/usr/local/bin --filename=composer', 'rm composer-setup.php');
      }
    }
    if (document.querySelector<HTMLInputElement>('#python-toggle')?.checked) {
      const pythonPackages = checkedLanguageOptions('python-options').map((packageName) => packageName === 'pip' ? 'python3-pip' : packageName === 'venv' ? 'python3-venv' : packageName);
      install(pythonPackages.join(' ') || 'python3 python3-pip python3-venv');
    }
    if (checkedOption('node.js')) install('nodejs npm');
    if (checkedOption('docker') || role === 'docker') install(base === 'alpine' ? 'docker' : 'docker.io');
    const basicPackages = ['git', 'curl', 'wget', 'unzip', 'htop'].filter((tool) => checkedBasicTool(tool) || checkedProfessionalTool(tool));
    if (basicPackages.length) install(basicPackages.join(' '));
  }
  if (customScript && !role.includes('zabbix') && role !== 'monitoring-db') commands.push(customScript);
  return commands.join('\n');
};

const generateVagrantfile = (): string => {
  const projectName = document.querySelector<HTMLInputElement>('#project-name')?.value.trim() || 'vagrant-project';
  const box = selectedImageBox();
  const providerLabel = document.querySelector<HTMLButtonElement>('.choice-card.selected')?.textContent?.trim() || 'VirtualBox';
  const providerName = providerLabel.toLowerCase();
  const provider = providerName === 'hyper-v' ? 'hyperv' : providerName === 'vmware' ? 'vmware_desktop' : providerName;
  const privateNetwork = document.querySelector<HTMLInputElement>('#private-network')?.value.trim();
  const shellEnabled = (document.querySelector<HTMLInputElement>('#shell-toggle')?.checked ?? false)
    || document.querySelectorAll<HTMLInputElement>('#basic-tools-options input:checked').length > 0;
  const shellScript = document.querySelector<HTMLTextAreaElement>('#shell-script')?.value.trim();
  const ansibleEnabled = document.querySelector<HTMLInputElement>('#ansible-toggle')?.checked ?? false;
  const ansiblePlaybook = document.querySelector<HTMLTextAreaElement>('#ansible-playbook')?.value.trim();
  const disksizeEnabled = document.querySelector<HTMLInputElement>('#disksize-plugin')?.checked ?? false;
  const selectedPlugins = [...document.querySelectorAll<HTMLInputElement>('.plugin-options input:checked')]
    .map((input) => input.parentElement?.textContent?.trim().match(/^\S+/)?.[0] ?? '')
    .filter(Boolean);
  const privateNetworkType = document.querySelector<HTMLSelectElement>('#private-network-type')?.value ?? 'static';
  const publicNetwork = document.querySelector<HTMLSelectElement>('#public-network')?.value ?? 'Desativada';
  const lines = [
    'Vagrant.configure("2") do |config|',
    '  # Generated by Vagrant Builder',
    '  # Created by Jaaziel Silva',
    '  # Vagrant Builder watermark - https://github.com/JaazielSlv',
    `  # Project: ${projectName}`,
    `  config.vm.box = "${box}"`,
  ];

  if (selectedPlugins.length) {
    lines.push('', '  # Required Vagrant plugins', ...selectedPlugins.map((plugin) => `  # Install with: vagrant plugin install ${plugin}`));
  }

  if (privateNetworkType === 'dhcp') {
    lines.push('  config.vm.network "private_network", type: "dhcp"');
  } else if (privateNetwork) {
    lines.push(`  config.vm.network "private_network", ip: "${rubyString(privateNetwork)}"`);
  }
  if (publicNetwork !== 'Desativada') {
    lines.push('  config.vm.network "public_network"');
  }
  if (ansibleEnabled && ansiblePlaybook) {
    lines.push('', '  require "fileutils"', '  FileUtils.mkdir_p("ansible")', `  File.write("ansible/playbook.yml", "${rubyString(ansiblePlaybook)}")`);
  }

  [...document.querySelectorAll<HTMLElement>('.vm-card')].forEach((machine) => {
    const name = machine.querySelector<HTMLInputElement>('.vm-name')?.value.trim() || 'vagrant-node';
    const ram = machine.querySelector<HTMLSelectElement>('.vm-ram')?.value || '2 GB';
    const cpu = machine.querySelector<HTMLSelectElement>('.vm-cpu')?.value || '2 núcleos';
    const disk = machine.querySelector<HTMLInputElement>('.vm-disk')?.value;
    const ip = machine.querySelector<HTMLInputElement>('.vm-ip')?.value.trim();
    const portRow = machine.querySelector<HTMLElement>('.vm-port-row');
    const hostPort = machine.querySelector<HTMLInputElement>('.vm-host-port')?.value;
    const guestPort = machine.querySelector<HTMLInputElement>('.vm-guest-port')?.value;
    const memory = Number.parseInt(ram, 10) * 1024;
    const cpus = Number.parseInt(cpu, 10) || 2;
    lines.push('', `  config.vm.define "${rubyString(name)}" do |machine|`, `    machine.vm.hostname = "${rubyString(name)}"`);
    if (ip) lines.push(`    machine.vm.network "private_network", ip: "${rubyString(ip)}"`);
    if (portRow && !portRow.hidden && hostPort && guestPort) {
      lines.push(`    machine.vm.network "forwarded_port", guest: ${guestPort}, host: ${hostPort}`);
    }
    lines.push(`    machine.vm.provider "${provider}" do |vm|`);
    if (provider === 'docker') {
      lines.push('      # Docker provider does not use VM memory or CPU settings');
    } else if (provider === 'vmware_desktop') {
      lines.push(`      vm.vmx["memsize"] = "${Number.isFinite(memory) ? memory : 2048}"`);
      lines.push(`      vm.vmx["numvcpus"] = "${Number.isFinite(cpus) ? cpus : 2}"`);
    } else {
      lines.push(`      vm.memory = ${Number.isFinite(memory) ? memory : 2048}`, `      vm.cpus = ${Number.isFinite(cpus) ? cpus : 2}`);
    }
    lines.push('    end');
    if (disk && disksizeEnabled && builder?.dataset.template !== 'noc') {
      lines.push(`    machine.disksize.size = "${rubyString(disk)}GB"`);
    }
    if (shellEnabled) {
      const generatedShell = shellForMachine(machine, shellScript ?? '');
      lines.push(`    machine.vm.provision "shell", inline: "${rubyString(generatedShell)}"`);
    }
    if (ansibleEnabled && ansiblePlaybook) lines.push('    machine.vm.provision "ansible", playbook: "ansible/playbook.yml"');
    lines.push('  end');
  });
  lines.push('end', '');
  return lines.join('\n');
};

document.querySelector<HTMLButtonElement>('#generate-button')?.addEventListener('click', () => {
  const machines = [...document.querySelectorAll<HTMLElement>('.vm-card')];
  const selectedImage = document.querySelector<HTMLButtonElement>('.image-card.selected');
  const selectedProvider = document.querySelector<HTMLButtonElement>('.choice-card.selected');
  if (!machines.length || !selectedImage || !selectedProvider) {
    window.alert('Adicione pelo menos uma VM e selecione uma imagem base e um provider antes de gerar o projeto.');
    return;
  }
  const modal = document.querySelector<HTMLElement>('#summary-modal');
  const details = document.querySelector<HTMLDivElement>('#summary-details');
  const image = document.querySelector<HTMLButtonElement>('.image-card.selected')?.querySelector('strong')?.textContent ?? 'Ubuntu';
  const providerLabel = selectedProvider.textContent?.trim() ?? 'VirtualBox';
  const providerName = providerLabel.toLowerCase();
  const providerTechnical = providerName === 'hyper-v' ? 'hyperv' : providerName === 'vmware' ? 'vmware_desktop' : providerName;
  const machineSummary = machines.map((machine) => {
    const name = machine.querySelector<HTMLInputElement>('.vm-name')?.value || 'sem-nome';
    const ram = machine.querySelector<HTMLSelectElement>('.vm-ram')?.value || '2 GB';
    const cpu = machine.querySelector<HTMLSelectElement>('.vm-cpu')?.value || '2 núcleos';
    const disk = machine.querySelector<HTMLInputElement>('.vm-disk')?.value;
    const hostPort = machine.querySelector<HTMLInputElement>('.vm-host-port')?.value;
    const guestPort = machine.querySelector<HTMLInputElement>('.vm-guest-port')?.value;
    const ip = machine.querySelector<HTMLInputElement>('.vm-ip')?.value;
    const portForwarding = machine.querySelector<HTMLElement>('.vm-port-row')?.hidden ? '' : hostPort && guestPort ? `${hostPort} → ${guestPort}` : '';
    const details = [ram, cpu, disk ? `${disk} GB` : '', portForwarding, ip ? `IP ${ip}` : ''].filter(Boolean).join(' · ');
    return `<li><strong>${escapeHtml(name)}</strong><span>${escapeHtml(details)}</span></li>`;
  }).join('');
  const plugins = [...document.querySelectorAll<HTMLInputElement>('.plugin-options input:checked')]
    .map((plugin) => plugin.parentElement?.textContent?.trim().match(/^\S+/)?.[0] ?? '')
    .filter(Boolean);
  const projectName = document.querySelector<HTMLInputElement>('#project-name')?.value;
  const privateNetworkType = document.querySelector<HTMLSelectElement>('#private-network-type')?.value;
  const privateNetwork = privateNetworkType === 'dhcp'
    ? 'DHCP'
    : document.querySelector<HTMLInputElement>('#private-network')?.value;
  const provisioners: string[] = [];
  if (document.querySelector<HTMLInputElement>('#shell-toggle')?.checked) provisioners.push('Shell Script');
  if (document.querySelector<HTMLInputElement>('#ansible-toggle')?.checked) provisioners.push('Ansible');
  ['nginx', 'apache2', 'mysql', 'mariadb', 'postgresql', 'Node.js'].forEach((name) => {
    if (checkedOption(name)) provisioners.push(name);
  });
  if (document.querySelector<HTMLInputElement>('#php-toggle')?.checked) provisioners.push('PHP');
  if (document.querySelector<HTMLInputElement>('#python-toggle')?.checked) provisioners.push('Python');
  if (document.querySelector<HTMLInputElement>('#professional-tools-toggle')?.checked) provisioners.push('Utilitários básicos');
  const advancedSummary = projectName
    ? `<div><span>Projeto</span><strong>${escapeHtml(projectName)}</strong></div><div><span>Rede privada</span><strong>${escapeHtml(privateNetwork || 'DHCP')}</strong></div>${provisioners.length ? `<div><span>Provisionadores</span><strong>${escapeHtml(provisioners.join(', '))}</strong></div>` : ''}`
    : '';
  if (modal && details) {
    details.innerHTML = `${advancedSummary}<div><span>Imagem base</span><strong>${escapeHtml(image)}</strong></div><div><span>Provider</span><strong>${escapeHtml(providerLabel)} (${escapeHtml(providerTechnical)})</strong></div><div class="machines-summary"><span>Máquinas (${machines.length})</span><ul>${machineSummary}</ul></div>${plugins.length ? `<div><span>Plugins</span><strong>${escapeHtml(plugins.join(', '))}</strong></div>` : ''}`;
    modal.hidden = false;
  }
});

document.querySelector<HTMLButtonElement>('#download-vagrantfile')?.addEventListener('click', () => {
  const blob = new Blob([generateVagrantfile()], { type: 'application/octet-stream' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'Vagrantfile';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(link.href);
});

const closeSummary = (): void => {
  const modal = document.querySelector<HTMLElement>('#summary-modal');
  if (modal) modal.hidden = true;
};
document.querySelector<HTMLButtonElement>('#modal-close')?.addEventListener('click', closeSummary);
document.querySelector<HTMLElement>('#summary-modal')?.addEventListener('click', (event) => {
  if (event.target === event.currentTarget) closeSummary();
});

const showHomeRoute = (replace = false): void => {
  const outputBar = document.querySelector<HTMLElement>('#output-bar');
  const topbar = document.querySelector<HTMLElement>('#topbar');
  const footer = document.querySelector<HTMLElement>('#footer');
  const pluginsSection = document.querySelector<HTMLElement>('#plugins-section');
  const basicToolsSection = document.querySelector<HTMLElement>('#basic-tools-section');
  const professionalOptions = document.querySelector<HTMLElement>('#professional-options');
  if (welcomeScreen && templatesScreen && creationScreen && builder && outputBar && topbar && footer) {
    welcomeScreen.hidden = false;
    templatesScreen.hidden = true;
    creationScreen.hidden = true;
    builder.hidden = true;
    builder.classList.remove('professional-active');
    outputBar.hidden = true;
    topbar.hidden = false;
    footer.hidden = true;
    if (pluginsSection) pluginsSection.hidden = true;
    if (basicToolsSection) basicToolsSection.hidden = true;
    if (professionalOptions) professionalOptions.hidden = true;
    document.querySelectorAll('.main-nav a').forEach((link) => link.classList.remove('active'));
    document.querySelector<HTMLAnchorElement>('[data-route="home"]')?.classList.add('active');
    if (!replace) window.history.pushState({}, '', `${appBasePath}/`);
    document.title = 'Vagrant Builder';
  }
};

window.addEventListener('popstate', () => {
  const route = currentRoute();
  if (route === 'basic' || route === 'professional') {
    openCreationRoute(route, true);
  } else if (route === 'templates') {
    openTemplatesRoute(true);
  } else if (route === 'docs' || route === 'about') {
    openInfoRoute(route, true);
  } else {
    showHomeRoute(true);
  }
});

const initialRoute = currentRoute();
if (initialRoute === 'basic' || initialRoute === 'professional') {
  openCreationRoute(initialRoute, true);
} else if (initialRoute === 'templates') {
  openTemplatesRoute(true);
} else if (initialRoute === 'docs' || initialRoute === 'about') {
  openInfoRoute(initialRoute, true);
} else {
  showHomeRoute(true);
}
