// Style objects
import { css } from "../../styled-system/css";
export const heroStyles = {
  container: css({
    bg: "purpleDark",
    color: "lavenderLight",
    p: { base: "1.5rem", md: "2.5rem" },
    borderBottomLeftRadius: "md",
    borderBottomRightRadius: "md",
    minHeight: { base: "calc(100vh - 200px)", md: "37.375rem" },
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    position: "relative",
    overflow: "hidden",
  }),

  contentWrapper: css({
    mt: { base: "2rem", md: "2.5rem" },
    display: "flex",
    gap: { base: "2rem", md: "1.5rem" },
    flexDirection: "column",
    maxWidth: { base: "100%", md: "80%", lg: "60%" },
  }),

  heading: css({
    fontSize: { base: "base.heading", md: "base.display" },
    lineHeight: { base: "40px", md: "display" },
    letterSpacing: "tight",
    fontWeight: "medium",
    transition: "font-size 0.3s ease",
  }),

  highlightedText: css({
    fontWeight: "light",
    fontStyle: "italic",
    bgGradient: "secondary",
    bgClip: "text",
    color: "transparent",
    pr: "1rem",
    fontFamily: "Georgia, serif",
    display: "inline-block",
    transform: { base: "none", md: "translateY(2px)" },
  }),

  subtitle: css({
    fontSize: { base: "base.small", md: "base.subtitle" },
    lineHeight: { base: "22px", md: "base" },
    mt: { base: "1rem", md: "1.5rem" },
    maxWidth: { base: "100%", md: "90%", lg: "80%" },
  }),

  footer: css({
    mt: { base: "2rem", md: "auto" },
    display: "flex",
    flexDirection: { base: "column", md: "row" },
    justifyContent: "space-between",
    alignItems: { base: "start", md: "end" },
    gap: { base: "1.5rem", md: "0" },
    width: "100%",
  }),

  availabilityText: css({
    fontSize: "base.small",
    lineHeight: "snug",
    fontWeight: "medium",
    opacity: 0.9,
  }),

  scrollImage: css({
    userSelect: "none",
    display: "block",
    width: { base: "5rem", md: "auto" },
    transform: { md: "translateY(1rem)" },
    transition: "transform 0.3s ease",
    _hover: {
      transform: { md: "translateY(1.5rem)" },
    },
  }),
};

export const servicesStyles = {
  servicesGrid: css({
    display: "grid",
    gridTemplateColumns: { base: "1fr", md: "1fr 1fr" },
    gap: { base: "1rem", md: "2.5rem" },
    p: "2.5rem 0rem" ,
  }),
  serviceCard: css({
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    p: { base: "1.5rem", md: "2.25rem" },
    borderRadius: "md",
    h: { base: "100%", md: "21.613rem" },

    "&.dev": {
      bgGradient: "secondary",
    },
    "&.art": {
      bgGradient: "primary",
    },
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
    display: "flex",
    flexDirection: { base: "column", md: "row" },
    gap: {base: '1.5rem', md: '0'},
    justifyContent: { base: "center", md: "space-between" },
    "& > img": {
      objectFit: "contain",
    },
  }),
  caseStudy: css({
    display: "flex",
    flexDirection: "column",
    position: "relative",
    zIndex: 1,
    gap: "1rem",
    width: "100%",
    color: "purpleDark",
    "& > span": {
      fontSize: "base.small",
      lineHeight: "snug",
      fontWeight: "light",
      textTransform: "uppercase",
    },
    "& > h2": {
      fontSize: "base.heading",
      lineHeight: "3.125rem",
      letterSpacing: "-2%",
      fontWeight: "medium",
    },
    "& > .chips": {
      display: 'inline-flex',
      w:'fit',
      gap: "0.5rem",
      h: "2.113rem",
      bg: "lavenderLight",
      color: "purpleDark",
      fontSize: "base.small",
      lineHeight: "snug",
      fontWeight: "medium",
    },
    "& > .chips > div": {
      border: "1px solid",
      py: "0.369rem",
      px: "0.738rem",
      borderRadius: "1.231rem",
      fontSize: {base: "0.75rem", md: "base.small"},
      lineHeight: "snug",
    },
  }),
  otherSection: css({
    display: "flex",
    flexDirection: "column",
    position: "relative",
    zIndex: 1,
    gap: "1rem",
    width: "100%",
    color: "lavenderLight",
    "& > span": {
      fontSize: "base.small",
      lineHeight: "snug",
      fontWeight: "light",
      textTransform: "uppercase",
    },
    "& > h2": {
      fontSize: "base.heading",
      lineHeight: "3.125rem",
      letterSpacing: "-2%",
      fontWeight: "medium",
    },
    "& > .chips": {
      display: "flex",
      gap: "0.5rem",
      h: "2.113rem",
      bg: "transparent",
      color: "lavenderLight",
      fontSize: "base.small",
      lineHeight: "snug",
      fontWeight: "medium",
    },
    "& > .chips > div": {
      border: "1px solid",
      py: "0.369rem",
      px: "0.738rem",
      borderRadius: "1.231rem",
      fontSize: {base: "0.75rem", md: "base.small"},
      lineHeight: "snug",
    },
  }),
  lightPatternSection: css({
    backgroundImage: `url(./assets/bg-pattern-light.png)`,
    w: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "lavenderLight",
    p: {base: "1.5rem", md: "2.5rem"},
    borderRadius: "md",
    h: { base: "100%", md: "37.5rem" },
    zIndex: 0,
  }),
  darkPatternSection: css({
    backgroundImage: `url(./assets/bg-pattern-dark.png)`,
    w: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "lavenderLight",
    p: {base: "1.5rem", md: "2.5rem"},
    borderRadius: "md",
    h: { base: "100%", md: "37.5rem" },
    mt: "2.5rem",
  }),
  imageWrapper: css({
    position: "relative",
    "& > img:last-child": {
      position: "absolute",
      top: "3.5rem",
      left: "-3.5rem",
      width: "144.83px",
      height: "144.83px",
      display: {base: 'none', md: 'block'}
    },
  }),
};

