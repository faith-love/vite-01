import{_ as s,c as n,o as a,a as t}from"./app.233e65ae.js";const g='{"title":"\u4E3B\u9898","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4F7F\u7528\u81EA\u5B9A\u4E49\u4E3B\u9898","slug":"using-a-custom-theme"},{"level":2,"title":"\u6269\u5C55\u9ED8\u8BA4\u4E3B\u9898","slug":"extending-the-default-theme"},{"level":3,"title":"\u6CE8\u518C\u5168\u5C40\u7EC4\u4EF6","slug":"registering-global-components"},{"level":3,"title":"\u81EA\u5B9A\u4E49 CSS","slug":"customizing-css"},{"level":3,"title":"\u5E03\u5C40\u63D2\u69FD","slug":"layout-slots"}],"relativePath":"guide/theming.md"}',e={},p=t(`<h1 id="theming" tabindex="-1">\u4E3B\u9898 <a class="header-anchor" href="#theming" aria-hidden="true">#</a></h1><h2 id="using-a-custom-theme" tabindex="-1">\u4F7F\u7528\u81EA\u5B9A\u4E49\u4E3B\u9898 <a class="header-anchor" href="#using-a-custom-theme" aria-hidden="true">#</a></h2><p>\u4F60\u53EF\u4EE5\u901A\u8FC7\u6DFB\u52A0 <code>.vitepress/theme/index.js</code> \u6587\u4EF6\uFF08\u4E3B\u9898\u5165\u53E3\u6587\u4EF6\uFF09\u6765\u542F\u7528\u81EA\u5B9A\u4E49\u4E3B\u9898\u3002</p><div class="language-bash"><pre><code><span class="token builtin class-name">.</span>
\u251C\u2500 docs
\u2502  \u251C\u2500 .vitepress
\u2502  \u2502  \u251C\u2500 theme
\u2502  \u2502  \u2502  \u2514\u2500 index.js
\u2502  \u2502  \u2514\u2500 config.js
\u2502  \u2514\u2500 index.md
\u2514\u2500 package.json
</code></pre></div><p>VitePress \u81EA\u5B9A\u4E49\u4E3B\u9898\u53EA\u662F\u4E00\u4E2A\u5305\u542B\u4E09\u4E2A\u5C5E\u6027\u7684\u5BF9\u8C61\uFF0C\u5B9A\u4E49\u5982\u4E0B\uFF1A</p><div class="language-ts"><pre><code><span class="token keyword">interface</span> <span class="token class-name">Theme</span> <span class="token punctuation">{</span>
  Layout<span class="token operator">:</span> Component <span class="token comment">// Vue 3 component</span>
  NotFound<span class="token operator">?</span><span class="token operator">:</span> Component
  enhanceApp<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>ctx<span class="token operator">:</span> EnhanceAppContext<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">EnhanceAppContext</span> <span class="token punctuation">{</span>
  app<span class="token operator">:</span> App <span class="token comment">// Vue 3 app instance</span>
  router<span class="token operator">:</span> Router <span class="token comment">// VitePress router instance</span>
  siteData<span class="token operator">:</span> Ref<span class="token operator">&lt;</span>SiteData<span class="token operator">&gt;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4E3B\u9898\u5165\u53E3\u6587\u4EF6\u5E94\u8BE5\u5C06\u4E3B\u9898\u4F5C\u4E3A\u5B83\u7684\u9ED8\u8BA4\u5BFC\u51FA\uFF1A</p><div class="language-js"><pre><code><span class="token comment">// .vitepress/theme/index.js</span>
<span class="token keyword">import</span> Layout <span class="token keyword">from</span> <span class="token string">&#39;./Layout.vue&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  Layout<span class="token punctuation">,</span>
  <span class="token function-variable function">NotFound</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token string">&#39;custom 404&#39;</span><span class="token punctuation">,</span> <span class="token comment">// &lt;- this is a Vue 3 functional component</span>
  <span class="token function">enhanceApp</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> app<span class="token punctuation">,</span> router<span class="token punctuation">,</span> siteData <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// app is the Vue 3 app instance from \`createApp()\`. router is VitePress&#39;</span>
    <span class="token comment">// custom router. \`siteData\`\` is a \`ref\`\` of current site-level metadata.</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>...\u5176\u4E2D\u7684 <code>Layout</code> \u7EC4\u4EF6\u53EF\u4EE5\u50CF\u8FD9\u6837\uFF1A</p><div class="language-vue"><pre><code><span class="token comment">&lt;!-- .vitepress/theme/Layout.vue --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Custom Layout!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Content</span> <span class="token punctuation">/&gt;</span></span><span class="token comment">&lt;!-- this is where markdown content will be rendered --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u9ED8\u8BA4\u5BFC\u51FA\u662F\u5B9A\u5236\u4E3B\u9898\u7684\u552F\u4E00\u7EA6\u5B9A\u3002\u5728\u4F60\u7684\u81EA\u5B9A\u4E49\u4E3B\u9898\u4E2D\uFF0C\u5B83\u5C31\u50CF\u4E00\u4E2A\u6B63\u5E38\u7684 Vite + Vue 3 \u5E94\u7528\u7A0B\u5E8F\u3002\u8BF7\u6CE8\u610F\uFF0C\u4E3B\u9898\u4E5F\u9700\u8981\u662F <a href="/guide/using-vue.html#browser-api-access-restrictions">SSR \u517C\u5BB9</a>\u3002</p><p>\u8981\u4F7F\u7528\u4E3B\u9898\uFF0C\u53EA\u9700\u5728\u5305\u5165\u53E3\u5BFC\u51FA\u5BF9\u8C61\u3002\u8981\u4F7F\u7528\u5916\u90E8\u4E3B\u9898\uFF0C\u8BF7\u4ECE\u81EA\u5B9A\u4E49\u4E3B\u9898\u5165\u53E3\u5BFC\u5165\u518D\u91CD\u65B0\u5BFC\u51FA\u5B83\uFF1A</p><div class="language-js"><pre><code><span class="token comment">// .vitepress/theme/index.js</span>
<span class="token keyword">import</span> Theme <span class="token keyword">from</span> <span class="token string">&#39;awesome-vitepress-theme&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> Theme
</code></pre></div><h2 id="extending-the-default-theme" tabindex="-1">\u6269\u5C55\u9ED8\u8BA4\u4E3B\u9898 <a class="header-anchor" href="#extending-the-default-theme" aria-hidden="true">#</a></h2><p>\u5982\u679C\u4F60\u60F3\u6269\u5C55\u548C\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u4E3B\u9898\uFF0C\u4F60\u53EF\u4EE5\u4ECE <code>vitepress/theme</code> \u5BFC\u5165\u5B83\uFF0C\u5E76\u5728\u81EA\u5B9A\u4E49\u4E3B\u9898\u5165\u53E3\u4E2D\u6269\u5C55\u5B83\u3002\u4E0B\u9762\u662F\u4E00\u4E9B\u5E38\u89C1\u7684\u81EA\u5B9A\u4E49\u7684\u4F8B\u5B50\uFF1A</p><h3 id="registering-global-components" tabindex="-1">\u6CE8\u518C\u5168\u5C40\u7EC4\u4EF6 <a class="header-anchor" href="#registering-global-components" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token comment">// .vitepress/theme/index.js</span>
<span class="token keyword">import</span> DefaultTheme <span class="token keyword">from</span> <span class="token string">&#39;vitepress/theme&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>DefaultTheme<span class="token punctuation">,</span>
  <span class="token function">enhanceApp</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> app <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// register global components</span>
    app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;MyGlobalComponent&#39;</span> <span class="token comment">/* ... */</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u7531\u4E8E\u6211\u4EEC\u6B63\u5728\u4F7F\u7528 Vite\uFF0C\u4F60\u8FD8\u53EF\u4EE5\u5229\u7528 Vite \u7684 <a href="https://cn.vitejs.dev/guide/features.html#glob-import" target="_blank" rel="noopener noreferrer">glob import \u7279\u6027</a> \u6765\u81EA\u52A8\u6CE8\u518C\u7EC4\u4EF6\u76EE\u5F55\u3002</p><h3 id="customizing-css" tabindex="-1">\u81EA\u5B9A\u4E49 CSS <a class="header-anchor" href="#customizing-css" aria-hidden="true">#</a></h3><p>\u9ED8\u8BA4\u4E3B\u9898 CSS \u662F\u53EF\u4EE5\u901A\u8FC7\u8986\u76D6\u6839\u7EA7 CSS \u53D8\u91CF\u6765\u5B9A\u5236\u7684\uFF1A</p><div class="language-js"><pre><code><span class="token comment">// .vitepress/theme/index.js</span>
<span class="token keyword">import</span> DefaultTheme <span class="token keyword">from</span> <span class="token string">&#39;vitepress/theme&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;./custom.css&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> DefaultTheme
</code></pre></div><div class="language-css"><pre><code><span class="token comment">/* .vitepress/theme/custom.css */</span>
<span class="token selector">:root</span> <span class="token punctuation">{</span>
  <span class="token property">--c-brand</span><span class="token punctuation">:</span> #646cff<span class="token punctuation">;</span>
  <span class="token property">--c-brand-light</span><span class="token punctuation">:</span> #747bff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u53C2\u89C1\u53EF\u4EE5\u88AB\u91CD\u5199\u8986\u76D6\u7684 <a href="https://github.com/vuejs/vitepress/blob/master/src/client/theme-default/styles/vars.css" target="_blank" rel="noopener noreferrer">\u9ED8\u8BA4\u4E3B\u9898 CSS \u53D8\u91CF</a>\u3002</p><h3 id="layout-slots" tabindex="-1">\u5E03\u5C40\u63D2\u69FD <a class="header-anchor" href="#layout-slots" aria-hidden="true">#</a></h3><p>\u9ED8\u8BA4\u4E3B\u9898\u7684 <code>&lt;Layout/&gt;</code> \u7EC4\u4EF6\u6709\u51E0\u4E2A\u63D2\u69FD\uFF0C\u53EF\u4EE5\u7528\u6765\u5728\u9875\u9762\u7684\u7279\u5B9A\u4F4D\u7F6E\u6CE8\u5165\u5185\u5BB9\u3002\u4E0B\u9762\u662F\u4E00\u4E2A\u5C06\u7EC4\u4EF6\u6CE8\u5165\u5230\u4FA7\u8FB9\u680F\u9876\u90E8\u7684\u4F8B\u5B50\uFF1A</p><div class="language-js"><pre><code><span class="token comment">// .vitepress/theme/index.js</span>
<span class="token keyword">import</span> DefaultTheme <span class="token keyword">from</span> <span class="token string">&#39;vitepress/theme&#39;</span>
<span class="token keyword">import</span> MyLayout <span class="token keyword">from</span> <span class="token string">&#39;./MyLayout.vue&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>DefaultTheme<span class="token punctuation">,</span>
  <span class="token comment">// override the Layout with a wrapper component that injects the slots</span>
  <span class="token literal-property property">Layout</span><span class="token operator">:</span> MyLayout
<span class="token punctuation">}</span>
</code></pre></div><div class="language-vue"><pre><code><span class="token comment">&lt;!--.vitepress/theme/MyLayout.vue--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> DefaultTheme <span class="token keyword">from</span> <span class="token string">&#39;vitepress/theme&#39;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> Layout <span class="token punctuation">}</span> <span class="token operator">=</span> DefaultTheme
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#sidebar-top</span><span class="token punctuation">&gt;</span></span> My custom sidebar top content <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u9ED8\u8BA4\u4E3B\u9898\u5E03\u5C40\u4E2D\u53EF\u7528\u7684\u63D2\u69FD\u7684\u5B8C\u6574\u5217\u8868\uFF1A</p><ul><li><code>navbar-search</code></li><li><code>sidebar-top</code></li><li><code>sidebar-bottom</code></li><li><code>page-top-ads</code></li><li><code>page-top</code></li><li><code>page-bottom</code></li><li><code>page-bottom-ads</code></li><li>\u53EA\u6709\u5F53 <code>home: true</code> \u901A\u8FC7 frontmatter \u542F\u7528\u65F6\u53EF\u7528: <ul><li><code>home-hero</code></li><li><code>home-features</code></li><li><code>home-footer</code></li></ul></li></ul>`,29),o=[p];function c(l,r,i,u,k,d){return a(),n("div",null,o)}var h=s(e,[["render",c]]);export{g as __pageData,h as default};
