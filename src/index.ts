import Fastify from 'fastify';
import helloRoutes from './routes/hello.route';
import swagger from './plugins/swagger';
import {registerItemRoutes} from "./routes/item.route";

const fastify = Fastify({ logger: true });

fastify.register(swagger);
fastify.register(helloRoutes, { prefix: '/api' });
fastify.register(registerItemRoutes, { prefix: '/api' });

fastify.listen({ port: 3000 }, (err, address) => {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
    fastify.log.info(`Server running at ${address}`);
});
