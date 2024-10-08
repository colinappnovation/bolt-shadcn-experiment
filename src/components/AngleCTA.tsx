import React from 'react';
import { Button } from '@/components/ui/button';

interface AngleCTAProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  imageSrc: string;
}

export function AngleCTA({ title, description, buttonText, buttonHref, imageSrc }: AngleCTAProps) {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative mb-8 lg:mb-0">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {title}
            </h2>
            <p className="mt-3 text-lg text-gray-500">
              {description}
            </p>
            <div className="mt-8">
              <Button asChild>
                <a href={buttonHref} className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yellow-600 hover:bg-yellow-700">
                  {buttonText}
                </a>
              </Button>
            </div>
          </div>
          <div className="relative lg:h-full">
            <div className="relative h-0 pb-[60%] lg:absolute lg:inset-0 lg:h-full lg:w-full">
              <div className="absolute inset-0 bg-yellow-400 transform skew-y-6 sm:skew-y-0 sm:rotate-6 sm:rounded-3xl"></div>
              <img
                className="absolute inset-0 w-full h-full object-cover rounded-3xl shadow-xl"
                src={imageSrc}
                alt="People working on laptops"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}