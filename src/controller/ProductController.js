const productmodel = require("../model/productModel")
const {CreateURL} = require('../ImageUploader/ImageURL')


exports.createproduct = async (req, res) => {
    try {
        
        const data = req.body;
        const ImageData = req.file;
        const productimgurl= await CreateURL(ImageData.path)
        data.ProductImg = productimgurl;
        
        console.log(productimgurl)

        const productData = await productmodel.create(data);
        return res.status(201).send({ status: true, message: "Product data created sucessfully!", data: productData })


    }
    catch (err) { return res.status(500).send({status:false,msg:err.message}) }

}