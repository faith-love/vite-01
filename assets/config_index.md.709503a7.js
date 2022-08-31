import{_ as s,o as n,c as a,a as l}from"./app.d0dbc66e.js";const A=JSON.parse('{"title":"\u914D\u7F6E Vite","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u914D\u7F6E\u6587\u4EF6","slug":"config-file"},{"level":2,"title":"\u914D\u7F6E\u667A\u80FD\u63D0\u793A","slug":"config-intellisense"},{"level":2,"title":"\u60C5\u666F\u914D\u7F6E","slug":"conditional-config"},{"level":2,"title":"\u5F02\u6B65\u914D\u7F6E","slug":"async-config"},{"level":3,"title":"\u73AF\u5883\u53D8\u91CF","slug":"environment-variables"}],"relativePath":"config/index.md"}'),o={name:"config/index.md"},p=l(`<h1 id="configuring-vite" tabindex="-1">\u914D\u7F6E Vite <a class="header-anchor" href="#configuring-vite">\xB6</a></h1><h2 id="config-file" tabindex="-1">\u914D\u7F6E\u6587\u4EF6 <a class="header-anchor" href="#config-file">\xB6</a></h2><p>\u5F53\u4EE5\u547D\u4EE4\u884C\u65B9\u5F0F\u8FD0\u884C <code>vite</code> \u65F6\uFF0CVite \u4F1A\u81EA\u52A8\u89E3\u6790 <a href="/guide/#index-html-and-project-root">\u9879\u76EE\u6839\u76EE\u5F55</a> \u4E0B\u540D\u4E3A <code>vite.config.js</code> \u7684\u6587\u4EF6\u3002</p><p>\u6700\u57FA\u7840\u7684\u914D\u7F6E\u6587\u4EF6\u662F\u8FD9\u6837\u7684\uFF1A</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// vite.config.js</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \u914D\u7F6E\u9009\u9879</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u6CE8\u610F\uFF1A\u5373\u4F7F\u9879\u76EE\u6CA1\u6709\u5728 <code>package.json</code> \u4E2D\u5F00\u542F <code>type: &quot;module&quot;</code>\uFF0CVite \u4E5F\u652F\u6301\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u4F7F\u7528 ESM \u8BED\u6CD5\u3002\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u914D\u7F6E\u6587\u4EF6\u4F1A\u5728\u88AB\u52A0\u8F7D\u524D\u81EA\u52A8\u8FDB\u884C\u9884\u5904\u7406\u3002</p><p>\u4F60\u53EF\u4EE5\u663E\u5F0F\u5730\u901A\u8FC7 <code>--config</code> \u547D\u4EE4\u884C\u9009\u9879\u6307\u5B9A\u4E00\u4E2A\u914D\u7F6E\u6587\u4EF6\uFF08\u76F8\u5BF9\u4E8E <code>cwd</code> \u8DEF\u5F84\u8FDB\u884C\u89E3\u6790\uFF09</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">vite --config my-config.js</span></span>
<span class="line"></span></code></pre></div><h2 id="config-intellisense" tabindex="-1">\u914D\u7F6E\u667A\u80FD\u63D0\u793A <a class="header-anchor" href="#config-intellisense">\xB6</a></h2><p>\u56E0\u4E3A Vite \u672C\u8EAB\u9644\u5E26 TypeScript \u7C7B\u578B\uFF0C\u6240\u4EE5\u4F60\u53EF\u4EE5\u901A\u8FC7 IDE \u548C jsdoc \u7684\u914D\u5408\u6765\u5B9E\u73B0\u667A\u80FD\u63D0\u793A\uFF1A</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">/** </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">type</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#89DDFF;font-style:italic;">{</span><span style="color:#FFCB6B;font-style:italic;">import(&#39;vite&#39;).UserConfig</span><span style="color:#89DDFF;font-style:italic;">}</span><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u53E6\u5916\u4F60\u53EF\u4EE5\u4F7F\u7528 <code>defineConfig</code> \u5DE5\u5177\u51FD\u6570\uFF0C\u8FD9\u6837\u4E0D\u7528 jsdoc \u6CE8\u89E3\u4E5F\u53EF\u4EE5\u83B7\u53D6\u7C7B\u578B\u63D0\u793A\uFF1A</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">defineConfig</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vite</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineConfig</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>Vite \u4E5F\u76F4\u63A5\u652F\u6301 TS \u914D\u7F6E\u6587\u4EF6\u3002\u4F60\u53EF\u4EE5\u5728 <code>vite.config.ts</code> \u4E2D\u4F7F\u7528 <code>defineConfig</code> \u5DE5\u5177\u51FD\u6570\u3002</p><h2 id="conditional-config" tabindex="-1">\u60C5\u666F\u914D\u7F6E <a class="header-anchor" href="#conditional-config">\xB6</a></h2><p>\u5982\u679C\u914D\u7F6E\u6587\u4EF6\u9700\u8981\u57FA\u4E8E\uFF08<code>dev</code>/<code>serve</code> \u6216 <code>build</code>\uFF09\u547D\u4EE4\u6216\u8005\u4E0D\u540C\u7684 <a href="/guide/env-and-mode.html">\u6A21\u5F0F</a> \u6765\u51B3\u5B9A\u9009\u9879\uFF0C\u4EA6\u6216\u8005\u662F\u4E00\u4E2A SSR \u6784\u5EFA\uFF08<code>ssrBuild</code>\uFF09\uFF0C\u5219\u53EF\u4EE5\u9009\u62E9\u5BFC\u51FA\u8FD9\u6837\u4E00\u4E2A\u51FD\u6570\uFF1A</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineConfig</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">({</span><span style="color:#A6ACCD;"> command</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> mode</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> ssrBuild </span><span style="color:#89DDFF;">})</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">command</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">serve</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// dev \u72EC\u6709\u914D\u7F6E</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// command === &#39;build&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// build \u72EC\u6709\u914D\u7F6E</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5728 Vite \u7684 API \u4E2D\uFF0C\u5728\u5F00\u53D1\u73AF\u5883\u4E0B <code>command</code> \u7684\u503C\u4E3A <code>serve</code>\uFF08\u5728 CLI \u4E2D\uFF0C <code>vite dev</code> \u548C <code>vite serve</code> \u662F <code>vite</code> \u7684\u522B\u540D\uFF09\uFF0C\u800C\u5728\u751F\u4EA7\u73AF\u5883\u4E0B\u4E3A <code>build</code>\uFF08<code>vite build</code>\uFF09\u3002</p><p><code>ssrBuild</code> \u4ECD\u662F\u5B9E\u9A8C\u6027\u7684\u3002\u5B83\u53EA\u5728\u6784\u5EFA\u8FC7\u7A0B\u4E2D\u53EF\u7528\uFF0C\u800C\u4E0D\u662F\u4E00\u4E2A\u66F4\u901A\u7528\u7684 <code>ssr</code> \u6807\u5FD7\uFF0C\u56E0\u4E3A\u5728\u5F00\u53D1\u8FC7\u7A0B\u4E2D\uFF0C\u6211\u4EEC\u552F\u4E00\u7684\u670D\u52A1\u5668\u4F1A\u5171\u4EAB\u5904\u7406 SSR \u548C\u975E SSR \u8BF7\u6C42\u7684\u914D\u7F6E\u3002\u67D0\u4E9B\u5DE5\u5177\u53EF\u80FD\u6CA1\u6709\u533A\u5206\u6D4F\u89C8\u5668\u548C SSR \u4E24\u79CD\u6784\u5EFA\u76EE\u6807\u7684\u547D\u4EE4\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u503C\u53EF\u80FD\u662F <code>undefined</code>\uFF0C\u56E0\u6B64\u9700\u8981\u91C7\u7528\u663E\u5F0F\u7684\u6BD4\u8F83\u8868\u8FBE\u5F0F\u3002</p><h2 id="async-config" tabindex="-1">\u5F02\u6B65\u914D\u7F6E <a class="header-anchor" href="#async-config">\xB6</a></h2><p>\u5982\u679C\u914D\u7F6E\u9700\u8981\u8C03\u7528\u4E00\u4E2A\u5F02\u6B65\u51FD\u6570\uFF0C\u4E5F\u53EF\u4EE5\u8F6C\u800C\u5BFC\u51FA\u4E00\u4E2A\u5F02\u6B65\u51FD\u6570\uFF1A</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineConfig</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">({</span><span style="color:#A6ACCD;"> command</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> mode </span><span style="color:#89DDFF;">})</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">asyncFunction</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// vite \u914D\u7F6E</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><h3 id="environment-variables" tabindex="-1">\u73AF\u5883\u53D8\u91CF <a class="header-anchor" href="#environment-variables">\xB6</a></h3><p>\u73AF\u5883\u53D8\u91CF\u901A\u5E38\u53EF\u4EE5\u4ECE <code>process.<wbr>env</code> \u83B7\u5F97\u3002</p><p>\u6CE8\u610F Vite \u9ED8\u8BA4\u662F\u4E0D\u52A0\u8F7D <code>.env</code> \u6587\u4EF6\u7684\uFF0C\u56E0\u4E3A\u8FD9\u4E9B\u6587\u4EF6\u9700\u8981\u5728\u6267\u884C\u5B8C Vite \u914D\u7F6E\u540E\u624D\u80FD\u786E\u5B9A\u52A0\u8F7D\u54EA\u4E00\u4E2A\uFF0C\u4E3E\u4E2A\u4F8B\u5B50\uFF0C<code>root</code> \u548C <code>envDir</code> \u9009\u9879\u4F1A\u5F71\u54CD\u52A0\u8F7D\u884C\u4E3A\u3002\u4E0D\u8FC7\u5F53\u4F60\u7684\u786E\u9700\u8981\u65F6\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 Vite \u5BFC\u51FA\u7684 <code>loadEnv</code> \u51FD\u6570\u6765\u52A0\u8F7D\u6307\u5B9A\u7684 <code>.env</code> \u6587\u4EF6\u3002</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">defineConfig</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">loadEnv</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vite</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineConfig</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">({</span><span style="color:#A6ACCD;"> command</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> mode </span><span style="color:#89DDFF;">})</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \u6839\u636E\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55\u4E2D\u7684 \`mode\` \u52A0\u8F7D .env \u6587\u4EF6</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \u8BBE\u7F6E\u7B2C\u4E09\u4E2A\u53C2\u6570\u4E3A &#39;&#39; \u6765\u52A0\u8F7D\u6240\u6709\u73AF\u5883\u53D8\u91CF\uFF0C\u800C\u4E0D\u7BA1\u662F\u5426\u6709 \`VITE_\` \u524D\u7F00\u3002</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">env</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">loadEnv</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">mode</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">process</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">cwd</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// vite \u914D\u7F6E</span></span>
<span class="line"><span style="color:#F07178;">    define</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      __APP_ENV__</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">APP_ENV</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div>`,26),e=[p];function c(t,r,i,y,F,D){return n(),a("div",null,e)}var C=s(o,[["render",c]]);export{A as __pageData,C as default};
