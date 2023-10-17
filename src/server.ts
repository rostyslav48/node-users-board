import express from 'express'
import cors from 'cors'

const PORT = 5000;
const app = express();

const users = [
  { id: 1, name: 'Joe Biden', carColorId: 5 },
  { id: 2, name: 'Elon Musk', carColorId: 4 },
  { id: 3, name: 'Pan Roman', carColorId: 2 },
];

const colors = [
  { id: 1, name: 'Black' },
  { id: 2, name: 'DeepPink' },
  { id: 3, name: 'Red' },
  { id: 4, name: 'Aquamarine' },
  { id: 5, name: 'Gold' },
  { id: 6, name: 'YellowGreen' },
  { id: 7, name: 'Yellow' },
];

app.use(cors({
  origin: 'http://localhost:3000'
}))

app.get('/', (req, res) => {
  res.end('hello world!')
})

app.get('/users', (req, res) => {
  res.send(users)
})

app.get('/users/:id', (req, res) => {
  const {id} = req.params;

  const searchedUser = users.find(user => user.id === +id)

  if (!searchedUser) {
    res.sendStatus(404);

    return;
  }

  res.send(searchedUser)
})

app.get('/colors', (req, res) => {
  res.send(colors)
})

app.listen(PORT, () => {
  console.log(`API is running on http://localhost:${PORT}`)
})