import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

export const ShowToastError = ({ msg }) => {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (!showToast) {
      toast.error(msg);
      setShowToast(true);
    }
  }, [setShowToast, showToast, msg]);

  return null;
};
