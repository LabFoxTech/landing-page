import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { ServiceIcon } from '../assets';

const ServicesSection = styled.section`
  padding: 80px 0;
  max-width: 1400px;
  margin: 0 auto;
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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  width: 100%;
  max-width: 1400px;
  padding: 0 20px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled(motion.div)`
  box-sizing: border-box;
  position: relative;
  background: #0D0D0D;
  border-radius: 24px;
  padding: 32px;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100px;
    height: 100px;
    background: radial-gradient(
      circle at center,
      rgba(232, 111, 58, 0.3) 0%,
      rgba(232, 111, 58, 0.5) 25%,
      rgba(232, 111, 58, 0.3) 50%,
      transparent 70%
    );
    filter: blur(40px);
    border-radius: 50%;
    pointer-events: none;
  }
`;

const ServiceIconDiv = styled.div`
  width: 48px;
  height: 48px;
  /* background: #161616;
  border-radius: 50%; */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 44px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    /* filter: brightness(0) invert(1); */
  }
`;

const ServiceTitle = styled.h3`
  font-family: 'Urbanist';
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  color: #FFFFFF;
  margin-bottom: 20px;
`;

const ServiceDescription = styled.p`
  font-family: 'Urbanist';
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #AEAEAE;
  margin: 0;
`;

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Services = () => {
  const services = [
    {
      title: 'End-to-End product co-building',
      description: 'Right from understanding your business proposition to helping you develop strategies, our team does it all for you by being an extension of your team. All you need to do is, sit back and watch your product grow!',
      icon: ServiceIcon
    },
    {
      title: 'Building initial BVPs and MVPs',
      description: 'Did you have a Eureka moment with an idea but don\'t know where to get started? We\'ve got you! Our team helps you in coming up with the MVPs and BVPs, with Low-Code/No-Code services (or) Native Languages and helps you build a technology-first product.',
      icon: ServiceIcon
    },
    {
      title: 'Continued Support through Product Lifecycle',
      description: 'We are always a text/call away anytime you need us. We have consistently skilled ourselves in problem-solving and we can guarantee to declutter and untangle all your problems with respect to your product.',
      icon: ServiceIcon
    },
    {
      title: 'Product consulting',
      description: 'We exist to help you in terms of what to do and where to do things and how to do them too! The LabFox team guides you through analyzing your requirements and providing optimal product solutions.',
      icon: ServiceIcon
    }
  ];

  return (
    <ServicesSection id="services">
      <SectionTag>
        <span>What do we offer?</span>
      </SectionTag>
      <Title>We are the Path-Builders!</Title>
      <Subtitle>
        A team of technological experts, product marketers, and managers who will co-build and transform your product with world-class technological expertise 
        through extensive partnership at every step. We come as an extension to your team and transform ideas into products.
      </Subtitle>

      <ServicesGrid>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <ServiceIconDiv>
              <img src={service.icon} alt={service.title} />
            </ServiceIconDiv>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </ServicesSection>
  );
};

export default Services; 