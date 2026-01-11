"use client";

import Image from "next/image";

const OrderConfirmed = () => {
  return (
    <div className="bg-white w-full max-w-[640px] p-16 flex flex-col justify-center items-center shadow-sm rounded-lg">
      <Image
        src="/images/icon-order-confirmed.svg" // Ganti ke icon centang/confirmed kamu
        width={117}
        height={117}
        alt="order confirmed"
        className="mb-4 text-primary"
      />
      <h2 className="text-2xl font-semibold mb-2 text-dark">Order Confirmed!!</h2>
      <p className="text-center text-gray-600">
        We have received your payment, and your order is currently processed by
        our staff, just wait until your favorite sportswear arrive in your home.
        We will contact you in Whatsapp for further shipping updates.
      </p>
    </div>
  );
};

export default OrderConfirmed;