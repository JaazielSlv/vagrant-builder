# Vagrant Builder

Gerador visual de projetos Vagrant completos, pensado para funcionar como uma aplicação estática no GitHub Pages.

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


