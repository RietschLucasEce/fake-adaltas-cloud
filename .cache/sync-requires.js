
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/lucasrietsch/Desktop/fake-adaltas-cloud/.cache/dev-404-page.js")),
  "component---src-pages-about-js": preferDefault(require("/home/lucasrietsch/Desktop/fake-adaltas-cloud/src/pages/about.js")),
  "component---src-pages-dashboard-js": preferDefault(require("/home/lucasrietsch/Desktop/fake-adaltas-cloud/src/pages/dashboard.js")),
  "component---src-pages-index-js": preferDefault(require("/home/lucasrietsch/Desktop/fake-adaltas-cloud/src/pages/index.js")),
  "component---src-pages-my-files-js": preferDefault(require("/home/lucasrietsch/Desktop/fake-adaltas-cloud/src/pages/my-files.js")),
  "component---src-templates-blog-post-js": preferDefault(require("/home/lucasrietsch/Desktop/fake-adaltas-cloud/src/templates/blog-post.js"))
}

