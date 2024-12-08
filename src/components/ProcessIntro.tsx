import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import backgroundImage from '../assets/icons/background.svg';

const ProcessIntroSection = styled.section`
  position: relative;
  padding: 120px 0 180px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  background: transparent;

  @media (max-width: 768px) {
    padding: 80px 0 120px;
  }
`;

const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
`;

const Background = styled(motion.div)`
  position: absolute;
  width: min(1400px, 100vw);
  height: min(700px, 50vw);
  top: 20px;
  background-image: url(${backgroundImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 0;
  border-radius: min(700px, 50vw) min(700px, 50vw) 0 0;
  
  &::before {
    content: '';
    position: absolute;
    top: 0px;
    left: -2px;
    right: -2px;
    height: 100%;
    background: linear-gradient(180deg, rgba(232, 111, 58, 0.15) 0%, transparent 100%);
    border-radius: inherit;
    filter: blur(20px);
    z-index: -1;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }

  @media (max-width: 1440px) {
    width: 95vw;
    height: 47.5vw; /* Maintains the 2:1 aspect ratio */
  }

  @media (max-width: 768px) {
    width: 100vw;
    height: 50vw;
    top: -20px;
    margin-top: 20px
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 3;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

const SectionTag = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 4px 12px;
  border-radius: 4px;
  margin: 0 auto 40px;

  span {
    font-family: 'Urbanist';
    font-size: 36px;
    font-weight: 800;
    background: var(--Brand-Color, #D5652F);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const TextContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const MainText = styled.p`
  font-family: 'Urbanist';
  font-size: 20px;
  line-height: 30px;
  color: #AEAEAE;
  text-align: center;
  margin: 0;
`;

const HighlightText = styled.h3`
  font-family: 'Urbanist';
  font-weight: 700;
  font-size: 24px;
  line-height: 34px;
  color: #FFFFFF;
  text-align: center;
  margin: 0;
`;

const Button = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: #E86F3A;
  border-radius: 8px;
  font-family: 'Urbanist';
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
  text-decoration: none;
  cursor: pointer;
  border: none;
  margin: 20px auto 0;

  &:hover {
    opacity: 0.9;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const ProcessIntro = () => {
  const backgroundVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.645, 0.045, 0.355, 1],
      }
    }
  };

  return (
    <ProcessIntroSection>
      <BackgroundContainer>
        <Background
          initial="hidden"
          whileInView="visible"
          variants={backgroundVariants}
          viewport={{ once: true }}
          style={{ transformOrigin: 'center' }}
        />
      </BackgroundContainer>

      <ContentWrapper>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionTag>
            <span>How we do what we do?</span>
          </SectionTag>
        </motion.div>

        <TextContainer
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <MainText>
            Most times, technology has been the missing piece of the puzzle to business owners
            and this has largely impacted the way businesses scale. Been there, felt that?
          </MainText>

          <HighlightText>
            Who said you have to be tech-savvy to build a scalable business? Not us!
          </HighlightText>

          <MainText>
            So, here we are to make it happen for you! To drive and accelerate the advancement
            of your technology-based product through fast and extensive collaboration.
          </MainText>
        </TextContainer>

        <Button
          href="#contact"
          style={{ marginTop: '150px' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          Book a 15-min call
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.16666 10H15.8333" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 4.16666L15.8333 10L10 15.8333" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Button>
      </ContentWrapper>
    </ProcessIntroSection>
  );
};

export default ProcessIntro; 