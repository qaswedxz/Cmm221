const express = require('express') /*const ปเ็นการประกาศตัวแปล*/
const { twig } = require('twig')

const app = express()  
app.set('view engine' , 'twig')

const homeController = require('./controllers/home.controller')
const newsController = require('./controllers/news.controller')

app.get('/',homeController.index)  /*เป็นการสร้างหน้าแต่ละหน้าของเว็บ*/
app.get('/news',newsController.index)

app.use('/assets' , express.static(__dirname + '/static/assets',{
	maxAge:86400000
}))

app.listen(8000, function(err){ /* ให้app ใช้ port 8000 */
	console.log('server is running on part 8000')
})