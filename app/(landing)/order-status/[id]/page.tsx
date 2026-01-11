"use client";

import { useState } from "react";
import OrderConfirmed from "../../components/order-status/order-confirmed";
import OrderSubmitted from "../../components/order-status/order-submitted";

const OrderStatusPage = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  // Fungsi untuk mensimulasikan refresh status
  const handleRefresh = () => {
    // Di sini kita simulasiin seolah-olah setelah di-refresh status jadi confirmed
    setIsConfirmed(true);
  };

  return (
    <main className="bg-gray-100 min-h-[80vh]">
      <div className="max-w-5xl mx-auto py-20">
        <h1 className="text-5xl font-bold text-center mb-11">Order Status</h1>
        
        <div className="flex justify-center">
          {isConfirmed ? (
            <OrderConfirmed />
          ) : (
            // Lempar fungsi handleRefresh ke sini lewat props
            <OrderSubmitted onRefresh={handleRefresh} />
          )}
        </div>
      </div>
    </main>
  );
};

export default OrderStatusPage;