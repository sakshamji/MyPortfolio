import React from "react";



const Experience = () => {
  return (
   <div
         name="experience"
         className="w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white"
       >
         <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
           <div className="pb-8">
             <p className="text-4xl font-bold inline border-b-4 border-gray-500">
               Experience
             </p>
           </div>

           <div class="space-y-6 border-l-200 border-dashed">
                   <div class="relative w-full">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-blue-500">
                       <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                     </svg>
                     <div class="ml-6">
                       <h4 class="font-bold text-white-500">Cognizant | Backend Development.</h4>
                       <p class="mt-2 max-w-screen-sm text-sm text-gray-500">

                        <li>Developed REST APIs using SpringBoot and PostgreSQL to store data from various micro-services</li>
                        <li>Contributed to full-stack web application using Angular, SpringBoot, AWS AuroraDB and Docker to analyze
                            internal team workflows</li>
                        <li>Worked within a CI/CD environment,automating build and deployment processes resulting in improved
                            productivity.</li>
                        <li>Participated in the development of roadmap and strategies for documenting and presenting API specifications in an
                            easy and consumable format</li>

                       </p>
                       <span class="mt-1 block text-sm font-semibold text-white-500">Aug 2022 - present</span>
                     </div>
                   </div>
                   <div class="relative w-full">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-blue-500">
                       <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                     </svg>
                     <div class="ml-6">
                       <h4 class="font-bold text-white-500">SpringML | Data Engineer</h4>
                       <p class="mt-2 max-w-screen-sm text-sm text-gray-500">
                       <li>Developed Geographical dashboard using Google Looker and python</li>
                       <li>Developed and Deployed chatbot using Google Dialogflow on Google Cloud</li>
                       <li>Contributed to the migration project using Google Cloud,BigQuery and Angular.</li>
                       </p>
                       <span class="mt-1 block text-sm font-semibold text-white-500">Jan 2022 - July 2022</span>
                     </div>
                   </div>
                   <div class="relative w-full">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-blue-500">
                       <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                     </svg>
                     <div class="ml-6">
                       <h4 class="font-bold text-white-500">Juspay | Frontend Development</h4>
                       <p class="mt-2 max-w-screen-sm text-sm text-gray-500">
                       <li>Developed process tracker dashboard using R,Shiny and PostgresSQL</li>
                       <li>Contributed to comprehensive user manuals, API documentation, and technical specifications for the project</li>
                       <li>Provide support to team by troubleshooting bugs within the application</li>
                       </p>
                       <span class="mt-1 block text-sm font-semibold text-white-500">Apr 2021 - Jun 2021</span>
                     </div>
                   </div>

                 </div>
         </div>
       </div>
  );
};

export default Experience;


