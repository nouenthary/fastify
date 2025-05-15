"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerItemRoutes = registerItemRoutes;
class ItemRoutes {
    constructor(app) {
        this.app = app;
        this.items = ['item1', 'item2'];
    }
    async register() {
        this.app.get('/items', this.getItems.bind(this));
        this.app.post('/items', this.createItem.bind(this));
    }
    async getItems() {
        return this.items;
    }
    async createItem(request, reply) {
        // Add item logic
        return reply.code(201).send({ message: 'Item created' });
    }
}
async function registerItemRoutes(app) {
    const itemRoutes = new ItemRoutes(app);
    await itemRoutes.register();
}
