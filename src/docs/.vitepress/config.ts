import { DefaultTheme, defineConfig } from "vitepress";

function link(zh: boolean, _link: string): string {
  return (zh ? "/zh" : "") + _link;
}

function nav(zh: boolean): DefaultTheme.NavItem[] {
  return [
    {
      text: zh ? "首页" : "Home",
      link: link(zh, "/index"),
    },
    {
      text: zh ? "键盘" : "keebs",
      items: [
        { text: zh ? "瑞儿" : "Reel40", link: link(zh, "/keebs/reel40") },
        { text: zh ? "垃圾桶" : "Bin50", link: link(zh, "/keebs/bin50") },
        { text: zh ? "井" : "#34", link: link(zh, "/keebs/well34") },
        { text: zh ? "不倒翁" : "Poly40", link: link(zh, "/keebs/poly40") },
        { text: zh ? "赞" : "Zan40", link: link(zh, "/keebs/zan40") },
        { text: zh ? "砖" : "Brick40", link: link(zh, "/keebs/brick40") },
        { text: zh ? "游戏男孩" : "Gameboy34", link: link(zh, "/keebs/gameboy34") },
        { text: zh ? "菲利斯" : "Felice40", link: link(zh, "/keebs/felice40") },
        { text: zh ? "艾特" : "@40", link: link(zh, "/keebs/at40") },
        { text: zh ? "红杏" : "HX40", link: link(zh, "/keebs/hx40") },
        { text: zh ? "无名" : "Serendipity50", link: link(zh, "/keebs/serendipity50") },
        { text: zh ? "牛屎" : "Cowshit40", link: link(zh, "/keebs/cowshit40") },
      ],
    },
    {
      text: zh ? "下载" : "Download",
      link: link(zh, "/download"),
    },
    {
      text: zh ? "关于" : "About",
      link: link(zh, "/about")
    },
    // {
    //   text: zh ? "致谢" : "Credits",
    //   link: link(zh, "/credits")
    // },
  ];
}

export const en = defineConfig({
  lang: "en-US",
  themeConfig: {
    nav: nav(false),
    notFound: {
      code: "404",
      title: "P A G E N O T F O U N D",
      quote: "",
      linkLabel: "",
      linkText: "home",
    },
  },
});

export const zh = defineConfig({
  lang: "zh-Hans",
  themeConfig: {
    nav: nav(true),
    notFound: {
      code: "404",
      title: "这 页 面 谁 啊 我 把 它 踢 了",
      quote: "",
      linkLabel: "",
      linkText: "首页",
    },
  },
});

const shared = defineConfig({
  title: "NiuNiu Drive Car",
  description: "",
  // appearance: true,
  lastUpdated: true,
  // metaChunk: true,
  themeConfig: {
    siteTitle: false,
    logo: {
      light: "/about/niu_hero.png",
      dark: "/about/niu_hero_off.png",
    },
    // search: {
    //   provider: "local",
    // },
    footer: {
      message: "Niuniu Drive Car 2025 ｜ Preview",
      copyright: "powered by VitePress",
    },
  },
  outDir: "../../docs",
});

export default defineConfig({
  ...shared,
  locales: {
    root: { label: "English", ...en },
    zh: { label: "简体中文", ...zh },
  },
});
