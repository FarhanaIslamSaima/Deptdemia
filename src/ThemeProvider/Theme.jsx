import { createTheme, responsiveFontSizes } from '@mui/material/styles';

export default function GlobalStyleOverrides() {
  const theme = createTheme({       
    typography: {
      fontFamily: [
        '"Comic Sans MS"',
        
        '"Lucida Handwriting"',
        
      ].join(','),         
      body1: {
        fontFamily: '"Comic Sans MS","Lucida Handwriting"'
        
        
      },
      input: {
        "& input.Mui-disabled": {
          color: "green"
        }
      }
    },
    
  });

  return responsiveFontSizes(theme);
}