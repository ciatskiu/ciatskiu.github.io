# ciatskiu.github.io

Site pessoal de Carlos Eduardo Iatskiu — professor efetivo na UTFPR (câmpus Guarapuava) e pesquisador em Interação Humano-Computador, Tecnologias Assistivas para LIBRAS e IA aplicada à Educação.

🔗 **[ciatskiu.github.io](https://ciatskiu.github.io)**

## Sobre

Site estático com apresentação profissional, trajetória acadêmica, estatísticas de atuação e portfólio de projetos e pesquisas. Bilíngue (PT/EN) e com suporte a tema claro/escuro.

## Stack

- HTML5, CSS3 e JavaScript puro (sem frameworks ou build step)
- Hospedagem via GitHub Pages

## Estrutura

```
.
├── index.html      # página única com todas as seções
├── css/style.css   # estilos e temas (dark/light)
├── js/
│   ├── i18n.js     # traduções PT/EN
│   └── main.js     # tema, idioma, menu mobile, navegação
└── img/            # foto de perfil e favicon
```

## Rodando localmente

```bash
npx serve .
```

## Publicando alterações

```bash
git add .
git commit -m "descrição da alteração"
git push
```

O GitHub Pages atualiza automaticamente o site em poucos minutos após o push para a branch `main`.
