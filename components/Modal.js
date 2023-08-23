"use client";
import React from "react";
import { createPortal } from "react-dom";

// CartModal
export default function Modal() {
  return createPortal(
    <p>Modal</p>,
    document.getElementById('portal')
  );
}
