import todoService from "../services/todo.service.js"

// Get todos
const getTodos = async (req, res) => {
    try{
        const todos = await todoService.getTodos();
        res.json(todos);
    } catch (err) {
        res.status(500).json({message: "Failed to fetch todos!"});
    }
};

// Post todo
const createTodo = async (req, res) => {
    const { title } = req.body;

    if(!title) {
        return res.status(400).json({message: "Titile is required!"});
    }

    try{
        const todo = await todoService.createTodos(title);
        res.status(200).json(todo);
    } catch (err){
        res.status(500).json({message: "Failed to create todo"});
    }
};

export default{
    getTodos,
    createTodo,
}