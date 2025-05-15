"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const hello_route_1 = __importDefault(require("./routes/hello.route"));
const swagger_1 = __importDefault(require("./plugins/swagger"));
const item_route_1 = require("./routes/item.route");
const fastify = (0, fastify_1.default)({ logger: true });
fastify.register(swagger_1.default);
fastify.register(hello_route_1.default, { prefix: '/api' });
fastify.register(item_route_1.registerItemRoutes, { prefix: '/api' });
fastify.listen({ port: 3000 }, (err, address) => {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
    fastify.log.info(`Server running at ${address}`);
});
