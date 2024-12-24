import{_ as a,c as s,a0 as t,o}from"./chunks/framework.Ce9r4BRj.js";const u=JSON.parse('{"title":"usePhoneFormatter","description":"","frontmatter":{},"headers":[],"relativePath":"composables/use-phone-formatter.md","filePath":"composables/use-phone-formatter.md"}'),i={name:"composables/use-phone-formatter.md"};function n(r,e,l,p,h,c){return o(),s("div",null,e[0]||(e[0]=[t(`<h1 id="usephoneformatter" tabindex="-1">usePhoneFormatter <a class="header-anchor" href="#usephoneformatter" aria-label="Permalink to &quot;usePhoneFormatter&quot;">​</a></h1><p>Функция, возвращающая форматированный номер телефона.</p><p>Телефон необходимо передавать в формате <code>+79998887766</code>. Если передан неправильный формат номера телефона, то функция вернет <code>null</code>.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>В форматированном номере телефона используются неразрывные пробелы, благодаря чему в нем не будет переносов строк.</p></div><h2 id="параметры" tabindex="-1">Параметры <a class="header-anchor" href="#параметры" aria-label="Permalink to &quot;Параметры&quot;">​</a></h2><ul><li><code>phone</code> — номер телефона</li></ul><h2 id="использование" tabindex="-1">Использование <a class="header-anchor" href="#использование" aria-label="Permalink to &quot;Использование&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Вернет &#39;+7 999 888-77-66&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">usePhoneFormatter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;+79998887766&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div>`,8)]))}const m=a(i,[["render",n]]);export{u as __pageData,m as default};
