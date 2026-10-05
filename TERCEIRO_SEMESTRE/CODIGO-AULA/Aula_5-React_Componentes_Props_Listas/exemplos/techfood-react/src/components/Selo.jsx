// Componente pequeno e reutilizável: uma "etiqueta" com texto.
// O mesmo componente serve para Destaque, Vegetariano e Esgotado: só mudam as props.
// tipo = "padrao" é o VALOR PADRÃO: se o pai não mandar tipo, vale "padrao".
function Selo({ texto, tipo = "padrao" }) {
  return <span className={`selo selo-${tipo}`}>{texto}</span>;
}

export default Selo;
