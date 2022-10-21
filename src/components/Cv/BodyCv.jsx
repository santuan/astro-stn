import React from "react";

const Tech = ({ description, children }) => {
  return (
    <>
      <div className="flex mt-4 print:mt-3">
        <span className="w-6 mt-0.5 font-black">*</span>
        <div className="flex flex-col w-full">
          <p>{description}</p>
          {children ? (
            <div className="flex flex-wrap items-start justify-start w-full text-sm italic font-medium">{children}</div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

const TechsItem = ({ title, percentage }) => {
  return (
    <div className="mt-2 mr-2 text-sm font-medium border-b-2 print:text-xs text-zinc-700 border-zinc-200 dark:text-zinc-300 dark:border-zinc-700 hover:opacity-70 print:border-zinc-300 print:opacity-100">
      #{title}
      <hr
        style={{ width: `${percentage}` }}
        className={` border-t-0 border-b-2 top-0.5 relative border-zinc-600 dark:border-zinc-300 print:border-zinc-500`}
      />
    </div>
  );
};
const WorkExperience = ({ title, role, line, sector, time, children }) => {
  return (
    <>
      <div className="relative my-3 print:mt-2">
        <h3 className="text-lg font-bold print:text-base">{title}</h3>
        {role && <h4 className="relative text-sm italic font-medium print:text-xs opacity-70 -top-1">{role}</h4>}
        <p className="pt-1 pr-0 md:pr-0 print:pr-6 print:pt-0">{children}</p>
        <time className="relative right-0 flex items-center mb-3 space-x-3 text-xs md:italic top-2 print:space-x-0 print:items-end print:m-0 print:flex-col md:space-x-0 md:m-0 md:items-end md:flex-col md:absolute print:absolute print:top-1">
          {sector && <span className="md:mb-0.5 text-xs mr-1 uppercase md:mr-0">sector {sector}</span>}
          {time}
        </time>
      </div>
      {line && <hr className="mb-3 border-dashed border-zinc-900 opacity-30" />}
    </>
  );
};

const EducationItem = ({ time, line, children, description }) => {
  return (
    <>
      <div className="relative my-3 print:mt-2">
        <h3 className="text-lg font-medium print:text-base">{children}</h3>
        <h4 className="text-base print:text-xs">{description}</h4>
        <time className="absolute right-0 italic opacity-70 top-1">{time}</time>
      </div>
      {line ? <hr className="mb-3 border-dashed border-zinc-900 print:border-zinc-800 opacity-30" /> : ""}
    </>
  );
};

const Title = ({ title }) => {
  return (
    <>
      <div className="mt-3">
        <div className="border-b-2 border-dotted border-zinc-300 print:border-zinc-800">
          <h2 className="relative inline-block py-2 text-xl font-black uppercase border-b-2 border-zinc-500 print:text-base dark:border-white print:border-zinc-800 top-0.5">
            {title}
          </h2>
        </div>
      </div>
    </>
  );
};

const BodyCv = () => {
  return (
    <>
      <div className="grid w-full max-w-2xl min-h-screen grid-cols-1 mx-auto mt-3 text-sm print:mt-0 dark:text-white md:gap-2 print:max-w-full print:grid-cols-5 md:grid-cols-5 print:min-h-full print:text-xs">
        <div className="relative flex-initial col-span-2 md:pr-6 print:pr-12 ">
          <div className="mt-3">
            <Title title="knowledge" />
            <h3 className="mt-4 text-base font-medium uppercase print:text-sm">ux and ui designer</h3>
            <Tech description="Advanced use of Adobe & Windows">
              <TechsItem title="illustrator" percentage="100%" />
              <TechsItem title="photoshop" percentage="100%" />
              <TechsItem title="afterEffects" percentage="50%" />
              <TechsItem title="vsCode" percentage="100%" />
              <TechsItem title="inDesign" percentage="50%" />
              <TechsItem title="blender" percentage="33%" />
            </Tech>
            <Tech description="Accessible design approach adapted to any device." />
            <Tech description="Compatibility working with web standards." />
            <Tech description="Advanced web layout.">
              <TechsItem title="html5" percentage="90%" />
              <TechsItem title="svg" percentage="80%" />
              <TechsItem title="sass" percentage="70%" />
              <TechsItem title="figma" percentage="60%" />
              <TechsItem title="tailwindCSS" percentage="80%" />
              <TechsItem title="cssModules" percentage="70%" />
              <TechsItem title="designSystems" percentage="70%" />
            </Tech>
            <h3 className="mt-4 text-base font-medium uppercase print:text-sm">frontend developer</h3>
            <Tech description=" Intermediate level using Linux terminal and git version control." />
            <Tech description="Intermediate experience creating models for headless cms and connecting to frontends.">
              <TechsItem title="contentfulCMS" percentage="70%" />
              <TechsItem title="sanityCMS" percentage="70%" />
              <TechsItem title="jekyll" percentage="50%" />
              <TechsItem title="netlifyCms" percentage="50%" />
              <TechsItem title="django" percentage="10%" />
            </Tech>
            <Tech description="Experience working with a variety of development frameworks.">
              <TechsItem title="gatsby.js" percentage="70%" />
              <TechsItem title="next.js" percentage="70%" />
              <TechsItem title="ember.js" percentage="60%" />
              <TechsItem title="vue.js" percentage="50%" />
            </Tech>
            <Tech description="Deploying and optimization.">
              <TechsItem title="netlify" percentage="60%" />
              <TechsItem title="gh-pages" percentage="70%" />
              <TechsItem title="vercel" percentage="60%" />
              <TechsItem title="lighthouse" percentage="80%" />
              <TechsItem title="purgeCss" percentage="80%" />
            </Tech>
          </div>
        </div>
        <div className="col-span-3 ">
          <Title title="Work Experience" />
          <WorkExperience
            title="Public Prosecutor's Office"
            role="ux/ui designer and frontend developer"
            sector="public"
            time="Nov. 2018 ‒ Present"
            line
          >
            Updating and enhancing the current development design process and user experience for the websites and
            applications for the institution.
          </WorkExperience>
          <WorkExperience
            title="Chamber of Deputies - Argentina"
            role="ux designer and junior frontend developer"
            sector="public"
            time="Feb. 2014 ‒ Dec. 2015"
            line
          >
            Improve the user experience on the Digital Parliamentary System. Enhanced the parliamentary processes from
            web to print. Create internal and external websites for the institution.
          </WorkExperience>
          <WorkExperience
            title="Estudio Criteria"
            role="junior web designer"
            sector="private"
            time="Feb. 2013 ‒ Mar. 2014"
            line
          >
            Designer and developer of corporate websites. Brand design and corporate brochures.
          </WorkExperience>
          <WorkExperience
            title="Revision Alpha Hosting"
            role="junior web designer"
            sector="private"
            time="Feb. 2011 ‒ Mar. 2013"
          >
            Newsletter design / Company websites. Server Technical support / Basic management of hosting servers.
          </WorkExperience>
          <Title title="Education" />
          <EducationItem description="7 years and made 76,47% of the career" time="2007 - 2014" line>
            Graphic Design student (UBA)
          </EducationItem>
          <EducationItem description="Orthotypography course." time="2013" line>
            Tipitos Argentinos
            <i className="ml-1 text-sm italic font-normal normal-case opacity-80 print:text-xs">by Aldo de Losa</i>
          </EducationItem>
          <EducationItem description="First Certificate Exam" time="1999 - 2007" line>
            Clover english centre
          </EducationItem>
          <EducationItem description="Focus on computer programming." time="2002 - 2007">
            High school
          </EducationItem>
        </div>
      </div>
    </>
  );
};

export default BodyCv;