export const awardsStyles = {
  awardsWrapper: css({
    bg: "lavenderLight",
    p: {base: "1.5rem", md: "3.75rem"},
    borderRadius: "md",
    h: {base: "100%", md: "32rem"},
    mt: "2.5rem",
    display: "flex",
    flexDirection: "column",
  }),
  awardsFlexContainer: css({
    display: "flex",
    gap: {base: '1rem', md: '0'},
    flexDirection: {base: 'column', md:'row'},
    justifyContent: {base: 'center', md:"space-between"},
  }),
  awardsHeading: css({
    fontSize: {base: "base.title", md: "base.heading"},
    lineHeight: "title",
    letterSpacing: "tight",
    color: "purpleBase",
    flex: 1,
  }),
  listOfAwards: css({
    display: "flex",
    flexDirection: "column",
    flex: 1,
    "& > li": {
      borderTop: "bottomSide",
      pt: "1.25rem",
      pb: "1.25rem",
    },
  }),
  awardItem: css({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& > div": {
      display: "flex",
      flexDirection: "column",
      gap: {base: "0.2rem", md: "0.5rem"},
      "& > h3": {
        fontSize: {base: "0.9rem", md: "base.body"},
        lineHeight: {base: "22px", md: "32.2px"},
        color: "purpleDark",
        fontWeight: "medium",
      },
      "& > p": {
        fontSize: "base.small",
        lineHeight: "snug",
        fontWeight: "light",
        color: "purpleDark",
      },
      "& > svg": {
        width: {base: '1rem', md: '22px'},
        height: {base: '1rem', md: '22px'},
      }
    },
  }),
};

export const footerStyles = {
  wrapper: css({
    bg: "purpleDark",
    p: {base: "1.5rem", md: "2.5rem"},
    borderRadius: "md",
    h: "100%",
    mt: "2.5rem",
  }),
  header: css({
    display: "flex",
    flexDirection: { base: "column", md: "row" },
    gap: {base: '1.5rem', md: '0'},
    justifyContent: { base: "center", md: "space-between" },
    alignItems: "center",
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
    flexDirection: {base: 'column', md: 'row'},
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
    mt: "2.5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "2.5rem",
    h: "100%",
    p: {base: '0rem', md: "5.5rem"},
  }),
  heading: css({
    fontSize: {base: 'base.title', md:"base.display"},
    lineHeight: {base: '40px', md: "100px"},
    fontWeight: "medium",
    textAlign: "center",
    color: "lavenderLight",
  }),
  ctaImage: css({
    width: "10.875rem",
    height: "10.875rem",
    objectFit: "contain",
    userSelect: "none",
  }),
  footer: css({
    display: "flex",
    justifyContent: "space-between",
    flexDirection: {base: 'column', md: 'row'},
    alignItems: "center",
    mt: "3.75rem",
  }),
  footerText: css({
    fontSize: "base.small",
    fontWeight: "medium",
    color: "lavenderLight",
  }),
};
