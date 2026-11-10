# Vagrant Builder

## Acesse a página

Use o Vagrant Builder diretamente pelo GitHub Pages:

**https://jaazielslv.github.io/vagrant-builder/**

## Desenvolvimento

```bash
npm install
npm run dev
```

Para validar o build:

```bash
npm run build
```

## Publicação no GitHub Pages

1. Crie um repositório chamado `vagrant-builder` e envie estes arquivos para a branch `main`.
2. Em **Settings > Pages**, selecione **GitHub Actions** como fonte de publicação.
3. O workflow em `.github/workflows/deploy.yml` fará o build e a publicação automaticamente a cada push.

O workflow define `VITE_BASE_PATH` automaticamente com o nome do repositório durante o build. Para um build local, o Vite usa `/` como base padrão.

## SEO e descoberta

O build publica automaticamente `sitemap.xml`, `robots.txt` e `llms.txt`. O HTML também inclui canonical URL, metadados Open Graph/Twitter e dados estruturados `WebApplication`.

Para concluir a verificação externa, adicione `https://jaazielslv.github.io/vagrant-builder/` ao Google Search Console, confirme a propriedade e envie `sitemap.xml`. O GitHub Pages fornece HTTPS automaticamente.

