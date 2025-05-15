import { FastifyInstance } from 'fastify';

export default async function helloRoutes(fastify: FastifyInstance) {
    let balance = 0;

    fastify.get('/hello', async (request, reply) => {
        return { msg: 'Hello Fastify! api ...' };
    });

    fastify.get('/balance', async (request, reply) => {
        return { msg: { balance : balance} };
    });

    fastify.get('/deposit', async (request, reply) => {
        balance = balance + 100;
        return { msg: "deposit amount $100 " };
    });

    fastify.get('/withdraw', async (request, reply) => {
        balance = balance - 100;
        return { msg: "withdraw amount $100 " };
    });
}
