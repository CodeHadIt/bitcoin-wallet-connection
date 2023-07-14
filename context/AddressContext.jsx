"use client";

import { createContext, useState } from "react";
import { getAddress } from "sats-connect";

export const AddressContext = createContext();

export const AddressProvider = ({ children }) => {
  const [userAddress, setUserAddress] = useState(null);

  const getUserAddress = (wallet) => {
    if (wallet === "unisat") {
      getUnisatAddress();
    } else if (wallet === "hiro") {
      getHiroAddress();
    } else if (wallet === "xverse") {
      getXverseAddress();
    }
  };
  
  const getUnisatAddress = async () => {
    if (typeof window.unisat !== "undefined") {
      try {
        let accounts = await window.unisat.requestAccounts();
        setUserAddress(accounts[0]);
      } catch (e) {
        console.log("connect failed");
      }
    } else {
      alert("Please Install Unisat Wallet");
    }
  };

  const getHiroAddress = async () => {
    if (typeof window.btc !== "undefined") {
      try {
        const response = await window.btc?.request("getAddresses");
        const addresses = response.result.addresses;
        const tapRootAddress = addresses.find(
          (address) => address.type === "p2tr"
        );
        setUserAddress(tapRootAddress.address);
      } catch (error) {
        console.log(error)
      }
    } else {
      alert("Please install Hiro Wallet");
    }
  };

  const getAddressOptions = {
    payload: {
      purposes: ["ordinals", "payment"],
      message: "Address for receiving Ordinals and payments",
      network: {
        type: "Mainnet",
      },
    },
    onFinish: (response) => {
      const addresses = {
        ordinal: response.addresses[0].address,
        payment: response.addresses[1].address,
      };
      setUserAddress(addresses.ordinal);
    },
    onCancel: () => alert("Request canceled"),
  };

  const getXverseAddress = async () => {
      try {
        await getAddress(getAddressOptions);
      } catch (error) {
        alert(`${error.message}`)
      }
    };

  return (
    <AddressContext.Provider value={{ userAddress, getUserAddress }}>
      <div>{children}</div>
    </AddressContext.Provider>
  );
};
