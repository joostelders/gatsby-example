exports.createPages = ({ actions }) => {
  const { createPage } = actions
  const examplePages = [
    { title: 'Page 1', path: 'page-1/', modules: ['a'] },
    { title: 'Page 2', path: 'page-2/', modules: ['a', 'b'] },
  ]
  examplePages.forEach((page) => {
    createPage({
      path: page.path,
      context: { page: page },
      component: require.resolve('./src/components/app.js'),
    })
  })
}
