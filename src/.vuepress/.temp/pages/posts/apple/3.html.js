export const data = JSON.parse("{\"key\":\"v-6b227850\",\"path\":\"/posts/apple/3.html\",\"title\":\"苹果 3\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"pen-to-square\",\"date\":\"2023-07-21T00:00:00.000Z\",\"category\":[\"苹果\",\"水果\"],\"tag\":[\"红\",\"大\",\"圆\"],\"description\":\"标题 2 这里是内容。 标题 3 这里是内容。\"},\"headers\":[{\"level\":2,\"title\":\"标题 2\",\"slug\":\"标题-2\",\"link\":\"#标题-2\",\"children\":[{\"level\":3,\"title\":\"标题 3\",\"slug\":\"标题-3\",\"link\":\"#标题-3\",\"children\":[]}]}],\"readingTime\":{\"minutes\":0.12,\"words\":36},\"filePathRelative\":\"posts/apple/3.md\",\"localizedDate\":\"2023年7月21日\",\"autoDesc\":true}")

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
