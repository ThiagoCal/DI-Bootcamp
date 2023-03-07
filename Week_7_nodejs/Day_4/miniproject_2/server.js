const express = require('express');
const app = express();
const Parser = require('rss-parser');
const parser = new Parser();
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  try {
    const feed = await parser.parseURL('https://www.reddit.com/.rss');
    // console.log(feed.title);
    feed.items.forEach(item => {
      console.log(item.title + ':' + item.link);
    });
    // res.send('RSS feed successfully parsed.');
    res.render('index', { feed });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error parsing RSS feed.');
  }
});

app.listen(2500, ()=>{
  console.log('run on port 2500')
})