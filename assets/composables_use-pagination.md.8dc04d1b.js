import{_ as s,o as a,c as n,S as l}from"./chunks/framework.2d20e303.js";const A=JSON.parse('{"title":"usePagination","description":"","frontmatter":{},"headers":[],"relativePath":"composables/use-pagination.md","filePath":"composables/use-pagination.md"}'),o={name:"composables/use-pagination.md"},p=l(`<h1 id="usepagination" tabindex="-1">usePagination <a class="header-anchor" href="#usepagination" aria-label="Permalink to &quot;usePagination&quot;">​</a></h1><p>Функция для работы с пагинацией.</p><div class="tip custom-block"><p class="custom-block-title">Ответ от API должен приходить в следующем формате</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Pagination</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">TResponse</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/** Количество результатов */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">count</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/** Следующая страница */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">next</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">null</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/** Предыдущая страница */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">previous</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">null</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/** Результаты запроса */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">results</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">TResponse</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div></div><h2 id="параметры" tabindex="-1">Параметры <a class="header-anchor" href="#параметры" aria-label="Permalink to &quot;Параметры&quot;">​</a></h2><ul><li><code>url</code> - <code>URL</code> для запроса</li><li><code>options</code> - параметры запроса. Присутствует параметр <code>auth</code>, который позволяет выполнять запросы используя <code>useFetchAuth</code>.</li></ul><h2 id="возвращаемыи-объект" tabindex="-1">Возвращаемый объект <a class="header-anchor" href="#возвращаемыи-объект" aria-label="Permalink to &quot;Возвращаемый объект&quot;">​</a></h2><p>Функция возвращает объект с методами для работы с пагинацией.</p><ul><li><code>increasePage</code> - функция для увеличения номера страницы.</li><li><code>isPageLast</code> - возвращает <code>true</code> если текущая страница последняя.</li><li><code>results</code> - массив с результатами запроса.</li><li><code>refresh</code> - функция для обновления запроса.</li></ul><h2 id="использование" tabindex="-1">Использование <a class="header-anchor" href="#использование" aria-label="Permalink to &quot;Использование&quot;">​</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  increasePage</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  isPageLast</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">results</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> doctors</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">usePagination</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">DoctorCard</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/doctors/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">baseURL</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useRuntimeConfig</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">public</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">apiBase</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span></code></pre></div>`,10),e=[p];function t(c,r,i,y,D,C){return a(),n("div",null,e)}const d=s(o,[["render",t]]);export{A as __pageData,d as default};
