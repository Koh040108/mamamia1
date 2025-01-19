import React from 'react';
import koh from '../assets/koh.jpg'
import thos from '../assets/thos.jpg'
import vnat from '../assets/vnat.jpg'
import muzan from '../assets/muzan.jpg'

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <header className="text-center py-12 bg-gray-700 text-white">
                <h1 className="text-4xl font-bold">About Us</h1>
                <p className="text-xl mt-2">Learn more about our mission, vision, and team</p>
            </header>

            <section className="container mx-auto my-10 px-6 md:px-12">
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                        <p className="text-lg text-gray-700">
                            At Mamamia, our mission is to provide exceptional culinary experiences through authentic recipes, innovative dishes, and quality service. We are committed to bringing people together through food, creating lasting memories for every guest.
                        </p>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
                        <p className="text-lg text-gray-700">
                            Our vision is to be the leading restaurant that delivers unique dining experiences with a focus on exceptional taste and community engagement. We aim to expand globally and continue creating memorable dining moments for our customers.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-gray-100 py-10">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-semibold mb-8">Meet Our Team</h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        {/* Team Member 1 */}
                        <div className="w-64 bg-white shadow-lg rounded-lg overflow-hidden">
                            <img
                                src={koh}
                                className="w-full h-72 object-cover"
                                alt="Team Member 1"
                            />
                            <div className="p-4">
                                <h5 className="text-xl font-semibold">John Doe</h5>
                                <p className="text-gray-600">Founder & CEO</p>
                            </div>
                        </div>

                        {/* Team Member 2 */}
                        <div className="w-64 bg-white shadow-lg rounded-lg overflow-hidden">
                            <img
                                src={thos}
                                className="w-full h-72 object-cover"
                                alt="Team Member 2"
                            />
                            <div className="p-4">
                                <h5 className="text-xl font-semibold">Jane Smith</h5>
                                <p className="text-gray-600">Marketing Director</p>
                            </div>
                        </div>

                        {/* Team Member 3 */}
                        <div className="w-64 bg-white shadow-lg rounded-lg overflow-hidden">
                            <img
                                src={muzan}
                                className="w-full h-72 object-cover"
                                alt="Team Member 3"
                            />
                            <div className="p-4">
                                <h5 className="text-xl font-semibold">Alex Lee</h5>
                                <p className="text-gray-600">Content Manager</p>
                            </div>
                        </div>

                        {/* Team Member 4 */}
                        <div className="w-64 bg-white shadow-lg rounded-lg overflow-hidden">
                            <img
                                src={vnat}
                                className="w-full h-72 object-cover"
                                alt="Team Member 4"
                            />
                            <div className="p-4">
                                <h5 className="text-xl font-semibold">Muzan Kibutsuji</h5>
                                <p className="text-gray-600">Head Chef</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
