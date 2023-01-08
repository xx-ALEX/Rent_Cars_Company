const express = require(`express`),
      bodyParser = require(`body-parser`),
      morgan = require(`morgan`),
	  fs = require(`file-system`),
	  shortId = require(`shortid`),
	  dbFilePath = `database.json`,
      app = express();
const {response} = require("express");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan(`common`));
app.use((req, res, next) => {
	res.header(`Access-Control-Allow-Origin`, `*`);
	res.header(`Access-Control-Allow-Methods`, `GET, POST, OPTIONS, PUT, DELETE`);
	res.header(`Access-Control-Allow-Headers`, `Origin, X-Requested-With, Content-Type, Accept`);
	next();
});

app.post(`/api/form`, (req, res) => {
	const tasksData = getTasksFromDB(),
		task = req.body;

	task.id = shortId.generate();

    tasksData.push(task);
    setTasksToDB(tasksData);

	res.send(task);
});

function getTasksFromDB() {
    return JSON.parse(fs.readFileSync(dbFilePath, 'utf8'));
}

function setTasksToDB(tasksData) {
    fs.writeFileSync(dbFilePath, JSON.stringify(tasksData));
}

app.listen(3000, () => console.log('Server has been started...'));