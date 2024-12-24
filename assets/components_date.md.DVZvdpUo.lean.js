import{_ as i,c as a,a0 as e,o as t}from"./chunks/framework.Ce9r4BRj.js";const r=JSON.parse('{"title":"UtilsDate","description":"","frontmatter":{},"headers":[],"relativePath":"components/date.md","filePath":"components/date.md"}'),l={name:"components/date.md"};function n(p,s,d,o,h,c){return t(),a("div",null,s[0]||(s[0]=[e(`<h1 id="utilsdate" tabindex="-1">UtilsDate <a class="header-anchor" href="#utilsdate" aria-label="Permalink to &quot;UtilsDate&quot;">​</a></h1><p>Данный компонент выводит поле для выбора даты.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Для работы данного компонента нужно включить компонент в <code>build.transpile</code> в <code>nuxt.config</code></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineNuxtConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  build: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    transpile: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;@vuepic/vue-datepicker&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div></div><p>Компонент может быть использован несколькими способами:</p><ol><li>Можно использовать в форме с помощью <code>formData</code>. Для этого в компоненте предусмотрен пропс <code>id</code></li><li>Можно использовать через <code>v-model</code>.</li></ol><h2 id="пропсы" tabindex="-1">Пропсы <a class="header-anchor" href="#пропсы" aria-label="Permalink to &quot;Пропсы&quot;">​</a></h2><ul><li><p><code>id</code> — идентификатор поля ввода. Устанавливает <code>id</code> и <code>name</code>, которые используются в <code>formData</code>.</p><p><strong>По умолчанию:</strong> <code>date</code>.</p></li><li><p><code>label</code> — заголовок для поля. Задает параметр <code>label</code>.</p></li><li><p><code>placeholder</code> — плейсхолдер для поля. Задает параметр <code>placeholder</code>.</p><p><strong>По умолчанию:</strong> <code>Выберите дату</code>.</p></li><li><p><code>disabled</code> — является ли поле выключенным. Задает параметр <code>disabled</code>.</p></li><li><p><code>required</code> — является ли поле обязательным для заполнения. Выставляет атрибут <code>required</code>.</p><p><strong>По умолчанию:</strong> <code>true</code>.</p></li><li><p><code>format</code> — формат отображение даты. Выставляет атрибут <code>format</code>.</p><p><strong>По умолчанию:</strong> <code>dd.MM.yyyy</code>.</p></li></ul><p>Помимо этого можно использовать любые <code>props</code> из документации <a href="https://vue3datepicker.com/" target="_blank" rel="noreferrer">https://vue3datepicker.com/</a></p><h2 id="стилизация" tabindex="-1">Стилизация <a class="header-anchor" href="#стилизация" aria-label="Permalink to &quot;Стилизация&quot;">​</a></h2><p>Для стилизации компонента подготовлены классы:</p><ul><li><code>utils-date-container</code>. Его стилизация влияет на контейнер, в котором находится текстовое поле.</li><li><code>utils-date-label</code>. Его стилизация влияет на <code>label</code>.</li><li><code>utils-date-picker</code>. Его стилизация влияет на контейнер для <code>input</code>.</li><li><code>utils-date-input</code>. Его стилизация влияет на <code>input</code>.</li></ul><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Также для стилизации можно использовать глобальные классы, которые стилизуют все компоненты формы.</p><ul><li><code>utils-form-container</code>. Его стилизация влияет на контейнер, в котором находится текстовое поле.</li><li><code>utils-form-label</code>. Его стилизация влияет на <code>label</code>.</li><li><code>utils-form-input</code>. Его стилизация влияет на поле ввода.</li></ul></div><h2 id="использование" tabindex="-1">Использование <a class="header-anchor" href="#использование" aria-label="Permalink to &quot;Использование&quot;">​</a></h2><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> lang</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> date</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">UtilsDate</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">date</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>`,14)]))}const E=i(l,[["render",n]]);export{r as __pageData,E as default};
