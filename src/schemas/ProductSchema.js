import * as Yup from 'yup';

const ProductSchema = Yup.object().shape({
  title: Yup.string().min(3).max(40).required(),
  price: Yup.number().min(0).max(10000).required(),
  description: Yup.string().min(3).max(180).required(),
  categoryId: Yup.number().required(),
  images: Yup.array().of(Yup.string()),
});

export { ProductSchema };
