"use client";

// Importing necessary dependencies from React
import { useState, useEffect, useRef } from "react";

// Component for the content of the modal
const ModalContent = () => (
  <div className="bg-[#FFFFFF] rounded-lg relative w-[21.438rem] drop-shadow-md font-sans md:w-[31.25rem]">
    <div className="text-[#000000] my-[1.563rem] mx-[1.563rem]">
      <div className="mb-[1.563rem] text-base">
        <p className="font-bold mb-4">
          Please select your scheme to login into your pension portal.
        </p>
        <p className="mt-6">
          If you have any questions, please do not hesitate to contact us on{" "}
          <strong>0000 000 0000</strong> or{" "}
          <strong>
            <u className="text-[#002BFF] cursor-pointer">email@email.com </u>
          </strong>
        </p>
      </div>

      <div className="flex flex-col text-lg font-bold text-[#FFFFFF] gap-y-[1.563rem] leading-6 ">
        <button className="px-[1.563rem] py-[0.938rem] bg-[#002BFF] rounded-md cursor-pointer">
          LOGIN TO SCHEME A
        </button>
        <button className="px-[1.563rem] py-[0.938rem] bg-[#002BFF] rounded-md cursor-pointer">
          LOGIN TO SCHEME B
        </button>
      </div>
    </div>
  </div>
);

// Modal component
const Modal = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track whether the modal is open or not
  const modalRef = useRef(null); // Reference to the modal element

  const openModal = () => {
    setIsOpen(true); // Function to open the modal by setting the isOpen state to true
  };

  const closeModal = () => {
    setIsOpen(false); // Function to close the modal by setting the isOpen state to false
  };

  const handleClickOutside = (event) => {
    // Function to handle clicks outside the modal
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      // Check if the clicked element is outside the modal
      closeModal(); // Close the modal
    }
  };

  const handleEscapeKey = (event) => {
    // Function to handle the Escape key press
    if (event.key === "Escape") {
      closeModal(); // Close the modal if the Escape key is pressed
    }
  };

  useEffect(() => {
    if (isOpen) {
      // When the modal is open
      document.addEventListener("mousedown", handleClickOutside); // Add event listener to handle clicks outside the modal
      document.addEventListener("keydown", handleEscapeKey); // Add event listener to handle the Escape key press
    }

    return () => {
      // Cleanup function
      document.removeEventListener("mousedown", handleClickOutside); // Remove event listener for clicks outside the modal
      document.removeEventListener("keydown", handleEscapeKey); // Remove event listener for the Escape key press
    };
  }, [isOpen]);

  return (
    <div>
      <button
        className=" bg-[#00AF40] text-white py-3 px-[1.375rem] rounded-md text-2xl border-[#009135] border-[1.5px] font-sans leading-7 font-bold cursor-pointer"
        onClick={openModal}
      >
        LOGIN
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-[#000000] opacity-50"></div>
          <div className="flex items-center justify-center" ref={modalRef}>
            <ModalContent closeModal={closeModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;

