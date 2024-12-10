import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import companyList from "../data/companies.json";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import faqs from "../data/faq.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LandingPage = () => {
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:20">
      <section className="text-center flex flex-col items-left pt-20">
        
        <h1 className="text-7xl font-bold gradient-title mb-4 pb-4">
          Find your{" "}
          <span className="font text-rose-500">
            {/* Hide typewriter on small screens */}
            <span className="hidden sm:inline">
              <Typewriter
                words={[
                  "dream job",
                  "next opportunity",
                  "perfect role",
                  "future career",
                ]}
                loop={0} // Infinite loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
            {/* Show static text on small screens */}
            <span className="inline sm:hidden">dream job</span>
          </span>{" "}
          at{" "}
        </h1>

        <span>
          <img
            src="./talentLinkLogo.png"
            className="h-14 mx-auto"
            alt="brand-logo"
          />
        </span>
        <p className="text-gray-300 mt-10 text-xl">
          Explore thousands of job listings or find the perfect candidate
        </p>
      </section>

      <div className="flex justify-center gap-2 sm:gap-6">
        <Link to="/jobs">
          <Button variant="blue" size="xl">
            Find Jobs
          </Button>
        </Link>
        <Link to="/post-job">
          <Button variant="destructive" size="xl">
            Post Jobs
          </Button>
        </Link>
      </div>

      {/* carousel */}

      <Carousel
        className="w-full py-10"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent className="flex gap-5 sm:gap-20 items-center">
          {companyList.map(({ name, path, id }) => {
            return (
              <CarouselItem key={id} className="basis-1/3 lg:basis-1/6 ">
                <img
                  src={path}
                  alt={name}
                  className="h-9 sm:h-14 object-contain"
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>

      {/* carousel */}

      {/* cards */}

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="font-bold">For Job Seekers</CardTitle>
          </CardHeader>
          <CardContent>
            Search and apply for jobs, track applications, and more.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="font-bold">For Employers</CardTitle>
          </CardHeader>
          <CardContent>
            Post jobs, manage applications, and find the best candidates.
          </CardContent>
        </Card>
      </section>

      {/* cards */}

      {/* accordion */}

      <section>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => {
            return (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </section>

      {/* accordion */}
    </main>
  );
};

export default LandingPage;
