import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      className="services"
      variants={variants}
      initial="initial"
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your </motion.b>
            Business.
          </h1>
          <button>WHAT WE DO ?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            My portfolio is not just a collection of projects; it is a carefully
            curated showcase of my coding craftsmanship. Clean lines, intuitive
            design, and user-centric experiences are the pillars of my brand.
            Simplicity is not just a design choice – it is an invitation for
            visitors to explore my work effortlessly.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            My portfolio is not just a collection of projects; it is a carefully
            curated showcase of my coding craftsmanship. Clean lines, intuitive
            design, and user-centric experiences are the pillars of my brand.
            Simplicity is not just a design choice – it is an invitation for
            visitors to explore my work effortlessly.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            My portfolio is not just a collection of projects; it is a carefully
            curated showcase of my coding craftsmanship. Clean lines, intuitive
            design, and user-centric experiences are the pillars of my brand.
            Simplicity is not just a design choice – it is an invitation for
            visitors to explore my work effortlessly.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            My portfolio is not just a collection of projects; it is a carefully
            curated showcase of my coding craftsmanship. Clean lines, intuitive
            design, and user-centric experiences are the pillars of my brand.
            Simplicity is not just a design choice – it is an invitation for
            visitors to explore my work effortlessly.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
