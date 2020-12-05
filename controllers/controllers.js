const express = require('express');
const mongoose = require('mongoose');
const Todo = require('../models/Todo');

exports.readAllTodos = async (req, res) => {
    const allTodos = await Todo.find();
    res.json(allTodos);
};

exports.createOneTodo = async (req, res) => {
    const { title } = req.body;
    const newTodo = new Todo({ title });
    const savedTodo = await newTodo.save();
    res.json(savedTodo);
};

exports.readOneTodo = async (req, res) => {
    const oneTodo = await Todo.findById(req.params.id);
    res.json(oneTodo);
};

exports.updateOneTodo = async (req, res) => {
    const { title } = req.body;
    const oneTodo = await Todo.findOneAndReplace(req.params.id, { title });
    res.json(oneTodo);
};

exports.deleteOneTodo = async (req, res) => {
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
    res.json(deletedTodo);
};
