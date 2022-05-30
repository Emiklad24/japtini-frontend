/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import PropTypes from "prop-types";

const ProductCard = ({ product }) => {
  return (
    <Link href={`/products/${product.slug}`} passHref>
      <div className="w-full flex flex-row items-center justify-between border-t py-4">
        <div className="mr-4 h-auto transition p-4 duration-500 ease-in-out hover:bg-giftshop-white hover:shadow-xl border-2 border-jp-gray-min rounded-lg ">
          <div className="product-image h-auto md:h-2/3 bg-jp-gray-light w-full ">
            <img
              src={product?.img || ""}
              alt={product.name || ""}
              className="mx-auto object-center"
            />
          </div>

          <div className="rounded border-2 border-black text-center py-1 my-4">
            <div className="text-sm text-black font-light">
              {product?.name || ""}
            </div>
          </div>

          <div className="buy-button rounded-l border-2 border-black my-4">
            <div className="md:text-sm text-xs text-black font-bold flex justify-between">
              <div className="pl-4 py-1 w-1/2 mr-2">
                ₦{Number(product?.price).toLocaleString() || ""}
              </div>
              <div
                className="text-white px-4 py-1 w-1/2 cursor-pointer"
                // onClick={() => addToCartHandler(product)}
              >
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCard;
