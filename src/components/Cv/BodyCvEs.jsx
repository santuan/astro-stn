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

const BodyCvEs = () => {
  return (
    <>
      <div className="grid w-full max-w-2xl min-h-screen grid-cols-1 mx-auto mt-3 text-sm dark:text-white md:gap-2 print:max-w-full print:grid-cols-5 md:grid-cols-5 print:min-h-full print:text-xs">
        <div className="relative flex-initial col-span-2 md:pr-8 print:pr-8 ">
          <div className="mt-3">
            <Title title="Conocimientos" />
            <h3 className="mt-4 text-base font-medium uppercase print:text-sm">diseñador ux y ui</h3>
            <Tech description="Nivel avanzado de Adobe y Windows.">
              <TechsItem title="illustrator" percentage="100%" />
              <TechsItem title="photoshop" percentage="100%" />
              <TechsItem title="afterEffects" percentage="50%" />
              <TechsItem title="vsCode" percentage="100%" />
              <TechsItem title="inDesign" percentage="50%" />
              <TechsItem title="blender" percentage="33%" />
            </Tech>
            <Tech description="Enfoque de diseño accesible y adaptado a cualquier dispositivo." />
            <Tech description="Compatibilidad trabajando con todos los navegadores." />
            <Tech description="Maquetación web avanzada.">
              <TechsItem title="html5" percentage="90%" />
              <TechsItem title="svg" percentage="80%" />
              <TechsItem title="sass" percentage="70%" />
              <TechsItem title="figma" percentage="60%" />
              <TechsItem title="tailwindCSS" percentage="80%" />
              <TechsItem title="cssModules" percentage="70%" />
              <TechsItem title="designSystems" percentage="70%" />
            </Tech>
            <h3 className="mt-4 text-base font-medium uppercase print:text-sm">desarrollador frontend</h3>
            <Tech description="Nivel intermedio de Linux con manejo de terminal de comandos y control de versiones." />
            <Tech description="Integración de aplicaciones y webs con diversos gestores de contenidos.">
              <TechsItem title="contentfulCMS" percentage="70%" />
              <TechsItem title="sanityCMS" percentage="70%" />
              <TechsItem title="jekyll" percentage="50%" />
              <TechsItem title="netlifyCms" percentage="50%" />
              <TechsItem title="django" percentage="10%" />
            </Tech>
            <Tech description="Experiencia trabajando con diferentes frameworks">
              <TechsItem title="gatsby.js" percentage="70%" />
              <TechsItem title="next.js" percentage="70%" />
              <TechsItem title="ember.js" percentage="60%" />
              <TechsItem title="vue.js" percentage="50%" />
            </Tech>
            <Tech description="Puesta en producción y optimización">
              <TechsItem title="netlify" percentage="60%" />
              <TechsItem title="gh-pages" percentage="70%" />
              <TechsItem title="vercel" percentage="60%" />
              <TechsItem title="lighthouse" percentage="80%" />
              <TechsItem title="purgeCss" percentage="80%" />
            </Tech>
          </div>
        </div>
        <div className="col-span-3 ">
          <Title title="Experiencia Laboral" />
          <WorkExperience
            title="Ministerio Público Fiscal "
            role="diseñador ux/ui y desarrollador frontend"
            sector="público"
            time="Nov. 2018 ‒ A la fecha"
            line
          >
            Desarrollo de interfaces y experiencia de usuario para todos los sitios y aplicaciones del Ministerio.
          </WorkExperience>
          <WorkExperience
            title="Cámara de Diputados de la Nación"
            role="diseñador y maquetador frontend"
            sector="público"
            time="Feb. 2014 ‒ Dic. 2015"
            line
          >
            Diseño de interfaz del Sistema Parlamentario Digital Digitalización de diversos procesos Parlamentarios
            Creación de webs internas y externas de la institución.
          </WorkExperience>
          <WorkExperience
            title="Estudio Criteria"
            role="diseñador web junior"
            sector="privado"
            time="Feb. 2013 ‒ Mar. 2014"
            line
          >
            Diseño de marca y folleteria corporativa Diseño y maquetación de sitios webs corportivos.
          </WorkExperience>
          <WorkExperience
            title="Revision Alpha Hosting"
            role="diseñador web junior"
            sector="privado"
            time="Feb. 2011 ‒ Mar. 2013"
          >
            Maquetación de newsletters / sitios corporativos / Soporte técnico / Manejo básico de servidores.
          </WorkExperience>
          <Title title="Educación" />
          <EducationItem description="Cursado el 76,47% de la carrera." time="2007 - 2014" line>
            Diseño Gráfico (UBA)
          </EducationItem>
          <EducationItem description="Curso de refinamiento micro y macro tipográfico." time="2013" line>
            Tipitos Argentinos
            <i className="ml-1 text-sm italic font-normal normal-case opacity-80 print:text-xs">por Aldo de Losa</i>
          </EducationItem>
          <EducationItem description="First Certificate Exam" time="1999 - 2007" line>
            Clover english centre
          </EducationItem>
          <EducationItem description="Bachiller con capacitación en informática." time="2002 - 2007">
            Escuela Secundaria
          </EducationItem>
        </div>
      </div>
    </>
  );
};

export default BodyCvEs;
