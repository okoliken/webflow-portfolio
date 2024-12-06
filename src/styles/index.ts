// Style objects
import { css } from "../../styled-system/css";
export const heroStyles = {
    container: css({
      bg: "purpleDark",
      color: "lavenderLight",
      p: "2.5rem",
      borderBottomLeftRadius: "md",
      borderBottomRightRadius: "md",
      h: { base: "100%", md: "37.375rem" },
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
    }),
    contentWrapper: css(  {
      mt: "2.5rem",
      display: "flex",
      gap: "0 1.5rem",
      flexDirection: "column",
    }),
    heading: css({
      fontSize: { base: "base.2xl", md: "base.display" },
      lineHeight: "display",
      letterSpacing: "tight",
      fontWeight: "medium",
    }),
    highlightedText: css({
      fontWeight: "light",
      fontStyle: "italic",
      bgGradient: "secondary",
      bgClip: "text",
      color: "transparent",
      pr: "1rem",
      fontFamily: "Georgia, serif",
    }),
    subtitle: css({
      fontSize: "base.subtitle",
      lineHeight: "base",
      mt: "1.5rem",
    }),
    footer: css({
      mt: "auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "end",
      width: "100%",
    }),
    availabilityText: css({
      fontSize: "base.small",
      lineHeight: "snug",
      fontWeight: "medium",
    }),
    scrollImage: css({
      userSelect: "none",
    }),
  };

  export const servicesStyles = {
    servicesGrid: css({
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "2.5rem",
      p: "2.5rem 0rem",
    }), 
    serviceCard: css({
      display: "flex",
      flexDirection: "column",
      gap: "1.5rem",
      bgGradient: "secondary",
      p: "2.25rem",
      borderRadius: "md",
      h: "21.613rem",
    }),
    serviceTitle: css({
      fontSize: "base.title",
      lineHeight: "title",
      letterSpacing: "tight",
    }),
    serviceDescription: css({
      fontSize: "base.small",
      lineHeight: "snug",
      mt: "1.5rem",
    }),

    flexContainer: css({
      display: 'flex',
      justifyContent:'space-between',
      "& > img": {
        objectFit: 'contain'
      }
    }),
    caseStudy: css({
      display: 'flex',
      flexDirection: 'column',
      position:'relative',
      zIndex: 1,
      color:'purpleDark',
      "& > span": {
        fontSize: 'base.small',
        lineHeight: 'snug',
        fontWeight: 'light',
        textTransform: 'uppercase'
      },
      "& > h2": {
        fontSize: 'base.heading',
        lineHeight: 'title',
        letterSpacing: '-2%',
        fontWeight: 'medium'
      },
      "& > .chips": {
        display: 'flex',
        gap: '0.5rem',
        h:'2.113rem',
        borderRadius: 'sm',
        bg: 'lavenderLight',
        color: 'purpleDark',
        fontSize: 'base.small',
        lineHeight: 'snug',
        fontWeight: 'medium'
      }
    }),
    lightPatternSection: css({
      backgroundImage: `url(./assets/bg-pattern-light.png)`,
      w: "100%",
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "lavenderLight",
      p: "2.5rem",
      borderRadius: "md",
      h: "37.5rem",
      zIndex: 0
    }),
      darkPatternSection: css({
      backgroundImage: `url(./assets/bg-pattern-dark.png)`,
      w: "100%",
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "lavenderLight",
      p: "2.5rem 0rem",
      borderRadius: "md",
      h: "37.5rem",
      mt: "2.5rem",
    }),
  }


  export const awardsStyles = {
    awardsWrapper: css({
      bg: "lavenderLight",
      p: "2.5rem",
      borderRadius: "md",
      h: "32rem",
      mt: "2.5rem",
    }),
    awardsFlexContainer: css({
      display:'flex',
      justifyContent:'space-between',
    }),
    awardsHeading: css({
      fontSize: 'base.heading',
      lineHeight: 'title',
      letterSpacing: 'tight',
      color: 'purpleBase',
      flex:1
    }),
    listOfAwards: css({
      display: "flex",
      flexDirection: "column",
      flex: 1,
      "& > li": {
        borderTop: 'bottomSide',
        pt: '1.25rem',
        pb: '1.25rem',
      },
    }),
    awardItem: css({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      "& > div": {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        "& > h3": {
          fontSize: 'base.body',
          lineHeight: '32.2px',
          color:'purpleDark',
          fontWeight: 'medium'
        },
        "& > p": {
          fontSize: 'base.small',
          lineHeight: 'snug',
          fontWeight: 'light',
          color:'purpleDark'
        }
      }
    })
  }

  export const footerStyles = {
    wrapper: css({
      bg: 'purpleDark',
      p: '2.5rem',
      borderRadius: 'md',
      h: '100%',
      mt: '2.5rem'
    }),
    header: css({
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }),
    logo: css({
      width: "10.813rem",
      height: "1.609rem",
      objectFit: "contain",
      userSelect: "none",
    }),
    socialList: css({
      display: "flex",
      alignItems: "center",
      "& > li": {
        p: "0.75rem",
        display: "flex",
        alignItems: "center",
        gap: "0.25rem",
        textTransform: "uppercase",
        _hover: {
          color: "lavenderLight",
          textDecoration: "underline",
          cursor: "pointer",
        },
        fontSize: "base.small",
        fontWeight: "medium",
      },
      gap: "0 1.25rem",
    }),
    content: css({
      mt: '2.5rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '2.5rem',
      h: '100%',
      p: '5.5rem'
    }),
    heading: css({
      fontSize: 'base.display',
      lineHeight: '100px',
      fontWeight: 'medium',
      textAlign: 'center',
      color: 'lavenderLight'
    }),
    ctaImage: css({
      width: '10.875rem',
      height: '10.875rem',
      objectFit: 'contain',
      userSelect: 'none'
    }),
    footer: css({
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      mt: '3.75rem'
    }), 
    footerText:   css({
      fontSize: 'base.small',
      fontWeight: 'medium',
      color: 'lavenderLight'
    }),
  };

