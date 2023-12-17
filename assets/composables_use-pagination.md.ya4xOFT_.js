import{_ as s,o as i,c as a,R as n}from"./chunks/framework.ZuibZzP_.js";const E=JSON.parse('{"title":"usePagination","description":"","frontmatter":{},"headers":[],"relativePath":"composables/use-pagination.md","filePath":"composables/use-pagination.md"}'),t={name:"composables/use-pagination.md"},e=n(`<h1 id="usepagination" tabindex="-1">usePagination <a class="header-anchor" href="#usepagination" aria-label="Permalink to &quot;usePagination&quot;">​</a></h1><p>Функция для работы с пагинацией.</p><div class="tip custom-block"><p class="custom-block-title">Ответ от API должен приходить в следующем формате</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Pagination</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">TResponse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /** Количество результатов */</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  count</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /** Следующая страница */</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  next</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /** Предыдущая страница */</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  previous</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /** Результаты запроса */</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  results</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TResponse</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div><h2 id="параметры" tabindex="-1">Параметры <a class="header-anchor" href="#параметры" aria-label="Permalink to &quot;Параметры&quot;">​</a></h2><ul><li><code>url</code> - <code>URL</code> для запроса</li><li><code>options</code> - параметры запроса. Присутствует параметр <code>auth</code>, который позволяет выполнять запросы используя <code>useFetchAuth</code>.</li></ul><h2 id="возвращаемыи-объект" tabindex="-1">Возвращаемый объект <a class="header-anchor" href="#возвращаемыи-объект" aria-label="Permalink to &quot;Возвращаемый объект&quot;">​</a></h2><p>Функция возвращает объект с методами для работы с пагинацией.</p><ul><li><code>increasePage</code> - функция для увеличения номера страницы.</li><li><code>isPageLast</code> - возвращает <code>true</code> если текущая страница последняя.</li><li><code>results</code> - массив с результатами запроса.</li><li><code>refresh</code> - функция для обновления запроса.</li></ul><h2 id="использование" tabindex="-1">Использование <a class="header-anchor" href="#использование" aria-label="Permalink to &quot;Использование&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  increasePage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  isPageLast</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  results</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">doctors</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> usePagination</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">DoctorCard</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/doctors/&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  baseURL: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">useRuntimeConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().public.apiBase,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div>`,10),l=[e];function h(p,k,d,r,o,c){return i(),a("div",null,l)}const u=s(t,[["render",h]]);export{E as __pageData,u as default};
