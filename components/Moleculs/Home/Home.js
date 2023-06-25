import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import logoKreasiAsia from "../../../public/Work/KreasiAsia.svg";
import logoPrantara from "../../../public/Work/Prantara.svg";
import logoRedhunter from "../../../public/Work/Redhunter.svg";
import logoStartcode from "../../../public/logo.jpg";

const description =
  "I'm Afif Syaifullah, a junior developer.";

const BriefcaseIcon = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  );
};
const ArrowRightIcon = (props) => {
  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        {...props}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.04289 19.2071C7.65237 18.8166 7.65237 18.1834 8.04289 17.7929L13.8358 12L8.04289 6.20711C7.65237 5.81658 7.65237 5.18342 8.04289 4.79289C8.43342 4.40237 9.06658 4.40237 9.45711 4.79289L15.25 10.5858C16.031 11.3668 16.031 12.6332 15.25 13.4142L9.45711 19.2071C9.06658 19.5976 8.43342 19.5976 8.04289 19.2071Z"
          fill=""
        />
      </svg>
    </>
  );
};
// const Resume = () => {
  const Project = () => {
    let listProject = [
      {
        title: "Nomads Travel",
        desc: "Nomads Travel is an application that helps people to buy tickets. This application was created using Laravel.",
        link: "https://github.com/afifsyaifullah1512/nomads-travel",
        date: "In-Progress",
      },
      {
        title: "New Project",
        desc: "This is a new project description.",
        link: "https://github.com/your-username/your-repo",
        date: "Date",
      },
    ];
  
    return (
      <>
        <h1 className="text-2xl font-bold text-woodsmoke-900 dark:text-white">
          The Last Of Project
        </h1>
        <div className="flex flex-wrap gap-6 mt-6">
          {listProject.map((project, index) => {
            return (
              <div
                key={index}
                className="flex flex-col rounded-2xl p-6 hover:bg-zinc-100 dark:bg-woodsmoke-700 dark:bg-opacity-40 dark:backdrop-blur-lg dark:hover:bg-woodsmoke-600 dark:hover:bg-opacity-40 dark:transition-all transition-all"
              >
                <span className="border-l-2 border-zinc-200 pl-2 text-woodsmoke-400 text-sm dark:text-woodsmoke-300">
                  {project.date}
                </span>
                <h1 className="mt-4 font-semibold text-lg text-woodsmoke-800 dark:text-white">
                  {project.title}
                </h1>
                <p className="mt-2 text-woodsmoke-400 text-sm dark:text-woodsmoke-300">
                  {project.desc}
                </p>
                <a
                  href={project.link}
                  className={
                    "flex items-center gap-x-2 text-xs mt-4 w-fit text-woodsmoke-500 hover:text-indigo-500 font-semibold group transition-colors"
                  }
                >
                  View Project
                  <ArrowRightIcon className="fill-woodsmoke-400 h-4 w-4 group-hover:fill-indigo-500 transition-colors" />
                </a>
              </div>
            );
          })}
        </div>
      </>
    );
  };
  
const Home = () => {
  return (
    <>
      <Image
        src={"/pict.JPG"}
        className={
          "w-16 h-16 rounded-full border-2 border-woodsmoke-50 dark:border-woodsmoke-800"
        }
        width={64}
        height={64}
        alt={"Profile"}
      />
      <div className="max-w-2xl mt-8">
        <TypeAnimation
          sequence={[
            "I'm Junior Developer",
            1000,
            "Fresh Graduates from Universitas Putra Indonesia YPTK Padang.",
            2000,
          ]}
          wrapper="h1"
          cursor={true}
          repeat={false}
          className={
            "font-bold dark:text-white text-woodsmoke-900 text-3xl sm:text-5xl tracking-tight"
          }
        />
        <p className="text-woodsmoke-400 text-base mt-4 dark:text-woodsmoke-300">
          {description}
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-7 gap-x-8 gap-y-6">
        <div className="col-span-1 lg:col-span-4">
          <Project />
        </div>
        {/* <div className="flex flex-col gap-y-6 col-span-1 lg:col-span-3">
          <Resume />
        </div> */}
      </div>
    </>
  );
};

export default Home;
