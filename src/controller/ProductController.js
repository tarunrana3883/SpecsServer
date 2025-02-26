const productmodel = require("../model/productModel")
const {CreateURL} = require('../ImageUploader/ImageURL')


exports.createproduct = async (req, res) => {
    try {
        
        const data = req.body;
        const ImageData = req.file;
       
    
        if(!ImageData) return res.status(400).send({status:false,msg:"Please Provide Product Image"})

        const productimgurl= await CreateURL(ImageData.path)
        data.ProductImg = productimgurl;
        

        const productData = await productmodel.create(data);
        return res.status(201).send({ status: true, message: "Product data created sucessfully!", data: productData })


    }
    catch (err) { return res.status(500).send({status:false,msg:err.message}) }

}

exports.GetAllProductByShopKeeper = async (req, res) => {
    try {
        
       const getData =  await productmodel.find().select({profileImg:1,ProductName:1,ProductPrice:1})
        return res.status(201).send({ status: true, message: "Get All Product sucessfully!", data: getData })


    }
    catch (err) { return res.status(500).send({status:false,msg:err.message}) }

}