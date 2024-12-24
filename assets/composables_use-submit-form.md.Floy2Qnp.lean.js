import{_ as i,c as a,a0 as t,o as n}from"./chunks/framework.Ce9r4BRj.js";const r=JSON.parse('{"title":"useSubmitForm","description":"","frontmatter":{},"headers":[],"relativePath":"composables/use-submit-form.md","filePath":"composables/use-submit-form.md"}'),l={name:"composables/use-submit-form.md"};function e(h,s,k,p,d,E){return n(),a("div",null,s[0]||(s[0]=[t(`<h1 id="usesubmitform" tabindex="-1">useSubmitForm <a class="header-anchor" href="#usesubmitform" aria-label="Permalink to &quot;useSubmitForm&quot;">​</a></h1><p>Функция, которая упрощает отправку данных с формы.</p><p>Функция используется как <code>useFetch</code>, но возвращает методы для работы с отправкой формы.</p><h2 id="возвращаемые-методы" tabindex="-1">Возвращаемые методы <a class="header-anchor" href="#возвращаемые-методы" aria-label="Permalink to &quot;Возвращаемые методы&quot;">​</a></h2><ul><li><code>isLoading</code> - Находится ли форма в состоянии загрузки (по умолчанию false).</li><li><code>isSent</code> - Отправлена ли форма (по умолчанию false).</li><li><code>sendRequest</code> - функция для отправки формы.</li></ul><div class="info custom-block"><p class="custom-block-title">INFO</p><ul><li>На запрос, состояние загрузки (переменная <code>isLoading</code>) устанавливается в <code>true</code>.</li><li>Если на попытку запроса, либо при попытке получения ответа произошла ошибка, то состояние загрузки меняется в <code>false</code> и пользователю выводится сообщение об ошибке через оповещение.</li><li>Если пришёл ответ, то состояние загрузки меняется в <code>false</code>, состояние отправки (переменная <code>isSent</code>) на три секунды устанавливается в <code>true</code>, после чего возвращается в обратно в <code>false</code>. Все заполненные данные в форме очищаются спустя три секунды.</li></ul></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><ul><li>Функция <code>sendRequest</code> обязательно должна передаваться как обработчик события <code>submit</code> у формы, которое вызывается у формы, когда произошёл клик по <code>button</code> либо <code>input</code>, тип которого равняется <code>submit</code>.</li><li>У всех <code>input</code> внутри формы должен обязательно присутствовать аттрибут <code>name</code>. Название аттрибута будет использовано в качестве ключа передаваемого объекта.</li></ul></div><h2 id="параметры" tabindex="-1">Параметры <a class="header-anchor" href="#параметры" aria-label="Permalink to &quot;Параметры&quot;">​</a></h2><ul><li><code>url</code> - <code>URL</code> для запроса</li><li><code>options</code> - параметры запроса. Состоит из параметров <code>useFetch</code> и дополнительных параметров.</li></ul><h3 id="дополнительные-параметры-options" tabindex="-1">Дополнительные параметры <code>options</code> <a class="header-anchor" href="#дополнительные-параметры-options" aria-label="Permalink to &quot;Дополнительные параметры \`options\`&quot;">​</a></h3><ul><li><code>auth</code> - использовать ли авторизацию.</li><li><code>isFormData</code> - Является ли тип контента <code>multipart/form-data</code> (по умолчанию форма отправляется в формате <code>JSON</code>).</li><li><code>onRequest</code> - Функция, вызываемая при запросе.</li><li><code>onResponse</code> - Функция, вызываемая при успешно полученном ответе спустя три секунды.</li><li><code>submitFormBody</code> - Объект, который будет передан в <code>body</code> формы.</li></ul><h2 id="использование" tabindex="-1">Использование <a class="header-anchor" href="#использование" aria-label="Permalink to &quot;Использование&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">sendRequest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">isLoading</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">isSent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useSubmitForm</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/mail/faq/&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  baseURL: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">useRuntimeConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().public.apiBase</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><h3 id="с-дополнительными-параметрами" tabindex="-1">С дополнительными параметрами <a class="header-anchor" href="#с-дополнительными-параметрами" aria-label="Permalink to &quot;С дополнительными параметрами&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">sendRequest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">isLoading</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">isSent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useSubmitForm</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;faq&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  auth: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  body: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    requestUrl: location.href,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  isFormData: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  onResponse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // do something on response</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  onRequest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // do something on request</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><h3 id="пример-формы" tabindex="-1">Пример формы <a class="header-anchor" href="#пример-формы" aria-label="Permalink to &quot;Пример формы&quot;">​</a></h3><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">form</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @submit.prevent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sendRequest&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;phone&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;submit&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">span</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;isLoading&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Выполняется отправка формы&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">span</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">span</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-else-if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;isSent&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Форма успешно отправлена&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">span</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">span</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Отправить форму&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">span</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">form</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>`,17)]))}const c=i(l,[["render",e]]);export{r as __pageData,c as default};