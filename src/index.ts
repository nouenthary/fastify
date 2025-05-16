import Fastify from 'fastify';
import helloRoutes from './routes/hello.route';
import swagger from './plugins/swagger';
import {registerItemRoutes} from "./routes/item.route";
import multipart from '@fastify/multipart';
import fastifyStatic from '@fastify/static';
import path from 'path';

const fastify = Fastify({ logger: false });

fastify.register(fastifyStatic, {
    root: path.join(__dirname, '..', 'uploads'),
    prefix: '/uploads/',
});
fastify.register(multipart);
fastify.register(swagger);
fastify.register(helloRoutes, { prefix: '/api' });
fastify.register(registerItemRoutes, { prefix: '/api' });

fastify.listen({ port: 3000, host: '0.0.0.0' }, (err, address) => {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
    fastify.log.info(`Server running at ${address}`);
});
