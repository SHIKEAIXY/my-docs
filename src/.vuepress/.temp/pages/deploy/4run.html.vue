<template><div><CodeTabs id="0" :data='[{"id":"node"},{"id":"npm"},{"id":"pnpm"}]' tab-id="shell">
<template #title0="{ value, isActive }">node</template>
<template #title1="{ value, isActive }">npm</template>
<template #title2="{ value, isActive }">pnpm</template>
<template #tab0="{ value, isActive }">
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>node app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>npm start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
<template #tab2="{ value, isActive }">
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>pnpm start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
</CodeTabs>
<div class="hint-container info">
<p class="hint-container-title">注意</p>
<p>可选在前台运行或在后台运行。</p>
</div>
</div></template>


