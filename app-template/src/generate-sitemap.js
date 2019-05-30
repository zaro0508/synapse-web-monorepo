const fs = require('fs')
fs.readFile('src/config/routesConfig.ts', (err, data) => {
  if (err) {
    return console.error(err)
  }
  let routesConfigContent = data.toString()
  // TODO: change baseUrl depending on the portal domain
  const baseUrl = 'https://csbc-pson.synapse.org/'
  const now = new Date().toISOString()
  let fileContent = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
  var re = /to[:]\s*\'(.*)\'/g
  var m;

  do {
      m = re.exec(routesConfigContent)
      if (m) {
        // assuming hash router
        let path = `#${m[1]}`
        fileContent += `\t<url>\n\t\t<loc>${baseUrl}${path}</loc>\n\t\t<lastmod>${now}</lastmod>\n\t</url>\n`
      }
  } while (m)
  fileContent += '</urlset>'
  fs.writeFile('build/sitemap.xml', fileContent, (err) => {
    if (err) {
      console.error(err)
      throw err
    }
    console.log('Generated build/sitemap.xml')
  })
});
