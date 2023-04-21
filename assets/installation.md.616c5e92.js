import{_ as a,o as s,c as n,O as l}from"./chunks/framework.52de2457.js";const D=JSON.parse('{"title":"Установка и настройка","description":"","frontmatter":{},"headers":[],"relativePath":"installation.md"}'),e={name:"installation.md"},o=l(`<h1 id="установка-и-настроика" tabindex="-1">Установка и настройка <a class="header-anchor" href="#установка-и-настроика" aria-label="Permalink to &quot;Установка и настройка&quot;">​</a></h1><p>Для работы необходимо установить расширение и добавить его в конфигурацию.</p><h2 id="установка" tabindex="-1">Установка <a class="header-anchor" href="#установка" aria-label="Permalink to &quot;Установка&quot;">​</a></h2><div class="vp-code-group"><div class="tabs"><input type="radio" name="group--HWfL" id="tab-cYaoE2T" checked="checked"><label for="tab-cYaoE2T">pnpm</label><input type="radio" name="group--HWfL" id="tab-5JQPgM9"><label for="tab-5JQPgM9">npm</label><input type="radio" name="group--HWfL" id="tab-PKVNGLD"><label for="tab-PKVNGLD">yarn</label></div><div class="blocks"><div class="language-bash active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@pacific-agency/nuxt-utils</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@pacific-agency/nuxt-utils</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@pacific-agency/nuxt-utils</span></span></code></pre></div></div></div><h2 id="использование" tabindex="-1">Использование <a class="header-anchor" href="#использование" aria-label="Permalink to &quot;Использование&quot;">​</a></h2><p>Для использования необходимо добавить <code>@pacific-agency/nuxt-utils</code> в файл <code>nuxt.config.ts</code> в поле <code>modules</code>.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight has-diff"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineNuxtConfig</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">modules</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line diff add"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@pacific-agency/nuxt-utils</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span></code></pre></div>`,7),t=[o];function p(c,i,r,d,y,C){return s(),n("div",null,t)}const h=a(e,[["render",p]]);export{D as __pageData,h as default};
