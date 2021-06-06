import React from "react";
import {FaCheckCircle} from 'react-icons/fa';

const SingleWorkLeft = ({projectData}) => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={projectData.previewImg ? projectData.previewImg : "https://dummyimage.com/400x400"}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-green-500 tracking-widest font-bold">
              {projectData.type}
            </h2>
            <h1 className="text-white text-4xl title-font font-semibold mb-1">
              {projectData.title}
            </h1>
            <p className="leading-relaxed">{projectData.description}</p>

            <h3 className="text-sm title-font text-green-500 tracking-widest font-bold my-5">
              FEATURES
            </h3>
            <div className="flex flex-wrap -mx-5 overflow-hidden text-white text-sm">
              <li className="m2-5 px-5 w-1/2 overflow-hidden">
                {projectData.featuresCol1.map((feature) => (
                  <span className="flex flex-row my-2">
                  <span className="mt-1 mr-1 text-green-400"><FaCheckCircle /></span><ul>{feature}</ul>
                  </span>
                ))}
              </li>
              <li className="m2-5 px-5 w-1/2 overflow-hidden">
                {projectData.featuresCol2.map((feature) => (
                  <span className="flex flex-row my-2">
                  <span className="mt-1 mr-1 text-green-400"><FaCheckCircle /></span><ul>{feature}</ul>
                  </span>
                ))}
              </li>
            </div>
            <div className="py-12">
              <h2 className="text-sm title-font text-green-500 tracking-widest font-bold">
                TECH STACK
              </h2>
              <p className="title-font font-medium text-md text-gray-500">
                {projectData.techStack}
              </p>
            </div>
            {projectData.link && (
              <a
                className="my-8 g-transparent hover:bg-green-500 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"
                href={projectData.link}
                target="_blank" rel="noopener noreferrer"
              >
                View Site
              </a>
            )}
            {projectData.repo && (
              <a
                className="my-8 ml-2 g-transparent hover:bg-green-500 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"
                href={projectData.repo}
                target="_blank" rel="noopener noreferrer"
              >
                View Repo
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleWorkLeft;
