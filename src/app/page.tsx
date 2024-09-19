"use client";
import { motion } from "framer-motion";
import { BiPhone } from "react-icons/bi";
import { CgMail } from "react-icons/cg";

export default function Home() {
  return (
    <div className=" p-2 w-11/12 m-auto overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0.2 }}
        whileInView={{ opacity: 1 }}
        className="container object-cover  rounded-md  shadow-sm p-4  overflow-hidden flex justify-center items-cente mt-2 flex-col text-center "
      >
        <h1 className=" text-8xl font-extrabold m-2 flex-shrink text-base-100 ">
          We are
        </h1>
        <div className=" rounded-md overflow-hidden ring-1 ring-base-100 md:w-1/2 sm:w-10/12 m-auto h-[40vh] object-contain flex items-center justify-center">
          <video
            muted
            src="/images/func10.mp4"
            className=" object-cover w-full h-full"
            loop
            playsInline
            autoPlay
          ></video>
        </div>
      </motion.div>

      <div className=" bullet-info p-3 md:w-10/12 m-auto">
        <hr className=" opacity-15 m-1" />
        <div className="  font-bold text-lg flex flex-row  "></div>
        <div className=" flex frex-row flex-wrap flex-grow  justify-evenly text-accent md:m-4 ">
          <div className=" flex flex-col gap-2">
            <h4 className=" text-secondary text-center text-lg font-extrabold  ">
              Leave us if you Are Not:
            </h4>

            <div className=" bg-primary bg-opacity-20 hover:bg-opacity-100 focus:bg-opacity-100 transition-all  shadow-lg  rounded-lg ring-offset-4   m-2 p-4 ">
              <h5>One of the geeks who want to make a difference </h5>
            </div>
            <div className=" bg-primary bg-opacity-20  hover:bg-opacity-100 focus:bg-opacity-100 transition-all shadow-lg  rounded-lg ring-offset-4   m-2 p-4 ">
              <h5>
                Interested in the big white thig with million pixels light{" "}
              </h5>
            </div>
            <div className=" bg-primary bg-opacity-20 hover:bg-opacity-100 focus:bg-opacity-100 transition-all  shadow-lg  rounded-lg ring-offset-4   m-2 p-4 ">
              <h5>Feeling behind in the tech industy </h5>
            </div>
          </div>
          <div className=" flex flex-col gap-2  ">
            <h4 className=" text-secondary text-center text-lg font-extrabold ">
              We are in love with you if You Are:
            </h4>
            <div className=" bg-primary bg-opacity-20  hover:bg-opacity-100 focus:bg-opacity-100 transition-all shadow-lg  rounded-lg ring-offset-4   m-2 p-4 ">
              <h5>A boring wreckless bedroom developer </h5>
            </div>
            <div className=" bg-primary bg-opacity-20  hover:bg-opacity-100 focus:bg-opacity-100 transition-all   shadow-lg  rounded-lg ring-offset-4   m-2 p-4 ">
              <h5>Tired of the traditional educational method </h5>
            </div>
            <div className=" bg-primary bg-opacity-20  hover:bg-opacity-100 focus:bg-opacity-100 transition-all shadow-lg  rounded-lg ring-offset-4   m-2 p-4 ">
              <h5>Ready to be the CHANGE </h5>
            </div>
          </div>
        </div>
        <motion.div
          className="bg-primary bg-opacity-45 hover:bg-opacity-100 focus:bg-opacity-100 transition-all text-white mt-8 p-4 md:p-10 rounded-lg flex flex-col shadow-lg "
          style={{ width: "100%", maxHeight: "60%", textAlign: "center" }}
        >
          <h1 className="text-2xl font-bold text-left pl-2">
            We Are Redefining Learning In Tech Globally
          </h1>
          <p className="text-sm font-bold text-left my-4 pl-2">
            Nothing stays thesame with us!
          </p>
          <div className=" m-2 object-contain overflow-hidden rounded-md flex  justify-center items-center">
            <img src="/images/peopleLearning.jpg" />
          </div>{" "}
        </motion.div>
        <div className="p-4 w-11/12 m-auto my-4">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              type: "spring",
              stiffness: 100,
              delay: 0,
            }}
          >
            <h1 className="text-5xl  text-primary my-2 font-bold">
              About Func10 Edu-Tech NGO
            </h1>
          </motion.div>

          <div className=" text-primary flex gap-4 flex-col">
            <p className="text-xl">
              Func10 is a forward-thinking edu-tech NGO on a mission to redefine
              the way people engage with technology and learning. We focus on
              empowering individuals who are passionate about tech, innovation,
              and personal growth.
            </p>
            {""}
            <p className="text-xl">
              Our vision is to break down barriers in traditional education by
              offering an engaging, practical, and tech-driven approach that
              prepares learners for the demands of today’s fast-evolving digital
              world.
            </p>{" "}
            <p className="text-xl">
              At Func10, we believe education should be more than just theory—it
              should be hands-on, exciting, and accessible to everyone,
              regardless of background.
            </p>
          </div>
        </div>
        <motion.div
          // initial={{ opacity: 0.5, y: -100 }}
          // whileInView={{ opacity: 1, y: 0 }}
          className=" text-right p-3 text-primary flex flex-col gap-2 justify-between"
        >
          <h4>Hungry for More? </h4>
          <h1 id="hungry">Now Join Us Today, It is More Than Education</h1>

          <motion.div className="mb-4">
            <p className="text-xl">
              Join us today and become part of a global movement that is
              transforming education one mind at a time!
            </p>
          </motion.div>
          <form>
            <div className=" w-full flex flex-col gap-4 flex-grow md:w-1/2 m-auto ">
              <div className=" flex flex-row   w-full flex-wrap gap-4">
                <div className="flex w-full sm:w-1/2 flex-col md:flex-row  gap-3 ">
                  <input
                    className="  rounded-md bg-secondary  shadow-sm p-4 "
                    placeholder="Favorite Name"
                  ></input>
                  <input
                    className="  rounded-md bg-secondary shadow-sm p-4 "
                    placeholder="Full Name"
                  ></input>
                </div>
                <div className="flex w-full sm:w-1/2  flex-col md:flex-row  gap-3 ">
                  <input
                    className=" rounded-md bg-secondary shadow-sm p-4 "
                    placeholder="Email"
                  ></input>
                  <input
                    className="  rounded-md bg-secondary shadow-sm p-4 "
                    placeholder="Phone Number "
                  ></input>
                </div>
              </div>
              <input
                className=" rounded-md bg-secondary shadow-sm p-4 "
                placeholder="Your interests in tech (comma separated e.g python skills, web engineering, ai ect.)"
              ></input>

              <hr className=" opacity-10 m-1"></hr>
              <textarea
                cols={10}
                className=" rounded-md bg-secondary shadow-sm p-4 "
                placeholder="Tell us more about your interest or just you and maybe what you want right now in tech."
              ></textarea>
              <button className=" btn-primary bg-primary rounded-md shadow-sm w-full p-3">
                Submit
              </button>
            </div>
          </form>
        </motion.div>{" "}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className=" m-4 text-secondary"
        >
          <h1 className=" text-lg font-bold">Now reach us below</h1>
          <small>
            Feel free to tell us how we can meet your needs, recommendations are
            very well appreciated and even rewarded when proven right!
          </small>
        </motion.div>
        <hr className=" opacity-55 m-1"></hr>
        <motion.div
          initial={{ scale: 0, transform: "blur(10)" }}
          whileInView={{ scale: 0.5, transform: "blur(0)" }}
          className=" contact flex-row flex gap-3 justify-between flex-wrap text-xl font-extrabold text-primary "
        >
          <div className=" contact flex-col flex gap-3 justify-between flex-wrap ">
            <h1>
              {" "}
              <CgMail /> func10@io.com{" "}
            </h1>
            <h1>
              {" "}
              <CgMail /> func10@gmail.com{" "}
            </h1>
          </div>
          <div className=" contact flex-col flex gap-3 justify-between flex-wrap ">
            <h1>
              {" "}
              <BiPhone /> +1 (252) 349-3038{" "}
            </h1>
            <h1>
              {" "}
              <BiPhone /> +234 813 868 2705{" "}
            </h1>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
