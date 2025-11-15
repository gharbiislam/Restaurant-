import React from "react";
import Button from "../components/Button";
import { FaRegStar } from "react-icons/fa6";

import { IoCheckmark } from "react-icons/io5";
const Pricing = () => {
  const packages = [
    {
      list: [
        "Set number of hours per month",
        "Priority turnaround",
        "Flexible scope (design, dev, SEO)",
        "Direct access to your creative team",
        "Monthly planning & check-ins",
      ],
    },
    {
      list: [
        "Fixed scope, timeline & deliverables",
        "One-time fee based on scope",
        "Full focus on a single goal (e.g. launch, rebrand)",
        "Dedicated team for your project",
        "Clear milestones & approvals",
      ],
    },
    {
      services: [
        "Landing Page",
        "Full Website",
        "Branding Package",
        "Packaging Design",
      ],
      prices: ["1999", "4999", "2999", "1499"],
    },
  ];
  return (
    <section className="mt-[200px] px-10 flex flex-col gap-10">
      <div className="lg:flex justify-between">
        <h5 className="text-h5 text-black">[06 Pricing]</h5>
        <h2 className="text-h2-md lg:text-h2 text-black  lg:w-2/3 lg:text-right">
          Flexible plans. Serious impact.
          <span className="text-black_60"> We are here for you.</span>
        </h2>
      </div>

      <p className="text-caption text-black_60">
        *Prices listed are estimates based on typical project scopes. For a
        precise quote, please contact us.
      </p>

      {/**cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
        {/**left card */}
        <aside className="col-span-1 bg-white px-10 pb-10 pt-7 space-y-10 rounded-2xl">
          {/*contents */}
          <div className="space-y-10">
            <div className="space-y-8">
              <div className="space-y-4">
                <h4 className="text-h4">Subscription</h4>
                <p className="text-body text-black_60">
                  Ideal for brands that need regular creative, design, or dev
                  work.
                </p>
              </div>

              <p className="text-body text-black_60">
                <span className="text-h3 text-black">$ 4999</span> /month
              </p>
            </div>

            {/**Features */}
            <div className="space-y-6">
              <span className="badge">What's Included</span>

              <ul className="text-left space-y-2 mb-6">
                {packages[0].list.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <IoCheckmark className="icon w-4 h-4 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1">
            <Button className="w-fit ">Start Monthly Plan</Button>
          </div>
        </aside>

        {/**right card */}
        <aside className="col-span-2 bg-white px-10 pb-10 pt-7 space-y-10 rounded-2xl">
          <div className="space-y-10">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <h4 className="text-h4">Per Project</h4>
                  <span className="py-2 px-4  rounded-full  text-body bg-white  border border-black flex gap-2 items-center">
                    <FaRegStar className="w-4 h-4" />
                    <p className="hidden md:block">Popular Choice</p>
                  </span>
                </div>
                <p className="text-body text-black_60 md:w-1/2">
                  Perfect for brands that need a full-service launch, a one-off
                  redesign, or a focused creative sprint.
                </p>
              </div>

              <p className="text-h3 text-black">
                From
                <span className="">$ 1499</span>
              </p>
            </div>

            {/**Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-6">
                <span className="badge">What's Included</span>

                <ul className="text-left space-y-2 mb-6">
                  {packages[1].list.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <IoCheckmark className="icon w-4 h-4 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/**services */}
              <div className="space-y-6">
                <span className="badge">Popular Services</span>
                <div className="flex justify-between gap-6">
                  <ul className="text-left space-y-2 mb-6 list-disc ml-5">
                    {packages[2].services.map((item, i) => (
                      <li key={i}>
                        <div className="flex items-center gap-2">{item}</div>
                      </li>
                    ))}
                  </ul>

                  <ul className="text-left space-y-2 mb-6 ">
                    {packages[2].prices.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        ${item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1  lg:grid-cols-3 gap-6 items-center">
            <Button className="w-fit">Get a Costum Quote</Button>
            <p className="text-black_60 text-body col-span-2">
              We’ll tailor the quote to your timeline, goals, and budget.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Pricing;
