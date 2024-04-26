import express from 'express';
import ViteExpress from 'vite-express';
import pool from './data-layer/db.js';
import { v4 as uuidv4 } from 'uuid';
import { SQL_STATEMENTS } from './data-layer/sql-statements.js';

const app = express();
app.use(express.json());

const randomId = () => uuidv4();

app.post("/new/v1", async (req, res) => {
  console.log(req.body)
  const { name, description, dueDate, priority } = req.body;
  const id = randomId();
  const result = await pool.query(
    SQL_STATEMENTS.insertTask, 
    [id, name, description, dueDate, new Date(), priority]);
  
  console.log(result)
  res.status(200).send("Success")
  
})

app.get("/tasks/v1/:name/:limit", async (req, res) => {
  const { name, limit } = req.params;
  
  let nameLike = '%'
  if (name != "") {
    nameLike = name + nameLike
  }

  const result = await pool.query(
    SQL_STATEMENTS.selectAllTasks,
    [nameLike, limit]
  );
  res.status(200).send(result.rows);
})

app.patch("/tasks/v1/:id", async (req, res) => {
  const { id } = req.params;
  const { name, description, dueDate, priority } = req.body;
  const result = await pool.query(
    SQL_STATEMENTS.updateTask,
    [name, description, dueDate, priority, id]
  );
  res.status(200).send("Success");
})

ViteExpress.config({
  // Copy and paste of vite.config.ts just so vite-express does not need to import
  // vite, a devDependency, in runtime
  inlineViteConfig: {
    build: {
      outDir: './dist/client',
    },
  },
});

ViteExpress.listen(app, 3000, () =>
  console.log(`Server is listening on port 3000...`)
);
