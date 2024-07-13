import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Modal from "react-modal";
import { AnimatePresence, motion } from "framer-motion";
import { RxCross2 } from "react-icons/rx";
import { IProduct } from "../../services/apiProducts";
import { useCategories } from "../categories/useCategories";
import { ICategory } from "../../services/apiCategories";
import { useEditProduct } from "./useEditProduct";
import { useCreateProduct } from "./useCreateProduct";
import Dropzone from "react-dropzone";
import axios from "axios";
import { IoMdCloudUpload } from "react-icons/io";

interface ProductModalProps {
  modalIsOpen: boolean;
  closeModal: () => void;
  product?: IProduct | null;
}

interface FormData {
  name: string;
  price: number;
  stock: number;
  description: string;
  category: string;
  ratings: number;
  images: string[];
}

const ProductModal: React.FC<ProductModalProps> = ({
  modalIsOpen,
  closeModal,
  product,
}) => {
  const { categories } = useCategories();
  const { editProduct } = useEditProduct();
  const { createProduct } = useCreateProduct();
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
    clearErrors,
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      price: 0,
      stock: 0,
      description: "",
      category: "",
      ratings: 0,
      images: [],
    },
  });

  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (product) {
      reset({
        name: product.name,
        price: product.price,
        stock: product.stock,
        description: product.description,
        category: product.category._id,
        ratings: product.ratings,
        images: product.images,
      });
      setUploadedImages(product.images);
    } else {
      reset({
        name: "",
        price: 0,
        stock: 0,
        description: "",
        category: "",
        ratings: 5,
        images: [],
      });
      setUploadedImages([]);
    }
  }, [product, reset]);

  const onSubmit = (newProduct: FormData) => {
    clearErrors("images");

    newProduct.price = Number(newProduct.price);
    newProduct.stock = Number(newProduct.stock);
    newProduct.ratings = Number(newProduct.ratings);
    newProduct.images = uploadedImages;
    if (product) {
      editProduct({ newProduct, productId: product?._id });
    } else {
      createProduct(newProduct);
    }
    closeModal();
  };

  const onDrop = async (acceptedFiles: File[]) => {
    setLoading(true);
    const imageUploads = acceptedFiles.map(async (file) => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "cleancode");

      try {
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/djkdk03mf/image/upload",
          formData
        );
        return response.data.secure_url;
      } catch (error) {
        console.error("Error uploading image:", error);
        return null;
      }
    });

    const imgUrls = await Promise.all(imageUploads);
    setUploadedImages((prevImages) => [
      ...prevImages,
      ...imgUrls.filter((url): url is string => url !== null),
    ]);
    setLoading(false);
  };

  const removeImage = (index: number) => {
    setUploadedImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <AnimatePresence>
      {modalIsOpen && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Product Details"
          className="container z-50 mx-5"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
            className="relative md:w-2/3 mx-auto h-[80vh] overflow-auto rounded-lg bg-[#18191a] p-8 shadow-lg"
          >
            <button
              onClick={closeModal}
              className="absolute right-3 top-3 rounded-full bg-white p-2 text-xl text-gray-600 shadow-lg transition-transform duration-300 will-change-transform hover:scale-90 lg:text-2xl"
            >
              <RxCross2 />
            </button>
            <h2 className="text-xl font-semibold text-white mb-6">
              {product ? "Edit Product" : "Create Product"}
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-400 font-medium mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name", { required: "Name is required" })}
                  className="focus:border-blue-600 w-full rounded-lg border-2 border-[#2c3c4c]  px-3 py-3 caret-blue-600 focus:outline-none bg-[#2D2E2F] text-white"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="price"
                  className="block text-gray-400 font-medium mb-1"
                >
                  Price
                </label>
                <input
                  type="number"
                  id="price"
                  {...register("price", { required: "Price is required" })}
                  className="focus:border-blue-600 w-full rounded-lg border-2 border-[#2c3c4c]  px-3 py-3 caret-blue-600 focus:outline-none bg-[#2D2E2F] text-white"
                />
                {errors.price && (
                  <p className="text-red-500 text-sm">{errors.price.message}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="stock"
                  className="block text-gray-400 font-medium mb-1"
                >
                  Stock
                </label>
                <input
                  type="number"
                  id="stock"
                  {...register("stock", { required: "Stock is required" })}
                  className="focus:border-blue-600 w-full rounded-lg border-2 border-[#2c3c4c]  px-3 py-3 caret-blue-600 focus:outline-none bg-[#2D2E2F] text-white"
                />
                {errors.stock && (
                  <p className="text-red-500 text-sm">{errors.stock.message}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block text-gray-400 font-medium mb-1"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  {...register("description", {
                    required: "Description is required",
                  })}
                  className="focus:border-blue-600 w-full rounded-lg border-2 border-[#2c3c4c]  px-3 py-3 caret-blue-600 focus:outline-none bg-[#2D2E2F] text-white"
                />
                {errors.description && (
                  <p className="text-red-500 text-sm">
                    {errors.description.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="category"
                  className="block text-gray-400 font-medium mb-1"
                >
                  Category
                </label>
                <select
                  {...register("category", {
                    required: "Category is required",
                  })}
                  className="focus:border-blue-600 w-full rounded-lg border-2 border-[#2c3c4c]  px-3 py-3 caret-blue-600 focus:outline-none bg-[#2D2E2F] text-white"
                  defaultValue={product?.category._id}
                >
                  {categories?.map((category: ICategory) => (
                    <option value={category._id} key={category._id}>
                      {category.name}
                    </option>
                  ))}
                </select>
                {errors.category && (
                  <p className="text-red-500 text-sm">
                    {errors.category.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="ratings"
                  className="block text-gray-400 font-medium mb-1"
                >
                  Ratings
                </label>
                <input
                  id="ratings"
                  {...register("ratings", { required: "Ratings are required" })}
                  className="focus:border-blue-600 w-full rounded-lg border-2 border-[#2c3c4c]  px-3 py-3 caret-blue-600 focus:outline-none bg-[#2D2E2F] text-white"
                />
                {errors.ratings && (
                  <p className="text-red-500 text-sm">
                    {errors.ratings.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="images"
                  className="block text-gray-400 font-medium mb-1"
                >
                  <div className="flex items-center gap-1">
                    <p>Images</p>
                    <span className="text-xs text-blue-600">
                      Upload multiple images
                    </span>
                  </div>
                </label>
                <Controller
                  name="images"
                  control={control}
                  rules={{
                    validate: () =>
                      uploadedImages.length > 0 ||
                      "At least one image is required",
                  }}
                  render={({ field }) => (
                    <Dropzone
                      onDrop={async (acceptedFiles) => {
                        const imgUrls = await onDrop(acceptedFiles);
                        field.onChange(imgUrls);
                      }}
                      multiple
                      accept={{
                        "image/png": [".png"],
                        "image/jpg": [".jpg"],
                        "image/jpeg": [".jpeg"],
                      }}
                    >
                      {({ getRootProps, getInputProps }) => (
                        <div
                          {...getRootProps()}
                          className="dropzone-container w-full px-8 py-3 border border-[#2c3c4c] hover:border-blue-600 rounded-lg"
                        >
                          <input {...getInputProps()} />
                          <div className="flex justify-center text-4xl">
                            <IoMdCloudUpload className="text-blue-600" />
                          </div>
                          <p className="text-slate-400 text-center">
                            Upload relevant images of the product
                          </p>
                          {loading && (
                            <p className="text-white text-center">
                              Uploading...
                            </p>
                          )}
                        </div>
                      )}
                    </Dropzone>
                  )}
                />
                {errors.images && (
                  <p className="text-red-500 text-sm">
                    {errors.images.message}
                  </p>
                )}
                <div className="mt-2 flex flex-wrap gap-3">
                  {uploadedImages.map((url, index) => (
                    <div key={index} className="relative">
                      <img
                        src={url}
                        alt={`Uploaded ${index}`}
                        className="h-24 w-24 rounded-lg"
                      />
                      <button
                        type="button"
                        className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 hover:bg-red-700"
                        onClick={() => removeImage(index)}
                      >
                        <RxCross2 />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                    loading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  {product ? "Update Product" : "Create Product"}
                </button>
              </div>
            </form>
          </motion.div>
        </Modal>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;
