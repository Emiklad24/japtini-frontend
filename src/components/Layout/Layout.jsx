import React from "react";
import PropTypes from "prop-types";
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          variants={{
            pageInitial: {
              opacity: 0,
            },
            pageAnimate: {
              opacity: 1,
              transition: {
                duration: 0.5,
              },
            },
            pageExit: {
              opacity: 0,
            },
          }}
          exit="pageExit"
        >
          <div>{children}</div>
        </motion.div>
      </AnimatePresence>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
