const express=require("express")

const cors=require("cors")

const app=express()

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    return res.status(200).send({message : "welcome to ecommerce api - node",status:true})
})

const authRouters = require("./routes/auth.route")
app.use("/auth",authRouters);

const userRouters = require("./routes/user.route")
app.use("/api/users",userRouters);

const productRouter = require("./routes/product.routes");
app.use("/api/products",productRouter);

const adminProductRouter = require("./routes/adminProduct.routes");
app.use("/api/admin/products/",adminProductRouter);

const cartRouter = require("./routes/cart.routes");
app.use("/api/cart",cartRouter);

const cartItemRouter = require("./routes/cartItem.routes");
app.use("/api/cart_Items",cartItemRouter);

const orderRouter = require("./routes/order.routes");
app.use("/api/orders",orderRouter);

const adminOrderRouter = require("./routes/adminOrder.routes");
app.use("/api/admin/orders",adminOrderRouter);

const reviewRouter = require("./routes/review.routes");
app.use("/api/reviews",reviewRouter);

const ratingRouter = require("./routes/rating.routes");
app.use("/api/ratings",ratingRouter);

module.exports=app;