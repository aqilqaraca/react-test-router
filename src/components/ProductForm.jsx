import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { addProduct } from "../store/actions";

const AddProductForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      author: "",
      year: "",
      rating: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      author: Yup.string().required("Author is required"),
      year: Yup.number().required("Year is required"),
      rating: Yup.number().required("Rating is required"),
    }),
    onSubmit: (values) => {
      dispatch(addProduct({ ...values, id: Date.now() }));
      formik.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      {formik.touched.name && formik.errors.name ? (
        <div>{formik.errors.name}</div>
      ) : null}

      <label htmlFor="author">Author</label>
      <input
        id="author"
        name="author"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.author}
      />
      {formik.touched.author && formik.errors.author ? (
        <div>{formik.errors.author}</div>
      ) : null}

      <label htmlFor="year">Year of publication</label>
      <input
        id="year"
        name="year"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.year}
      />
      {formik.touched.year && formik.errors.year ? (
        <div>{formik.errors.year}</div>
      ) : null}
      <label htmlFor="rating">Rating</label>
      <input
        id="rating"
        name="rating"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.rating}
      />
      {formik.touched.rating && formik.errors.rating ? (
        <div>{formik.errors.rating}</div>
      ) : null}

      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;
