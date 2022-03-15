var express = require('express');
var app = express();

var jobs = [
	{'img':'FD', 'title':'Flutter Developer', 'location': 'Ho Chi Minh', 'salary':'2000$ - 2500$/month', 'fulltime': true},
	{'img':'JD', 'title':'Java Developer', 'location': 'Ha Noi', 'salary':'1000$ - 1200$/month', 'fulltime': true},
	{'img':'AD', 'title':'Angular Developer', 'location': 'Hue', 'salary':'1000$ - 1200$/project', 'fulltime': false},
	{'img':'FE', 'title':'Front End Developer', 'location': 'Tra Vinh', 'salary':'1000$ - 1500$/project', 'fulltime': false},
	{'img':'BE', 'title':'Back End Developer', 'location': 'Ho Chi Minh', 'salary':'1000$ - 1200$/month', 'fulltime': true},
];
	
var employees = [
	{'id':1, 'name': 'Nguyễn Nhật Linh', 'birthday':'2000-09-09', 'address':'Ho Chi Minh', 'position':'Intern'},
	{'id':2, 'name': 'Phan Huy Hoàng', 'birthday':'unknown', 'address':'Binh Duong', 'position':'Intern'}
];

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
})

app.get('/', function(req, res) {
    res.send('Hello world');
})

app.get('/jobs', function(req, res) {
    res.send({'statusCode': 1, 'data': jobs});
})

app.get('/employees', function(req, res) {
    res.send({'statusCode': 1, 'data': employees});
})

var server = app.listen(8080, function() {
    console.log("Backend Application listening at http://localhost:8080")
})