// Dados do cardápio. Cada prato tem 3 campos novos de verdadeiro/falso (true/false):
// vegetariano, destaque e disponivel. Eles decidem o que aparece no card.
export const cardapio = [
  { id: 1, nome: "Feijoada", preco: 42.9, categoria: "Prato principal", vegetariano: false, destaque: true, disponivel: true },
  { id: 2, nome: "Moqueca", preco: 49.9, categoria: "Prato principal", vegetariano: false, destaque: false, disponivel: false },
  { id: 3, nome: "Escondidinho de Legumes", preco: 36.5, categoria: "Prato principal", vegetariano: true, destaque: false, disponivel: true },
  { id: 4, nome: "Pudim", preco: 15.0, categoria: "Sobremesa", vegetariano: true, destaque: false, disponivel: true },
  { id: 5, nome: "Brigadeirão", preco: 13.5, categoria: "Sobremesa", vegetariano: true, destaque: true, disponivel: true },
  { id: 6, nome: "Suco de Caju", preco: 9.9, categoria: "Bebida", vegetariano: true, destaque: false, disponivel: true },
];
