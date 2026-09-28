# TechFood — Tailwind CSS

Versao do TechFood "Sabor & Saber" usando **Tailwind CSS** instalado via npm.

Compare com a pasta `../techfood-bootstrap` — mesmo visual, filosofia diferente.

---

## Leia antes de comecar

O Tailwind tem **duas versoes principais** no mercado:

- **Versao 3 (v3)** — estavel, funciona com `npx tailwindcss` direto
- **Versao 4 (v4)** — nova, quebrou o CLI, precisa de pacote separado

O `npm install -D tailwindcss` sem especificar versao **instala a v4**,
e o `npx tailwindcss -i input.css -o output.css --watch` **nao funciona na v4** sem instalar o CLI separado.

**Neste projeto usamos a v3.** Siga os passos abaixo e nao tera problemas.

---

## Como rodar

### Passo 1 — Confirmar que esta na pasta certa

No VS Code, abra o terminal integrado (Ctrl + aspas) e confirme:

```
pwd
```

Deve aparecer algo como `...\exemplos\techfood-tailwind`. Se nao estiver:

```
cd exemplos/techfood-tailwind
```

---

### Passo 2 — Instalar o Tailwind v3

```
npm install -D tailwindcss@3
```

**Por que `@3`?** Sem ele, o npm instala a v4 que quebra o proximo passo.
O `@3` forca a versao 3, estavelconectado e compativel com o comando abaixo.

Apos rodar, aparece `node_modules/` e `package-lock.json`. Normal.

---

### Passo 3 — Gerar o CSS em modo watch

```
npx tailwindcss -i input.css -o output.css --watch
```

O terminal vai mostrar `Done in Xms.` e ficar rodando.
**Deixe esse terminal aberto** enquanto trabalha.

O que esse comando faz:

- Le o `input.css` (3 diretivas @tailwind)
- Varre o `index.html` e `script.js` procurando classes usadas
- Gera o `output.css` com CSS SOMENTE das classes que voce usou
- `--watch` = regera automaticamente ao salvar

---

### Passo 4 — Abrir no navegador

Botao direito no `index.html` > **Open with Live Server**.

---

## Erros comuns e como resolver

### Erro: `could not determine executable to run`

**Causa:** npm instalou a v4 sem o CLI necessario.

**Solucao:**

```
npm uninstall tailwindcss
npm install -D tailwindcss@3
npx tailwindcss -i input.css -o output.css --watch
```

---

### Erro: `Cannot find module 'tailwindcss'`

**Causa:** node_modules ausente ou corrompido.

**Solucao Windows (PowerShell):**

```
Remove-Item -Recurse -Force node_modules
npm install -D tailwindcss@3
```

**Solucao Mac/Linux:**

```
rm -rf node_modules
npm install -D tailwindcss@3
```

---

### Erro: `ENOENT: no such file or directory, open 'input.css'`

**Causa:** terminal esta na pasta errada.

**Solucao:** confirme com `pwd` que esta em `techfood-tailwind/`
e que `input.css` existe com `ls`.

---

### Site abriu mas sem estilo (pagina sem CSS)

**Causa 1:** `index.html` ainda linka `style.css` em vez de `output.css`.

Confirme que o head do HTML tem:

```html
<link rel="stylesheet" href="output.css" />
```

**Causa 2:** `tailwind.config.js` com `content` errado.

Confirme que o arquivo tem:

```js
module.exports = {
  content: ["./*.html", "./*.js"],
  theme: { extend: {} },
  plugins: [],
};
```

---

## Estrutura da pasta

```
techfood-tailwind/
├── index.html           HTML com classes Tailwind
├── input.css            Entrada do Tailwind (3 linhas de @tailwind)
├── output.css           Gerado automaticamente — NAO edite a mao
├── tailwind.config.js   Configuracao
├── script.js            JS identico a versao Bootstrap
├── package.json         Criado pelo npm automaticamente
├── package-lock.json    Criado pelo npm automaticamente
├── node_modules/        Criado pelo npm — NAO vai pro Git
└── README.md            Este arquivo
```

O `node_modules/` esta no `.gitignore` e nao vai pro repositorio.
Quem clonar o projeto roda `npm install -D tailwindcss@3` pra recriar.

---

## Comparativo Bootstrap x Tailwind

| O que faz          | Bootstrap                     | Tailwind                                  |
| ------------------ | ----------------------------- | ----------------------------------------- |
| Fundo vermelho     | bg-danger                     | bg-red-600                                |
| Texto branco       | text-white                    | text-white (igual)                        |
| Centralizar texto  | text-center                   | text-center (igual)                       |
| Padding geral      | p-4                           | p-4 (igual)                               |
| Negrito            | fw-bold                       | font-bold                                 |
| Texto grande       | fs-2                          | text-3xl                                  |
| Borda arredondada  | rounded-3                     | rounded-xl                                |
| Sombra suave       | shadow-sm                     | shadow-sm (igual)                         |
| Grid responsivo    | col-12 col-md-6 col-lg-4      | grid-cols-1 md:grid-cols-2 lg:grid-cols-3 |
| Flexbox            | d-flex justify-content-center | flex justify-center                       |
| Esconder no mobile | d-none d-md-block             | hidden md:block                           |

text-white, text-center, p-4 e shadow-sm sao iguais nos dois!
Tailwind e Bootstrap compartilham varias convencoes de nomenclatura.

---

## CDN x npm — por que usamos npm aqui?

|                | CDN                     | npm                    |
| -------------- | ----------------------- | ---------------------- |
| Instalacao     | nenhuma (1 tag no HTML) | npm install            |
| Tamanho do CSS | enorme (tudo incluido)  | so o que voce usou     |
| Para producao  | nao recomendado         | correto                |
| Para aprender  | Bootstrap: sim          | Tailwind: preferir npm |

O CDN do Tailwind existe: `<script src="https://cdn.tailwindcss.com">`
Mas carrega **28MB de CSS** — impraticavel em producao.

Com npm, o Tailwind gera so o CSS das classes que voce usou.
O arquivo final fica com **poucos KB**.
