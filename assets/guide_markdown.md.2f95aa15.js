import{_ as a,c as t,o as e,a as o}from"./app.233e65ae.js";var n="/assets/line-numbers-mobile.f5ca96ee.gif",s="/assets/line-numbers-desktop.cc304762.png";const b='{"title":"Markdown \u6269\u5C55","description":"","frontmatter":{"sidebarDepth":3},"headers":[{"level":2,"title":"\u6807\u9898\u951A\u70B9","slug":"header-anchors"},{"level":2,"title":"\u94FE\u63A5","slug":"links"},{"level":3,"title":"\u5185\u90E8\u94FE\u63A5","slug":"internal-links"},{"level":3,"title":"\u9875\u9762\u540E\u7F00","slug":"page-suffix"},{"level":3,"title":"\u5916\u90E8\u94FE\u63A5","slug":"external-links"},{"level":2,"title":"Frontmatter","slug":"frontmatter"},{"level":2,"title":"GitHub \u98CE\u683C \u8868\u683C","slug":"github-style-tables"},{"level":2,"title":"Emoji \u{1F389}","slug":"emoji"},{"level":2,"title":"\u76EE\u5F55","slug":"table-of-contents"},{"level":2,"title":"\u81EA\u5B9A\u4E49\u5BB9\u5668","slug":"custom-containers"},{"level":3,"title":"\u9ED8\u8BA4\u6807\u9898","slug":"default-title"},{"level":3,"title":"\u81EA\u5B9A\u4E49\u6807\u9898","slug":"custom-title"},{"level":2,"title":"\u4EE3\u7801\u5757\u4E2D\u7684\u8BED\u6CD5\u9AD8\u4EAE\u663E\u793A","slug":"syntax-highlighting-in-code-blocks"},{"level":2,"title":"\u4EE3\u7801\u5757\u4E2D\u7684\u884C\u9AD8\u4EAE\u663E\u793A","slug":"line-highlighting-in-code-blocks"},{"level":2,"title":"\u884C\u53F7","slug":"line-numbers"},{"level":2,"title":"\u5BFC\u5165\u4EE3\u7801\u7247\u6BB5","slug":"import-code-snippets"},{"level":2,"title":"\u8FDB\u9636\u914D\u7F6E","slug":"advanced-configuration"}],"relativePath":"guide/markdown.md"}',p={},l=n,i=s,r=o(`<h1 id="markdown-extensions" tabindex="-1">Markdown \u6269\u5C55 <a class="header-anchor" href="#markdown-extensions" aria-hidden="true">#</a></h1><h2 id="header-anchors" tabindex="-1">\u6807\u9898\u951A\u70B9 <a class="header-anchor" href="#header-anchors" aria-hidden="true">#</a></h2><p>\u6807\u9898\u4F1A\u81EA\u52A8\u5E94\u7528\u951A\u70B9\u94FE\u63A5\u3002\u53EF\u4EE5\u4F7F\u7528 <code>markdown.anchor</code> \u9009\u9879\u914D\u7F6E\u951A\u70B9\u7684\u6E32\u67D3\u3002</p><h2 id="links" tabindex="-1">\u94FE\u63A5 <a class="header-anchor" href="#links" aria-hidden="true">#</a></h2><h3 id="internal-links" tabindex="-1">\u5185\u90E8\u94FE\u63A5 <a class="header-anchor" href="#internal-links" aria-hidden="true">#</a></h3><p>\u5185\u90E8\u94FE\u8DEF\u8F6C\u6362\u4E3A router link \u4EE5\u7528\u4E8E SPA \u5BFC\u822A\u3002\u53E6\u5916\uFF0C\u6BCF\u4E2A\u5B50\u76EE\u5F55\u5305\u542B\u7684 <code>index.md</code> \u90FD\u4F1A\u81EA\u52A8\u8F6C\u6362\u4E3A <code>index.html</code>\uFF0C\u5E76\u6709\u5BF9\u5E94\u7684 URL <code>/</code>\u3002</p><p>\u4F8B\u5982\uFF0C\u7ED9\u5B9A\u4EE5\u4E0B\u76EE\u5F55\u7ED3\u6784\uFF1A</p><div class="language-"><pre><code>.
\u251C\u2500 index.md
\u251C\u2500 foo
\u2502  \u251C\u2500 index.md
\u2502  \u251C\u2500 one.md
\u2502  \u2514\u2500 two.md
\u2514\u2500 bar
   \u251C\u2500 index.md
   \u251C\u2500 three.md
   \u2514\u2500 four.md
</code></pre></div><p>\u4E14\u5047\u8BBE\u4F60\u5728 <code>foo/one.md</code> \u4E2D\uFF1A</p><div class="language-md"><pre><code><span class="token url">[<span class="token content">Home</span>](<span class="token url">/</span>)</span> <span class="token comment">&lt;!-- sends the user to the root index.md --&gt;</span>
<span class="token url">[<span class="token content">foo</span>](<span class="token url">/foo/</span>)</span> <span class="token comment">&lt;!-- sends the user to index.html of directory foo --&gt;</span>
<span class="token url">[<span class="token content">foo heading</span>](<span class="token url">./#heading</span>)</span> <span class="token comment">&lt;!-- anchors user to a heading in the foo index file --&gt;</span>
<span class="token url">[<span class="token content">bar - three</span>](<span class="token url">../bar/three</span>)</span> <span class="token comment">&lt;!-- you can omit extention --&gt;</span>
<span class="token url">[<span class="token content">bar - three</span>](<span class="token url">../bar/three.md</span>)</span> <span class="token comment">&lt;!-- you can append .md --&gt;</span>
<span class="token url">[<span class="token content">bar - four</span>](<span class="token url">../bar/four.html</span>)</span> <span class="token comment">&lt;!-- or you can append .html --&gt;</span>
</code></pre></div><h3 id="page-suffix" tabindex="-1">\u9875\u9762\u540E\u7F00 <a class="header-anchor" href="#page-suffix" aria-hidden="true">#</a></h3><p>\u9ED8\u8BA4\u751F\u6210\u7684\u9875\u9762\u548C\u5185\u90E8\u94FE\u63A5\u540E\u7F00\u4E3A <code>.html</code>\u3002</p><h3 id="external-links" tabindex="-1">\u5916\u90E8\u94FE\u63A5 <a class="header-anchor" href="#external-links" aria-hidden="true">#</a></h3><p>\u5916\u90E8\u94FE\u63A5\u81EA\u52A8\u914D\u7F6E <code>target=&quot;_blank&quot; rel=&quot;noopener noferrer&quot;</code>\uFF1A</p><ul><li><a href="https://vuejs.org" target="_blank" rel="noopener noreferrer">vuejs.org</a></li><li><a href="https://github.com/vuejs/vitepress" target="_blank" rel="noopener noreferrer">VitePress on GitHub</a></li></ul><h2 id="frontmatter" tabindex="-1">Frontmatter <a class="header-anchor" href="#frontmatter" aria-hidden="true">#</a></h2><p><a href="https://jekyllrb.com/docs/frontmatter/" target="_blank" rel="noopener noreferrer">YAML frontmatter</a> \u652F\u6301\u5F00\u7BB1\u5373\u7528\uFF1A</p><div class="language-yaml"><pre><code><span class="token punctuation">---</span>
<span class="token key atrule">title</span><span class="token punctuation">:</span> Blogging Like a Hacker
<span class="token key atrule">lang</span><span class="token punctuation">:</span> en<span class="token punctuation">-</span>US
<span class="token punctuation">---</span>
</code></pre></div><p>\u8BE5\u6570\u636E\u5BF9\u9875\u9762\u7684\u5176\u4F59\u90E8\u5206\u4EE5\u53CA\u6240\u6709\u81EA\u5B9A\u4E49\u548C\u4E3B\u9898\u5316\u7EC4\u4EF6\u90FD\u53EF\u7528\u3002</p><p>\u67E5\u770B <a href="./frontmatter.html">Frontmatter</a> \u83B7\u53D6\u66F4\u591A\u7EC6\u8282\u3002</p><h2 id="github-style-tables" tabindex="-1">GitHub \u98CE\u683C \u8868\u683C <a class="header-anchor" href="#github-style-tables" aria-hidden="true">#</a></h2><p><strong>\u8F93\u5165</strong></p><div class="language-"><pre><code>| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
</code></pre></div><p><strong>\u8F93\u51FA</strong></p><table><thead><tr><th>Tables</th><th style="text-align:center;">Are</th><th style="text-align:right;">Cool</th></tr></thead><tbody><tr><td>col 3 is</td><td style="text-align:center;">right-aligned</td><td style="text-align:right;">$1600</td></tr><tr><td>col 2 is</td><td style="text-align:center;">centered</td><td style="text-align:right;">$12</td></tr><tr><td>zebra stripes</td><td style="text-align:center;">are neat</td><td style="text-align:right;">$1</td></tr></tbody></table><h2 id="emoji" tabindex="-1">Emoji \u{1F389} <a class="header-anchor" href="#emoji" aria-hidden="true">#</a></h2><p><strong>\u8F93\u5165</strong></p><div class="language-"><pre><code>:tada: :100:
</code></pre></div><p><strong>\u8F93\u51FA</strong></p><p>\u{1F389} \u{1F4AF}</p><p><a href="https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json" target="_blank" rel="noopener noreferrer">\u53EF\u7528\u7684\u8868\u60C5\u7B26\u53F7\u5217\u8868</a>\u3002</p><h2 id="table-of-contents" tabindex="-1">\u76EE\u5F55 <a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a></h2><p><strong>\u8F93\u5165</strong></p><div class="language-"><pre><code>[[toc]]
</code></pre></div><p><strong>\u8F93\u51FA</strong></p><p><div class="table-of-contents"><ul><li><a href="#header-anchors">\u6807\u9898\u951A\u70B9</a></li><li><a href="#links">\u94FE\u63A5</a><ul><li><a href="#internal-links">\u5185\u90E8\u94FE\u63A5</a></li><li><a href="#page-suffix">\u9875\u9762\u540E\u7F00</a></li><li><a href="#external-links">\u5916\u90E8\u94FE\u63A5</a></li></ul></li><li><a href="#frontmatter">Frontmatter</a></li><li><a href="#github-style-tables">GitHub \u98CE\u683C \u8868\u683C</a></li><li><a href="#emoji">Emoji</a></li><li><a href="#table-of-contents">\u76EE\u5F55</a></li><li><a href="#custom-containers">\u81EA\u5B9A\u4E49\u5BB9\u5668</a><ul><li><a href="#default-title">\u9ED8\u8BA4\u6807\u9898</a></li><li><a href="#custom-title">\u81EA\u5B9A\u4E49\u6807\u9898</a></li></ul></li><li><a href="#syntax-highlighting-in-code-blocks">\u4EE3\u7801\u5757\u4E2D\u7684\u8BED\u6CD5\u9AD8\u4EAE\u663E\u793A</a></li><li><a href="#line-highlighting-in-code-blocks">\u4EE3\u7801\u5757\u4E2D\u7684\u884C\u9AD8\u4EAE\u663E\u793A</a></li><li><a href="#line-numbers">\u884C\u53F7</a></li><li><a href="#import-code-snippets">\u5BFC\u5165\u4EE3\u7801\u7247\u6BB5</a></li><li><a href="#advanced-configuration">\u8FDB\u9636\u914D\u7F6E</a></li></ul></div></p><p>\u53EF\u4EE5\u4F7F\u7528 <code>markdown.toc</code> \u9009\u9879\u914D\u7F6E\u76EE\u5F55\u7684\u6E32\u67D3\u3002</p><h2 id="custom-containers" tabindex="-1">\u81EA\u5B9A\u4E49\u5BB9\u5668 <a class="header-anchor" href="#custom-containers" aria-hidden="true">#</a></h2><p>\u81EA\u5B9A\u4E49\u5BB9\u5668\u53EF\u4EE5\u901A\u8FC7\u5B83\u4EEC\u7684\u7C7B\u578B\uFF0C\u6807\u9898\u548C\u5185\u5BB9\u6765\u5B9A\u4E49\u3002</p><h3 id="default-title" tabindex="-1">\u9ED8\u8BA4\u6807\u9898 <a class="header-anchor" href="#default-title" aria-hidden="true">#</a></h3><p><strong>\u8F93\u5165</strong></p><div class="language-md"><pre><code>::: tip
This is a tip
:::

::: info
This is an info box
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: details
This is a details block, which does not work in Internet Explorer or Edge.
:::
</code></pre></div><p><strong>\u8F93\u51FA</strong></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This is a tip</p></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This is an info box</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This is a warning</p></div><div class="danger custom-block"><p class="custom-block-title">WARNING</p><p>This is a dangerous warning</p></div><details class="details custom-block"><p>This is a details block, which does not work in Internet Explorer or Edge.</p></details><h3 id="custom-title" tabindex="-1">\u81EA\u5B9A\u4E49\u6807\u9898 <a class="header-anchor" href="#custom-title" aria-hidden="true">#</a></h3><p><strong>\u8F93\u5165</strong></p><div class="language-md"><pre><code>::: danger STOP
Danger zone, do not proceed
:::

::: details Click me to view the code

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">js</span>
<span class="token code-block language-js">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Hello, VitePress!&#39;</span><span class="token punctuation">)</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre></div><p><strong>\u8F93\u51FA</strong></p><div class="danger custom-block"><p class="custom-block-title">STOP</p><p>Danger zone, do not proceed</p></div><details class="details custom-block"><summary>Click me to view the code</summary><div class="language-js"><pre><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Hello, VitePress!&#39;</span><span class="token punctuation">)</span>
</code></pre></div></details><h2 id="syntax-highlighting-in-code-blocks" tabindex="-1">\u4EE3\u7801\u5757\u4E2D\u7684\u8BED\u6CD5\u9AD8\u4EAE\u663E\u793A <a class="header-anchor" href="#syntax-highlighting-in-code-blocks" aria-hidden="true">#</a></h2><p>VitePress \u4F7F\u7528 <a href="https://prismjs.com/" target="_blank" rel="noopener noreferrer">Prism</a> \u7A81\u51FA\u663E\u793A Markdown \u4EE3\u7801\u5757\u4E2D\u7684\u8BED\u8A00\u8BED\u6CD5\uFF0C\u4F7F\u7528\u5F69\u8272\u6587\u672C\u3002Prism \u652F\u6301\u591A\u79CD\u7F16\u7A0B\u8BED\u8A00\u3002\u4F60\u6240\u9700\u8981\u505A\u7684\u5C31\u662F\u5728\u4EE3\u7801\u5757\u7684\u5F00\u5934\u7684\u53CD\u52FE\u53F7\u540E\u9762\u6DFB\u52A0\u4E00\u4E2A\u6709\u6548\u7684\u8BED\u8A00\u522B\u540D\uFF1A</p><p><strong>\u8F93\u5165</strong></p><div class="language-"><pre><code>\`\`\`js
export default {
  name: &#39;MyComponent&#39;,
  // ...
}
\`\`\`
</code></pre></div><p><strong>\u8F93\u51FA</strong></p><div class="language-js"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;MyComponent&#39;</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre></div><p><strong>\u8F93\u5165</strong></p><div class="language-"><pre><code>\`\`\`html
&lt;ul&gt;
  &lt;li v-for=&quot;todo in todos&quot; :key=&quot;todo.id&quot;&gt;
    {{ todo.text }}
  &lt;/li&gt;
&lt;/ul&gt;
\`\`\`
</code></pre></div><p><strong>\u8F93\u51FA</strong></p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todo in todos<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todo.id<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ todo.text }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>Prism \u7684\u7F51\u7AD9\u4E0A\u63D0\u4F9B\u4E86 <a href="https://prismjs.com/#languages-list" target="_blank" rel="noopener noreferrer">\u6709\u6548\u8BED\u8A00\u5217\u8868</a>\u3002</p><h2 id="line-highlighting-in-code-blocks" tabindex="-1">\u4EE3\u7801\u5757\u4E2D\u7684\u884C\u9AD8\u4EAE\u663E\u793A <a class="header-anchor" href="#line-highlighting-in-code-blocks" aria-hidden="true">#</a></h2><p><strong>\u8F93\u5165</strong></p><div class="language-"><pre><code>\`\`\`js{4}
export default {
  data () {
    return {
      msg: &#39;Highlighted!&#39;
    }
  }
}
\`\`\`
</code></pre></div><p><strong>\u8F93\u51FA</strong></p><div class="language-js"><div class="highlight-lines"><br><br><br><div class="highlighted">\xA0</div><br><br><br><br></div><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;Highlighted!&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u9664\u5355\u884C\u5916\uFF0C\u4F60\u8FD8\u53EF\u4EE5\u6307\u5B9A\u591A\u4E2A\u5355\u884C\uFF0C\u8303\u56F4\u6216\u540C\u65F6\u6307\u5B9A\u8FD9\u4E24\u79CD\uFF1A</p><ul><li>\u884C\u8303\u56F4\uFF1A\u4F8B\u5982 <code>{5-8}</code>, <code>{3-10}</code>, <code>{10-17}</code></li><li>\u591A\u884C\uFF1A\u4F8B\u5982 <code>{4,7,9}</code></li><li>\u884C\u8303\u56F4\u548C\u5355\u884C\uFF1A\u4F8B\u5982 <code>{4,7-13,16,23-27,40}</code></li></ul><p><strong>\u8F93\u5165</strong></p><div class="language-"><pre><code>\`\`\`js{1,4,6-7}
export default { // Highlighted
  data () {
    return {
      msg: \`Highlighted!
      This line isn&#39;t highlighted,
      but this and the next 2 are.\`,
      motd: &#39;VitePress is awesome&#39;,
      lorem: &#39;ipsum&#39;,
    }
  }
}
\`\`\`
</code></pre></div><p><strong>\u8F93\u51FA</strong></p><div class="language-js"><div class="highlight-lines"><div class="highlighted">\xA0</div><br><br><div class="highlighted">\xA0</div><br><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><br><br><br><br></div><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span> <span class="token comment">// Highlighted</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Highlighted!
      This line isn&#39;t highlighted,
      but this and the next 2 are.</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      <span class="token literal-property property">motd</span><span class="token operator">:</span> <span class="token string">&#39;VitePress is awesome&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lorem</span><span class="token operator">:</span> <span class="token string">&#39;ipsum&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="line-numbers" tabindex="-1">\u884C\u53F7 <a class="header-anchor" href="#line-numbers" aria-hidden="true">#</a></h2><p>\u4F60\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E\u542F\u7528\u6BCF\u4E2A\u4EE3\u7801\u5757\u7684\u884C\u53F7\uFF1A</p><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">markdown</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">lineNumbers</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>Demo:</li></ul><picture><source srcset="`+l+'" media="(max-width: 719px)"><img class="line-numbers-mobile-snap" src="'+n+'" alt="Image"></picture><picture><source srcset="'+i+'" media="(min-width: 720px)"><img class="line-numbers-desktop-snap" src="'+s+`" alt="Image"></picture><h2 id="import-code-snippets" tabindex="-1">\u5BFC\u5165\u4EE3\u7801\u7247\u6BB5 <a class="header-anchor" href="#import-code-snippets" aria-hidden="true">#</a></h2><p>\u4F60\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u8BED\u6CD5\u4ECE\u73B0\u6709\u6587\u4EF6\u4E2D\u5BFC\u5165\u4EE3\u7801\u7247\u6BB5\uFF1A</p><div class="language-md"><pre><code>&lt;&lt;&lt; @/filepath
</code></pre></div><p>\u5B83\u8FD8\u652F\u6301 <a href="#line-highlighting-in-code-blocks">\u884C\u9AD8\u4EAE\u663E\u793A</a>\uFF1A</p><div class="language-md"><pre><code>&lt;&lt;&lt; @/filepath{highlightLines}
</code></pre></div><p><strong>\u8F93\u5165</strong></p><div class="language-md"><pre><code>&lt;&lt;&lt; @/snippets/snippet.js{2}
</code></pre></div><p><strong>\u4EE3\u7801\u6587\u4EF6</strong></p><div class="language-js"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
  <span class="token comment">// ..</span>\r
<span class="token punctuation">}</span>\r
</code></pre></div><p><strong>\u8F93\u51FA</strong></p><div class="language-js"><div class="highlight-lines"><br><div class="highlighted">\xA0</div><br><br></div><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
  <span class="token comment">// ..</span>\r
<span class="token punctuation">}</span>\r
</code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><code>@</code> \u7684\u503C\u5BF9\u5E94\u4E8E <code>process.cwd()</code>\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5B83\u662F VitePress \u9879\u76EE\u7684\u6839\u76EE\u5F55\uFF0C\u9664\u975E\u914D\u7F6E\u4E86 <code>srcDir</code>\u3002</p></div><p>\u4F60\u8FD8\u53EF\u4EE5\u4F7F\u7528 <a href="https://code.visualstudio.com/docs/editor/codebasics#_folding" target="_blank" rel="noopener noreferrer">VS Code region</a> \u6765\u4EC5\u5305\u62EC\u4EE3\u7801\u6587\u4EF6\u7684\u76F8\u5E94\u90E8\u5206\u3002\u4F60\u53EF\u4EE5\u5728\u6587\u4EF6\u8DEF\u5F84\u540E\u7684 <code>#</code> \u540E\u9762\u63D0\u4F9B\u81EA\u5B9A\u4E49\u7684\u8303\u56F4\u540D\u79F0(\u9ED8\u8BA4\u4E3A <code>snippet</code>)\uFF1A</p><p><strong>\u8F93\u5165</strong></p><div class="language-md"><pre><code>&lt;&lt;&lt; @/snippets/snippet-with-region.js{1}
</code></pre></div><p><strong>\u4EE3\u7801\u6587\u4EF6</strong></p><div class="language-js"><pre><code><span class="token comment">// #region snippet</span>\r
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
  <span class="token comment">// ..</span>\r
<span class="token punctuation">}</span>\r
<span class="token comment">// #endregion snippet</span>\r
\r
<span class="token keyword">export</span> <span class="token keyword">default</span> foo\r
</code></pre></div><p><strong>\u8F93\u51FA</strong></p><div class="language-js"><div class="highlight-lines"><div class="highlighted">\xA0</div><br><br></div><pre><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ..</span>
<span class="token punctuation">}</span></code></pre></div><h2 id="advanced-configuration" tabindex="-1">\u8FDB\u9636\u914D\u7F6E <a class="header-anchor" href="#advanced-configuration" aria-hidden="true">#</a></h2><p>VitePress \u4F7F\u7528 <a href="https://github.com/markdown-it/markdown-it" target="_blank" rel="noopener noreferrer">markdown-it</a> \u4F5C\u4E3A Markdown \u6E32\u67D3\u5668\u3002\u4E0A\u9762\u7684\u8BB8\u591A\u6269\u5C55\u90FD\u662F\u901A\u8FC7\u81EA\u5B9A\u4E49\u63D2\u4EF6\u5B9E\u73B0\u7684\u3002\u4F60\u53EF\u4EE5\u901A\u8FC7 <code>.vitepress/config.js</code> \u4E2D\u7684 <code>markdown</code> \u9009\u9879\u8FDB\u4E00\u6B65\u81EA\u5B9A\u4E49 <code>markdown-it</code> \u5B9E\u4F8B\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">const</span> anchor <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;markdown-it-anchor&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">markdown</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// options for markdown-it-anchor</span>
    <span class="token comment">// https://github.com/valeriangalliat/markdown-it-anchor#permalinks</span>
    <span class="token literal-property property">anchor</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">permalink</span><span class="token operator">:</span> anchor<span class="token punctuation">.</span>permalink<span class="token punctuation">.</span><span class="token function">headerLink</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// options for markdown-it-table-of-contents</span>
    <span class="token literal-property property">toc</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">includeLevel</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token function-variable function">config</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">md</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// use more markdown-it plugins!</span>
      md<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;markdown-it-xxx&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,104),c=[r];function d(u,k,h,g,m,f){return e(),t("div",null,c)}var x=a(p,[["render",d]]);export{b as __pageData,x as default};
