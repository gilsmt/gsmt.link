"use client";

import { useLocaleSelector } from "gt-next";
import { dayjs } from "@/lib/dayjs";

const Today = () => {
    const { locale } = useLocaleSelector();
    dayjs.locale(locale);
    return dayjs().format("MMMM DD");
};

export { Today };
