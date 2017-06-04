import {injectGlobal} from 'styled-components';

injectGlobal`
  ::-moz-selection {
      background: #b3d4fc;
      text-shadow: none;
  }
  ::selection {
      background: #b3d4fc;
      text-shadow: none;
  }

  html {
      -webkit-text-size-adjust: 100%;
  }
  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
      display: block;
  }
  ol, ul {
      list-style: none;
      margin: 0;
      padding: 0;
  }
  blockquote, q {
      quotes: none;
  }
  blockquote:before, blockquote:after, q:before, q:after {
      content: none;
  }
  table {
      border-collapse: collapse;
      border-spacing: 0;
  }
  :focus {
      outline-width: 0;
  }
  img {
      border: 0;
  }
  textarea {
      overflow: auto;
      resize: none;
  }
  a {
      background: transparent;
  }
  button, input, optgroup, select, textarea {
      color: inherit;
      font: inherit;
      margin: 0;
  }
  // from html5boilerplate
  hr {
      display: block;
      height: 1px;
      border: 0;
      border-top: 1px solid #ccc;
      margin: 1em 0;
      padding: 0;
  }

  audio,
  canvas,
  img,
  video {
      vertical-align: middle;
  }

  fieldset {
      border: 0;
      margin: 0;
      padding: 0;
  }
`
