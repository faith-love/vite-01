import{_ as n,c as a,o as s,a as t}from"./app.233e65ae.js";const q='{"title":"\u4E3B\u9898\u914D\u7F6E\uFF1AAlgolia Search","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u56FD\u9645\u5316\uFF08i18n\uFF09","slug":"internationalization-i18n"}],"relativePath":"config/algolia-search.md"}',p={},o=t(`<h1 id="theme-config-algolia-search" tabindex="-1">\u4E3B\u9898\u914D\u7F6E\uFF1AAlgolia Search <a class="header-anchor" href="#theme-config-algolia-search" aria-hidden="true">#</a></h1><p><code>themeConfig.algolia</code> \u9009\u9879\u5141\u8BB8\u4F60\u4F7F\u7528 <a href="https://docsearch.algolia.com/" target="_blank" rel="noopener noreferrer">Algolia DocSearch</a>\u3002\u8981\u542F\u7528\u5B83\uFF0C\u4F60\u81F3\u5C11\u9700\u8981\u63D0\u4F9B apiKey \u548C indexName\uFF1A</p><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">algolia</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">apiKey</span><span class="token operator">:</span> <span class="token string">&#39;your_api_key&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">indexName</span><span class="token operator">:</span> <span class="token string">&#39;index_name&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6709\u5173\u66F4\u591A\u9009\u9879\uFF0C\u8BF7\u67E5\u770B <a href="https://docsearch.algolia.com/docs/behavior" target="_blank" rel="noopener noreferrer">Algolia DocSearch\u2018s documentation</a>\u3002\u4F60\u53EF\u4EE5\u5C06\u4EFB\u4F55\u989D\u5916\u7684\u9009\u9879\u4E0E\u5176\u4ED6\u9009\u9879\u4E00\u8D77\u4F20\u9012\uFF0C\u6BD4\u5982 <code>searchParameters</code>\uFF1A</p><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">algolia</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">apiKey</span><span class="token operator">:</span> <span class="token string">&#39;your_api_key&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">indexName</span><span class="token operator">:</span> <span class="token string">&#39;index_name&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">searchParameters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">facetFilters</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;tags:guide,api&#39;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="internationalization-i18n" tabindex="-1">\u56FD\u9645\u5316\uFF08i18n\uFF09 <a class="header-anchor" href="#internationalization-i18n" aria-hidden="true">#</a></h2><p>\u5982\u679C\u4F60\u7684\u6587\u6863\u4E2D\u6709\u591A\u4E2A\u8BED\u8A00\u73AF\u5883\uFF0C\u5E76\u4E14\u4F60\u5728 <code>themeconfig</code> \u4E2D\u5B9A\u4E49\u4E86\u4E00\u4E2A <code>locales</code> \u5BF9\u8C61\uFF1A</p><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">locales</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// ...</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">algolia</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">apiKey</span><span class="token operator">:</span> <span class="token string">&#39;your_api_key&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">indexName</span><span class="token operator">:</span> <span class="token string">&#39;index_name&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>VitePress \u4F1A\u81EA\u52A8\u5728 <code>searchParams.facetFilter</code> \u6570\u7EC4\u4E2D\u6DFB\u52A0\u4E00\u4E2A\u8BED\u8A00\u503C\u6B63\u786E\u7684 <code>language</code> <em>facetFilter</em>\u3002\u901A\u8FC7\u6DFB\u52A0 <code>language</code> \u4F5C\u4E3A faceting_ \u7684 _custom \u5C5E\u6027 <strong>\u8BF7\u786E\u4FDD\u4F60\u7684 DocSearch \u914D\u7F6E\u4E5F\u914D\u7F6E\u6B63\u786E</strong> \uFF0C\u5E76\u6839\u636E <code>&lt;html&gt;</code> \u5143\u7D20\u7684 <code>lang</code> \u5C5E\u6027\u8FDB\u884C\u8BBE\u7F6E\u3002 \u4EE5\u4E0B\u662F DocSearch \u914D\u7F6E\u7684\u4E00\u4E2A\u7B80\u77ED\u793A\u4F8B\uFF1A</p><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;index_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;the name of your library&gt;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;start_urls&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;your deployed url&gt;&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;stop_urls&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;(?:(?&lt;!\\\\.html)(?&lt;!/))$&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;selectors&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;lvl0&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;selector&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.sidebar &gt; .sidebar-links &gt; .sidebar-link .sidebar-link-item.active&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;global&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">&quot;default_value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Documentation&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lvl1&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.content h1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lvl2&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.content h2&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lvl3&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.content h3&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lvl4&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.content h4&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lvl5&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.content h5&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lvl6&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.content p, .content li&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.content [class^=language-]&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;language&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;selector&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/html/@lang&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xpath&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;global&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">&quot;default_value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;en-US&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;custom_settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;attributesForFaceting&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;language&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4F60\u53EF\u4EE5\u67E5\u770B <a href="https://github.com/algolia/docsearch-configs/blob/master/configs/next_router_vuejs.json" target="_blank" rel="noopener noreferrer">Vue Router \u4F7F\u7528\u7684 DocSearch \u914D\u7F6E</a> \u4EE5\u83B7\u5F97\u5B8C\u6574\u7684\u793A\u4F8B\u3002</p>`,11),e=[o];function c(r,l,u,i,k,g){return s(),a("div",null,e)}var y=n(p,[["render",c]]);export{q as __pageData,y as default};
