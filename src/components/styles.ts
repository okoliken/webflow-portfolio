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
    gap: { base: "1rem", md: "0" },
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
    gap: { base: "0.5rem", md: "0 1.25rem" },
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
    },
  }),
};
