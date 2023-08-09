export const data = JSON.parse("{\"key\":\"v-df8b6e0c\",\"path\":\"/posts/tomato.html\",\"title\":\"番茄\",\"lang\":\"zh-CN\",\"frontmatter\":{\"cover\":\"/assets/images/cover2.jpg\",\"icon\":\"pen-to-square\",\"date\":\"2023-07-21T00:00:00.000Z\",\"category\":[\"蔬菜\"],\"tag\":[\"红\",\"圆\"],\"star\":true,\"sticky\":true,\"description\":\"标题 2 这里是内容。 标题 3 这里是内容。\"},\"headers\":[{\"level\":2,\"title\":\"标题 2\",\"slug\":\"标题-2\",\"link\":\"#标题-2\",\"children\":[{\"level\":3,\"title\":\"标题 3\",\"slug\":\"标题-3\",\"link\":\"#标题-3\",\"children\":[]}]}],\"readingTime\":{\"minutes\":0.13,\"words\":38},\"filePathRelative\":\"posts/tomato.md\",\"localizedDate\":\"2023年7月21日\",\"autoDesc\":true}")

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
