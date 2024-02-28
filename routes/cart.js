const express = require("express")
const router = express.Router()
const cart = require("../models/cartschema")

//create cart
router.post("/createcart" , async(req,res)=>{
    try {
        // console.log(req.body);
        const cartitem = new cart(req.body)
        const savecart = await cartitem.save()
        if(savecart){
           return res.status(200).json(savecart)
        }
    } catch (error) {
        console.log(error);
    }
})
//get cart item by emailid
router.get("/getcartitembyemailid/:emailid" , async(req,res)=>{
    try {
        const getcartitem = await cart.find({email:req.params.emailid})
        if(getcartitem){
            return res.status(200).json(getcartitem)
        }
    } catch (error) {
        console.log(error);
    }
})

router.delete("/deletecart/:id" , async(req,res)=>{
    try {
        await cart.deleteOne({_id:req.params.id})
    } catch (error) {
        console.log(error);
    }
})

router.put("/updatecart/:id" , async(req,res)=>{
    try {
     await cart.findByIdAndUpdate({_id:req.params.id} , {quantity:req.body.quantity})
    } catch (error) {
        console.log(error);
    }
})

module.exports=router