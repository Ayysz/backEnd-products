import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import ProductRoutes from './routes/product.routes.js';

dotenv.config();

// initialize express
const app = express();

app.use(cors());
app.use(express.json());
app.get('/', (req, res, next) => {
    res.send('testing success')
})
app.use(ProductRoutes);

// error handling
app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || 'Internal server error';
    err.payload = err.payload || 0;
    console.log(`Error code : ${err.statusCode}\nError message: ${err.message}`);
    return res.status(err.statusCode).json({
        success: false,
        status: 'Error cui',
        message: err.message,
        data: err.payload
    });
})

// create server
import http from 'http';

const port = process.env.PORT || 5000;
const server = http.createServer(app);
server.listen(port);
server.on('error', e => console.log(`Error on : ${e.message}`));
server.on('listening', onListening);

function onListening() {
    const addr = server.address();
    console.log(`Server listening on http://localhost:${addr.port}`);
}