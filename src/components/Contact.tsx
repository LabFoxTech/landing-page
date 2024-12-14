import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { 
  GritlyLogo, 
  WaivLogo, 
  TechSalesOnlyLogo, 
  PostedLogo, 
  GrapevineLogo, 
  BonvoyazLogo, 
  SarusLogo 
} from '../assets';

const ContactSection = styled.section`
  position: relative;
  width: 100%;
  padding: 80px 0;
  display: flex;
  justify-content: center;
  overflow: visible;
`;

const ContactCard = styled(motion.div)`
  position: relative;
  width: 1396px;
  height: 349px;
  background: radial-gradient(41.35% 88.05% at 50% -0.04%, #292929 0%, #101010 100%);
  opacity: 1;
  /* border-radius: 24px; */
  overflow: hidden;
`;

const GradientGlow = styled.div`
  position: absolute;
  width: 353px;
  height: 353px;
  left: 387.5px;
  top: 342px;
  background: radial-gradient(64.59% 78.61% at 50.14% 84.42%, rgba(249, 172, 129, 0) 0%, #FF843F 43.5%, rgba(241, 73, 36, 0) 100%);
  filter: blur(30px);
  border-radius: 353px;
`;

const TopDivider = styled.div`
  position: absolute;
  width: 600px;
  height: 1px;
  left: 264px;
  top: 0;
  background: linear-gradient(90deg, rgba(16, 16, 16, 0) 0%, #696969 49.46%, rgba(16, 16, 16, 0) 100%);
`;

const BottomDivider = styled.div`
  position: absolute;
  width: 600px;
  height: 1px;
  left: calc(50% - 600px/2);
  bottom: 0;
  background: linear-gradient(90deg, rgba(232, 111, 58, 0) 0%, #F35732 51.99%, rgba(232, 111, 58, 0) 100%);
`;

const Title = styled.h2`
  position: absolute;
  width: 232px;
  height: 68px;
  left: calc(50% - 232px/2 + 1px);
  top: 69px;
  font-family: 'Plus Jakarta Sans';
  font-style: normal;
  font-weight: 800;
  font-size: 56px;
  line-height: 67px;
  display: flex;
  align-items: center;
  letter-spacing: -2.8px;
  background: linear-gradient(90deg, #FFFFFF 0%, #999999 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled.p`
  position: absolute;
  width: 109px;
  height: 50px;
  left: calc(50% - 109px/2 - 2.5px);
  top: 164px;
  font-family: 'Plus Jakarta Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 50px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #AEAEAE;
`;

const EmailLink = styled.a`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1px 20px;
  gap: 10px;
  width: 263px;
  height: 52px;
  left: calc(50% - 263px/2);
  top: 223px;
  font-family: 'Urbanist';
  font-style: normal;
  font-weight: 600;
  font-size: 22.1484px;
  line-height: 50px;
  text-align: center;
  text-decoration-line: underline;
  color: #D5652F;
  filter: drop-shadow(0px 1px 2px rgba(82, 88, 102, 0.06));
  border-radius: 10px;
`;

const DecorativeLines = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;

  /* &::before {
    content: '';
    position: absolute;
    width: 280.26px;
    height: 381.56px;
    left: 39.79px;
    top: -15.77px;
    background: repeating-linear-gradient(
      18deg,
      #0F0F10 0px,
      #0F0F10 38px,
      transparent 38px,
      transparent 40px
    );
  } */

  /* &::after {
    content: '';
    position: absolute;
    width: 284.11px;
    height: 370.58px;
    right: 39.79px;
    top: -10.79px;
    background: repeating-linear-gradient(
      18deg,
      #0F0F10 0px,
      #0F0F10 38px,
      transparent 38px,
      transparent 40px
    );
  } */
`;

const GradientLines = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 1px;
    height: 80px;
    left: calc(50% - 1px/2 + 26.73px);
    bottom: 21.2px;
    /* background: linear-gradient(90deg, #E86F3A 0%, #FCBDA2 100%); */
    border-radius: 40.5px;
    transform: rotate(18deg);
  }
`;

const ClientsSection = styled.section`
  max-width: 100%;
  margin: 0 auto 120px;
  padding: 80px 0;
  overflow: hidden;
`;

const ClientsTitle = styled.h3`
  font-family: 'Plus Jakarta Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 50px;
  text-align: center;
  color: #AEAEAE;
  margin-bottom: 60px;
`;

const ScrollContainer = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  position: relative;
  mask-image: linear-gradient(
    to right,
    transparent,
    black 10%,
    black 90%,
    transparent
  );
`;

const ScrollTrack = styled(motion.div)`
  display: flex;
  gap: 120px;
  padding: 0 60px;
  align-items: center;
  min-width: fit-content;
`;

const LogoWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  flex-shrink: 0;
`;

const ClientLogo = styled(motion.img)`
  height: 100px;
  width: auto;
  max-width: 100%;
  object-fit: contain;
  /* filter: brightness(0.6) grayscale(1); */
  transition: all 0.3s ease;

  &:hover {
    filter: brightness(1) grayscale(0);
  }
`;

const CopyrightSection = styled.div`
  width: 100%;
  text-align: center;
  padding: 40px 0;
  font-family: 'Plus Jakarta Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #666666;
`;

const Contact = () => {
  const clients = [
    { name: 'Gritly', logo: GritlyLogo },
    { name: 'Waiv', logo: WaivLogo },
    { name: 'Tech Sales Only', logo: TechSalesOnlyLogo },
    { name: 'Posted', logo: PostedLogo },
    { name: 'Grapevine', logo: GrapevineLogo },
    { name: 'Bonvoyaz', logo: BonvoyazLogo },
    { name: 'Sarus', logo: SarusLogo }
  ];

  // Triple the clients array to ensure smooth looping
  const duplicatedClients = [...clients, ...clients, ...clients];

  const currentYear = new Date().getFullYear();

  return (
    <>
      <ClientsSection id="portfolio">
        <ClientsTitle>Our Clients</ClientsTitle>
        <ScrollContainer>
          <ScrollTrack
            animate={{
              x: [`0%`, `-${(100 / 3)}%`],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
            style={{
              width: `${duplicatedClients.length * 280}px`,
            }}
          >
            {duplicatedClients.map((client, index) => (
              <LogoWrapper key={`${client.name}-${index}`}>
                <ClientLogo
                  src={client.logo}
                  alt={`${client.name} logo`}
                  whileHover={{ scale: 1.05 }}
                />
              </LogoWrapper>
            ))}
          </ScrollTrack>
        </ScrollContainer>
      </ClientsSection>

      <ContactSection id="contact">
        <ContactCard
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <GradientGlow />
          <TopDivider />
          <BottomDivider />
          <DecorativeLines />
          <GradientLines />
          <Title>Let's talk</Title>
          <Subtitle>Reach us at</Subtitle>
          <EmailLink href="mailto:contact@labfox.studio">
            contact@labfox.studio
          </EmailLink>
        </ContactCard>
      </ContactSection>

      <CopyrightSection>
        © {currentYear} labfox.studio All rights reserved.
      </CopyrightSection>
    </>
  );
};

export default Contact; 