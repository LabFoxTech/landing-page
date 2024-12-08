import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const ProcessSection = styled.section`
  position: relative;
  width: 100%;
  padding: 80px 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
`;

const HeaderSection = styled(motion.div)`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

const MainTitle = styled.h2`
  font-family: 'Urbanist';
  font-weight: 700;
  font-size: 64px;
  line-height: 77px;
  text-align: center;
  color: #FFFFFF;
  margin: 0 0 24px 0;
`;

const Subtitle = styled.p`
  font-family: 'Urbanist';
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #AEAEAE;
  margin: 0;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  gap: 16px;
  width: 1128px;
  height: 326px;
  position: relative;
  margin: 0 auto;

  @media (max-width: 1200px) {
    width: 100%;
    flex-direction: column;
    height: auto;
    padding: 0 20px;
  }
`;

const Card = styled(motion.div)<{ isEven: boolean }>`
  width: 365px;
  height: 326px;
  background: ${props => !props.isEven 
    ? 'linear-gradient(180deg, #191919 0%, rgba(26, 26, 26, 0) 100%)'
    : 'linear-gradient(0deg, #191919 0%, rgba(26, 26, 26, 0) 100%)'
  };
  opacity: 1;
  border-radius: 24px;
  position: relative;
  flex: none;
  flex-grow: 0;

  @media (max-width: 1200px) {
    width: 100%;
    max-width: 365px;
    margin-bottom: 16px;
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  gap: 44px;
  position: absolute;
  width: 318px;
  left: 24px;
  top: 41px;
`;

const IconContainer = styled.div`
  width: 70px;
  height: 70px;
  flex: none;
  order: 0;
  flex-grow: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  gap: 21px;
  width: 318px;
`;

const Title = styled.h3`
  font-family: 'Urbanist';
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 31px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -1.2px;
  background: linear-gradient(90deg, #FFFFFF 0%, #999999 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
`;

const Description = styled.p`
  width: 100%;
  font-family: 'Urbanist';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #AEAEAE;
  margin: 0;
`;

const Process = () => {
  const processSteps = [
    {
      icon: '/src/assets/icons/assess.svg',
      title: 'Assess',
      description: 'We define the strategic vision of your product alongside your team.'
    },
    {
      icon: '/src/assets/icons/analyze.svg',
      title: 'Analyze',
      description: 'We work closely with your team to understand the time and effort our collaboration would need.'
    },
    {
      icon: '/src/assets/icons/execute.svg',
      title: 'Execute',
      description: 'Transforming your product with world-class technological expertise.'
    }
  ];

  return (
    <ProcessSection>
      <HeaderSection
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <MainTitle>Our process</MainTitle>
        <Subtitle>
          Co-build high-end products strategically with LabFox in 3 steps
        </Subtitle>
      </HeaderSection>

      <CardsContainer>
        {processSteps.map((step, index) => (
          <Card
            key={index}
            isEven={(index + 1) % 2 === 0}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <CardContent>
              <IconContainer>
                <img src={step.icon} alt={step.title} />
              </IconContainer>
              <TextContainer>
                <Title>{step.title}</Title>
                <Description>{step.description}</Description>
              </TextContainer>
            </CardContent>
          </Card>
        ))}
      </CardsContainer>
    </ProcessSection>
  );
};

export default Process;