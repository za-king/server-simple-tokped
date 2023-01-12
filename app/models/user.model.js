module.exports = mongoose =>{


    const userSchema = mongoose.Schema(
        {
            username:String,
            password:String,
        },{
            timestamps: true
        }
    );

    userSchema.method("toJSON",function(){
        const {__v, _id , ...object} = this.toObject()
        object.id = _id;

        return object
    })

    return mongoose.model("user",userSchema)
}