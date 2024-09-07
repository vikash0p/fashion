import React from 'react';
import Image from 'next/image';
import { FaAward, FaUsers, FaShippingFast, FaGem } from 'react-icons/fa';
import { IoMdThumbsUp } from 'react-icons/io';
import { MdOutlineGroupWork } from 'react-icons/md';

export default function AboutComponent() {
    return (
        <div className="container mx-auto py-12 px-4 lg:px-0">
            {/* Section Title */}
            <h2 className="text-4xl font-bold text-center mb-8">About Us</h2>

            {/* About Us Section */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
                {/* Image Section */}
                <div className="relative h-[400px] w-full">
                    <Image
                        src="/logo (2).png"
                        alt="About Us"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                </div>

                {/* Text Section */}
                <div className="space-y-6">
                    <h3 className="text-3xl font-semibold">Who We Are</h3>
                    <p className="">
                        Welcome to Elegant Jewelry, where craftsmanship meets elegance. We have been providing high-quality jewelry to customers worldwide for over a decade. Our mission is to bring unique designs and premium craftsmanship to everyone, making luxury accessible.
                    </p>
                    <p className="">
                        Every piece in our collection is crafted with attention to detail and love. We believe that jewelry should not only be beautiful but also meaningful. Explore our wide range of products that reflect the uniqueness and elegance in every design.
                    </p>
                </div>
            </div>

            {/* Our Story Section */}
            <div className="my-16">
                <h3 className="text-3xl font-bold text-center mb-6">Our Story</h3>
                <p className="text-center  max-w-4xl mx-auto">
                    Founded in 2010, Elegant Jewelry started as a small, family-owned business. Over the years, our passion for unique craftsmanship and customer satisfaction has helped us grow into a globally recognized brand. We take pride in offering personalized jewelry that tells your story and celebrates your unique milestones.
                </p>
            </div>

            {/* Our Values Section */}
            <div className="my-16">
                <h3 className="text-3xl font-bold text-center mb-6">Our Values</h3>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center">
                        <FaGem className="text-5xl text-primary mb-4" />
                        <h4 className="text-2xl font-semibold">Quality Craftsmanship</h4>
                        <p className=" text-center">Every piece is made with the highest standards of quality and attention to detail.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <IoMdThumbsUp className="text-5xl text-primary mb-4" />
                        <h4 className="text-2xl font-semibold">Customer Satisfaction</h4>
                        <p className=" text-center">Our top priority is ensuring every customer is delighted with their purchase.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <MdOutlineGroupWork className="text-5xl text-primary mb-4" />
                        <h4 className="text-2xl font-semibold">Integrity & Trust</h4>
                        <p className=" text-center">We operate with transparency, ensuring honest practices and fair pricing.</p>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="my-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center">
                    <FaUsers className="text-5xl text-primary mb-4" />
                    <h4 className="text-2xl font-semibold">10,000+</h4>
                    <p className="">Happy Customers</p>
                </div>
                <div className="flex flex-col items-center">
                    <FaAward className="text-5xl text-primary mb-4" />
                    <h4 className="text-2xl font-semibold">50+</h4>
                    <p className="">Awards Won</p>
                </div>
                <div className="flex flex-col items-center">
                    <FaShippingFast className="text-5xl text-primary mb-4" />
                    <h4 className="text-2xl font-semibold">Worldwide</h4>
                    <p className="">Free Shipping</p>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="my-16">
                <h3 className="text-3xl font-bold text-center mb-6">What Our Customers Say</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-secondary p-6 rounded-lg shadow-md">
                        <p className="">"The jewelry is absolutely stunning! The attention to detail and craftsmanship is unmatched. I'm in love with my new necklace!"</p>
                        <p className="mt-4 font-bold">— Sarah W.</p>
                    </div>
                    <div className="bg-secondary p-6 rounded-lg shadow-md">
                        <p className="">"Great customer service and fast shipping. I couldn't be happier with my purchase. Highly recommend Elegant Jewelry!"</p>
                        <p className="mt-4 font-bold">— David L.</p>
                    </div>
                    <div className="bg-secondary p-6 rounded-lg shadow-md">
                        <p className="">"I bought an engagement ring here, and it was perfect. My fiancée loves it, and the quality is exceptional."</p>
                        <p className="mt-4 font-bold">— Michael T.</p>
                    </div>
                </div>
            </div>

            {/* Meet the Team Section */}
            <div className="my-16">
                <h3 className="text-3xl font-bold text-center mb-6">Meet the Team</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center">
                        <Image
                            src="/medium-shot-smiley-business-team_1254992-99559.jpg"
                            alt="Team Member 1"
                            width={150}
                            height={150}
                            className="w-80 h-60"
                        />
                        <h4 className="text-xl font-bold mt-4">Jessica Smith</h4>
                        <p className="">Founder & CEO</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Image
                            src="/medium-shot-smiley-business-team_1254992-90525.jpg"
                            alt="Team Member 2"
                            width={150}
                            height={150}
                            className="w-80 h-60"
                        />
                        <h4 className="text-xl font-bold mt-4">John Doe</h4>
                        <p className="">Lead Designer</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Image
                            src="/medium-shot-smiley-business-team_1108314-395646.jpg"
                            alt="Team Member 3"
                            width={150}
                            height={150}
                            className="w-80 h-60"
                        />
                        <h4 className="text-xl font-bold mt-4">Emily Johnson</h4>
                        <p className="">Marketing Director</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
