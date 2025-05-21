import { FastifyInstance } from 'fastify';
import * as fs from 'fs';
import * as path from 'path';
import { pipeline } from 'stream';
import { promisify } from 'util';

const pump = promisify(pipeline);

export default async function helloRoutes(fastify: FastifyInstance) {
    let balance = 0;

    fastify.get('/hello', async (request, reply) => {
        return {
            msg: 'Hello Fastify! api ...',
            code: 201,
            status: 'success',
            test: 'message'
        };
    });

    fastify.get('/balance', async (request, reply) => {
        return { msg: { balance: balance } };
    });

    fastify.get('/deposit', async (request, reply) => {
        balance = balance + 100;
        return { msg: "deposit amount $100 " };
    });

    fastify.get('/withdraw', async (request, reply) => {
        balance = balance - 100;
        return { msg: "withdraw amount $100 " };
    });


    fastify.get('/login', async (request, reply) => {
        return { msg: "login success" };
    });

    // upload
    fastify.post('/upload', async (request, reply) => {

        const data = await request.file();

        if (!data) {
            return reply.status(400).send({ error: 'No file uploaded' });
        }

        const { filename, mimetype, file } = data;

        if (!mimetype.startsWith('image/')) {
            return reply.status(400).send({ error: 'Only image files are allowed' });
        }

        const ext = path.extname(filename);
        const newFilename = `upload_${Date.now()}${ext}`;
        const uploadDir = path.join(__dirname, '../..', 'uploads');
        fs.mkdirSync(uploadDir, { recursive: true });

        const filePath = path.join(uploadDir, newFilename);
        await pump(file, fs.createWriteStream(filePath));

        return {
            status: 'success',
            url: `/uploads/${newFilename}`,
        };

    });
}
