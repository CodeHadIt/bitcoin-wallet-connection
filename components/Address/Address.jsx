"use client"
import { useContext, useEffect } from "react";
import { AddressContext } from "@/context/AddressContext";
import { useRouter } from "next/navigation";

const Address = () => {
 const { userAddress } = useContext(AddressContext);

 useEffect(() => {
    if (userAddress) {
        verifyOrdinalId();
    }
 }, [userAddress])

 const verifyOrdinalId = async() => {
    try {
      const response = await fetch(`https://ordapi.xyz/address/${userAddress}`);
      if (!response.ok) {
        throw new Error("No Ordinal Found");
      }
      const data = await response.json();
      console.log(data);
      //If check is successful, grant access
      // route?.push("url/");
    } catch (error) {
        console.log(error);
    }

 }
  return userAddress && <div>{userAddress}</div>;
};

export default Address;
