"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = swagger;
const swagger_1 = __importDefault(require("@fastify/swagger"));
const swagger_ui_1 = __importDefault(require("@fastify/swagger-ui"));
async function swagger(fastify) {
    await fastify.register(swagger_1.default, {
        openapi: {
            info: {
                title: 'Fastify API',
                version: '1.0.0'
            }
        }
    });
    await fastify.register(swagger_ui_1.default, {
        routePrefix: '/docs', // Swagger UI path
        uiConfig: {
            docExpansion: 'list', // optional UI behavior
            deepLinking: false
        },
        staticCSP: true,
        transformStaticCSP: (header) => header,
    });
}
