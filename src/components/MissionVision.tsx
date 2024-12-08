import { motion } from 'framer-motion';
import styled from '@emotion/styled';

const MissionVisionSection = styled.section`
  padding: 4rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionTag = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
  padding: 4px 12px;
  background: #191919;
  border-radius: 50px;

  &::before {
    content: '';
    height: 5px;
    width: 5px;
    background: linear-gradient(90deg, #E86F3A 0%, #FCBDA2 100%);
    border-radius: 50%;
  }

  span {
    font-family: 'Urbanist';
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    background: linear-gradient(90deg, #E86F3A 0%, #FCBDA2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const Title = styled.h2`
  font-family: 'Urbanist';
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;
  text-align: center;
  color: #FFFFFF;
  margin-bottom: 24px;
`;

const Subtitle = styled.p`
  font-family: 'Urbanist';
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #AEAEAE;
  max-width: 1000px;
  margin-bottom: 80px;
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled(motion.div)`
  background: #0D0D0D;
  border-radius: 24px;
  padding: 32px;
  position: relative;
  overflow: hidden;
  width: 100%;
  min-height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 24px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 200px;
    height: 200px;
    background: radial-gradient(
      circle at center,
      rgba(232, 111, 58, 0.15) 0%,
      rgba(232, 111, 58, 0.1) 25%,
      rgba(232, 111, 58, 0.05) 50%,
      transparent 70%
    );
    filter: blur(40px);
    border-radius: 50%;
    pointer-events: none;
  }
`;

const CardIcon = styled.div`
  width: 48px;
  height: 48px;
  position: relative;
  margin-bottom: 44px;
  /* background: #161616;
  border-radius: 50%; */
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    /* filter: brightness(0) invert(1); */
  }
`;

const CardTitle = styled.h3`
  font-family: 'Urbanist';
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 38px;
  color: #E86F3A;
  margin: 0 0 20px 0;
`;

const CardDescription = styled.p`
  font-family: 'Urbanist';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #AEAEAE;
  margin: 0;
`;

const DecorativeDot = styled.div<{ 
  top: string;
  right: string;
  opacity?: number;
  size?: number;
}>`
  position: absolute;
  width: ${props => props.size || 6}px;
  height: ${props => props.size || 6}px;
  top: ${props => props.top};
  right: ${props => props.right};
  background: #E86F3A;
  border-radius: 50%;
  opacity: ${props => props.opacity || 1};
`;

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const MissionVision = () => {
  const cards = [
    {
      title: 'Our Mission',
      description: 'Be the most efficient technology enabler',
      icon: '/src/assets/icons/mission.svg'
    },
    {
      title: 'Our Vision',
      description: 'Together, transform imagination into innovation',
      icon: '/src/assets/icons/vision.svg'
    }
  ];

  return (
    <MissionVisionSection>
      <SectionTag>
        <span>What is Labfox</span>
      </SectionTag>
      <Title>Tech Experts at your Service</Title>
      <Subtitle>
        With expertise in Gen-AI, ML, full-stack, low-code, and no-code development, 
        we integrate seamlessly with your team. Together, we enhance your product's 
        design, development, and maintenance.
      </Subtitle>

      <CardsContainer>
        {cards.map((card, index) => (
          <Card
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <CardIcon>
              <img src={card.icon} alt={card.title} />
            </CardIcon>
            <CardTitle>{card.title}</CardTitle>
            <CardDescription>{card.description}</CardDescription>
            
            {/* Decorative Dots */}
            {/* <DecorativeDot top="32px" right="32px" size={4} opacity={0.6} />
            <DecorativeDot top="32px" right="48px" size={4} opacity={0.6} />
            <DecorativeDot top="85%" right="32px" size={6} opacity={0.8} />
            <DecorativeDot top="85%" right="48px" size={4} opacity={0.6} /> */}
          </Card>
        ))}
      </CardsContainer>
    </MissionVisionSection>
  );
};

export default MissionVision; 