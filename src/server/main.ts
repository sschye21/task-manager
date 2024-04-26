import express from 'express';
import ViteExpress from 'vite-express';
import { BASE_URL } from './utils/constants.js';
import { TaskRouter } from './routes/task.routes.js';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());
app.use(BASE_URL, TaskRouter);

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