// @ts-check

const { defineConfig } = require("./.app/app-config");

module.exports = defineConfig({
  title: "Pedantic Semantics",
  description: "The personal notes of John Doe",
  lang: "en",
  customProperties: {
    properties: [],
  },
  theme: {
    color: "teal",
  },
  editThisNote: {
    url: "https://example.com/edit/{{file}}",
  },
  sidebar: {
    links: [],
    sections: [],
  },
  panel: {
    tableOfContents: true,
    tags: true,
    customProperties: true,
    incomingLinks: true,
    outgoingLinks: true,
    externalLinks: true,
  },
  wikilinks: {
    autoLabel: "ref",
    anchorLabel: "none",
  },
  tags: {
    map: {},
  },
});