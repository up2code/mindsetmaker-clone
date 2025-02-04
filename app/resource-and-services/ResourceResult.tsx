import React, { Suspense } from "react";
import Image from "next/image";
import ResourceCard from "./ResourceCard";
import { ChevronDown } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const ResourceResult = () => {
  return (
    <section>
      <Suspense
        fallback={<Skeleton className="w-[100px] h-[20px] rounded-full" />}
      >
        <Image
          className="rounded-md"
          src="/images/all-services.jpg"
          width={1200}
          height={300}
          alt="All resources"
        />
      </Suspense>
      <h3 className="my-6">จำนวนเครื่องมือทั้งหมด: 60 เครื่องมือ</h3>
      <ul className="grid grid-cols-4 gap-4">
        <li>
          <ResourceCard />
        </li>
        <li>
          <ResourceCard />
        </li>
        <li>
          <ResourceCard />
        </li>
        <li>
          <ResourceCard />
        </li>
        <li>
          <ResourceCard />
        </li>
        <li>
          <ResourceCard />
        </li>
      </ul>
      <div className="py-6 flex justify-center">
        <button className="flex justify-center items-center text-[#3367DB]">
          ดูเพิ่มเติม{" "}
          <span>
            <ChevronDown />
          </span>
        </button>
      </div>
    </section>
  );
};

export default ResourceResult;
