module.exports = mongoose =>{


    const categorySchema = mongoose.Schema(
        {
            category_name:String,
            category_image:String,
        },{
            timestamps: true
        }
    );

    categorySchema.method("toJSON",function(){
        const {__v, _id , ...object} = this.toObject()
        object.id = _id;

        return object
    })

    return mongoose.model("category",categorySchema)
}