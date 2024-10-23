tailwind.config = {
  theme: {
    extend: {
      colors: {
        // Couleurs des interfaces
        body: "hsl(40, 20%, 3%)",
        bgColor: "hsl(24, 38%, 97%)",
        bodyGray: "hsl(40, 20%, 3%, 0.5)",

        // Hover des couleurs des interfaces
        bodyHover: "hsl(40, 20%, 13%)",
        bgColorHover: "hsl(24, 38%, 87%)",

        // Couleurs principales du site
        primary: "hsl(29, 59%, 50%)",
        secondary: "hsl(29, 78%, 73%)",
        accent: "hsl(29, 97%, 62%)",

        // Hover des couleurs principales du site
        primaryHover: "hsl(29, 59%, 60%)",
        secondaryHover: "hsl(29, 78%, 83%)",
        accentHover: "hsl(29, 97%, 67%)",

        // Couleurs des alertes
        warning: "hsl(0, 84%, 60%)",
        valid: "hsl(142, 71%, 45%)",

        // Hover ouleurs des alertes
        warningHover: "hsl(0, 84%, 70%)",
        validHover: "hsl(142, 71%, 55%)",
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"],
        alinsa: ["Alinsa", "sans-serif"],
      },
    },
  },
};
