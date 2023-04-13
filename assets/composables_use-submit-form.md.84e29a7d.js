import{_ as s,o as a,c as o,N as l}from"./chunks/framework.e0dd00f4.js";const d=JSON.parse('{"title":"useSubmitForm","description":"","frontmatter":{},"headers":[],"relativePath":"composables/use-submit-form.md"}'),n={name:"composables/use-submit-form.md"},p=l(`<h1 id="usesubmitform" tabindex="-1">useSubmitForm <a class="header-anchor" href="#usesubmitform" aria-label="Permalink to &quot;useSubmitForm&quot;">​</a></h1><p>Функция, которая упрощает отправку данных с формы.</p><p>Функция принимает 2 параметра:</p><ul><li><code>url</code> - название эндпоинта, добавляя перед названием <code>/api/mail/</code>. Параметр может быть реактивным либо обычной строкой.</li><li><code>options</code> - объект с параметрами, которые будут переданы в функцию. Является необязательным, поэтому если не нужно передавать никаких параметров, он просто не указывается.</li></ul><h2 id="возвращаемые-методы" tabindex="-1">Возвращаемые методы <a class="header-anchor" href="#возвращаемые-методы" aria-label="Permalink to &quot;Возвращаемые методы&quot;">​</a></h2><ul><li><code>isLoading</code> - Находится ли форма в состоянии загрузки (по умолчанию false).</li><li><code>isSent</code> - Отправлена ли форма (по умолчанию false).</li><li><code>sendRequest</code> - функция для отправки формы.</li></ul><div class="info custom-block"><p class="custom-block-title">INFO</p><ul><li>На запрос, состояние загрузки (переменная <code>isLoading</code>) устанавливается в <code>true</code>.</li><li>Если на попытку запроса, либо при попытке получения ответа произошла ошибка, то состояние загрузки меняется в <code>false</code> и пользователю выводится сообщение об ошибке через оповещение.</li><li>Если пришёл ответ, то состояние загрузки меняется в <code>false</code>, состояние отправки (переменная <code>isSent</code>) на три секунды устанавливается в <code>true</code>, после чего возвращается в обратно в <code>false</code>. Все заполненные данные в форме очищаются спустя три секунды.</li></ul></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><ul><li>Функция <code>sendRequest</code> обязательно должна передаваться как обработчик события <code>submit</code> у формы, которое вызывается у формы, когда произошёл клик по <code>button</code> либо <code>input</code>, тип которого равняется <code>submit</code>.</li><li>У всех <code>input</code> внутри формы должен обязательно присутствовать аттрибут <code>name</code>. Название аттрибута будет использовано в качестве ключа передаваемого объекта.</li></ul></div><h2 id="параметры" tabindex="-1">Параметры <a class="header-anchor" href="#параметры" aria-label="Permalink to &quot;Параметры&quot;">​</a></h2><ul><li><code>url</code> - Название эндпоинта для отправки данных</li><li><code>options</code> - Объект с параметрами для функции</li></ul><h3 id="параметры-для-функции" tabindex="-1">Параметры для функции <a class="header-anchor" href="#параметры-для-функции" aria-label="Permalink to &quot;Параметры для функции&quot;">​</a></h3><ul><li><code>body</code> - Объект, который будет передан в <code>body</code> запроса</li></ul><h2 id="использование" tabindex="-1">Использование <a class="header-anchor" href="#использование" aria-label="Permalink to &quot;Использование&quot;">​</a></h2><h3 id="с-обычнои-строкои" tabindex="-1">С обычной строкой <a class="header-anchor" href="#с-обычнои-строкои" aria-label="Permalink to &quot;С обычной строкой&quot;">​</a></h3><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> sendRequest</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> isLoading</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> isSent </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useSubmitForm</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">faq</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><h3 id="с-реактивным-параметром-url" tabindex="-1">С реактивным параметром <code>url</code> <a class="header-anchor" href="#с-реактивным-параметром-url" aria-label="Permalink to &quot;С реактивным параметром \`url\`&quot;">​</a></h3><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> reactiveUrl </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">computed</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> condition </span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">faq</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">appointment</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> sendRequest</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> isLoading</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> isSent </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useSubmitForm</span><span style="color:#A6ACCD;">(reactiveUrl)</span></span></code></pre></div><h3 id="с-дополнительными-параметрами" tabindex="-1">С дополнительными параметрами <a class="header-anchor" href="#с-дополнительными-параметрами" aria-label="Permalink to &quot;С дополнительными параметрами&quot;">​</a></h3><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> sendRequest</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> isLoading</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> isSent </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useSubmitForm</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">faq</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">requestUrl</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> location</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">href</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><h3 id="пример-формы" tabindex="-1">Пример формы <a class="header-anchor" href="#пример-формы" aria-label="Permalink to &quot;Пример формы&quot;">​</a></h3><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">form</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@submit.prevent</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">sendRequest</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">phone</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">submit</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-if</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">isLoading</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Выполняется отправка формы</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-else-if</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">isSent</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Форма успешно отправлена</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-else</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Отправить форму</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">form</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div>`,21),e=[p];function t(c,r,D,F,y,i){return a(),o("div",null,e)}const A=s(n,[["render",t]]);export{d as __pageData,A as default};
