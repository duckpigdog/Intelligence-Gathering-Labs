/**
 * This is a API server
 */

import express, {
  type Request,
  type Response,
  type NextFunction,
} from 'express'
import cors from 'cors'
import path from 'path'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import authRoutes from './routes/auth.js'

// for esm mode
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// load env
dotenv.config()

const app: express.Application = express()

app.use(cors())
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true, limit: '10mb' }))

// Serve Target Files
// This allows access to http://localhost:3000/api/targets/level1/index.html
app.use('/api/targets', express.static(path.join(__dirname, 'targets')))

// Flags Database
const FLAGS: Record<string, string> = {
  '01': 'IG_LABS{view_source_is_basic_skill}',
  '02': 'IG_LABS{robots_can_be_helpful}',
  '03': 'IG_LABS{backup_files_are_dangerous}',
};

/**
 * API Routes
 */
app.use('/api/auth', authRoutes)

// Verify Flag Endpoint
app.post('/api/verify-flag', (req: Request, res: Response) => {
  const { levelId, flag } = req.body;
  
  if (!levelId || !flag) {
     res.status(400).json({ success: false, message: 'Missing levelId or flag' });
     return;
  }

  const correctFlag = FLAGS[levelId];
  
  if (flag.trim() === correctFlag) {
     res.status(200).json({ success: true, message: 'Correct Flag!' });
     return;
  } else {
     res.status(200).json({ success: false, message: 'Incorrect Flag' });
     return;
  }
});

/**
 * health
 */
app.use(
  '/api/health',
  (req: Request, res: Response, next: NextFunction): void => {
    res.status(200).json({
      success: true,
      message: 'ok',
    })
  },
)

/**
 * error handler middleware
 */
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(error);
  res.status(500).json({
    success: false,
    error: 'Server internal error',
  })
})

/**
 * 404 handler
 */
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    error: 'API not found',
  })
})

export default app
