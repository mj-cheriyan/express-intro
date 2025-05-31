import express, { NextFunction, Request, Response } from 'express';

const app = express();

app.listen(8080);
app.use(express.json());

app.get("/public", (req: Request, res: Response )=>{
    res.send("Public Content");
});

function adminMiddleware(req: Request, res: Response, next: NextFunction): void {
    const isAdmin = req.headers['x-admin-token'] === "secret123";

    if (!isAdmin) {
        res.status(403).json({ message: 'Admin only allowed' });
        return;
    }

    next();
}

app.get("/admin/dashboard", adminMiddleware, (req: Request, res: Response ) => {
     res.send("Welcome Admin");
});

app.post('/submit', (req: Request, res: Response)=> {
    res.json({ message: 'Here is your data'});
})