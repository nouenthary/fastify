import { FastifyInstance } from 'fastify';

class ItemRoutes {
    private items: string[] = ['item1', 'item2'];

    constructor(private app: FastifyInstance) { }

    public async register() {
        this.app.get('/items', this.getItems.bind(this));
        this.app.post('/items', this.createItem.bind(this));
    }

    private async getItems() {
        return this.items;
    }

    private async createItem(request: any, reply: any) {
        // Add item logic
        return reply.code(201).send({ message: 'Item created' });
    }
}

export async function registerItemRoutes(app: FastifyInstance) {
    const itemRoutes = new ItemRoutes(app);
    await itemRoutes.register();
}
