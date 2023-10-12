"use client";
import React from "react";
import { Card, CardBody, Button, Typography } from "@material-tailwind/react";
import { CheckIcon } from "@heroicons/react/24/outline";


const PRICING_OPTIONS = [
  "25 Classes",
  "200 Learning hours  ",
  "Expert-led instruction",
  "Certificate of completion",
];

export function Pricing() {
  return (
    <div className="grid min-h-screen place-items-center">
      <section className="container mx-auto px-10">
        <div className="grid place-items-center pb-20 text-center">
          <Typography variant="h2" color="blue-gray">
            Best no-tricks pricing
          </Typography>
          <Typography variant="lead" className="mt-2 !text-gray-500 lg:w-5/12">
            If you are not satisfied, contact us within the first 30 days and we
            will send you a full refund.
          </Typography>
        </div>
        <Card className="px-6 pb-5">
          <CardBody>
            <Typography variant="h3" color="blue-gray">
              React Course Membership
            </Typography>
            <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
              <div>
                <Typography
                  variant="paragraph"
                  className="mb-10 mt-2 w-full font-normal !text-gray-500"
                >
                  Our Course Package offers full access to the React Course,
                  including all course materials, assignments, and projects.
                </Typography>
                <div className="flex flex-wrap items-center gap-x-20 gap-y-6">
                  <Typography variant="h6" color="blue-gray">
                    What is included
                  </Typography>
                  <hr className="w-72 bg-gray-500" />
                </div>

                <div className="mt-8 grid grid-cols-2 justify-between gap-x-12 gap-y-2">
                  {PRICING_OPTIONS.map((option, key) => (
                    <div key={key} className="flex items-center gap-4">
                      <CheckIcon
                        className="h-4 w-4 text-gray-900"
                        strokeWidth={3}
                      />
                      <Typography
                        variant="paragraph"
                        className="font-normal !text-gray-500"
                      >
                        {option}
                      </Typography>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid place-items-center lg:justify-end">
                <Typography variant="h6" color="blue-gray">
                  Pay once, own it forever
                </Typography>
                <Typography variant="h1" color="blue-gray">
                  $399
                </Typography>
                <Button color="gray" className="my-3">
                  get access
                </Button>
                <Typography
                  variant="small"
                  className="font-normal !text-gray-500"
                >
                  Get a free sample (20MB)
                </Typography>
              </div>
            </div>
          </CardBody>
        </Card>
      </section>
    </div>
  );
}


export default Pricing;
