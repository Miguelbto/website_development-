/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: diz ao Tailwind onde procurar classes usadas.
  // Ele vai varrer esses arquivos e incluir só o CSS necessário.
  content: ["./*.html", "./*.js"],
  theme: {
    extend: {
      // Aqui você pode customizar cores, fontes, etc.
      // Por exemplo, pra adicionar a cor "sabor-saber":
      // colors: {
      //   'sabor-saber': '#C0392B',
      // }
    },
  },
  plugins: [],
};
