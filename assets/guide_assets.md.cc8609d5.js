import{_ as s,o as a,c as l,a as n}from"./app.d0dbc66e.js";const A=JSON.parse('{"title":"\u9759\u6001\u8D44\u6E90\u5904\u7406","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5C06\u8D44\u6E90\u5F15\u5165\u4E3A URL","slug":"importing-asset-as-url"},{"level":3,"title":"\u663E\u5F0F URL \u5F15\u5165","slug":"explicit-url-imports"},{"level":3,"title":"\u5C06\u8D44\u6E90\u5F15\u5165\u4E3A\u5B57\u7B26\u4E32","slug":"importing-asset-as-string"},{"level":3,"title":"\u5BFC\u5165\u811A\u672C\u4F5C\u4E3A Worker","slug":"importing-script-as-a-worker"},{"level":3,"title":"public \u76EE\u5F55","slug":"the-public-directory"},{"level":2,"title":"new URL(url, import.meta.url)","slug":"new-url-url-import-meta-url"}],"relativePath":"guide/assets.md"}'),e={name:"guide/assets.md"},o=n(`<h1 id="static-asset-handling" tabindex="-1">\u9759\u6001\u8D44\u6E90\u5904\u7406 <a class="header-anchor" href="#static-asset-handling">\xB6</a></h1><ul><li>\u76F8\u5173: <a href="./build.html#public-base-path">\u516C\u5171\u57FA\u7840\u8DEF\u5F84</a></li><li>\u76F8\u5173: <a href="/config/shared-options.html#assetsinclude"><code>assetsInclude</code> \u914D\u7F6E\u9879</a></li></ul><h2 id="importing-asset-as-url" tabindex="-1">\u5C06\u8D44\u6E90\u5F15\u5165\u4E3A URL <a class="header-anchor" href="#importing-asset-as-url">\xB6</a></h2><p>\u670D\u52A1\u65F6\u5F15\u5165\u4E00\u4E2A\u9759\u6001\u8D44\u6E90\u4F1A\u8FD4\u56DE\u89E3\u6790\u540E\u7684\u516C\u5171\u8DEF\u5F84\uFF1A</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> imgUrl </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./img.png</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hero-img</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">src </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> imgUrl</span></span>
<span class="line"></span></code></pre></div><p>\u4F8B\u5982\uFF0C<code>imgUrl</code> \u5728\u5F00\u53D1\u65F6\u4F1A\u662F <code>/img.png</code>\uFF0C\u5728\u751F\u4EA7\u6784\u5EFA\u540E\u4F1A\u662F <code>/assets/img.2d8efhg.png</code>\u3002</p><p>\u884C\u4E3A\u7C7B\u4F3C\u4E8E Webpack \u7684 <code>file-loader</code>\u3002\u533A\u522B\u5728\u4E8E\u5BFC\u5165\u65E2\u53EF\u4EE5\u4F7F\u7528\u7EDD\u5BF9\u516C\u5171\u8DEF\u5F84\uFF08\u57FA\u4E8E\u5F00\u53D1\u671F\u95F4\u7684\u9879\u76EE\u6839\u8DEF\u5F84\uFF09\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u76F8\u5BF9\u8DEF\u5F84\u3002</p><ul><li><p><code>url()</code> \u5728 CSS \u4E2D\u7684\u5F15\u7528\u4E5F\u4EE5\u540C\u6837\u7684\u65B9\u5F0F\u5904\u7406\u3002</p></li><li><p>\u5982\u679C Vite \u4F7F\u7528\u4E86 Vue \u63D2\u4EF6\uFF0CVue SFC \u6A21\u677F\u4E2D\u7684\u8D44\u6E90\u5F15\u7528\u90FD\u5C06\u81EA\u52A8\u8F6C\u6362\u4E3A\u5BFC\u5165\u3002</p></li><li><p>\u5E38\u89C1\u7684\u56FE\u50CF\u3001\u5A92\u4F53\u548C\u5B57\u4F53\u6587\u4EF6\u7C7B\u578B\u88AB\u81EA\u52A8\u68C0\u6D4B\u4E3A\u8D44\u6E90\u3002\u4F60\u53EF\u4EE5\u4F7F\u7528 <a href="/config/shared-options.html#assetsinclude"><code>assetsInclude</code> \u9009\u9879</a> \u6269\u5C55\u5185\u90E8\u5217\u8868\u3002</p></li><li><p>\u5F15\u7528\u7684\u8D44\u6E90\u4F5C\u4E3A\u6784\u5EFA\u8D44\u6E90\u56FE\u7684\u4E00\u90E8\u5206\u5305\u62EC\u5728\u5185\uFF0C\u5C06\u751F\u6210\u6563\u5217\u6587\u4EF6\u540D\uFF0C\u5E76\u53EF\u4EE5\u7531\u63D2\u4EF6\u8FDB\u884C\u5904\u7406\u4EE5\u8FDB\u884C\u4F18\u5316\u3002</p></li><li><p>\u8F83\u5C0F\u7684\u8D44\u6E90\u4F53\u79EF\u5C0F\u4E8E <a href="/config/build-options.html#build-assetsinlinelimit"><code>assetsInlineLimit</code> \u9009\u9879\u503C</a> \u5219\u4F1A\u88AB\u5185\u8054\u4E3A base64 data URL\u3002</p></li></ul><h3 id="explicit-url-imports" tabindex="-1">\u663E\u5F0F URL \u5F15\u5165 <a class="header-anchor" href="#explicit-url-imports">\xB6</a></h3><p>\u672A\u88AB\u5305\u542B\u5728\u5185\u90E8\u5217\u8868\u6216 <code>assetsInclude</code> \u4E2D\u7684\u8D44\u6E90\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>?url</code> \u540E\u7F00\u663E\u5F0F\u5BFC\u5165\u4E3A\u4E00\u4E2A URL\u3002\u8FD9\u5341\u5206\u6709\u7528\uFF0C\u4F8B\u5982\uFF0C\u8981\u5BFC\u5165 <a href="https://houdini.how/usage" target="_blank" rel="noopener noreferrer">Houdini Paint Worklets</a> \u65F6\uFF1A</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> workletURL </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">extra-scalloped-border/worklet.js?url</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">CSS</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">paintWorklet</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addModule</span><span style="color:#A6ACCD;">(workletURL)</span></span>
<span class="line"></span></code></pre></div><h3 id="importing-asset-as-string" tabindex="-1">\u5C06\u8D44\u6E90\u5F15\u5165\u4E3A\u5B57\u7B26\u4E32 <a class="header-anchor" href="#importing-asset-as-string">\xB6</a></h3><p>\u8D44\u6E90\u53EF\u4EE5\u4F7F\u7528 <code>?raw</code> \u540E\u7F00\u58F0\u660E\u4F5C\u4E3A\u5B57\u7B26\u4E32\u5F15\u5165\u3002</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> shaderString </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./shader.glsl?raw</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><h3 id="importing-script-as-a-worker" tabindex="-1">\u5BFC\u5165\u811A\u672C\u4F5C\u4E3A Worker <a class="header-anchor" href="#importing-script-as-a-worker">\xB6</a></h3><p>\u811A\u672C\u53EF\u4EE5\u901A\u8FC7 <code>?worker</code> \u6216 <code>?sharedworker</code> \u540E\u7F00\u5BFC\u5165\u4E3A web worker\u3002</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// \u5728\u751F\u4EA7\u6784\u5EFA\u4E2D\u5C06\u4F1A\u5206\u79BB\u51FA chunk</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> Worker </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./shader.js?worker</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> worker </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Worker</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span></code></pre></div><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// sharedworker</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> SharedWorker </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./shader.js?sharedworker</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> sharedWorker </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">SharedWorker</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span></code></pre></div><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// \u5185\u8054\u4E3A base64 \u5B57\u7B26\u4E32</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> InlineWorker </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./shader.js?worker&amp;inline</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><p>\u67E5\u770B <a href="./features.html#web-workers">Web Worker \u5C0F\u8282</a> \u83B7\u53D6\u66F4\u591A\u7EC6\u8282\u3002</p><h3 id="the-public-directory" tabindex="-1"><code>public</code> \u76EE\u5F55 <a class="header-anchor" href="#the-public-directory">\xB6</a></h3><p>\u5982\u679C\u4F60\u6709\u4E0B\u5217\u8FD9\u4E9B\u8D44\u6E90\uFF1A</p><ul><li>\u4E0D\u4F1A\u88AB\u6E90\u7801\u5F15\u7528\uFF08\u4F8B\u5982 <code>robots.txt</code>\uFF09</li><li>\u5FC5\u987B\u4FDD\u6301\u539F\u6709\u6587\u4EF6\u540D\uFF08\u6CA1\u6709\u7ECF\u8FC7 hash\uFF09</li><li>...\u6216\u8005\u4F60\u538B\u6839\u4E0D\u60F3\u5F15\u5165\u8BE5\u8D44\u6E90\uFF0C\u53EA\u662F\u60F3\u5F97\u5230\u5176 URL\u3002</li></ul><p>\u90A3\u4E48\u4F60\u53EF\u4EE5\u5C06\u8BE5\u8D44\u6E90\u653E\u5728\u6307\u5B9A\u7684 <code>public</code> \u76EE\u5F55\u4E2D\uFF0C\u5B83\u5E94\u4F4D\u4E8E\u4F60\u7684\u9879\u76EE\u6839\u76EE\u5F55\u3002\u8BE5\u76EE\u5F55\u4E2D\u7684\u8D44\u6E90\u5728\u5F00\u53D1\u65F6\u80FD\u76F4\u63A5\u901A\u8FC7 <code>/</code> \u6839\u8DEF\u5F84\u8BBF\u95EE\u5230\uFF0C\u5E76\u4E14\u6253\u5305\u65F6\u4F1A\u88AB\u5B8C\u6574\u590D\u5236\u5230\u76EE\u6807\u76EE\u5F55\u7684\u6839\u76EE\u5F55\u4E0B\u3002</p><p>\u76EE\u5F55\u9ED8\u8BA4\u662F <code>&lt;root&gt;/public</code>\uFF0C\u4F46\u53EF\u4EE5\u901A\u8FC7 <a href="/config/shared-options.html#publicdir"><code>publicDir</code> \u9009\u9879</a> \u6765\u914D\u7F6E\u3002</p><p>\u8BF7\u6CE8\u610F\uFF1A</p><ul><li>\u5F15\u5165 <code>public</code> \u4E2D\u7684\u8D44\u6E90\u6C38\u8FDC\u5E94\u8BE5\u4F7F\u7528\u6839\u7EDD\u5BF9\u8DEF\u5F84 \u2014\u2014 \u4E3E\u4E2A\u4F8B\u5B50\uFF0C<code>public/icon.png</code> \u5E94\u8BE5\u5728\u6E90\u7801\u4E2D\u88AB\u5F15\u7528\u4E3A <code>/icon.png</code>\u3002</li><li><code>public</code> \u4E2D\u7684\u8D44\u6E90\u4E0D\u5E94\u8BE5\u88AB JavaScript \u6587\u4EF6\u5F15\u7528\u3002</li></ul><h2 id="new-url-url-import-meta-url" tabindex="-1">new URL(url, import.<wbr>meta.url) <a class="header-anchor" href="#new-url-url-import-meta-url">\xB6</a></h2><p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import%2Emeta" target="_blank" rel="noopener noreferrer">import.<wbr>meta.url</a> \u662F\u4E00\u4E2A ESM \u7684\u539F\u751F\u529F\u80FD\uFF0C\u4F1A\u66B4\u9732\u5F53\u524D\u6A21\u5757\u7684 URL\u3002\u5C06\u5B83\u4E0E\u539F\u751F\u7684 <a href="https://developer.mozilla.org/en-US/docs/Web/API/URL" target="_blank" rel="noopener noreferrer">URL \u6784\u9020\u5668</a> \u7EC4\u5408\u4F7F\u7528\uFF0C\u5728\u4E00\u4E2A JavaScript \u6A21\u5757\u4E2D\uFF0C\u901A\u8FC7\u76F8\u5BF9\u8DEF\u5F84\u6211\u4EEC\u5C31\u80FD\u5F97\u5230\u4E00\u4E2A\u88AB\u5B8C\u6574\u89E3\u6790\u7684\u9759\u6001\u8D44\u6E90 URL\uFF1A</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> imgUrl </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">URL</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./img.png</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">meta</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">url)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">href</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hero-img</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">src </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> imgUrl</span></span>
<span class="line"></span></code></pre></div><p>\u8FD9\u5728\u73B0\u4EE3\u6D4F\u89C8\u5668\u4E2D\u80FD\u591F\u539F\u751F\u4F7F\u7528 - \u5B9E\u9645\u4E0A\uFF0CVite \u5E76\u4E0D\u9700\u8981\u5728\u5F00\u53D1\u9636\u6BB5\u5904\u7406\u8FD9\u4E9B\u4EE3\u7801\uFF01</p><p>\u8FD9\u4E2A\u6A21\u5F0F\u540C\u6837\u8FD8\u53EF\u4EE5\u901A\u8FC7\u5B57\u7B26\u4E32\u6A21\u677F\u652F\u6301\u52A8\u6001 URL\uFF1A</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getImageUrl</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">URL</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">./dir/</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">.png</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">meta</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">url</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">href</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u5728\u751F\u4EA7\u6784\u5EFA\u65F6\uFF0CVite \u624D\u4F1A\u8FDB\u884C\u5FC5\u8981\u7684\u8F6C\u6362\u4FDD\u8BC1 URL \u5728\u6253\u5305\u548C\u8D44\u6E90\u54C8\u5E0C\u540E\u4ECD\u6307\u5411\u6B63\u786E\u7684\u5730\u5740\u3002\u7136\u800C\uFF0C\u8FD9\u4E2A URL \u5B57\u7B26\u4E32\u5FC5\u987B\u662F\u9759\u6001\u7684\uFF0C\u8FD9\u6837\u624D\u597D\u5206\u6790\u3002\u5426\u5219\u4EE3\u7801\u5C06\u88AB\u539F\u6837\u4FDD\u7559\u3001\u56E0\u800C\u5728 <code>build.target</code> \u4E0D\u652F\u6301 <code>import.<wbr>meta.url</code> \u65F6\u4F1A\u5BFC\u81F4\u8FD0\u884C\u65F6\u9519\u8BEF\u3002</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// Vite \u4E0D\u4F1A\u8F6C\u6362\u8FD9\u4E2A</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> imgUrl </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">URL</span><span style="color:#A6ACCD;">(imagePath</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">meta</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">url)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">href</span></span>
<span class="line"></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">\u6CE8\u610F\uFF1A\u65E0\u6CD5\u5728 SSR \u4E2D\u4F7F\u7528</p><p>\u5982\u679C\u4F60\u6B63\u5728\u4EE5\u670D\u52A1\u7AEF\u6E32\u67D3\u6A21\u5F0F\u4F7F\u7528 Vite \u5219\u6B64\u6A21\u5F0F\u4E0D\u652F\u6301\uFF0C\u56E0\u4E3A <code>import.<wbr>meta.url</code> \u5728\u6D4F\u89C8\u5668\u548C Node.js \u4E2D\u6709\u4E0D\u540C\u7684\u8BED\u4E49\u3002\u670D\u52A1\u7AEF\u7684\u4EA7\u7269\u4E5F\u65E0\u6CD5\u9884\u5148\u786E\u5B9A\u5BA2\u6237\u7AEF\u4E3B\u673A URL\u3002</p></div>`,36),p=[o];function r(t,c,i,D,y,d){return a(),l("div",null,p)}var C=s(e,[["render",r]]);export{A as __pageData,C as default};
