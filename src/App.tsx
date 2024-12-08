import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from '@emotion/styled';
import Services from './components/Services';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import WorkTogether from './components/WorkTogether';
import Contact from './components/Contact';
import MissionVision from './components/MissionVision';
import ProcessIntro from './components/ProcessIntro';

const AppContainer = styled.div`
  background-color: #000;
  color: #fff;
  min-height: 100vh;
  font-family: 'Urbanist', sans-serif;
`;

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 108px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  padding: 0 1rem;
`;

const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1396px;
  height: 60px;
  background: rgba(13, 13, 13, 0.50);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  margin-top: 24px;

  @media (max-width: 1440px) {
    max-width: 90%;
  }

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

const Logo = styled.img`
  width: 118px;
  height: 31px;

  @media (max-width: 768px) {
    width: 90px;
    height: auto;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 29px;

  @media (max-width: 1024px) {
    gap: 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 29px;

  @media (max-width: 1024px) {
    gap: 20px;
  }
`;

const NavLink = styled.a`
  color: #FCFCFA;
  text-decoration: none;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  
  &:hover {
    color: #D5652F;
  }

  @media (max-width: 1024px) {
    font-size: 13px;
  }
`;

const HeroSection = styled.section`
  padding: 8rem 2rem 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1400px;
  margin: 0 auto;
  gap: 4rem;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 40%;
    width: 20%;
    height: 100px;
    background: linear-gradient(
      180deg,
      transparent,
      rgba(232, 111, 58, 0.5) 40%,
      rgba(232, 111, 58, 0.6) 50%,
      rgba(232, 111, 58, 0.5) 60%,
      transparent
    );
    pointer-events: none;
    z-index: 0;
    filter: blur(40px);
    transform: translateY(50%);
  }

  @media (max-width: 1024px) {
    padding: 7rem 2rem 4rem;
    gap: 2rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 6rem 1rem 3rem;
  }
`;

const GradientText = styled.span`
  background: linear-gradient(90deg, #E86F3A 0%, #FCBDA2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline-block;
`;

const SectionTag = styled.div`
  width: 117px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  position: relative;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  line-height: 24px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, #E86F3A 0%, #FCBDA2 100%);
    opacity: 0.15;
    border-radius: 4px;
  }

  span {
    position: relative;
    z-index: 1;
    background: linear-gradient(90deg, #E86F3A 0%, #FCBDA2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    display: inline-block;
  }

  &::after {
    content: '•';
    margin-right: 4px;
    background: linear-gradient(90deg, #E86F3A 0%, #FCBDA2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    display: inline-block;
  }
`;

const Title = styled.h2`
  font-size: 48px;
  line-height: 64px;
  text-align: center;
  margin-bottom: 1rem;
  font-family: 'Urbanist', sans-serif;
  font-weight: 500;
  background: linear-gradient(90deg, #E86F3A 0%, #FCBDA2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

const HeroContent = styled(motion.div)`
  flex: 1;
  max-width: 863px;
  position: relative;
  z-index: 1;

  h1 {
    font-size: 64px;
    line-height: 85px;
    font-weight: 500;
    font-family: 'Urbanist', sans-serif;
    margin-bottom: 2rem;
    color: #fff;

    em {
      font-family: 'Unna', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 64px;
      line-height: 85px;
      background: linear-gradient(90deg, #E86F3A 0%, #FCBDA2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }

  p {
    font-size: 1.25rem;
    line-height: 1.6;
    color: #999;
    margin-bottom: 3rem;
    max-width: 500px;
    font-family: 'Urbanist', sans-serif;
    font-weight: 400;
  }
`;

const HeroImage = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  z-index: 1;

  img {
    width: 100%;
    max-width: 600px;
    height: auto;
  }

  @media (max-width: 768px) {
    justify-content: center;
    
    img {
      max-width: 400px;
    }
  }
`;

const Button = styled(motion.button)`
  background: #D5652F;
  color: #F9FAFB;
  border: none;
  padding: 6px 14px;
  border-radius: 10px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  box-shadow: 0px 4px 10px -2px rgba(0, 0, 0, 0.05), 0px 2px 2px -1px rgba(0, 0, 0, 0.1), 0px 0px 0px 1px rgba(255, 69, 51, 0.12);
  backdrop-filter: blur(5px);
  cursor: pointer;
  width: 101px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.95);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const MobileNavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #ff5722;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: rotate(90deg);
  }
`;

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <AppContainer>
      <Header>
        <HeaderContainer>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Logo src="/src/assets/logos/labfox-logo.svg" alt="Labfox" />
          </motion.div>
          <Nav>
            <NavLinks>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                style={{ display: 'flex', gap: '29px' }}
              >
                <NavLink href="#home">Home</NavLink>
                <NavLink href="#services">Services</NavLink>
                <NavLink href="#process">Process</NavLink>
                <NavLink href="#portfolio">Portfolio</NavLink>
                <NavLink href="#contact">Contact</NavLink>
              </motion.div>
            </NavLinks>
            <Button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a call
            </Button>
          </Nav>
          <MobileMenuButton onClick={toggleMobileMenu}>
            ☰
          </MobileMenuButton>
        </HeaderContainer>
      </Header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <CloseButton onClick={closeMobileMenu}>×</CloseButton>
            <MobileNavLinks>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <MobileNavLink href="#home" onClick={closeMobileMenu}>Home</MobileNavLink>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <MobileNavLink href="#services" onClick={closeMobileMenu}>Services</MobileNavLink>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <MobileNavLink href="#process" onClick={closeMobileMenu}>Process</MobileNavLink>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <MobileNavLink href="#portfolio" onClick={closeMobileMenu}>Portfolio</MobileNavLink>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <MobileNavLink href="#contact" onClick={closeMobileMenu}>Contact</MobileNavLink>
              </motion.div>
            </MobileNavLinks>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              <Button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={closeMobileMenu}
              >
                Book a call
              </Button>
            </motion.div>
          </MobileMenu>
        )}
      </AnimatePresence>

      <HeroSection>
        <HeroContent
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>
            If it can be <em>imagined</em>,<br />
            it can be <GradientText>built</GradientText> with <GradientText>Labfox!</GradientText>
          </h1>
          <p>
            We transform ideas into scalable business, creating economic opportunities for a global workforce.
          </p>
          <Button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book a call
          </Button>
        </HeroContent>
        <HeroImage
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src="/src/assets/images/hero-section.svg" alt="Hero Illustration" />
        </HeroImage>
      </HeroSection>

      <div style={{ height: '100px' }} />
      <MissionVision />

      <Services />
      <div style={{ height: '100px' }} />

      <ProcessIntro />
      {/* <div style={{ height: '100px' }} /> */}

      <Process />
      <div style={{ height: '100px' }} />

      <WorkTogether />
      {/* <Portfolio /> */}
      <Testimonials />
      <Contact />
    </AppContainer>
  );
}

export default App; 