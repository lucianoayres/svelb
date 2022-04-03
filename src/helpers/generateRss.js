const fs = require('fs')
const process = require('process')

const rssFeed = `<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Blog Name</title>
    <description>Blog Description</description>
    <link>https://dev.blog</link>
    <generator>Svelb</generator>
    <lastBuildDate>Sun, 03 Apr 2022 15:10:55 GMT</lastBuildDate>
    <item>
      <title>Ipsum lorem et al lorem ipsum et al</title>
      <description>Lorem lorem ipsum ipsum lorem lorem ipsum.</description>
      <link>https://dev.blog/post/lorem-ipsum-et-al</link>
      <guid>https://dev.blog/post/lorem-ipsum-et-al</guid>
      <pubDate>Wed, 07 Jul 2021 00:00:00 GMT</pubDate>
      <content:encoded>
        <p>Hello World!</p>
        <p>Ipsum lorem et al lorem ipsum.</p>
      </content:encoded>
    </item>
  </channel>
</rss>`
process.chdir('./src')
fs.writeFile('./public/rss.xml', rssFeed, function (err) {
  if (err) {
    return console.log(err)
  }
  console.log('RSS file was generated!')
})
