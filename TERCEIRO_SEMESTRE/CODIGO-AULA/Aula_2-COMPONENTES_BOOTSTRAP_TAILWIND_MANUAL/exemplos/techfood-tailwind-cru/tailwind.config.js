/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: diz ao Tailwind onde procurar classes usadas.
  // Ele varre esses arquivos e inclui no output.css
  // SOMENTE as classes que encontrar.
  // Se apontar errado, o output.css sai vazio.
  content: [
    "./*.html",
    "./*.js",
  ],
  theme: {
    extend: {
      // Aqui você pode adicionar cores e fontes customizadas.
      // Por exemplo, pra adicionar a cor do restaurante:
      // colors: {
      //   'sabor-saber': '#C0392B',
      // }
    },
  },
  plugins: [],
}
