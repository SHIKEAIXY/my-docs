<template><div><p>要关闭机器人，请私聊机器人#关机<br>
或打开机器人后台，使用</p>
<CodeTabs id="3" :data='[{"id":"组合键"},{"id":"npm"},{"id":"pnpm"}]' tab-id="shell">
<template #title0="{ value, isActive }">组合键</template>
<template #title1="{ value, isActive }">npm</template>
<template #title2="{ value, isActive }">pnpm</template>
<template #tab0="{ value, isActive }">
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>请在键盘上按下CTRL+C。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>npm stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
<template #tab2="{ value, isActive }">
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>pnpm stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
</CodeTabs>
</div></template>


