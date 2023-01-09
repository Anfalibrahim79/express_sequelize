const express = require('express')
const models = require('../models')

const getAllUser = async (req, res) =>{
    const user = await models.User.findAll()
    res.status(200).json({
        status: 200,
        message: "Berhasil get data user",
        data : user
    })
}
const getUserById = async (req, res) =>{
    const id = req.params.id
    const user = await models.User.findAll({
        where:{
            id: id
        }
    })
    res.status(200).json({
        status: 200,
        message: "Berhasil get data user by id",
        data : user
    })
}
const createUser = async (req, res) =>{
    try{
        const{firstName, lastName, email, phone_number, img_url}= req.body
        const user = await models.User.create({
            firstName,
            lastName,
            email,
            phone_number,
            img_url
        })
        res.status(200).json({
            status: 200,
            message: "Create Data Success",
            data: user
        })

    }catch(error){
        res.status(500).json({
            status: 500,
            message: error.message
        })
    }
}
const updateUser = async(req, res) =>{
    try{
        const id = req.params.id
        const {firstName, lastName, email, phone_number, img_url}= req.body
        const user = await models.User.update(
            {
                firstName,
                lastName,
                email,
                phone_number,
                img_url
            },
            {
                where : {
                    id: id
                }
            })
            res.status(200).json({
                status: 200,
                message: "Update user Successfully",
                data: user
            })


    }catch(error){
        res.status(500).json({
            status: 500,
            message: error.message
        })
    }
}
const deleteUser = async(req, res) =>{
    try{
        const id = req.params.id
        const user = await models.User.destroy(
            {
                where: {
                    id: id
                },
            })
            res.status(200).json({
                status: 200,
                message: "Delete user Successfully",
                data: user
            })


    }catch(error){
        res.status(500).json({
            status: 500,
            message: error.message
        })
    }
}

module.exports = {
    getAllUser,
    createUser,
    updateUser,
    deleteUser,
    getUserById
}