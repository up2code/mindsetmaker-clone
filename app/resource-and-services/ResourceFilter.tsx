import React from "react";
import { Combobox } from "../(components)/Combobox";
import { CalendarCheck, Target } from "lucide-react";

const categoryItems = [
  { label: "หมวดหมู่ทั้งหมด", value: "" },
  { label: "หลับดี", value: "หลับดี" },
  { label: "อารมณ์ดี", value: "อารมณ์ดี" },
  { label: "ความสัมพันธ์ดี", value: "ความสัมพันธ์ดี" },
  { label: "รู้จักตัวเองดี", value: "รู้จักตัวเองดี" },
  { label: "จิตใจแข็งแรงดี", value: "จิตใจแข็งแรงดี" },
  { label: "สำเร็จดี", value: "สำเร็จดี" },
];

const periodItems = [
  { label: "ทั้งหมด", value: "ทั้งหมด" },
  { label: "ทุกเมื่อที่ต้องการ", value: "ทุกเมื่อที่ต้องการ" },
  { label: "ทุกวัน", value: "ทุกวัน" },
  { label: "2 ครั้ง/วัน", value: "2 ครั้ง/วัน" },
  { label: "1 ครั้ง/สัปดาห์", value: "1 ครั้ง/สัปดาห์" },
  { label: "2-3 ครั้ง/สัปดาห์", value: "2-3 ครั้ง/สัปดาห์" },
  { label: "1 ครั้ง/เดือน", value: "1 ครั้ง/เดือน" },
];

const targetItems = [
  { label: "ทั้งหมด", value: "ทั้งหมด" },
  { label: "ทุกวัย", value: "ทุกวัย" },
  { label: "ผู้ใหญ่/ทำงาน", value: "ผู้ใหญ่/ทำงาน" },
  { label: "วัยรุ่น/เรียน", value: "วัยรุ่น/เรียน" },
  { label: "สูงวัย", value: "สูงวัย" },
];

const ResourceFilter = () => {
  return (
    <section className="flex items-center justify-between my-6">
      <h2 className="text-2xl font-bold">เลือกเครื่องมือที่ต้องการ</h2>
      <form className="flex items-center gap-10">
        <Combobox items={categoryItems} />
        <Combobox items={periodItems} leading={<CalendarCheck />} />
        <Combobox items={targetItems} leading={<Target />} />
      </form>
    </section>
  );
};

export default ResourceFilter;
