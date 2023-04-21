import{_ as s,o as e,c as o,O as a}from"./chunks/framework.52de2457.js";const D=JSON.parse('{"title":"useFetchAuth","description":"","frontmatter":{},"headers":[],"relativePath":"composables/use-fetch-auth.md"}'),l={name:"composables/use-fetch-auth.md"},n=a(`<h1 id="usefetchauth" tabindex="-1">useFetchAuth <a class="header-anchor" href="#usefetchauth" aria-label="Permalink to &quot;useFetchAuth&quot;">​</a></h1><p>Функция для работы с эдпоинтами с авторизацией.</p><p>Решает 3 задачи:</p><ul><li>Проксит <code>cookie</code> клиента в серверные запросы при <code>SSR</code></li><li>Проксит <code>cookie</code> из серверных запросов на клиент</li><li>Добавляет заголовок <code>X-CSRFToken</code> со значением из <code>cookie</code> <code>csrftoken</code></li></ul><div class="info custom-block"><p class="custom-block-title">Что нужно для правильной работы авторизации</p><ul><li>Нужно выставить значение <code>csrftoken</code> в <code>cookie</code></li><li>В <code>cookie</code> нужно передавать <code>maxAge</code>, так как поле <code>expires</code> удаляется</li></ul></div><h2 id="параметры" tabindex="-1">Параметры <a class="header-anchor" href="#параметры" aria-label="Permalink to &quot;Параметры&quot;">​</a></h2><ul><li><code>url</code> - <code>URL</code> для запроса</li><li><code>event</code> - событие запроса <code>h3</code></li><li><code>options</code> - параметры запроса</li></ul><h2 id="возвращаемыи-объект" tabindex="-1">Возвращаемый объект <a class="header-anchor" href="#возвращаемыи-объект" aria-label="Permalink to &quot;Возвращаемый объект&quot;">​</a></h2><p>Функция возвращает объект с двумя параметрами:</p><ul><li><code>data</code> - данные, полученные от API</li><li><code>error</code> - ошибка, возникшая при запросе</li></ul><h2 id="использование" tabindex="-1">Использование <a class="header-anchor" href="#использование" aria-label="Permalink to &quot;Использование&quot;">​</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> event </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useRequestEvent</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> data </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useFetchAuth</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/auth/csrf/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> event</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">baseURL</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useRuntimeConfig</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">public</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">apiBase</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span></code></pre></div>`,12),c=[n];function t(p,r,i,d,u,A){return e(),o("div",null,c)}const C=s(l,[["render",t]]);export{D as __pageData,C as default};
