import { useRef } from "react";
import "./portifolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "/react-commerce.png",
    desc: "A React commerce web app provides a user-friendly and interactive online shopping experience. Leveraging React's component-based architecture, the app is able to efficiently manage and update the user interface as customers browse products, add items to their cart, and proceed through the checkout process. The use of React allows for a dynamic and responsive user experience, enabling real-time updates without the need for full page reloads.",
  },
  {
    id: 2,
    title: "Next.js Blog",
    img: "/blognext.png",
    desc: "Next.js is a React framework that helps developers build server-rendered and static websites. It offers features like automatic SEO, code splitting, and data fetching that make it a popular choice for creating blogs.",
  },
  {
    id: 3,
    title: "Vanilla JS App",
    img: "/vanilla-js.jpg",
    desc: "Vanilla JavaScript is pure JavaScript without any frameworks or libraries. It's the most basic and fundamental form of JavaScript, and it's often used for simple web applications or interactive elements on a webpage.",
  },
  {
    id: 4,
    title: "Music App",
    img: "/music.jpg",
    desc: " A music app is a software application that allows users to listen to music, manage their music library, and discover new music. Music apps can be web-based, mobile, or desktop applications.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
      target: ref,
    //   offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
const Portifolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portifolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item} />
      ))}
    </div>
  );
};

export default Portifolio;
