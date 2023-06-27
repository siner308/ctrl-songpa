import useTranslation from "@/hooks/useTranslation";
import React, { useState } from "react";
import NavBarButtonGroup from "@/components/NavBarButtonGroup";
import Image from "next/image";

export default function NavBar() {
  const i18n = useTranslation();

  return (
    <div className={"bg-blue-500 flex justify-between p-2"}>
      <div className={"flex items-center"}>
        <div className="relative h-10 w-10 mobile:w-8 mobile:h-8 rounded-md mr-2 bg-blue-100">
          <Image alt={"icon"} src={"/logo.png"} fill />
        </div>
        <span className={"self-center text-white text-2xl mobile:text-sm"}>
          {i18n.title}
        </span>
      </div>
      <div className={"flex mobile:flex-col self-center"}>
        <NavBarButtonGroup />
      </div>
    </div>
  );
}
