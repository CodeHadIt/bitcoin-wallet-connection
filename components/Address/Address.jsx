"use client"
import { useContext, useEffect } from "react";
import { AddressContext } from "@/context/AddressContext";
import { useRouter } from "next/navigation";

const Address = ({ setFailedValidation }) => {
  const { userAddress } = useContext(AddressContext);
  const route = useRouter();

  useEffect(() => {
    if (userAddress) {
      verifyOrdinalId();
    }
  }, [userAddress]);

  const verifyOrdinalId = async () => {
    try {
      const response = await fetch(
        `https://api.ordex.ai/v0.1/items/byOwner?blockchains=BITCOIN&owner=BITCOIN%3A${userAddress}`
      );
      if (!response.ok) {
        throw new Error("No Ordinal Found");
      }
      const data = await response.json();
      const items = data.items;
      const regex = /BITCOIN:(.*?)/;
      const validation = items.some((item) => regex.test(item.id));
      if (validation) {
        route?.push("/customize");
      } else {
        setFailedValidation(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return null;
};

export default Address;
