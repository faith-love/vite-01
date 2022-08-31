import{_ as n,c as s,o as a,a as e}from"./app.233e65ae.js";const g='{"title":"\u914D\u7F6E","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6982\u8FF0","slug":"overview"},{"level":2,"title":"\u914D\u7F6E\u667A\u80FD\u63D0\u793A","slug":"config-intellisense"},{"level":2,"title":"\u7C7B\u578B\u5316\u4E3B\u9898\u914D\u7F6E","slug":"typed-theme-config"}],"relativePath":"guide/configuration.md"}',o={},t=e(`<h1 id="configuration" tabindex="-1">\u914D\u7F6E <a class="header-anchor" href="#configuration" aria-hidden="true">#</a></h1><h2 id="overview" tabindex="-1">\u6982\u8FF0 <a class="header-anchor" href="#overview" aria-hidden="true">#</a></h2><p>\u5728\u6CA1\u6709\u4EFB\u4F55\u914D\u7F6E\u7684\u60C5\u51B5\u4E0B\uFF0C\u9875\u9762\u975E\u5E38\u7B80\u7EA6\uFF0C\u800C\u4E14\u7528\u6237\u65E0\u6CD5\u5728\u7AD9\u70B9\u4E2D\u5BFC\u822A\u3002\u4E3A\u4E86\u81EA\u5B9A\u4E49\u4F60\u7684\u7AD9\u70B9\uFF0C\u9996\u5148\u5728\u4F60\u7684 docs \u76EE\u5F55\u4E2D\u521B\u5EFA\u4E00\u4E2A <code>.vitepress</code> \u76EE\u5F55\u3002\u8FD9\u662F\u6240\u6709 VitePress \u4E13\u7528\u6587\u4EF6\u7684\u5B58\u653E\u4F4D\u7F6E\u3002\u4F60\u7684\u9879\u76EE\u7ED3\u6784\u53EF\u80FD\u662F\u8FD9\u6837\u7684\uFF1A</p><div class="language-bash"><pre><code><span class="token builtin class-name">.</span>
\u251C\u2500 docs
\u2502  \u251C\u2500 .vitepress
\u2502  \u2502  \u2514\u2500 config.js
\u2502  \u2514\u2500 index.md
\u2514\u2500 package.json
</code></pre></div><p>\u914D\u7F6E VitePress \u7AD9\u70B9\u7684\u57FA\u672C\u6587\u4EF6\u662F <code>.vitepress/config.js</code>\uFF0C\u5B83\u5E94\u8BE5\u5BFC\u51FA\u4E00\u4E2A JavaScript \u5BF9\u8C61\uFF1A</p><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Hello VitePress&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&#39;Just playing around.&#39;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u67E5\u770B <a href="/config/basics.html">\u914D\u7F6E\u53C2\u8003</a> \u83B7\u5F97\u5B8C\u6574\u7684\u914D\u7F6E\u5217\u8868\u3002</p><h2 id="config-intellisense" tabindex="-1">\u914D\u7F6E\u667A\u80FD\u63D0\u793A <a class="header-anchor" href="#config-intellisense" aria-hidden="true">#</a></h2><p>\u7531\u4E8E VitePress \u9644\u5E26 TypeScript \u7C7B\u578B\uFF0C\u4F60\u53EF\u4EE5\u5229\u7528\u4F60\u7684 IDE \u7684\u667A\u80FD\u63D0\u793A\u4E0E jsdoc \u7C7B\u578B\u63D0\u793A\uFF1A</p><div class="language-js"><pre><code><span class="token comment">/**
 * @type {import(&#39;vitepress&#39;).UserConfig}
 */</span>
<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config
</code></pre></div><p>\u53E6\u5916\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u4F7F\u7528 <code>defineConfig</code> \u8F85\u52A9\u51FD\u6570\uFF0C\u5B83\u53EF\u4EE5\u5728\u4E0D\u9700\u8981 jsdoc \u6CE8\u91CA\u7684\u60C5\u51B5\u4E0B\u63D0\u4F9B\u667A\u80FD\u5206\u6790\u3002</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vitepress&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>VitePress \u4E5F\u76F4\u63A5\u652F\u6301 TS \u914D\u7F6E\u6587\u4EF6\u3002\u4F60\u4E5F\u53EF\u4EE5\u4F7F\u7528 <code>.vitepress/config.ts</code> \u4E0E <code>defineConfig</code> \u8F85\u52A9\u51FD\u6570\u3002</p><h2 id="typed-theme-config" tabindex="-1">\u7C7B\u578B\u5316\u4E3B\u9898\u914D\u7F6E <a class="header-anchor" href="#typed-theme-config" aria-hidden="true">#</a></h2><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C<code>defineConfig</code> \u8F85\u52A9\u51FD\u6570\u5229\u7528\u9ED8\u8BA4\u4E3B\u9898\u7684\u914D\u7F6E\u7C7B\u578B\u3002</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vitepress&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// Type is \`DefaultTheme.Config\`</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u5982\u679C\u4F60\u4F7F\u7528\u81EA\u5B9A\u4E49\u4E3B\u9898\uFF0C\u5E76\u5E0C\u671B\u5BF9\u4E3B\u9898\u914D\u7F6E\u8FDB\u884C\u7C7B\u578B\u68C0\u67E5\uFF0C\u4F60\u9700\u8981\u4F7F\u7528 <code>defineConfigWithTheme</code> \u6765\u4EE3\u66FF <code>defineConfig</code>\uFF0C\u5E76\u901A\u8FC7\u4E00\u4E2A\u6CDB\u578B\u53C2\u6570\u4F20\u9012\u81EA\u5B9A\u4E49\u4E3B\u9898\u7684\u914D\u7F6E\u7C7B\u578B\u3002</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfigWithTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vitepress&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ThemeConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;your-theme&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> defineConfigWithTheme<span class="token operator">&lt;</span>ThemeConfig<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// Type is \`ThemeConfig\`</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div>`,18),p=[t];function c(i,r,l,d,u,k){return a(),s("div",null,p)}var h=n(o,[["render",c]]);export{g as __pageData,h as default};
