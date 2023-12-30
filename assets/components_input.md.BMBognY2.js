import{_ as i,c as s,o as a,R as e}from"./chunks/framework.O7Q2ZnwX.js";const u=JSON.parse('{"title":"UtilsInput","description":"","frontmatter":{},"headers":[],"relativePath":"components/input.md","filePath":"components/input.md"}'),l={name:"components/input.md"},t=e(`<h1 id="utilsinput" tabindex="-1">UtilsInput <a class="header-anchor" href="#utilsinput" aria-label="Permalink to &quot;UtilsInput&quot;">​</a></h1><p>Данный компонент выводит текстовое поле.</p><p>Компонент может быть использован несколькими способами:</p><ol><li>Можно использовать в форме с помощью <code>formData</code>. Для этого в компоненте предусмотрен пропс <code>id</code></li><li>Можно использовать через <code>v-model</code>.</li></ol><h2 id="пропсы" tabindex="-1">Пропсы <a class="header-anchor" href="#пропсы" aria-label="Permalink to &quot;Пропсы&quot;">​</a></h2><ul><li><p><code>id</code> — идентификатор поля ввода. Устанавливает <code>id</code> и <code>name</code>, которые используются в <code>formData</code>.</p></li><li><p><code>label</code> — плейсхолдер для поля. Задает параметр <code>placeholder</code>.</p></li><li><p><code>placeholder</code> — плейсхолдер для поля. Задает параметр <code>placeholder</code>.</p></li><li><p><code>disabled</code> — является ли поле выключенным. Задает параметр <code>disabled</code>.</p></li><li><p><code>minlength</code> — определяет минимальную длину инпута. Задает параметр <code>minlength</code>.</p></li><li><p><code>maxlength</code> — определяет максимальную длину инпута. Задает параметр <code>maxlength</code>.</p></li><li><p><code>required</code> — является ли поле обязательным для заполнения. Выставляет атрибут <code>required</code>.</p><p><strong>По умолчанию:</strong> <code>true</code>.</p></li><li><p><code>type</code> — тип поля.</p><p><strong>По умолчанию:</strong> <code>text</code>.</p></li></ul><h2 id="стилизация" tabindex="-1">Стилизация <a class="header-anchor" href="#стилизация" aria-label="Permalink to &quot;Стилизация&quot;">​</a></h2><p>Для стилизации компонента подготовлены классы:</p><ul><li><code>utils-input-container</code>. Его стилизация влияет на контейнер, в котором находится текстовое поле.</li><li><code>utils-input-label</code>. Его стилизация влияет на <code>label</code>.</li><li><code>utils-input-input</code>. Его стилизация влияет на <code>input</code>.</li></ul><p>При этом <code>label</code> и <code>input</code> можно стилизовать просто используя их селекторы.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Также для стилизации можно использовать глобальные классы, которые стилизуют все компоненты формы.</p><ul><li><code>utils-form-container</code>. Его стилизация влияет на контейнер, в котором находится текстовое поле.</li><li><code>utils-form-label</code>. Его стилизация влияет на <code>label</code>.</li><li><code>utils-form-input</code>. Его стилизация влияет на поле ввода.</li></ul></div><h2 id="использование" tabindex="-1">Использование <a class="header-anchor" href="#использование" aria-label="Permalink to &quot;Использование&quot;">​</a></h2><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> lang</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> text</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">UtilsInput</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">text</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;test-field&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    placeholder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Тестовый плейсхолдер&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>`,13),n=[t];function p(d,h,o,c,k,r){return a(),s("div",null,n)}const g=i(l,[["render",p]]);export{u as __pageData,g as default};
