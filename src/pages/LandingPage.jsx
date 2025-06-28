import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Autoplay from "embla-carousel-autoplay";
import companies from '../data/companies.json';
import faqs from '../data/faq.json';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
function LandingPage() {
  return (
    <main className="flex flex-col gap-10 py-10 sm:gap-20 sm:py-20">
        <section className='text-center'>
            <h1 className='flex flex-col items-center justify-center gradient-title text-4xl  font-extrabold sm:text-6xl lg:text-8xl'>Find Your Dream Job {" "} 
              <span className='flex gap-2 intems-center sm:gap-6'>and get
                <img src="logo.png" alt="Hirrd Logo" className="h-14 sm:h-24 lg:h-32"/> </span> </h1>
            <p className='text-gray-300 sm:mt-4 text-xs sm:text-xl'>Explore thousands of job postings or find the perfect candidate</p>
        </section>
        <div className='flex justify-center gap-6'>
            <Link to="/Job">
                <Button variant="blue" size="xl">Find Jobs</Button>
            </Link>
            <Link to="/PostJob">
                <Button variant="destructive" size="xl" >Post a Job</Button>
            </Link>
        </div>
        <Carousel plugins={[Autoplay({delay: 2000,}),]} className="py-10  w-full">
          <CarouselContent className="flex gap-5 sm:gap-20 items-center">
            {companies.map(({name, id, path})=> {
              return (
                <CarouselItem key={id} className='basis-1/3 lg:basis-1/6'>
                  <img src={path} alt={name} 
                  className='h-9 sm:h-14 object-contain'/>
                </CarouselItem>
              )
            })}
          </CarouselContent>
        </Carousel>
        <div className='flex items-center justify-center '>
          <img src="/banner.jpg" alt='Banner Img' className='w-8/10' />
        </div>
        <section className='grid grid-cols-1 sm:grid-cols-2 pl-4 pr-4 gap-4'>
          <Card>
  <CardHeader>
    <CardTitle>For Job Seekers</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Search and apply for jobs , track applications, and more </p>
  </CardContent>
</Card>
<Card>
  <CardHeader>
    <CardTitle>For Employers</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Post Jobs , manage Applications and find the best Candidate</p>
  </CardContent>
</Card>
        </section>

        <Accordion className='pr-10 sm:pr-20 pl-10 sm:py-20 ' type="single" collapsible>
          {faqs.map((faq,index)=>{
            return(<AccordionItem key={index} value={`item-${index+1}`}>
    <AccordionTrigger>{faq.question}</AccordionTrigger>
    <AccordionContent>
      {faq.answer}
    </AccordionContent>
  </AccordionItem>)
  })}
</Accordion>
</main>
  )
}

export default LandingPage;
