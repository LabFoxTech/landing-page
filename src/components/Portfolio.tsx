import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

const PortfolioSection = styled.section`
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #fff;
`;

const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 12px;
`;

const CarouselSlide = styled(motion.div)`
  display: flex;
  gap: 2rem;
  padding: 2rem;
  background: #111;
  border-radius: 12px;
`;

const ProjectImage = styled.div`
  flex: 1;
  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
`;

const ProjectContent = styled.div`
  flex: 1;
  color: #fff;
`;

const ProjectTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #fff;
`;

const ProjectDescription = styled.p`
  color: #999;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const ReadMoreButton = styled(motion.button)`
  background-color: #ff5722;
  color: #fff;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
`;

const CarouselDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
`;

const Dot = styled.button<{ active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background-color: ${props => props.active ? '#ff5722' : '#333'};
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

const Portfolio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      title: 'Gritly',
      description: 'Sarus Inc. is a Boulder, Colorado based company that has embarked on a journey to empower the heavy-lifting industry by developing cutting-edge site evaluation, crane selection, and lift planning software. By mid 2021, Sarus had already won multiple accelerator programs including Catalyze CU, with their novel solution pattern that utilizes a combination of laser-distance meter and intelligent software to automate the very lengthy and tiresome lift-plan reporting process.',
      image: '/gritly-logo.svg'
    },
    // Add more projects here
  ];

  return (
    <PortfolioSection id="portfolio">
      <Title>Our Portfolio</Title>
      
      <CarouselContainer>
        <CarouselSlide
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ProjectImage>
            <img src={projects[currentSlide].image} alt={projects[currentSlide].title} />
          </ProjectImage>
          <ProjectContent>
            <ProjectTitle>{projects[currentSlide].title}</ProjectTitle>
            <ProjectDescription>{projects[currentSlide].description}</ProjectDescription>
            <ReadMoreButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Read more →
            </ReadMoreButton>
          </ProjectContent>
        </CarouselSlide>
      </CarouselContainer>

      <CarouselDots>
        {projects.map((_, index) => (
          <Dot
            key={index}
            active={currentSlide === index}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </CarouselDots>
    </PortfolioSection>
  );
};

export default Portfolio; 