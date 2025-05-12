import React from 'react';

export default function HiringSolutions() {
  return (
    <div className="flex flex-col w-full bg-white pt-32">
      <div className="container mx-auto px-4 py-8">
        {/* First Section - Image Left, Text Right */}
        <div className="flex flex-col md:flex-row w-full gap-6 md:gap-12 mb-8 md:mb-16">
          <div className="w-full md:w-1/2">
            <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg">
              <img
                src="/hr-1.png"
                alt="People in business meeting shaking hands"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl  font-semibold text-black mb-4">
              Find The Most Streamlined Hiring Solutions With Us
            </h2>
            <p className="text-lg text-gray-700">
              A strong focus on workforce talent shapes both existing and potential employees&apos;
              relationship with the organization, and it has a direct impact on business.
            </p>
          </div>
        </div>

        {/* Second Section - Text Left, Image Right */}
        <div className="flex flex-col md:flex-row-reverse w-full gap-6 md:gap-12">
          <div className="w-full md:w-1/2">
            <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg">
              <img
                src="/hr-2.png"
                alt="Team discussing strategies"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h3 className="text-3xl font-semibold text-black mb-3">Optimize Hiring Practices</h3>
            <p className="text-base text-gray-700 mb-4">
              A strong focus on workforce talent shapes both existing and potential employees&apos;
              relationship with the organization, and it has a direct impact on business. We
              understand that the global HR needs are ever evolving, and staying ahead of the
              curve is always best practice. Successful organizations want a more desirable
              workplace outlook to attract and retain top talents from a vast pool of
              professionals.
            </p>
            <p className="text-base text-gray-700">
              Venovax, as part of the latest vertical expansion into HR sustainability, offers
              subscription to a suite of premium tools to enhance your employer branding,
              boost your positioning as a key employer within the industry in which you operate,
              and grow your organization by connecting talent development efforts with
              your business performance and success.
            </p>
          </div>
        </div>
        <div className=" py-20 px-6 flex justify-center items-center">
          <div className="bg-gradient-to-r from-gray-800 to-gray-300 rounded-xl px-8 py-12 text-center">
            <p className="text-white text-4xl  font-bold ">
              &ldquo; The last thing you need in your future,<br />
              is an employee with a past. &rdquo;
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full gap-6 md:gap-12 mb-8 md:mb-16">
          <div className="w-full md:w-1/2">
            <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg">
              <img
                src="/hr-3.png"
                alt="People in business meeting shaking hands"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl  font-semibold text-black mb-4">
              Background Screening
            </h2>
            <p className="text-base text-gray-700">
              With Venovox, you can directly tap into the expertise of the most seasoned background screening specialists in the industry. Our team comprises of extensively trained associates across virtually every jurisdiction, making us well-equipped to handle the hands-on aspects of background screening such as criminal background checks, substance abuse testing, credit reporting, human resource policy development, and a range of physical security solutions. We leverage cutting-edge technology in our investigation techniques and security solutions to provide clients with added value. Each investigation is overseen by our team personally to guarantee that every client receives the level of attention they require.
            </p>
          </div>
        </div>

        {/* Second Section - Text Left, Image Right */}
        <div className="flex flex-col md:flex-row-reverse w-full gap-6 md:gap-12">
          <div className="w-full md:w-1/2">
            <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg">
              <img
                src="/jr-4.avif"
                alt="Team discussing strategies"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h3 className="text-3xl font-semibold text-black mb-3">Workplace Investigation</h3>
            <p className="text-base text-gray-700 space-x-4 mb-4">
              Workplace investigation is a process used to gather and examine information to determine whether a workplace policy or procedure has been violated. It is an important tool for employers to address allegations of wrongdoing in the workplace. These investigations are typically conducted in response to complaints of harassment, discrimination, or other forms of misconduct. The goal of a workplace investigation is to gather information and evidence to determine if the allegations are substantiated, and to take appropriate corrective action if necessary.
            </p>
            <p className="text-base text-gray-700">
              Our field investigators are experts in conducting interviews on victims, witnesses, and culprits, reviewing documents, and gathering other relevant information to facilitate the workplace investigation. They are trained to remain impartial and objective throughout the investigation process. Once the investigation is complete, our investigators provide a report detailing the findings and any recommended actions.
            </p>
          </div>
        </div>



      </div>
    </div>
  );
}