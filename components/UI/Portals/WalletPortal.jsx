"use client"
import { useEffect, useRef, useState, } from 'react'
import { createPortal } from 'react-dom';

const WalletPortal = ({ children, selector}) => {
  const ref = useRef();
  const [componentMounted, setComponentMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector(selector);
    setComponentMounted(true);
  }, [selector]);
  return componentMounted ? createPortal(children, ref.current) : null;
}

export default WalletPortal;