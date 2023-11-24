

// pages/index.js
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Container, Button, Row, Col, Carousel } from 'react-bootstrap';
import ServiceCard from '../components/ServiceCard';
import { scroller } from 'react-scroll'; // Import scroller from react-scroll
import styles from './styles/Home.module.css';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

const Home = () => {
  const videoRef = useRef();

  useEffect(() => {
    // Play the video on mount
    const video = videoRef.current;
    video.play();

    // Cleanup on unmount
    return () => {
      video.pause();
    };
  }, []);

  const scrollToServices = () => {
    // Scroll to the 'services' section using the 'react-scroll' library
    scroller.scrollTo('services', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <div>
      <div className={styles.container}>
        <video
          className={styles['background-video']}
          ref={videoRef}
          loop
          muted
        >
          <source src="/landingvid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Container>
          <div className={styles.header}>
            <h1>Branching Out Tree Services</h1>
            <p>Your Trusted Partner for Tree Services</p>
            <Button variant="outline-light" onClick={scrollToServices}>
              Explore Services
            </Button>
          </div>
        </Container>
      </div>

      <Container id="services" className="mt-5">
      <Row>
          <Col md={6} lg={4} style={{marginBottom: '2rem'}}>
            <ServiceCard
              title="Tree Trimming"
              description="Professional tree trimming to enhance tree health and appearance."
              imageSrc="https://images.unsplash.com/photo-1519567770579-c2fc5436bcf9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </Col>
          <Col md={6} lg={4} style={{marginBottom: '2rem'}}>
            <ServiceCard
              title="Stump Removal"
              description="Efficient stump removal services for a clear and neat landscape."
              imageSrc="https://images.unsplash.com/35/4ALUVYYlQLC004zkGhd9_Sunset%20at%20Windermere.jpg?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </Col>
          <Col md={6} lg={4} style={{marginBottom: '2rem'}}>
            <ServiceCard
              title="Landscaping"
              description="Create a beautiful outdoor space with our expert landscaping services."
              imageSrc="https://images.unsplash.com/photo-1592595896616-c37162298647?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </Col>
          <Col md={6} lg={4}>
            <ServiceCard
              title="House Cleanouts"
              description="Comprehensive house cleanout services, removing clutter and debris."
              imageSrc="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </Col>
          <Col md={6} lg={4}>
            <ServiceCard
              title="Tree Planting"
              description="Expert tree planting to enhance your property and contribute to the environment."
              imageSrc="https://images.unsplash.com/photo-1625758476104-f2ed6c81248f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </Col>
          <Col md={6} lg={4}>
            <ServiceCard
              title="Emergency Tree Service"
              description="Swift and reliable emergency tree services for urgent situations."
              imageSrc="https://images.unsplash.com/photo-1536795312003-5f7d28d29cea?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </Col>
        </Row>
      </Container>

      {/* Testimonials Section */}
      <div className={styles.testimonialsBackground}>
        <Container className="">
          <h2 className="text-center">What they're saying</h2>
          <Carousel >
            <Carousel.Item>
              <p className="text-center">
                "I couldn't be happier with the service provided by Branching Out Tree Services. They were prompt, professional, and exceeded my expectations in every way. The team efficiently handled the removal of a large tree from my backyard, and the cleanup was impeccable. I highly recommend their services to anyone in need of tree care."
              </p>
              <h5 className="text-center">John Doe</h5>
            </Carousel.Item>
            <Carousel.Item>
              <p className="text-center">
                "Working with Branching Out Tree Services was a seamless and stress-free experience. From the initial consultation to the completion of the job, their team demonstrated a high level of expertise and dedication. The attention to detail in their work, coupled with excellent customer service, sets them apart. I won't hesitate to call on them for future projects."
              </p>
              <h5 className="text-center">Jane Smith</h5>
            </Carousel.Item>
            <Carousel.Item>
              <p className="text-center">
                "Branching Out Tree Services transformed my outdoor space into a beautiful and well-maintained area. Beyond tree services, their landscaping expertise elevated the overall aesthetics of my property. The crew was not only skilled but also courteous and respectful. I appreciate the commitment to quality and would recommend them to anyone seeking top-notch tree and landscaping services."
              </p>
              <h5 className="text-center">Mike Johnson</h5>
            </Carousel.Item>
          </Carousel>
        </Container>
      </div>
      <Container className="mt-5">
        <Row>
          <Col style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}} md={5}>
            <h2 className="mb-4">About Branching Out</h2>
            <p>

At Branching Out Tree Services, we take pride in being your trusted partner for all your tree care needs. Established with a passion for arboriculture and a commitment to customer satisfaction, we have been serving the community with excellence and dedication.

Our Commitment to Quality Work

Our team is dedicated to delivering the highest quality tree services, ensuring the health and beauty of your trees. Whether it's tree trimming to enhance aesthetics or stump removal for a clear landscape, we approach every project with precision and care.

Wide Range of Services

From tree trimming and stump removal to landscaping and emergency tree services, we offer a comprehensive range of services to meet your unique needs. Our skilled arborists are equipped to handle projects of any size, providing reliable and efficient solutions.

Meet Jason Petrovich, Owner and Arborist

Jason Petrovich, the proud owner of Branching Out Tree Services, is an experienced arborist with a passion for trees and a dedication to honest, quality work. With years of expertise in the field, Jason leads our team with a commitment to excellence, ensuring that every project is executed with the utmost care.

Our Mission

Our mission is to enhance the beauty of your outdoor space while promoting the health and longevity of your trees. We strive to exceed your expectations by delivering reliable, professional, and environmentally conscious tree services.

Your Satisfaction is Our Priority

At Branching Out Tree Services, customer satisfaction is at the core of everything we do. We value open communication, transparency, and reliability. We work closely with our clients to understand their needs and provide tailored solutions that meet and exceed expectations.

Choose Branching Out Tree Services for all your tree care and landscaping needs. Experience the difference of working with a team that cares about the well-being of your trees and the satisfaction of our clients. Your outdoor space deserves the best, and we are here to deliver it.


            </p>
          </Col>
          <Col style={{width: '50vw'}}>
            <img
              src="/jason.jpg"  // Replace with the actual image file
              alt="Jason Petrovich"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>

      {/* Contact Form Section */}
      <Container className="mt-5 mb-5">
        <div className={styles.contactForm}>
          <h2>Contact Us</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input type="tel" id="phone" name="phone" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="4" required></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </Container>
      <div className={styles.footer}>
        <Container>
          <Row>
            <Col md={6}>
              <h4>Contact Us</h4>
              <p>123 Tree Street, Cityville, USA</p>
              <p>xxx-xxx-xxxx</p>
              <p>nfo@branchingouttreesolutions.com</p>
            </Col>
            <Col md={6}>
              <h4>Quick Links</h4>
              <ul>
                <li>Home</li>
                <li>Services</li>
                <li>Contact</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
