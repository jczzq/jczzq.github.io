module.exports = {
  title: "jczzq",
  description: "jczzq's blog",
  head: [["link", { rel: "icon", href: "/logo.ico" }]],
  themeConfig: {
    logo: "/logo.png",
    nav: [
      {
        text: 'Books',
        ariaLabel: 'Books Menu',
        items: [
          { text: "Nuxt.js Analysis", link: "/nuxt/" },
        ]
      }
    ],
    sidebar: {
      "/nuxt/": [
        "" /* /nuxt/ */,
        "menu", /* /nuxt/menu.html */
        "ci_cd",
        "babel-preset"
      ],

      // fallback
      "/": ["", "vuepress-start"]
    }
  }
};
