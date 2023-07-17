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
    try {
      const response = await fetch(
        `https://ordapi.bestinslot.xyz/v1/get_inscriptions/${userAddress}`
      );
      if (!response.ok) {
        throw new Error("No Ordinal Found");
      }
      console.log(response, "response");
      const data = await response.json();
      console.log(data, "data");
      if (data.token_id) {
        route?.push("/customize");
      } 
    } catch (error) {
        console.log(error);
    }
 }
  return null;
};

export default Address;
