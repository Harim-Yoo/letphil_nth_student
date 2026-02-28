import { useEffect, useState } from "react";
/**
 * Goal: Disable page scrolling when a modal overlay is active.
 * Task:
 * - Create an 'isOpen' boolean state to toggle a "modal" view.
 * - When 'isOpen' is true, set document.body.style.overflow to "hidden".
 * - When 'isOpen' is false, set it back to "unset" or "auto".
 * Constraints:
 * - You must provide a cleanup function to ensure the scroll is re-enabled if the component unmounts while the modal is open.
 */
export const ModalScrollLock = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true)
  useEffect(()=>{
    isOpen ? document.body.style.overflow = "hidden" : document.body.style.overflow = "unset"
    return () => {document.body.style.overflow = "unset"}
  }, [isOpen])
  return <></>;
};