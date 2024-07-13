import { useState } from "react";
import { useProducts } from "../features/products/useProducts";
import { IProduct } from "../services/apiProducts";

import Swal from "sweetalert2";
import { useDeleteProduct } from "../features/products/useDeleteProduct";
import ProductModal from "../features/products/ProductModal";
import SectionTitle from "../components/SectionTitle";
import Spinner from "../components/Spinner";

const ProductManagement = () => {
  const { isLoading, error, products } = useProducts();
  const { deleteProduct } = useDeleteProduct();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);

  const openModal = (product?: IProduct) => {
    setSelectedProduct(product || null);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProduct(null);
  };

  const handleDelete = (productId: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete it!",
      background: "#363636",
      color: "#fff",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(productId);
      }
    });
  };

  if (isLoading) return <Spinner />;
  if (error)
    return (
      <h2 className="text-center text-2xl font-bold text-red-500">
        {error.message}
      </h2>
    );

  return (
    <section className="border-b border-black py-10">
      <SectionTitle
        title="Product Management"
        description="Effortlessly handle and organize your product inventory with our intuitive admin tools, ensuring seamless CRUD operations."
      />

      <div className="mb-6 flex justify-between">
        <button
          onClick={() => openModal()}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Create New Product
        </button>
      </div>
      <div className="shadow overflow-x-auto rounded-lg">
        <table className="min-w-full text-sm text-gray-400">
          <thead className="bg-gray-800 text-xs uppercase font-medium">
            <tr>
              <th></th>
              <th scope="col" className="px-6 py-3 text-left tracking-wider">
                Image
              </th>
              <th scope="col" className="px-6 py-3 text-left tracking-wider">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-left tracking-wider">
                Price
              </th>
              <th scope="col" className="px-6 py-3 text-left tracking-wider">
                Category
              </th>
              <th scope="col" className="px-6 py-3 text-left tracking-wider">
                Rating
              </th>
              <th scope="col" className="px-6 py-3 text-left tracking-wider">
                Stock
              </th>
              <th scope="col" className="px-6 py-3 text-left tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-gray-800">
            {products.map((product: IProduct, index: number) => (
              <tr
                key={product._id}
                className={`${index % 2 === 0 ? "bg-black bg-opacity-20" : ""}`}
              >
                <td className="pl-4">{index + 1}</td>
                <td className="flex px-6 py-4 whitespace-nowrap">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="h-16 w-16 object-contain"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{product.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  ${product.price}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {product.category.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {product.ratings}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{product.stock}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items center gap-2">
                    <button
                      onClick={() => openModal(product)}
                      className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition ease-in duration-300"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ProductModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        product={selectedProduct}
      />
    </section>
  );
};

export default ProductManagement;
