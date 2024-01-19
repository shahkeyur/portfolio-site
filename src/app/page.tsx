import { ContactForm } from "@/components/ContactUsForm";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const metadata = {
  title: "Digital Solutions and Website Development Services | Ekmabyte",
  description: "Transform Your Digital Presence",
  keywords: "web development, web design, e-commerce, ux/ui design",
};

const services = [
  {
    background: "website-card.jpg",
    title: "Custom Website Development",
    description:
      "Our custom website development services are tailored to your unique needs, ensuring a seamless and user-friendly online experience.",
  },
  {
    background: "ecom-card.jpg",
    title: "E-commerce Solutions",
    description:
      "We offer e-commerce solutions that optimize conversions and streamline transactions, helping your business thrive in the online marketplace.",
  },
  {
    background: "design-card.jpg",

    title: "UX/UI Design",
    description:
      "Our UX/UI design services focus on creating intuitive and visually appealing interfaces, providing an exceptional digital experience for your users.",
  },
];

export default function Home() {
  return (
    <main>
      <section
        id="hero"
        style={{
          background: 'url("/hero.jpg")',
          backgroundPosition: "top right",
        }}
        className="py-[7%]"
      >
        <div>
          <h3 data-aos="fade-up" className="font-extrabold leading-none">
            Transform Your Digital Presence
          </h3>
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="lg:text-justify max-w-[28rem] my-4"
          >
            We specialize in crafting cutting-edge digital solutions tailored to
            your business needs. Let us take your online presence to the next
            level.
          </p>
          <a href="#contact">
            <Button
              data-aos="fade-up"
              data-aos-delay="600"
              className="mt-3"
              variant="secondary"
            >
              Contact Us
            </Button>
          </a>
        </div>
      </section>
      <section id="services">
        <div>
          <h4 data-aos="fade-up" className="font-extrabold">
            Services
          </h4>
          <p data-aos="fade-up" className="my-8">
            Introducing Ekmabyte, a leading digital development and design
            agency based in Canada. With a passion for innovation and a
            commitment to excellence, we specialize in creating tailored
            solutions that propel businesses forward in the digital
            landscape.Our team of skilled professionals harnesses the power of
            cutting-edge technology and creative design to deliver impactful
            websites, mobile applications, and digital experiences. Whether you
            need a stunning website that captivates your audience or a robust
            e-commerce platform that drives sales, Ekmabyte is here to transform
            your vision into reality. Partner with us and unlock your
            business&apos;s full potential in the digital world.
          </p>
          <div className="flex text-center mt-[3.5rem] flex-col space-y-4  lg:flex-row lg:space-x-3 lg:space-y-0">
            {services.map((service, index) => (
              <Card
                data-aos="fade-up"
                data-aos-delay={index * 400}
                key={index}
                className="px-6 flex items-center justify-center flex-col py-[5rem] relative rounded-[28px]  shadow-lg"
              >
                <div
                  className="h-full w-full z-0 absolute top-0 left-0 rounded-[28px]"
                  style={{
                    background: `url("/${service.background}")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="bg-black bg-opacity-[0.8] h-full w-full rounded-[28px]"></div>
                </div>
                <div className="z-50 text-white">
                  <p className="mb-4 font-bold">{service.title}</p>
                  <small>{service.description}</small>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* <section>
        <h5>Projects</h5>
        <div></div>
      </section> */}
      <section id="about">
        <div className="flex flex-col lg:flex-row space-y-6">
          <div className="lg:pr-5">
            <h4 data-aos="fade-up" className="font-extrabold mb-6">
              About us
            </h4>
            <p data-aos-delay="200" data-aos="fade-up">
              Ekmabyte is a leading digital development and design agency based
              in Canada. With a focus on innovation and creativity, we are
              dedicated to delivering high-quality solutions for our clients.
            </p>
            <p data-aos="fade-up" data-aos-delay="300" className="mt-4">
              Our team of experts is committed to staying ahead of the curve in
              the ever-evolving digital landscape, ensuring that we provide
              cutting-edge services that meet the unique needs of each business
              we work with.
            </p>
          </div>
          <div className="ml-auto">
            <img
              data-aos="fade-left"
              className="rounded-[28px]"
              src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849821_1280.jpg"
              alt="About Us"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="space-y-6">
          <h4 data-aos="fade-up" className="font-extrabold ">
            Out Clients
          </h4>
          <div className="flex space-x-4">
            <a href="https://vitalitydepot.ca">
              <img
                data-aos="fade-up"
                data-aos-delay="300"
                src="/client-vitality-logo.webp"
                className="rounded-[28px] h-24 bg-black p-4"
                alt="Client"
              />
            </a>
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="flex justify-between flex-col lg:flex-row space-y-8 lg:space-y-0">
          <div className="lg:max-w-[50%]">
            <h4
              data-aos="fade-up"
              className="font-extrabold mb-3 leading-tight"
            >
              Ready to take your business to the next level?
            </h4>
            <p data-aos="fade-up" data-aos-delay="300">
              Fill out the form and let us know how we can help you. We are here
              to answer any questions and provide you with the best digital
              development and design solutions.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="w-full lg:ml-9"
          >
            <ContactForm />
          </div>
        </div>
      </section>
      <section
        style={{
          background: `linear-gradient(#ffffffd4, 30%, #d8d8d878)`,
        }}
      >
        <div className="flex justify-between flex-col lg:flex-row space-y-4">
          <h4 data-aos="fade-up">
            Your Vision. Our Expertise. <br /> Let&apos;s Build Something
          </h4>
          <div>
            <div className="rounded-[28px] text-center  shadow-lg bg-white">
              <img
                data-aos="fade-up"
                data-aos-delay="300"
                src="/logo-full.png"
                className="mx-auto"
                alt="Logo"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="text-center py-2">
        &copy; {new Date().getFullYear()} Ekmabyte. All rights reserved.
      </div>{" "}
    </main>
  );
}
