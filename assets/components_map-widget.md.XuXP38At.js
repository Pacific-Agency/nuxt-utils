import{d as p,o as t,c as e,_ as d,I as s,R as l}from"./chunks/framework.ZuibZzP_.js";const k=["src"],o=p({__name:"UtilsMapWidget",props:{locale:{},widgetId:{}},setup(n){return(i,h)=>(t(),e("iframe",{allowfullscreen:"true",class:"map-widget",height:"100%",src:`https://yandex.ru/map-widget/v1/-/${i.widgetId}${i.locale?`?lang=${i.locale}`:""}`,width:"100%"},null,8,k))}}),a=d(o,[["__scopeId","data-v-8e1df6c9"]]),r=l(`<h1 id="utilsmapwidget" tabindex="-1">UtilsMapWidget <a class="header-anchor" href="#utilsmapwidget" aria-label="Permalink to &quot;UtilsMapWidget&quot;">​</a></h1><p>Данный компонент выводит виджет Яндекс Карт.</p><p>Для работы данного компонента необходимо передать в него <code>ID</code> виджета Яндекс Карт.</p><div class="tip custom-block"><p class="custom-block-title">Как получить <code>ID</code> виджета Яндекс Карт</p><p>Для того, чтобы его получить необходимо:</p><ul><li>Выбрать интересующее место на карте</li><li>Нажать в правом верхнем углу на три точки</li><li>Нажать «Поделиться»</li><li>Откроется окно, в котором будет поле «Ссылка на карту»</li><li>Из этого поля нас интересует только последняя часть. Например, если в поле написано <code>https://yandex.ru/maps/-/CCUSULgkSA</code>, то в пропс нам необходимо передать только <code>CCUSULgkSA</code></li></ul></div><h2 id="пропсы" tabindex="-1">Пропсы <a class="header-anchor" href="#пропсы" aria-label="Permalink to &quot;Пропсы&quot;">​</a></h2><ul><li><code>widgetId</code> — <code>ID</code> виджета Яндекс Карт.</li><li><code>locale</code> — язык, на котором будет отображаться карта.</li></ul><h2 id="использование" tabindex="-1">Использование <a class="header-anchor" href="#использование" aria-label="Permalink to &quot;Использование&quot;">​</a></h2><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">UtilsMapWidget</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> widget-id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;widget-id&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> locale</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;en&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>`,8),c=l(`<h2 id="стилизация" tabindex="-1">Стилизация <a class="header-anchor" href="#стилизация" aria-label="Permalink to &quot;Стилизация&quot;">​</a></h2><p>Для стилизации нужно выставлять классы и стили на компонент, а они будут автоматически присвоены карте.</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">UtilsMapWidget</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;height: 450px; border-radius: 1rem;&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> widget-id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;widget-id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>`,3),u=JSON.parse('{"title":"UtilsMapWidget","description":"","frontmatter":{},"headers":[],"relativePath":"components/map-widget.md","filePath":"components/map-widget.md"}'),g={name:"components/map-widget.md"},_=Object.assign(g,{setup(n){return(i,h)=>(t(),e("div",null,[r,s(a,{locale:"en"}),c,s(a,{style:{height:"450px","border-radius":"1rem"}})]))}});export{u as __pageData,_ as default};
