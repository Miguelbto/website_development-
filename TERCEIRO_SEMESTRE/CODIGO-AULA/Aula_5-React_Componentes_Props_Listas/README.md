# Aula 5 — React: componentes, props e listas (TechFood "Sabor & Saber")

## Objetivo
Dividir a tela do TechFood em componentes reutilizáveis, passar dados por props,
montar o cardápio por categoria com listas e mostrar/esconder partes da tela com condições.

## Pastas
| Pasta | O que é |
|---|---|
| `livecoding-inicio/` | Ponto de partida do live coding = final da Aula 4 (CSS da Aula 5 já incluso) |
| `exemplos/` | Resultado final do live coding |
| `exercicios/` | Projeto dos exercícios (E1 a E4 + desafio D1); procure por `TODO` |

## Como rodar
```bash
cd exemplos/techfood-react
npm install
npm run dev
```

## Tópicos
- Relembrar: public/, src/, components/, data/ e como os arquivos se conectam
- Componentização: Header, SecaoCardapio, CardPrato, Selo, Rodape
- Props: texto, número, true/false, lista e função; valor padrão; só leitura
- Listas: `.map()` + key, `.filter()` por categoria, lista dentro de lista
- Renderização condicional: `&&`, ternário `? :` e `!`
