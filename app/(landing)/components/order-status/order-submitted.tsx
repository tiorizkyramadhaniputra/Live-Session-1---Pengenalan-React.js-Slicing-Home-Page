"use client";

import Image from "next/image";
import Button from "../ui/button";
import { FiRefreshCw } from "react-icons/fi";

// Tambahin tipe datanya buat onRefresh
interface OrderSubmittedProps {
  onRefresh: () => void;
}

const OrderSubmitted = ({ onRefresh }: OrderSubmittedProps) => {
  return (
    <div className="bg-white w-full max-w-[640px] p-16 flex flex-col justify-center items-center shadow-sm rounded-lg">
      <Image
        src="/images/icon-order-submitted.svg" 
        width={117}
        height={117}
        alt="order submitted"
        className="mb-4"
      />
      <h2 className="text-2xl font-semibold mb-2 text-dark">Order Submitted!!</h2>
      <p className="text-center mb-8 text-gray-600">
        Your Order is recorded in our system, we are still confirming the
        payment status, please wait and your order status will be updated in
        less than 12 hours.
      </p>
      
      {/* Sekarang onClick manggil onRefresh dari props */}
      <Button 
        size="small" 
        variant="dark" 
        className="w-full gap-2" 
        onClick={onRefresh}
      >
        <FiRefreshCw />
        Refresh Order Status
      </Button>
    </div>
  );
};

export default OrderSubmitted;