"use client"
import React from 'react'
import styles from "./error.module.css"

const Error = ({ error, reset }) => {
    console.log(error.message, "error")
  return (
    <div className={styles.errorContainer}>
        <p>{error.message}</p>
    </div>
  )
}

export default Error