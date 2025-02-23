import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "innerdecision",
  description: "A personal blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.webp',
    nav: [
      { text: "Home", link: "/" },
      { text: "Posts", link: "/knowing/" },
    ],

    sidebar: [
      {
        text: "All Posts",
        items: [
          // { text: "Markdown Examples", link: "/markdown-examples" },
          // { text: "Runtime API Examples", link: "/api-examples" },
          { text: "1. Knowing", link: "/knowing/" },
          { text: "2. Default Mode Network", link: "/default-mode-network/" },
          { text: "3. Reticular Activating System", link: "/reticular-activating-system/" },
        ],
      },
    ],

    // socialLinks: [
      // { icon: "github", link: "https://github.com/vuejs/vitepress" },
    // ],
  },
});
