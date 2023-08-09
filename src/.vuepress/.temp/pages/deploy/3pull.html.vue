<template><div><p>在云崽机器人根目录下执行</p>
<CodeTabs id="3" :data='[{"id":"Github"},{"id":"Gitee"}]' tab-id="git">
<template #title0="{ value, isActive }">Github</template>
<template #title1="{ value, isActive }">Gitee</template>
<template #tab0="{ value, isActive }">
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>git clone --depth 1 https://gitee.com/JMCCS/jinmaocuicuisha.git ./plugins/Jinmaocuicuisha-plugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>git clone --depth 1 https://github.com/SHIKEAIXY/Jinmaocuicuisha.git ./plugins/Jinmaocuicuisha-plugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
</CodeTabs>
<div class="hint-container info">
<p class="hint-container-title">注意</p>
<p>安装完成后请第一时间发送 #设置绝对权限</p>
</div>
</div></template>


