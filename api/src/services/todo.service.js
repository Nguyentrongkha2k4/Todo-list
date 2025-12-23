const prisma = require("../db/prisma");

const getTodos = async () => {
    return prisma.todo.findMany();
};

const createTodos = async (title) => {
    return prisma.todo.create({
        data: { title },
    });
};

module.exports = {
    getTodos,
    createTodos,
};