const express = require("express");
const router = express.Router();

server.get("/tasks", async (req, res) => {
    const moreThan = req.query.more_than ? Number(req.query.more_than) : 0;
    const tasks = await getAllTasks(moreThan);
    res.json({
        tasks
    })
})

router.get("/products/:id", async (req, res) => {
    const id = Number(req.params.id);
    const task = await getTaskById(id)
    res.json({
        task
    })
}) 

server.post("/tasks", async (req, res) => {
    const newTask = {
        id: toDo.length + 1,
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        isDone: req.body.isDone
    }
    const savedTask = await saveTask(newTask)
    res.json({
        task: savedTask
    })
})

server.put("/tasks/:id", async (req, res) => {
    const id = Number(req.params.id);
    const task = tasks.find((task) => {
        return task.id === id;
    })
    if (!task) {
        return res.status(404).json({message: "Task not found"});
    }
    task.name = req.body.name;
    task.isDone = req.body.isDone;
    const updatedTask = await updateTask(id, task);
    res.json({
        task
    })
})

server.delete("/tasks/:id", async (req, res) => {
    const id = Number(req.params.id);
    await deleteProduct(id);
    res.status(204).send();
})

module.exports = {
    router
}