import { FastifyInstance } from 'fastify';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUI from '@fastify/swagger-ui';

export default async function swagger(fastify: FastifyInstance) {
    await fastify.register(fastifySwagger, {
        openapi: {
            info: {
                title: 'Fastify API',
                version: '1.0.0'
            }
        }
    });

    await fastify.register(fastifySwaggerUI, {
        routePrefix: '/docs', // Swagger UI path
        uiConfig: {
            docExpansion: 'list', // optional UI behavior
            deepLinking: false
        },
        staticCSP: true,
        transformStaticCSP: (header) => header,
    });
}
