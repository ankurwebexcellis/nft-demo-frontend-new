"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const NotFound: React.FC = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/contract");
  }, []);
  return null;
};

export default NotFound;
