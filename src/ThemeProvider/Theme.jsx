import { createTheme, responsiveFontSizes } from '@mui/material/styles';

export default function GlobalStyleOverrides() {
  const theme = createTheme({       
    typography: {
      fontFamily: [
     'cursive'
      ].join(','),         
      body1: {
        fontFamily: "cursive",
      },
    },
    
  });

  return responsiveFontSizes(theme);
}