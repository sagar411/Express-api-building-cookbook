const mongoose = require("mongoose");
const ProductSchemaDef = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      index:true
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    summary:{ 
        type:String,
        index:true
    },
    description: {
        type: String,
        index:true
    },

    category: [{
      type: mongoose.Types.ObjectId,
      ref: "Category",
      required: true,
    }],

    price: {
      type: Number,
      required: true,
      min: 1,
    },
    discount: {
      type: Number,
      min: 0,
      max: 100,
      default: 0,
    },
    after_discount:{
        type:Number,
        required: true,
        min:1
    },
    brand: {
      type: mongoose.Types.ObjectId,
      ref: "Label",
      default: null,
    },
    is_featured: {
      type: Boolean,
      default: false,
    },
    seller: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      default: null,
    },
    images: [String],
    status: {
        type:String,
        enum:["active", "inactive"],
        default: "inactive"
    },
    meta:{
        type: String,
        default:null
    }
  },
  {
    
    timestamps: true,
    autoIndex: true,
    autoCreate:true
  },
);

const ProductModel = mongoose.model("Product", ProductSchemaDef);
module.exports = ProductModel;
