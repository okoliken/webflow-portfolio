import { cva } from '../../styled-system/css'

export const buttonRecipe = cva({
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
    p: '0.5rem',
    w: '7.875rem',
    h: '2.313rem',
    fontSize: 'base.small',
    fontWeight: 'medium',
    textTransform: 'uppercase',
    borderRadius: 'md',
    border: '1px solid transparent',
    boxShadow: 'shadows.all',
  },
  variants: {
    variant: {
      primary: {
        bg: 'purpleDark',
        color: 'lavenderLight',
        backgroundImage: 'linear-gradient(purpleDark, purpleDark), gradients.secondary',
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box, border-box',
      },
      // You can add more variants here
      secondary: {
        // Define secondary styles
      }
    }
  },
  defaultVariants: {
    variant: 'primary'
  }
}) 