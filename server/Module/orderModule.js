import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    orderID: String,
    orderDate: String,
    orderTime: String,
    orderTotal: String,
    orderItems: Array,
    orderAddress: String,
    orderUser: String,
});

export const Order = mongoose.model("Order", orderSchema);