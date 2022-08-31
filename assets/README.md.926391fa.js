import{_ as e,o as s,c as t,a}from"./app.d0dbc66e.js";const m=JSON.parse('{"title":"Vite \u4E2D\u6587\u6587\u6863","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u656C\u8BF7\u6240\u6709\u8BFB\u8005\u6CE8\u610F","slug":"\u656C\u8BF7\u6240\u6709\u8BFB\u8005\u6CE8\u610F"},{"level":2,"title":"\u{1F4DD} \u5982\u4F55\u53C2\u4E0E\u8D21\u732E","slug":"\u{1F4DD}-\u5982\u4F55\u53C2\u4E0E\u8D21\u732E"},{"level":2,"title":"\u{1F4E5} \u5982\u4F55\u5F00\u59CB\u7F16\u8F91","slug":"\u{1F4E5}-\u5982\u4F55\u5F00\u59CB\u7F16\u8F91"},{"level":2,"title":"\u7248\u6743\u58F0\u660E","slug":"\u7248\u6743\u58F0\u660E"}],"relativePath":"README.md"}'),n={name:"README.md"},i=a(`<blockquote><h3 id="\u656C\u8BF7\u6240\u6709\u8BFB\u8005\u6CE8\u610F" tabindex="-1">\u656C\u8BF7\u6240\u6709\u8BFB\u8005\u6CE8\u610F <a class="header-anchor" href="#\u656C\u8BF7\u6240\u6709\u8BFB\u8005\u6CE8\u610F">\xB6</a></h3><ul><li>\u539F\u5219\u4E0A\u8FD9\u91CC\u53EA\u8FDB\u884C\u82F1\u6587\u7248\u5BF9\u5E94\u7684\u7FFB\u8BD1\u5DE5\u4F5C\uFF0C\u5982\u679C\u89C9\u5F97\u539F\u6587\u6709\u6539\u8FDB\u4E4B\u5904\uFF0C\u6216\u4EFB\u4F55\u4E0D\u4EC5\u9488\u5BF9\u4E2D\u6587\u7248\uFF0C\u800C\u53D7\u76CA\u6240\u6709\u8BED\u8A00\u7248\u672C\u7684\u60F3\u6CD5\uFF0C\u5EFA\u8BAE\u76F4\u63A5\u5728\u82F1\u6587\u7248\u4ED3\u5E93\u8BA8\u8BBA\u3002</li><li><strong>\u539F\u5219\u4E0A\u8FD9\u91CC\u4E0D\u9002\u5408\u8BA8\u8BBA Vite \u7684\u4F7F\u7528\u95EE\u9898</strong>\uFF0C\u5EFA\u8BAE\u76F8\u5173\u95EE\u9898\u5728 Vite \u7684 <a href="https://github.com/vitejs/vite/issues" target="_blank" rel="noopener noreferrer">issues \u533A</a>\u3001<a href="https://chat.vitejs.dev/" target="_blank" rel="noopener noreferrer">Vite \u5B98\u65B9\u8BA8\u8BBA\u533A</a> \u6216\u5404\u5927\u4E3B\u6D41\u6280\u672F\u793E\u533A\u8BA8\u8BBA\uFF0C\u4EE5\u4FBF\u5F97\u5230\u66F4\u591A\u5E2E\u52A9\u548C\u66F4\u5145\u5206\u7684\u8BA8\u8BBA\u3002</li></ul></blockquote><p align="center"><a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer"><img width="180" src="https://vitejs.dev/logo.svg" alt="Vite logo"></a></p><br><p align="center"><a href="https://npmjs.com/package/vite"><img src="https://img.shields.io/npm/v/vite.svg" alt="npm package"></a><a href="https://nodejs.org/en/about/releases/"><img src="https://img.shields.io/node/v/vite.svg" alt="node compatility"></a><a href="https://app.circleci.com/pipelines/github/vitejs/vite?branch=main"><img src="https://circleci.com/gh/vitejs/vite/tree/main.svg?style=shield" alt="unix build status"></a><a href="https://ci.appveyor.com/project/yyx990803/vite/branch/main"><img src="https://ci.appveyor.com/api/projects/status/0q4j8062olbcs71l/branch/main?svg=true" alt="windows build status"></a><a href="https://chat.vitejs.dev"><img src="https://img.shields.io/badge/chat-discord-blue?style=flat&amp;logo=discord" alt="discord chat"></a></p><br><h1 id="vite-\u4E2D\u6587\u6587\u6863" tabindex="-1">Vite \u4E2D\u6587\u6587\u6863 <a class="header-anchor" href="#vite-\u4E2D\u6587\u6587\u6863">\xB6</a></h1><blockquote><p>Vite\uFF1A\u4E0B\u4E00\u4EE3\u524D\u7AEF\u5F00\u53D1\u4E0E\u6784\u5EFA\u5DE5\u5177</p></blockquote><ul><li>\u{1F4A1} \u6781\u901F\u7684\u5F00\u53D1\u670D\u52A1\u5668\u542F\u52A8</li><li>\u26A1\uFE0F \u8F7B\u91CF\u5FEB\u901F\u7684\u70ED\u6A21\u5757\u91CD\u8F7D\uFF08HMR\uFF09</li><li>\u{1F6E0}\uFE0F \u4E30\u5BCC\u7684\u529F\u80FD</li><li>\u{1F4E6} \u81EA\u5E26\u4F18\u5316\u7684\u6784\u5EFA</li><li>\u{1F529} \u901A\u7528\u7684\u63D2\u4EF6\u63A5\u53E3</li><li>\u{1F511} \u5B8C\u5168\u7C7B\u578B\u5316\u7684 API</li></ul><p>Vite \uFF08\u6CD5\u8BED\u610F\u4E3A \u201C\u8FC5\u901F\u201D\uFF0C\u53D1\u97F3 /vit/\uFF09\u662F\u4E00\u79CD\u5168\u65B0\u7684\u524D\u7AEF\u6784\u5EFA\u5DE5\u5177\uFF0C\u5B83\u6781\u5927\u5730\u6539\u5584\u4E86\u524D\u7AEF\u5F00\u53D1\u4F53\u9A8C\u3002</p><h2 id="\u{1F4DD}-\u5982\u4F55\u53C2\u4E0E\u8D21\u732E" tabindex="-1">\u{1F4DD} \u5982\u4F55\u53C2\u4E0E\u8D21\u732E <a class="header-anchor" href="#\u{1F4DD}-\u5982\u4F55\u53C2\u4E0E\u8D21\u732E">\xB6</a></h2><p>\u76EE\u524D Vite \u4E2D\u6587\u6587\u6863\u5904\u4E8E v3 beta \u7248\u672C\uFF0C\u5185\u5BB9 <strong>\u6BCF\u65E5</strong> \u6839\u636E\u82F1\u6587\u6587\u6863\u540C\u6B65\u66F4\u65B0\u3002</p><p><strong>\u5DE5\u4F5C\u6D41\u4ECB\u7ECD\uFF1A</strong> \u82F1\u6587\u6587\u6863\u7684\u6240\u5728 <a href="https://github.com/vitejs/vite/tree/main/docs" target="_blank" rel="noopener noreferrer">\u8BF7\u70B9\u51FB\u6B64\u94FE\u63A5</a>\uFF0C\u6211\u4EEC\u4F1A\u6BCF\u5929\u62C9\u53D6\u82F1\u6587\u7248\u6587\u6863\u5185\u5BB9\u7684\u66F4\u65B0\u5230 sync-docs \u5206\u652F\uFF0C\u5E76\u7531\u5370\u8BB0\u4E2D\u6587 bot \u81EA\u52A8\u53D1\u8D77 Pull Request\uFF0C\u89E3\u51B3 Git \u51B2\u7A81\u5E76\u7FFB\u8BD1\u5185\u5BB9\u3002</p><p>\u8D21\u732E\u6307\u5357\u656C\u8BF7\u67E5\u770B\u672C\u4ED3\u5E93\u7684 <a href="https://github.com/vitejs/docs-cn/wiki" target="_blank" rel="noopener noreferrer">Wiki</a> \u533A\u3002</p><h2 id="\u{1F4E5}-\u5982\u4F55\u5F00\u59CB\u7F16\u8F91" tabindex="-1">\u{1F4E5} \u5982\u4F55\u5F00\u59CB\u7F16\u8F91 <a class="header-anchor" href="#\u{1F4E5}-\u5982\u4F55\u5F00\u59CB\u7F16\u8F91">\xB6</a></h2><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># \u514B\u9686\u672C\u4ED3\u5E93</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git clone https://github.com/vitejs/docs-cn.git</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u5B89\u88C5\u4F9D\u8D56</span></span>
<span class="line"><span style="color:#A6ACCD;">$ npm install</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u6216\u8005\u4F7F\u7528 pnpm</span></span>
<span class="line"><span style="color:#A6ACCD;">$ pnpm i</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u542F\u52A8\u5F00\u53D1\u670D\u52A1\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">$ pnpm dev</span></span>
<span class="line"></span></code></pre></div><h2 id="\u7248\u6743\u58F0\u660E" tabindex="-1">\u7248\u6743\u58F0\u660E <a class="header-anchor" href="#\u7248\u6743\u58F0\u660E">\xB6</a></h2><p>\u672C\u4ED3\u5E93\u6240\u5305\u542B\u7684\u4E2D\u6587\u7FFB\u8BD1\u5185\u5BB9\uFF08\u5373\u6240\u6709 <code>.md</code> \u6587\u4EF6\uFF09\uFF0C\u5176\u7248\u6743\u4E3A Vite \u5B98\u65B9\u4E2D\u6587\u7FFB\u8BD1\u56E2\u961F\u6240\u6709\u3002\u9664\u5B98\u65B9\u4E2D\u6587\u6587\u6863 <a href="https://cn.vitejs.dev" target="_blank" rel="noopener noreferrer">cn.vitejs.dev</a> \u4E4B\u5916\uFF0C\u4E0D\u5F97\u5728\u5176\u5B83\u57DF\u540D\u4E0B\u8FDB\u884C\u672A\u7ECF\u6388\u6743\u7684\u8F6C\u8F7D\u6216\u90E8\u7F72\u3002</p>`,17),l=[i];function r(o,p,c,h,d,g){return s(),t("div",null,l)}var u=e(n,[["render",r]]);export{m as __pageData,u as default};
