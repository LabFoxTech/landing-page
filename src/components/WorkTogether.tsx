import React from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { DevLabImage, DesignLabImage, HiringLabImage, GrowthLabImage } from '../assets';

const WorkTogetherSection = styled.section`
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
  color: #fff;
`;

const Subtitle = styled.p`
  text-align: center;
  color: #999;
  margin-bottom: 4rem;
`;

const LabsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const LabCard = styled(motion.div)`
  background: #111;
  border-radius: 12px;
  overflow: hidden;
`;

const LabImage = styled.div`
  width: 100%;
  height: 240px;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const LabContent = styled.div`
  padding: 2rem;
`;

const LabTitle = styled.h3`
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 1rem;
`;

const LabDescription = styled.p`
  color: #999;
  font-size: 1rem;
  line-height: 1.6;
`;

const WorkTogether = () => {
  const labs = [
    {
      title: 'Dev Lab',
      description: 'Our focus with the "Dev Lab" is to enlist and champion a team of expert engineers ready to build scalable products with a growth mindset. Through strategic hiring and contiguous talent reserve, we offer dynamic scaling in our development bandwidth.',
      image: DevLabImage
    },
    {
      title: 'Design Lab',
      description: 'The focus of our "Design Lab" is to hire and champion best-in-class design professionals, that can help knock out your competition, with elegant product interfaces and experiences.',
      image: DesignLabImage
    },
    {
      title: 'Hiring Lab',
      description: 'Our "Hiring Lab" focuses on ensuring that our clients can scale up their teams when they need to. With a global network base of high-quality talent, we aim to fulfil our client\'s hiring requirements within days.',
      image: HiringLabImage
    },
    {
      title: 'Growth-hack Lab',
      description: 'For our friends looking to scale up, we offer consulting services from industry-leading experts to growth hack and multiply their market capture.',
      image: GrowthLabImage
    }
  ];

  return (
    <WorkTogetherSection>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Title>How can we work together</Title>
        <Subtitle>Co-build high-end products strategically with LabFox in 3 steps</Subtitle>
      </motion.div>

      <LabsGrid>
        {labs.map((lab, index) => (
          <LabCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <LabImage>
              <img src={lab.image} alt={lab.title} />
            </LabImage>
            <LabContent>
              <LabTitle>{lab.title}</LabTitle>
              <LabDescription>{lab.description}</LabDescription>
            </LabContent>
          </LabCard>
        ))}
      </LabsGrid>
    </WorkTogetherSection>
  );
};

export default WorkTogether; 