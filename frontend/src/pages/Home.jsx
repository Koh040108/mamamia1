import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import LatestCollectionItem from '../components/LatestCollection';
import BestSeller from '../components/BestSeller';

const Home = () => {
    return (
        <div>
            {/* Hero Section with fade-up effect */}
            <motion.div
                className="hero-section"
                initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and 50px below
                whileInView={{ opacity: 1, y: 0 }} // Fade to full opacity and move to original position
                viewport={{ once: true, amount: 0.1 }} // Trigger when 10% of the element is in view
                transition={{ duration: 1 }} // Transition duration
            >
                <Hero />
            </motion.div>

            {/* Latest Collection Section with fade-up effect */}
            <motion.div
                className="latest-collection"
                initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and 50px below
                whileInView={{ opacity: 1, y: 0 }} // Fade to full opacity and move to original position
                viewport={{ once: true, amount: 0.1 }} // Trigger when 10% of the element is in view
                transition={{ duration: 1 }}
            >
                <LatestCollectionItem />
            </motion.div>

            {/* Best Seller Section with fade-up effect */}
            <motion.div
                className="best-seller"
                initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and 50px below
                whileInView={{ opacity: 1, y: 0 }} // Fade to full opacity and move to original position
                viewport={{ once: true, amount: 0.1 }} // Trigger when 10% of the element is in view
                transition={{ duration: 1 }}
            >
                <BestSeller />
            </motion.div>
        </div>
    );
};

export default Home;
