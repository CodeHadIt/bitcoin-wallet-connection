"use client"
import { useContext, useEffect } from "react";
import { AddressContext } from "@/context/AddressContext";
import { useRouter } from "next/navigation";

const Address = () => {
 const { userAddress } = useContext(AddressContext);
 const route = useRouter();

 useEffect(() => {
    if (userAddress) {
        verifyOrdinalId();
    }
 }, [userAddress])

 const verifyOrdinalId = async() => {
    // try {
    //   const response = await fetch(`https://ordapi.xyz/address/${userAddress}`);
    //   if (!response.ok) {
    //     throw new Error("No Ordinal Found");
    //   }
    //   const data = await response.json();
    //   console.log(data);
    //   route?.push("/customize");
    // } catch (error) {
    //     console.log(error);
    // }

    route?.push("/customize");

 }
  return null;
};

export default Address;
