import{_ as e,o,c as a,a as s}from"./app.d0dbc66e.js";const g=JSON.parse('{"title":"\u4ECE v2 \u8FC1\u79FB","description":"","frontmatter":{},"headers":[{"level":2,"title":"Node \u652F\u6301","slug":"node-support"},{"level":2,"title":"\u73B0\u4EE3\u6D4F\u89C8\u5668\u57FA\u51C6\u7EBF\u53D8\u5316","slug":"modern-browser-baseline-change"},{"level":2,"title":"\u914D\u7F6E\u9009\u9879\u53D8\u5316","slug":"config-options-changes"},{"level":2,"title":"\u67B6\u6784\u53D8\u66F4\u548C\u517C\u5BB9\u9009\u9879","slug":"achitecture-changes-and-legacy-options"},{"level":2,"title":"\u5F00\u53D1\u670D\u52A1\u5668\u53D8\u5316","slug":"dev-server-changes"},{"level":2,"title":"SSR Changes","slug":"ssr-changes"},{"level":2,"title":"\u5176\u4ED6\u4E00\u822C\u6027\u53D8\u5316","slug":"general-changes"},{"level":3,"title":"import.meta.glob","slug":"importmetaglob"},{"level":3,"title":"WebAssembly \u652F\u6301","slug":"webassembly-support"},{"level":3,"title":"\u81EA\u52A8\u751F\u6210 https \u8BC1\u4E66","slug":"automatic-https-certificate-generation"},{"level":2,"title":"\u5B9E\u9A8C\u6027","slug":"experimental"},{"level":3,"title":"\u5728\u6784\u5EFA\u9636\u6BB5\u4F7F\u7528 esbuild \u4F9D\u8D56\u4F18\u5316","slug":"\u5728\u6784\u5EFA\u9636\u6BB5\u4F7F\u7528-esbuild-\u4F9D\u8D56\u4F18\u5316"},{"level":2,"title":"\u8FDB\u9636","slug":"advanced"},{"level":2,"title":"\u4ECE v1 \u8FC1\u79FB","slug":"migration-from-v1"}],"relativePath":"guide/migration.md"}'),l={name:"guide/migration.md"},t=s(`<h1 id="migration-from-v2" tabindex="-1">\u4ECE v2 \u8FC1\u79FB <a class="header-anchor" href="#migration-from-v2">\xB6</a></h1><h2 id="node-support" tabindex="-1">Node \u652F\u6301 <a class="header-anchor" href="#node-support">\xB6</a></h2><p>Vite \u4E0D\u518D\u652F\u6301 Node 12 / 13 / 15\uFF0C\u56E0\u4E3A\u4E0A\u8FF0\u7248\u672C\u5DF2\u7ECF\u8FDB\u5165\u4E86 EOL \u9636\u6BB5\u3002\u73B0\u5728\u4F60\u5FC5\u987B\u4F7F\u7528 Node 14.18+ / 16+ \u7248\u672C\u3002</p><h2 id="modern-browser-baseline-change" tabindex="-1">\u73B0\u4EE3\u6D4F\u89C8\u5668\u57FA\u51C6\u7EBF\u53D8\u5316 <a class="header-anchor" href="#modern-browser-baseline-change">\xB6</a></h2><p>\u751F\u4EA7\u6784\u5EFA\u6253\u5305\u65F6\u4F1A\u5047\u5B9A\u76EE\u6807\u652F\u6301\u73B0\u4EE3 JavaScript\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CVite \u7684\u76EE\u6807\u662F\u652F\u6301 <a href="https://caniuse.com/es6-module" target="_blank" rel="noopener noreferrer">\u539F\u751F ES \u6A21\u5757</a>\u3001<a href="https://caniuse.com/es6-module-dynamic-import" target="_blank" rel="noopener noreferrer">\u539F\u751F ESM \u52A8\u6001\u5BFC\u5165</a> \u4EE5\u53CA <a href="https://caniuse.com/mdn-javascript_operators_import_meta" target="_blank" rel="noopener noreferrer"><code>import.<wbr>meta</code></a> \u7684\u6D4F\u89C8\u5668\uFF1A</p><ul><li>Chrome &gt;=87</li><li>Firefox &gt;=78</li><li>Safari &gt;=13</li><li>Edge &gt;=88</li></ul><p>\u4E00\u5C0F\u90E8\u5206\u7528\u6237\u9700\u8981 <a href="https://github.com/vitejs/vite/tree/main/packages/plugin-legacy" target="_blank" rel="noopener noreferrer">@vitejs/plugin-legacy</a>\uFF0C\u5B83\u4F1A\u81EA\u52A8\u751F\u6210\u517C\u5BB9\u6027 chunk \u4EE5\u53CA\u76F8\u5E94\u7684 ES \u8BED\u8A00\u529F\u80FD\u7684 polyfill\u3002</p><h2 id="config-options-changes" tabindex="-1">\u914D\u7F6E\u9009\u9879\u53D8\u5316 <a class="header-anchor" href="#config-options-changes">\xB6</a></h2><ul><li><p>\u4E0B\u5217\u5728 v2 \u5F53\u4E2D\u6211\u4EEC\u5DF2\u7ECF\u6807\u8BB0\u4E3A\u5F03\u7528\u9009\u9879\uFF0C\u73B0\u5728\u5DF2\u7ECF\u88AB\u79FB\u9664\uFF1A</p><ul><li><code>alias</code>\uFF08\u6539\u4E3A\u4E86 <a href="./../config/shared-options.html#resolve-alias"><code>resolve.alias</code></a>\uFF09</li><li><code>dedupe</code>\uFF08\u6539\u4E3A\u4E86 <a href="./../config/shared-options.html#resolve-dedupe"><code>resolve.dedupe</code></a>\uFF09</li><li><code>build.base</code>\uFF08\u6539\u4E3A\u4E86 <a href="./../config/shared-options.html#base"><code>base</code></a>\uFF09</li><li><code>build.brotliSize</code>\uFF08\u6539\u4E3A\u4E86 <a href="./../config/build-options.html#build-reportcompressedsize"><code>build.reportCompressedSize</code></a>\uFF09</li><li><code>build.cleanCssOptions</code>\uFF08Vite \u73B0\u5728\u4F7F\u7528 esbuild \u6765\u505A CSS \u6700\u5C0F\u5316\u538B\u7F29\uFF09</li><li><code>build.polyfillDynamicImport</code>\uFF08\u5728\u6CA1\u6709\u652F\u6301\u52A8\u6001\u5BFC\u5165\u7684\u6D4F\u89C8\u5668\u4E2D\uFF0C\u4F7F\u7528 <a href="https://github.com/vitejs/vite/tree/main/packages/plugin-legacy" target="_blank" rel="noopener noreferrer"><code>@vitejs/plugin-legacy</code></a>\uFF09</li><li><code>optimizeDeps.keepNames</code>\uFF08\u6539\u4E3A\u4E86 <a href="./../config/dep-optimization-options.html#optimizedeps-esbuildoptions"><code>optimizeDeps.esbuildOptions.keepNames</code></a>\uFF09</li></ul></li></ul><h2 id="achitecture-changes-and-legacy-options" tabindex="-1">\u67B6\u6784\u53D8\u66F4\u548C\u517C\u5BB9\u9009\u9879 <a class="header-anchor" href="#achitecture-changes-and-legacy-options">\xB6</a></h2><p>\u8FD9\u4E00\u5C0F\u8282\u63CF\u8FF0\u4E86 Vite v3 \u4E2D\u6700\u5927\u7684\u67B6\u6784\u53D8\u66F4\u3002\u5728\u9879\u76EE\u4ECE v2 \u8FC1\u79FB\u3001\u9047\u5230\u517C\u5BB9\u6027\u95EE\u9898\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528\u65B0\u6DFB\u52A0\u7684\u517C\u5BB9\u9009\u9879\u6765\u6062\u590D\u5230 Vite v2 \u7B56\u7565\u3002</p><h2 id="dev-server-changes" tabindex="-1">\u5F00\u53D1\u670D\u52A1\u5668\u53D8\u5316 <a class="header-anchor" href="#dev-server-changes">\xB6</a></h2><p>Vite \u7684\u9ED8\u8BA4\u5F00\u53D1\u670D\u52A1\u5668\u7AEF\u53E3\u53F7\u73B0\u5728\u6539\u4E3A\u4E86 5173\u3002\u4F60\u53EF\u4EE5\u4F7F\u7528 <a href="./../config/server-options.html#server-port"><code>server.port</code></a> \u5C06\u5176\u8BBE\u7F6E\u4E3A 3000\u3002</p><p>Vite \u7684\u9ED8\u8BA4\u5F00\u53D1\u670D\u52A1\u5668\u4E3B\u673A\u5730\u5740\u73B0\u5728\u6539\u4E3A\u4E86 <code>localhost</code>\u3002\u5728 Vite v2\uFF0CVite \u9ED8\u8BA4\u76D1\u542C\u7684\u662F <code>127.0.0.1</code>\u3002Node.js \u5728 v17 \u7248\u672C\u4EE5\u4E0B\u901A\u5E38\u4F1A\u89E3\u6790 <code>localhost</code> \u5230 <code>127.0.0.1</code>\uFF0C\u56E0\u6B64\u5BF9\u8FD9\u4E9B\u7248\u672C\uFF0C\u4E3B\u673A\u5730\u5740\u5E76\u672A\u53D8\u66F4\u3002\u82E5\u660E\u786E\u9700\u8981\uFF0C\u5BF9\u4E8E Node.js v17 \u7248\u672C\u4EE5\u4E0A\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 <a href="./../config/server-options.html#server-host"><code>server.host</code></a>\u3001\u5C06\u5176\u8BBE\u7F6E\u4E3A <code>127.0.0.1</code>\u3002</p><p>\u8BF7\u6CE8\u610F\uFF0C\u73B0\u5728 Vite v3 \u4F1A\u6253\u5370\u51FA\u6B63\u786E\u7684\u4E3B\u673A\u5730\u5740\u3002\u8FD9\u610F\u5473\u7740\u4F7F\u7528 <code>localhost</code> \u65F6 Vite \u53EF\u80FD\u4F1A\u6253\u5370 <code>127.0.0.1</code> \u4F5C\u4E3A\u6B63\u5728\u76D1\u542C\u7684\u5730\u5740\u3002\u4F60\u53EF\u4EE5\u8BBE\u7F6E <a href="https://nodejs.org/api/dns.html#dns_dns_setdefaultresultorder_order" target="_blank" rel="noopener noreferrer"><code>dns.setDefaultResultOrder(&#39;verbatim&#39;)</code></a> \u6765\u907F\u514D\u8FD9\u4E00\u8868\u73B0\u3002\u67E5\u770B <a href="./../config/server-options.html#server-host"><code>server.host</code></a> \u4E86\u89E3\u8BE6\u60C5\u3002</p><h2 id="ssr-changes" tabindex="-1">SSR Changes <a class="header-anchor" href="#ssr-changes">\xB6</a></h2><p>Vite v3 \u9ED8\u8BA4\u5728 SSR \u6784\u5EFA\u65F6\u4F7F\u7528 ESM \u683C\u5F0F\u3002\u5F53\u4F7F\u7528 ESM \u65F6\uFF0C<a href="https://vitejs.dev/guide/ssr.html#ssr-externals" target="_blank" rel="noopener noreferrer">SSR \u5916\u90E8\u5316\u7684\u542F\u53D1\u5F0F\u65B9\u6CD5</a> \u5C06\u4E0D\u518D\u9700\u8981\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u6240\u6709\u7684\u4F9D\u8D56\u90FD\u5C06\u88AB\u5916\u90E8\u5316\u3002\u4F60\u53EF\u4EE5\u4F7F\u7528 <a href="./../config/ssr-options.html#ssrnoexternal"><code>ssr.noExternal</code></a> \u6765\u63A7\u5236\u54EA\u4E9B\u4F9D\u8D56\u9700\u8981\u88AB\u5305\u542B\u8FDB SSR \u7684\u6253\u5305\u4EA7\u7269\u4E2D\u3002</p><p>\u5982\u679C\u4F60\u65E0\u6CD5\u5728\u4F60\u7684 SSR \u9879\u76EE\u4E2D\u4F7F\u7528 ESM\uFF0C\u4F60\u53EF\u4EE5\u8BBE\u7F6E <code>ssr.format: &#39;cjs&#39;</code> \u6765\u751F\u6210\u4E00\u4E2A CJS \u683C\u5F0F\u7684\u4EA7\u7269\u3002\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u4F1A\u4F7F\u7528\u548C Vite v2 \u76F8\u540C\u7684\u5916\u90E8\u5316\u7B56\u7565\u3002</p><p>\u540C\u6837 <a href="https://rollupjs.org/guide/en/#outputinlinedynamicimports" target="_blank" rel="noopener noreferrer"><code>build.rollupOptions.output.inlineDynamicImports</code></a> \u73B0\u5728\u5728 <code>ssr.target</code> \u662F <code>node</code> \u65F6\uFF0C\u4E5F\u9ED8\u8BA4\u7F6E\u4E3A\u4E86 <code>false</code>\u3002<code>inlineDynamicImports</code> \u5B83\u4F1A\u6539\u53D8\u6267\u884C\u987A\u5E8F\uFF0C\u5E76\u4E14 node \u6784\u5EFA\u4E0D\u9700\u8981\u6253\u5305\u5230\u5355\u4E2A\u6587\u4EF6\u3002</p><h2 id="general-changes" tabindex="-1">\u5176\u4ED6\u4E00\u822C\u6027\u53D8\u5316 <a class="header-anchor" href="#general-changes">\xB6</a></h2><ul><li>SSR \u548C\u5E93\u6A21\u5F0F\u4E2D\u5C06\u4F1A\u6839\u636E\u8BED\u6CD5\u683C\u5F0F\u548C\u5305\u7684\u7C7B\u578B\uFF0C\u4E3A\u8F93\u51FA\u7684 JS \u6587\u4EF6\u63D0\u4F9B\u4E00\u4E2A\u66F4\u5408\u7406\u7684\u6587\u4EF6\u6269\u5C55\u540D\uFF08<code>js</code>\u3001<code>mjs</code> \u6216\u662F <code>cjs</code>\uFF09\u3002</li><li>Terser \u73B0\u5728\u662F\u4E00\u4E2A\u53EF\u9009\u4F9D\u8D56\u3002\u5982\u679C\u4F60\u4F7F\u7528\u7684\u662F <code>build.minify: &#39;terser&#39;</code>\uFF0C\u4F60\u9700\u8981\u624B\u52A8\u5B89\u88C5\u5B83\uFF1A<div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm add -D terser</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li></ul><h3 id="importmetaglob" tabindex="-1"><code>import.<wbr>meta.glob</code> <a class="header-anchor" href="#importmetaglob">\xB6</a></h3><ul><li><p><a href="./features.html#glob-import-as">\u539F\u59CB <code>import.<wbr>meta.glob</code></a> \u4ECE <code>{ assert: { type: &#39;raw&#39; }}</code> \u8FC1\u79FB\u4E3A <code>{ as: &#39;raw&#39; }</code></p></li><li><p><code>import.<wbr>meta.glob</code> \u7684 key \u73B0\u5728\u662F\u76F8\u5BF9\u4E8E\u5F53\u524D\u6A21\u5757\u3002</p><div class="language-diff"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// \u6587\u4EF6\uFF1A/foo/index.js</span></span>
<span class="line"><span style="color:#A6ACCD;">const modules = import.<wbr>meta.glob(&#39;../foo/*.js&#39;)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// \u8F6C\u6362\u4E3A\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">const modules = {</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#F07178;">  &#39;../foo/bar.js&#39;: () =&gt; {}</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#C3E88D;">  &#39;./bar.js&#39;: () =&gt; {}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div></li><li><p>\u5F53\u5728 <code>import.<wbr>meta.glob</code> \u4E2D\u4F7F\u7528\u522B\u540D\uFF08alias\uFF09\u65F6\uFF0C\u952E\u503C\u603B\u662F\u7EDD\u5BF9\u8DEF\u5F84\u3002</p></li><li><p><code>import.<wbr>meta.globEager</code> \u5DF2\u7ECF\u5F03\u7528\uFF0C\u8BF7\u4F7F\u7528 <code>import.<wbr>meta.glob(&#39;*&#39;, { eager: true })</code> \u6765\u4EE3\u66FF\u3002</p></li></ul><h3 id="webassembly-support" tabindex="-1">WebAssembly \u652F\u6301 <a class="header-anchor" href="#webassembly-support">\xB6</a></h3><p><code>import init from &#39;example.wasm&#39;</code> \u8BED\u6CD5\u88AB\u5F03\u7528\uFF0C\u4EE5\u9632\u6B62\u5C06\u6765\u4E0E <a href="https://github.com/WebAssembly/esm-integration" target="_blank" rel="noopener noreferrer">&quot;WASM \u7684 ESM \u96C6\u6210&quot;</a> \u51B2\u7A81\u3002</p><p>\u4F60\u53EF\u4EE5\u4F7F\u7528 <code>?init</code> \u53C2\u6570\uFF0C\u548C\u4E4B\u524D\u7684\u884C\u4E3A\u7C7B\u4F3C\uFF1A</p><div class="language-diff"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">-</span><span style="color:#F07178;">import init from &#39;example.wasm&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#C3E88D;">import init from &#39;example.wasm?init&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#F07178;">init().then((exports) =&gt; {</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#C3E88D;">init().then(({ exports }) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  exports.test()</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"></span></code></pre></div><h3 id="automatic-https-certificate-generation" tabindex="-1">\u81EA\u52A8\u751F\u6210 https \u8BC1\u4E66 <a class="header-anchor" href="#automatic-https-certificate-generation">\xB6</a></h3><p>\u5F53\u4F7F\u7528 <code>https</code> \u65F6\u9700\u8981\u4E00\u4E2A\u5408\u6CD5\u53EF\u7528\u7684\u8BC1\u4E66\u3002\u5728 Vite v2 \u4E2D\uFF0C\u5982\u679C\u6CA1\u6709\u914D\u7F6E\u8BC1\u4E66\uFF0CVite \u4F1A\u81EA\u52A8\u751F\u6210\u548C\u7F13\u5B58\u4E00\u4E2A\u81EA\u7B7E\u540D\u7684\u8BC1\u4E66\u3002 \u4ECE Vite v3 \u5F00\u59CB\uFF0C\u6211\u4EEC\u63A8\u8350\u624B\u52A8\u521B\u5EFA\u4F60\u81EA\u5DF1\u7684\u8BC1\u4E66\u3002\u5982\u679C\u4F60\u4ECD\u60F3\u8981\u4F7F\u7528 v2 \u4E2D\u7684\u81EA\u52A8\u751F\u6210\uFF0C\u8BE5\u529F\u80FD\u53EF\u4EE5\u901A\u8FC7\u6DFB\u52A0 <a href="https://github.com/vitejs/vite-plugin-basic-ssl" target="_blank" rel="noopener noreferrer">@vitejs/plugin-basic-ssl</a> \u5230\u9879\u76EE\u63D2\u4EF6\u4E2D\u6765\u5B9E\u73B0\u3002</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> basicSsl </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@vitejs/plugin-basic-ssl</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#82AAFF;">basicSsl</span><span style="color:#A6ACCD;">()]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="experimental" tabindex="-1">\u5B9E\u9A8C\u6027 <a class="header-anchor" href="#experimental">\xB6</a></h2><h3 id="\u5728\u6784\u5EFA\u9636\u6BB5\u4F7F\u7528-esbuild-\u4F9D\u8D56\u4F18\u5316" tabindex="-1">\u5728\u6784\u5EFA\u9636\u6BB5\u4F7F\u7528 esbuild \u4F9D\u8D56\u4F18\u5316 <a class="header-anchor" href="#\u5728\u6784\u5EFA\u9636\u6BB5\u4F7F\u7528-esbuild-\u4F9D\u8D56\u4F18\u5316">\xB6</a></h3><p>\u5728 v3 \u7248\u672C\u4E0B\uFF0CVite \u5141\u8BB8\u5728\u6784\u5EFA\u9636\u6BB5\u4F7F\u7528 esbuild \u8FDB\u884C\u4F9D\u8D56\u4F18\u5316\u3002\u5982\u679C\u5F00\u542F\u6B64\u9879\uFF0C\u90A3\u4E48\u5B83\u5C06\u6D88\u9664 v2 \u7248\u672C\u4E2D\u5B58\u5728\u7684\u6700\u660E\u663E\u7684\u5F00\u53D1\u4E0E\u6784\u5EFA\u6700\u7EC8\u4EA7\u7269\u4E4B\u95F4\u7684\u533A\u522B\u3002<a href="https://github.com/rollup/plugins/tree/master/packages/commonjs" target="_blank" rel="noopener noreferrer"><code>@rollupjs/plugin-commonjs</code></a> \u5728\u6B64\u5904\u4E0D\u518D\u9700\u8981\uFF0C\u56E0\u4E3A esbuild \u4F1A\u5C06\u7EAF CommonJS \u4F9D\u8D56\u8F6C\u6362\u4E3A ESM\u3002</p><p>\u5982\u679C\u4F60\u60F3\u5C1D\u8BD5\u8BE5\u6784\u5EFA\u7B56\u7565\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 <code>optimizeDeps.disabled: false</code>\uFF08\u5728 v3 \u4E2D\u9ED8\u8BA4\u662F <code>disabled: &#39;build&#39;</code>\uFF09\u3002<code>@rollup/plugin-commonjs</code> \u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E <code>build.commonjsOptions: { include: [] }</code> \u6765\u79FB\u9664\u3002</p><h2 id="advanced" tabindex="-1">\u8FDB\u9636 <a class="header-anchor" href="#advanced">\xB6</a></h2><p>\u4E0B\u5217\u6539\u52A8\u4EC5\u4F1A\u5F71\u54CD\u5230\u63D2\u4EF6/\u5DE5\u5177\u7684\u4F5C\u8005\uFF1A</p><ul><li><a href="https://github.com/vitejs/vite/pull/5868" target="_blank" rel="noopener noreferrer">[#5868] refactor: remove deprecated api for 3.0</a><ul><li><code>printHttpServerUrls</code> \u88AB\u79FB\u9664</li><li><code>server.app</code>\u3001<code>server.transformWithEsbuild</code> \u88AB\u79FB\u9664</li><li><code>import.<wbr>meta.hot.acceptDeps</code> \u88AB\u79FB\u9664</li></ul></li><li><a href="https://github.com/vitejs/vite/pull/6901" target="_blank" rel="noopener noreferrer">[#6901] fix: sequential injection of tags in transformIndexHtml</a><ul><li><code>transformIndexHtml</code> \u73B0\u5728\u4F1A\u4ECE\u66F4\u65E9\u7684\u63D2\u4EF6\u5904\u83B7\u53D6\u5230\u6B63\u786E\u7684\u5185\u5BB9\uFF0C\u56E0\u6B64\uFF0C\u73B0\u5728\u6CE8\u5165\u7684\u6807\u7B7E\u7684\u987A\u5E8F\u4E0E\u9884\u671F\u7684\u4E00\u6837\u3002</li></ul></li><li><a href="https://github.com/vitejs/vite/pull/7995" target="_blank" rel="noopener noreferrer">[#7995] chore: do not fixStacktrace</a><ul><li><code>ssrLoadModule</code> \u7684 <code>fixStacktrace</code> \u9009\u9879\u73B0\u5728\u9ED8\u8BA4\u4E3A <code>false</code></li></ul></li><li><a href="https://github.com/vitejs/vite/pull/8178" target="_blank" rel="noopener noreferrer">[#8178] feat!: migrate to ESM</a><ul><li><code>formatPostcssSourceMap</code> \u73B0\u5728\u662F\u5F02\u6B65\u7684</li><li><code>resolvePackageEntry</code>\u3001<code>resolvePackageData</code> \u5728 CJS \u6784\u5EFA\u4E2D\u5C06\u4E0D\u518D\u53EF\u7528\uFF08\u9700\u8981\u5728 CJS \u4E2D\u4F7F\u7528\u52A8\u6001\u5BFC\u5165\uFF09</li></ul></li><li><a href="https://github.com/vitejs/vite/pull/8626" target="_blank" rel="noopener noreferrer">[#8626] refactor: type client maps</a><ul><li><code>import.<wbr>meta.hot.accept</code> \u7684\u56DE\u8C03\u51FD\u6570\u7C7B\u578B\u73B0\u5728\u66F4\u4E25\u683C\u4E86\u3002\u73B0\u5728\u662F <code>(mod: (Record&lt;string, any&gt; &amp; { [Symbol.toStringTag]: &#39;Module&#39; }) | undefined) =&gt; void</code>\uFF08\u4E4B\u524D\u662F <code>(mod: any) =&gt; void</code>\uFF09\u3002</li></ul></li></ul><p>\u6B64\u5916\uFF0C\u8FD8\u6709\u5176\u4ED6\u4E00\u4E9B\u53EA\u5F71\u54CD\u5C11\u6570\u7528\u6237\u7684\u7834\u574F\u6027\u53D8\u5316\u3002</p><ul><li><a href="https://github.com/vitejs/vite/pull/5018" target="_blank" rel="noopener noreferrer">[#5018] feat: enable <code>generatedCode: &#39;es2015&#39;</code> for rollup build</a><ul><li>\u8F6C\u4E49\u5230 ES5 \u73B0\u5728\u662F\u5FC5\u8981\u7684\uFF0C\u5373\u4F7F\u7528\u6237\u4EE3\u7801\u4EC5\u542B ES5\u3002</li></ul></li><li><a href="https://github.com/vitejs/vite/pull/7877" target="_blank" rel="noopener noreferrer">[#7877] fix: vite client types</a><ul><li><code>/// &lt;reference lib=&quot;dom&quot; /&gt;</code> \u5DF2\u4ECE <code>vite/client.d.ts</code> \u4E2D\u79FB\u9664\u3002\u5FC5\u987B\u5728 <code>tsconfig.json</code> \u4F7F\u7528 <code>{ &quot;lib&quot;: [&quot;dom&quot;] }</code> \u6216 <code>{ &quot;lib&quot;: [&quot;webworker&quot;] }</code>\u3002</li></ul></li><li><a href="https://github.com/vitejs/vite/pull/8090" target="_blank" rel="noopener noreferrer">[#8090] feat: preserve process env vars in lib build</a><ul><li><code>process.<wbr>env.*</code> \u73B0\u5728\u5728\u5E93\u6A21\u5F0F\u4E0B\u662F\u88AB\u4FDD\u7559\u7684\u4E86\u3002</li></ul></li><li><a href="https://github.com/vitejs/vite/pull/8280" target="_blank" rel="noopener noreferrer">[#8280] feat: non-blocking esbuild optimization at build time</a><ul><li><code>server.force</code> \u9009\u9879\u73B0\u5DF2\u79FB\u9664\uFF0C\u6539\u4E3A\u4E86\u76F4\u63A5\u7684 <code>force</code> \u9009\u9879\u3002</li></ul></li><li><a href="https://github.com/vitejs/vite/pull/8550" target="_blank" rel="noopener noreferrer">[#8550] fix: dont handle sigterm in middleware mode</a><ul><li>\u5F53\u4EE5\u4E2D\u95F4\u4EF6\u6A21\u5F0F\u8FD0\u884C\u65F6\uFF0CVite \u4E0D\u518D\u5728 <code>SIGTERM</code> \u5F3A\u5236\u6740\u8FDB\u7A0B\u3002</li></ul></li></ul><h2 id="migration-from-v1" tabindex="-1">\u4ECE v1 \u8FC1\u79FB <a class="header-anchor" href="#migration-from-v1">\xB6</a></h2><p>\u5728 Vite v2 \u6587\u6863\u4E2D\u67E5\u770B <a href="https://v2.vitejs.dev/guide/migration.html" target="_blank" rel="noopener noreferrer">Migration from v1 Guide</a>\uFF08<a href="https://cn.vitejs.dev/guide/migration-from-v1.html" target="_blank" rel="noopener noreferrer">\u4E2D\u6587\u7248</a>\uFF09\uFF0C\u4E86\u89E3\u5982\u4F55\u5C06\u4F60\u7684\u5E94\u7528\u8FC1\u79FB\u5230 Vite v2\uFF0C\u7136\u540E\u518D\u5904\u7406\u672C\u9875\u4E2D\u6240\u63D0\u53CA\u7684\u53D8\u5316\u3002</p>`,41),r=[t];function n(i,c,p,d,h,u){return o(),a("div",null,r)}var f=e(l,[["render",n]]);export{g as __pageData,f as default};
