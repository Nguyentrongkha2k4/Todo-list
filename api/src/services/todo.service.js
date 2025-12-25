import prisma from "../db/prisma.js";

const getTodos = async () => {
    return prisma.todo.findMany();
};

const createTodos = async (title) => {
    return prisma.todo.create({
        data: { title },
    });
};

export default {
    getTodos,
    createTodos,
};