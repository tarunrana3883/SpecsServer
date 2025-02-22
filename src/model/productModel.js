const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({

    ProductImg: { type: String, required: true, trim: true },
    Shopkeeperid: { type: String, required: true, trim: true },
    title: { type: String, required: [true, "Please provide the Name"], trim: true },
    description: { type: String, required: [true, "Please provide the Des"], trim: true },
    cateogry: { type: String,enum:['men','women','kids','old'], required: [true, "Please provide the cata"], trim: true },
    rating: { type: Number, required: true, trim: true },
    numberofRating: { type: Number, required: true, default:5, trim: true },
    size: { type: String,enum:['Wide','Narrow','Medium','ExtraWide'], required: [true, "Please provide the size"], trim: true },
    fashion: { type: String,enum:['Sport','Fashion','Classic','Old'], required: [true, "Please provide the fashion"], trim: true },
    Price: { type: Number, required: true, trim: true },
    modelNo: { type: String, required: true, trim: true },
    isdeleted: { type: Boolean, default: false }


}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema)






