module.exports = (mongoose) => {
  const productSchema = mongoose.Schema(
    {
      title: String,
      image: String,
      price: Number,
      description: String,
      location: String,
      rating: Number,
      sold: Number,
    },
    {
      timestamps: true,
    }
  );

  productSchema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;

    return object;
  });

  return mongoose.model("product", productSchema);
};
