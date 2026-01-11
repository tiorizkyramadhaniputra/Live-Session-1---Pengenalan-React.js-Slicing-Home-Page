"use client";

import Image from "next/image";
import { cartList } from "../ui/cart-popup";
import priceFormatter from "@/app/utils/price-formatter";
import Button from "../ui/button";
import { FiCreditCard, FiTrash2 } from "react-icons/fi";
import CardWithHeader from "../ui/card-with-header";
import { useRouter } from "next/navigation";

const CartItems = () => {
  const { push } = useRouter();

  const totalPrice = cartList.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  return (
    <CardWithHeader title="Cart Items">
      <div className="overflow-auto max-h-[300px]">
        {cartList.map((item, index) => (
          <div className="border-b border-gray-200 p-4 flex gap-3" key={index}>
            <div className="bg-[#F6F6F6] aspect-square w-16 flex justify-center items-center flex-shrink-0 rounded-sm">
              <Image
                /* PASTIKAN: 
                   1. Path dimulai dengan "/" (Absolute Path)
                   2. Tidak ada spasi di antara `${item.imgUrl}`
                */
                src={`/images/${item.imgUrl}`}
                width={60}
                height={60}
                alt={item.name}
                // unoptimized={true} // Opsional: Aktifkan jika masih bandel di localhost
                className="aspect-square object-contain"
              />
            </div>
            <div className="self-center flex-1 min-w-0">
              <div className="text-sm font-semibold truncate text-dark">
                {item.name}
              </div>
              <div className="flex gap-2 font-medium text-xs mt-1">
                <div className="text-gray-400">{item.qty}x</div>
                <div className="text-primary">{priceFormatter(item.price)}</div>
              </div>
            </div>
            <Button
              size="small"
              variant="ghost"
              className="w-8 h-8 p-0! self-center ml-auto text-gray-300 hover:text-red-500 transition-colors"
            >
              <FiTrash2 size={16} />
            </Button>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 p-4 bg-white">
        <div className="flex justify-between items-center font-bold">
          <div className="text-xs uppercase tracking-tight text-dark">Total</div>
          <div className="text-primary text-sm">
            {priceFormatter(totalPrice)}
          </div>
        </div>
        <Button 
          size="normal"
          variant="dark"
          className="w-full mt-4 flex items-center justify-center gap-2 py-3"
          onClick={() => push("/payment")}
        >
          <FiCreditCard size={18} />
          <span className="uppercase text-xs font-bold tracking-widest">
            Proceed to Payment
          </span>
        </Button>
      </div>
    </CardWithHeader>
  );
};

export default CartItems;