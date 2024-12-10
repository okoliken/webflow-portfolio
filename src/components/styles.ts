import { css } from "../../styled-system/css";

export const headerStyles = {
  wrapper: css({
    bg: "purpleDark",
    color: "lavenderLight",
    p: { base: "1rem", md: "2.5rem" },
    borderTopLeftRadius: "md",
    borderTopRightRadius: "md",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: { base: "column", md: "row" },
    gap: { base: "1rem", md: "2rem" },
    position: "relative",
    "&.menu-open": {
      borderBottomLeftRadius: "0",
      borderBottomRightRadius: "0",
    }
  }),

  menuButton: css({
    display: { base: "block", md: "none" },
    bg: "transparent",
    border: "none",
    cursor: "pointer",
    color: "lavenderLight",
    p: "0.5rem",
    _hover: {
      opacity: 0.8,
    },
  }),

  header: css({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    w: "100%",
    maxWidth: { md: "15rem" },
  }),

  logo: css({
    width: "10.813rem",
    height: "1.609rem",
    objectFit: "contain",
    userSelect: "none",
  }),

  nav: css({
    display: "flex",
    alignItems: "center",
    flexDirection: { base: "column", md: "row" },
    gap: { base: "0.5rem", md: "2.5rem" },
    w: { base: "100%", md: "auto" },
    flex: { md: "1" },
    justifyContent: { md: "center" },
    transition: "all 0.3s ease",
    
    position: { base: "absolute", md: "static" },
    top: { base: "100%", md: "auto" },
    left: { base: 0, md: "auto" },
    right: { base: 0, md: "auto" },
    bg: { base: "purpleDark", md: "transparent" },
    py: { base: "1rem", md: 0 },
    opacity: { base: 0, md: 1 },
    visibility: { base: "hidden", md: "visible" },
    transform: { base: "translateY(-0.5rem)", md: "none" },
    borderBottomLeftRadius: { base: "md", md: "0" },
    borderBottomRightRadius: { base: "md", md: "0" },
    boxShadow: { base: "0 4px 6px -1px rgba(0, 0, 0, 0.1)", md: "none" },

    "&.active": {
      opacity: { base: 1, md: 1 },
      visibility: { base: "visible", md: "visible" },
      transform: { base: "translateY(0)", md: "none" },
    },

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
      fontSize: { base: "sm", md: "base.small" },
      fontWeight: "medium",
      w: { base: "100%", md: "auto" },
      justifyContent: { base: "center", md: "flex-start" },
    },
  }),

  contactButton: css({
    display: { base: "none", md: "flex" },
    alignItems: "center",
    gap: "0.5rem",
    minWidth: { md: "8rem" },
  }),
};
