import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export default function Questions() {
  return (
    <section className="w-full min-h-[50vh] flexing__layout ">
      <div className="flex-1">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Where i can watch?</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. In fuga
              repellat dolorem. Consequatur earum mollitia ad doloribus
              consectetur esse optio dignissimos voluptatum et minus, eum vero
              eius asperiores corporis officia?
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>How do i cancel?</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. In fuga
              repellat dolorem. Consequatur earum mollitia ad doloribus
              consectetur esse optio dignissimos voluptatum et minus, eum vero
              eius asperiores corporis officia?
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>is suitable for kids?</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. In fuga
              repellat dolorem. Consequatur earum mollitia ad doloribus
              consectetur esse optio dignissimos voluptatum et minus, eum vero
              eius asperiores corporis officia?
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="sm:flex-1">
        <Image
          src="https://i.pinimg.com/564x/22/52/e3/2252e3bb758f59ee8c011db44d0d5258.jpg"
          alt="s"
          width={300}
          height={500}
          className="w-[30rem] h-[30rem]"
        />
      </div>
    </section>
  );
}
