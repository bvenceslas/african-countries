const express = require('express');
const Sequelize = require('sequelize');


const sequelize = new Sequelize({
    //if you are using other databases, specify the host
    //host: 'localhost'
    dialect: 'sqlite', //dialect depends on the database you use
    storage: './database.sqlite' // focuses on te database file database.sqlite will be created automatically at the project root
});

const app = express();
const port = process.env.port | 3000;

app.get('/', (req, res) => res.send('Brain App'));

app.listen(port, () => console.log(`Notes-app listens on port ${port}`));


//testing the connection
sequelize.authenticate().then(() => {
    console.log('connection has been established successfuly.');
}).catch(err => {
    console.error('Unable to connect to the database', err);
});

//creating model of our table Note
const Note = sequelize.define('notes', { note: Sequelize.TEXT, tag: Sequelize.STRING });

sequelize.sync({ force: true }) //when force is true, so if a table already exists, it will do a Drop and create it again
  .then(() => {
    console.log(`Database & tables created!`);

    Note.bulkCreate([ //create 3 notes
      { note: 'pick up some bread after work', tag: 'shopping' },
      { note: 'remember to write up meeting notes', tag: 'work' },
      { note: 'learn how to use node orm', tag: 'work' }
    ]).then(function() {
      return Note.findAll(); //function that retrieve data in the database in the console
    }).then(function(notes) {
      console.log(notes);
    });
  });

  //read function in the browserwith get function

  app.get('/notes', function(req, res){
      Note.findAll().then(notes => res.json(notes));
  });

  //lecture des notes

  app.get('/notes/:id', (req, res) => {
      Note.findAll({ where: { id: req.params.id } }).then(notes => res.json(notes));
  });

  //using 'search' will ask us to declare the route 'notes/search' at the bottom not tp considere it like an id
  app.get('/notes/search', function(req, res) {
    Note.findAll({ where: { note: req.query.note, tag: req.query.tag } }).then(notes => res.json(notes));
  });

  //using OR instruction is where a parameter will fit with one of those the user entered
  const  Op = sequelize.Op;

  app.get('notes/search', (req, res) => {
      Note.findAll({ 
          where: {
          tag: {
              [Op.or] : [].concat(req.query.tag)
          }
       }
    }).then(notes => res.json(notes));
  });

  //with 'LIMIT INSTRUCTION' 
  /*
    const Op = Sequelize.Op;

    app.get('/notes/search', function(req, res) {
    Note.findAll({
        limit: 2,
        where: {
        tag: {
            [Op.or]: [].concat(req.query.tag)
        }
        }
    }).then(notes => res.json(notes));
    });

  */

  // to insert we will do:

  const bodyParser = require('body-parser');

  app.use(bodyParser.json());
  
  app.post('/notes', function(req, res) {
    Note.create({ note: req.body.note, tag: req.body.tag }).then(function(note) {
      res.json(note);
    });
  });

  //update data we will use the "Update" function

  app.put('/notes/:id', function(req, res) {
    Note.findByPk(req.params.id).then(function(note) {
      note.update({
        note: req.body.note,
        tag: req.body.tag
      }).then((note) => {
        res.json(note);
      });
    });
  });


//to delete data we will use the "destroy" function

app.delete('/notes/:id', function(req, res) {
    Note.findByPk(req.params.id).then(function(note) {
      note.destroy();
    }).then((note) => {
      res.sendStatus(200); //we send a status of 200 to confirm that the answer is sent to client, if not he can find even 201, 400, etc.
    });
  });