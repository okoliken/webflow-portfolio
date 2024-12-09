import { cva } from '../../styled-system/css'

export const buttonRecipe = cva({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent:'center',
    gap: '0.625rem',
    p: '0.5rem',
    w: {
      sm: '7.875rem',
      md: '10.5rem',
    },
    h: '2.313rem',
    fontSize: {base: '0.75rem', md: 'base.small'},
    fontWeight: 'medium',
    textTransform: 'uppercase',
    borderRadius: 'md',
    bg: 'transparent',
    "& > svg": {
     fontSize: {base: '0.75rem', md: 'base.small'},
    }
  },
  variants: {
    variant: {
      primary: {
        bg: 'transparent',
        backgroundImage: 'linear-gradient(90deg, #1E0044, #1E0044),linear-gradient(90deg, #8338EC, #B923FF)',
        color: 'lavenderLight',
        border: '1px solid transparent',
        backgroundOrigin: 'border-box',
        backgroundClip:'padding-box, border-box',
        boxShadow: '0 0 10px 5px #A22DF71A',
      },
      secondary: {
        bg: 'transparent',
        color: 'purpleDark',
        border: '1px solid',
        borderImageSource: 'linear-gradient(0deg, #0B001A, #0B001A), linear-gradient(93.26deg, #8338EC 10.4%, #B923FF 101.06%)',
        boxShadow: '0 0 10px 5px #A22DF71A',
      }
    },
    size: {
      sm: {
        w: '7.875rem'
      },
      md: {
        w: '10.5rem'
      }
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'sm'
  }
}) 