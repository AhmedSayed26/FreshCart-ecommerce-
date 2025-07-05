import { ShoppingCart, Eye, Pause } from "lucide-react";
import { motion } from "framer-motion";
import { useContext } from "react";
import { CartContext } from "../Context/Cart.context";
import { NavLink, Link } from "react-router-dom";

export default function Card({ productInfo }) {
  const {
    id,
    title,
    imageCover,
    priceAfterDiscount,
    price,
    category,
    ratingsAverage,
    index,
  } = productInfo;
  const { addTocart } = useContext(CartContext);
  return (
    <div className="container">
      <div className="cursor-pointer">
        <motion.div
          key={id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.1, delay: index * 0.001 }}
          className="space-y-3 relative shadow-md p-2 rounded-md group"
        >
          <div className="relative">
            <img src={imageCover} alt={title} />
            <div className="absolute flex justify-center items-center gap-3 inset-0 bg-mainColor/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Pause className="IconStyle" />
              <ShoppingCart
                onClick={() => {
                  addTocart(id);
                }}
                className="IconStyle"
              />
              <Link to={`/Product/${id}`}>
                <Eye className="IconStyle" />
              </Link>
            </div>
          </div>
          <h3 className="text-sm text-mainColor">{category.name}</h3>
          <h2>{title.split(" ", 2).join(" ")}</h2>
          <div className="flex justify-between items-center">
            {priceAfterDiscount ? (
              <h3 className="text-red-500/60 line-through">{price} EGP</h3>
            ) : (
              <h3>{price} EGP</h3>
            )}
            <span>
              <i className="fas fa-star text-yellow-400"></i> {ratingsAverage}
            </span>
            {priceAfterDiscount && (
              <span className="bg-mainColor/60 absolute top-3 right-3 py-1 px-2 rounded text-white">
                sale {priceAfterDiscount}
              </span>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
