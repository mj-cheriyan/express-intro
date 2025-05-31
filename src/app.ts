import express, { Application, NextFunction, Request, Response } from 'express';

const app: Application = express();

// Middleware
function adminMiddleware(req: Request, res: Response, next: NextFunction): void {
    const isAdmin = req.headers['x-admin-token'] === "secret123";

    if (!isAdmin) {
        res.status(403).json({ message: 'Admin only allowed' });
        return;
    }

    next();
}

// Middleware to parse JSON
app.use(express.json());


// Public Route
app.get("/public", (req: Request, res: Response )=>{
    res.send("Public Content");
});

// Admin Route
app.get("/admin/dashboard", adminMiddleware, (req: Request, res: Response ) => {
     res.send("Welcome Admin");
});

// Optional Bonus - Echo Route
app.post('/submit', (req: Request, res: Response) => {
  res.json({ received: req.body });
});

app.listen(8080, () => {
  console.log('Server running on http://localhost:8080');
});