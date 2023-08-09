export const data = JSON.parse("{\"key\":\"v-fe294896\",\"path\":\"/demo/3baike.html\",\"title\":\"查百科\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"查百科\",\"icon\":\"search\",\"description\":\"开发中……\"},\"headers\":[],\"readingTime\":{\"minutes\":0.03,\"words\":9},\"filePathRelative\":\"demo/3baike.md\",\"autoDesc\":true}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
