import React from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { testimonials } from '@/data/testimonials';

const TestimonialsSection = styled.section`
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: #fff;
`;

const SectionSubtitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 4rem;
  color: #fff;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const TestimonialCard = styled(motion.div)`
  background: #111;
  border-radius: 12px;
  padding: 2rem;
  text-align: left;
  position: relative;
`;

const Avatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 1.5rem;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Quote = styled.p`
  color: #fff;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const Author = styled.p`
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

const Position = styled.p`
  color: #999;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const Rating = styled.div`
  color: #ff5722;
  margin-top: 1rem;
  font-size: 1.2rem;
`;

const Testimonials = () => {
  return (
    <TestimonialsSection>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <SectionTitle>Real Success,</SectionTitle>
        <SectionSubtitle>Authentic Voices</SectionSubtitle>
      </motion.div>

      <TestimonialsGrid>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            {/* <Avatar>
              <img src={testimonial.avatar} alt={testimonial.author} />
            </Avatar> */}
            <Quote>"{testimonial.quote}"</Quote>
            <Author>{testimonial.author}</Author>
            <Position>{testimonial.position}</Position>
            <Rating>
              {"★".repeat(testimonial.rating)}
            </Rating>
          </TestimonialCard>
        ))}
      </TestimonialsGrid>
    </TestimonialsSection>
  );
};

export default Testimonials; 