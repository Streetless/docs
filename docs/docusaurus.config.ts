import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import tabBlocks from "docusaurus-remark-plugin-tab-blocks";

const organizationName = "Streetless";
const repoName = "docs";
const githubLink = `https://github.com/${organizationName}/${repoName}/`;
const projectName = "DA1";
const domain = `docs.envronment.com`;
const url = `https://${domain}`;
const websiteID = process.env.UMAMI_WEBSITE_ID || "23a3bb1b-d743-48d0-b08f-59a6efeb4f68";
const analyticsDomain = process.env.UMAMI_DOMAIN || "umami.envronment.com";

const config: Config = {
  title: `${projectName}`,
  tagline: `Documentation Technique`,
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: url,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  // baseUrl: `/${projectName}/`,
  baseUrl: `/`,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: organizationName, // Usually your GitHub org/user name.
  projectName: repoName, // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: true,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en"],
  },

  markdown: {
    mermaid: true,
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: `${githubLink}tree/main/docs/`,
          remarkPlugins: [
            [
              tabBlocks,
              {
                labels: [],
              },
            ],
          ],
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   editUrl: `${githubLink}tree/main/docs/`,
        //   remarkPlugins: [tabBlocks],
        // },
        theme: {
          customCss: "./src/css/custom.css",
        },
        pages: {
          remarkPlugins: [tabBlocks],
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-pwa",
      {
        debug: true,
        offlineModeActivationStrategies: ["appInstalled", "standalone", "queryString"],
        pwaHead: [
          {
            tagName: "link",
            rel: "icon",
            href: "/img/logo.png",
          },
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.json", // your PWA manifest
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "rgb(1,190,253)",
          },
        ],
      },
    ],
    "docusaurus-plugin-image-zoom",
  ],
  themes: [
    "@docusaurus/theme-mermaid",
    [
      "@easyops-cn/docusaurus-search-local",
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      // https://github.com/easyops-cn/docusaurus-search-local?tab=readme-ov-file#theme-options
      {
        hashed: true,
        language: ["fr", "en"],
        highlightSearchTermsOnTargetPage: true,
        searchResultLimits: 10,
      },
    ],
    [
      "@dipakparmar/docusaurus-plugin-umami",
      /** @type {import("@dipakparmar/docusaurus-plugin-umami").Options} */
      {
        websiteID: websiteID,
        analyticsDomain: analyticsDomain,
        dataAutoTrack: true,
        dataDoNotTrack: true,
        dataCache: true,
        dataDomains: domain,
      },
    ],
  ],
  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: `EnVRonment ${projectName}`,
      logo: {
        alt: "EnVRonment Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "documentationSidebar",
          position: "left",
          label: "Documentation",
        },
        // { to: "/blog", label: "Blog", position: "left" },
        {
          type: "docsVersionDropdown",
          position: "right",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          href: githubLink,
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      /* links: [
        {
          title: "Docs",
          items: [
            {
              label: "Documentation",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            // {
            //   label: 'Blog',
            //   to: '/blog',
            // },
            {
              label: "GitHub",
              href: githubLink,
            },
          ],
        },
      ], */
      copyright: `Copyright © ${new Date().getFullYear()} EnVRonment. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: [
        "awk",
        "bash",
        "batch",
        "c",
        "cmake",
        "cpp",
        "csharp",
        "css",
        "css-extras",
        "csv",
        "dns-zone-file",
        "docker",
        "editorconfig",
        "git",
        "glsl",
        "gradle",
        "groovy",
        "handlebars",
        "hsts",
        "http",
        "ignore",
        "ini",
        "java",
        "javadoc",
        "javadoclike",
        "javascript",
        "javastacktrace",
        "jq",
        "js-extras",
        "js-templates",
        "jsdoc",
        "json",
        "json5",
        "jsonp",
        "jsstacktrace",
        "jsx",
        "kotlin",
        "latex",
        "log",
        "lua",
        "makefile",
        "markdown",
        "markup",
        "markup-templating",
        "mermaid",
        "nginx",
        "nsis",
        "plant-uml",
        "powershell",
        "properties",
        "protobuf",
        "python",
        "regex",
        "rest",
        "rust",
        "sas",
        "sass",
        "scheme",
        "scss",
        "shell-session",
        "toml",
        "tsx",
        "typescript",
        "unrealscript",
        "vim",
        "wasm",
        "wiki",
        "yaml",
      ],
    },
    mermaid: {
      theme: { light: "default", dark: "forest" },
    },
    zoom: {
      selector: ".markdown :not(em) > img",
      background: {
        light: "rgb(255, 255, 255)",
        dark: "rgb(50, 50, 50)",
      },
      config: {
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

// abap
// abnf
// actionscript
// ada
// agda
// al
// antlr4
// apacheconf
// apex
// apl
// applescript
// aql
// arduino
// arff
// armasm
// arturo
// asciidoc
// asm6502
// asmatmel
// aspnet
// autohotkey
// autoit
// avisynth
// avro-idl
// awk
// bash
// basic
// batch
// bbcode
// bbj
// bicep
// birb
// bison
// bnf
// bqn
// brainfuck
// brightscript
// bro
// bsl
// c
// cfscript
// chaiscript
// cil
// cilkc
// cilkcpp
// clike
// clojure
// cmake
// cobol
// coffeescript
// concurnas
// cooklang
// coq
// core
// cpp
// crystal
// csharp
// cshtml
// csp
// css
// css-extras
// csv
// cue
// cypher
// d
// dart
// dataweave
// dax
// dhall
// diff
// django
// dns-zone-file
// docker
// dot
// ebnf
// editorconfig
// eiffel
// ejs
// elixir
// elm
// erb
// erlang
// etlua
// excel-formula
// factor
// false
// firestore-security-rules
// flow
// fortran
// fsharp
// ftl
// gap
// gcode
// gdscript
// gedcom
// gettext
// gherkin
// git
// glsl
// gml
// gn
// go
// go-module
// gradle
// graphql
// groovy
// haml
// handlebars
// haskell
// haxe
// hcl
// hlsl
// hoon
// hpkp
// hsts
// http
// ichigojam
// icon
// icu-message-format
// idris
// iecst
// ignore
// inform7
// ini
// io
// j
// java
// javadoc
// javadoclike
// javascript
// javastacktrace
// jexl
// jolie
// jq
// js-extras
// js-templates
// jsdoc
// json
// json5
// jsonp
// jsstacktrace
// jsx
// julia
// keepalived
// keyman
// kotlin
// kumir
// kusto
// latex
// latte
// less
// lilypond
// linker-script
// liquid
// lisp
// livescript
// llvm
// log
// lolcode
// lua
// magma
// makefile
// markdown
// markup
// markup-templating
// mata
// matlab
// maxscript
// mel
// mermaid
// metafont
// mizar
// mongodb
// monkey
// moonscript
// n1ql
// n4js
// nand2tetris-hdl
// naniscript
// nasm
// neon
// nevod
// nginx
// nim
// nix
// nsis
// objectivec
// ocaml
// odin
// opencl
// openqasm
// oz
// parigp
// parser
// pascal
// pascaligo
// pcaxis
// peoplecode
// perl
// php
// php-extras
// phpdoc
// plant-uml
// plsql
// powerquery
// powershell
// processing
// prolog
// promql
// properties
// protobuf
// psl
// pug
// puppet
// pure
// purebasic
// purescript
// python
// q
// qml
// qore
// qsharp
// r
// racket
// reason
// regex
// rego
// renpy
// rescript
// rest
// rip
// roboconf
// robotframework
// ruby
// rust
// sas
// sass
// scala
// scheme
// scss
// shell-session
// smali
// smalltalk
// smarty
// sml
// solidity
// solution-file
// soy
// sparql
// splunk-spl
// sqf
// sql
// squirrel
// stan
// stata
// stylus
// supercollider
// swift
// systemd
// t4-cs
// t4-templating
// t4-vb
// tap
// tcl
// textile
// toml
// tremor
// tsx
// tt2
// turtle
// twig
// typescript
// typoscript
// unrealscript
// uorazor
// uri
// v
// vala
// vbnet
// velocity
// verilog
// vhdl
// vim
// visual-basic
// warpscript
// wasm
// web-idl
// wgsl
// wiki
// wolfram
// wren
// xeora
// xml-doc
// xojo
// xquery
// yaml
// yang
// zig
