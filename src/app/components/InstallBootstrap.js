"use client";
import { useEffect } from "react";
export default function InstallBoostrap() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.min.js");
  }, []);
  return <></>;
}
