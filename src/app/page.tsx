"use client";
import { useEffect } from 'react';
import Head from 'next/head';
import Image from "next/image";

export default function Home() {
    useEffect(() => {
        const handleScroll = (e: Event) => {
            e.preventDefault();
            const target = e.currentTarget as HTMLAnchorElement;
            const targetId = target.getAttribute('href')?.replace('#', '');
            const targetElement = document.getElementById(targetId || '');
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth',
                });
            }
        };

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', handleScroll); // Correctly typed event listener
        });

        return () => {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.removeEventListener('click', handleScroll); // Remove correctly typed event listener
            });
        };
    }, []);

    return (
        <div>
            <Head>
                <title>Single Page App</title>
            </Head>

            <nav className="bg-gray-800 p-4 fixed w-full z-10 top-0">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-white text-lg font-bold">
                        Logo
                    </div>
                    <div className="space-x-4">
                        <a href="#company" className="text-white hover:text-black">Company</a>
                        <a href="#product" className="text-white hover:text-black">Product</a>
                        <a href="#pricing" className="text-white hover:text-black">Pricing</a>
                        <a href="#support" className="text-white hover:text-black">Support</a>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">
                            Buy Now
                        </button>
                    </div>
                </div>
            </nav>

            <div className="pt-16">
                <div className="flex flex-col min-h-screen">
                    <section id="company" className="h-screen p-8 lg:p-28 flex flex-col justify-center bg-gray-200">
                        <h1 className="text-4xl lg:text-5xl font-bold text-left mb-8 lg:mb-12">About ShatterDome</h1>
                        <div className="flex flex-col lg:flex-row lg:items-center">
                            <div className="lg:w-1/2 mb-8 lg:mb-0 pr-8">
                                <p className="text-lg mt-4">
                                    At ShatterDome Robotics, we are pioneers in the realm of quadruple robotics, driven
                                    by a passion for cutting-edge technology and a commitment to excellence. Founded by
                                    a group of ambitious college students, our startup is dedicated to revolutionizing
                                    the robotics industry with innovative products.
                                </p>
                                <p className="text-lg mt-4">
                                    Our vision at ShatterDome is a future where robotics seamlessly integrate into
                                    everyday life, enhancing efficiency and convenience for individuals and businesses
                                    alike.
                                </p>
                            </div>
                            <div className="lg:w-1/2 flex justify-center lg:justify-end">
                                <Image width={500} height={500} src="/IMG_0818.png" alt="Company Image"
                                     className="rounded-lg shadow-lg w-72 h-72 lg:w-full lg:h-auto"/>
                            </div>
                        </div>
                    </section>

                    <section id="product" className="h-screen p-8 lg:p-28 flex flex-col justify-center bg-gray-300">
                        <h1 className="text-4xl lg:text-5xl font-bold text-left mb-8 lg:mb-12">Product</h1>
                        <div className="flex flex-col lg:flex-row lg:items-center">
                            <div className="lg:w-1/2 flex justify-center lg:justify-start mb-8 lg:mb-0">
                                <Image width={500} height={500} src="/IMG_0936.png" alt="Product Image"
                                     className="rounded-lg shadow-lg w-72 h-72 lg:w-full lg:h-auto"/>
                            </div>
                            <div className="lg:w-1/2">
                                <p className="text-lg mt-4 pl-8">
                                    Alpha is an Ultimate ROS quadruped robot driven by Raspberry Pi 5 and runs on the
                                    Robot Operating System (ROS). It features 12 metal-geared servos for 12 degrees of
                                    freedom, delivering high-precision performance, rapid rotation speed, and a robust
                                    torque of 10KG.cm.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section id="pricing" className="h-screen flex items-center justify-center bg-gray-400">
                        <h1 className="text-4xl">Pricing</h1>
                    </section>

                    <section id="support" className="h-screen flex items-center justify-center bg-gray-500">
                        <h1 className="text-4xl">Support</h1>
                    </section>
                </div>
            </div>
            <footer className="bg-gray-800 text-white p-4">
                <div className="container mx-auto">
                    <div className="text-center">
                        &copy;copyright 2024 ShatterDome
                    </div>
                </div>
            </footer>
        </div>
    )
}