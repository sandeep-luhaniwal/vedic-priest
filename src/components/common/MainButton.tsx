import React from 'react'
import Link from 'next/link'

export type ButtonVariant =
  | 'outline-blue'
  | 'outline-orange'
  | 'white'
  | 'black'
  | 'primary'
  | 'outline-black'
  | 'darkorange'

export type ButtonFontSize = 'xs' | 'sm' | 'base'

export type ButtonPadding = 'sm' | 'md' | 'lg' | 'compact' | 'default' | 'spacious'

export interface MainButtonProps {
  children?: React.ReactNode
  text?: string
  href?: string
  variant?: ButtonVariant
  fontSize?: ButtonFontSize
  padding?: ButtonPadding
  full?: boolean
  fullWidth?: boolean
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
  target?: string
  rel?: string
  [key: string]: any
}

const variantClasses: Record<ButtonVariant, string> = {
  // Border primary orange, text orange, hover bg black & text white
  'outline-blue':
    'border border-[#FA891A] text-[#FA891A] bg-transparent hover:bg-black hover:text-white hover:border-black',

  'outline-orange':
    'border border-[#FA891A] text-[#FA891A] bg-transparent hover:bg-black hover:text-white hover:border-black',

  // BG white, text orange, hover bg black & text white
  white:
    'bg-white text-[#FA891A] hover:bg-black hover:text-white shadow-sm border border-transparent',

  // BG black, text white, hover bg orange & text white
  black:
    'bg-black text-white hover:bg-[#FA891A] hover:text-white',

  // BG primary orange, text white, hover bg black & text white
  primary:
    'bg-[#FA891A] text-white hover:bg-black hover:text-white',

  // Border darkblack (black/65), text darkblack, hover bg primary orange & text white
  'outline-black':
    'border border-black/65 text-black/65 bg-transparent hover:bg-[#FA891A] hover:text-white hover:border-[#FA891A]',

  // Dark orange variant
  darkorange:
    'bg-dark-orange text-white hover:bg-black hover:text-white',
}

const fontClasses: Record<ButtonFontSize, string> = {
  xs: 'text-[12px]',
  sm: 'text-[14px]',
  base: 'text-[16px]',
}

const paddingClasses: Record<ButtonPadding, string> = {
  sm: 'py-[4px] px-[8px]',
  compact: 'py-[4px] px-[8px]',
  md: 'py-[6px] px-[10px]',
  default: 'py-[6px] px-[10px]',
  lg: 'py-[10px] px-[18px]',
  spacious: 'py-[10px] px-[18px]',
}

const MainButton: React.FC<MainButtonProps> = ({
  children,
  text,
  href,
  variant = 'primary',
  fontSize = 'sm',
  padding = 'default',
  full = false,
  fullWidth = false,
  className = '',
  disabled = false,
  type = 'button',
  onClick,
  target,
  rel,
  ...props
}) => {
  const isFull = full || fullWidth
  const variantStyle = variantClasses[variant] || variantClasses.primary
  const fontStyle = fontClasses[fontSize] || fontClasses.sm
  const paddingStyle = paddingClasses[padding] || paddingClasses.default
  const widthStyle = isFull ? 'w-full' : 'w-fit'

  const baseClasses = `
    inline-flex items-center justify-center font-medium rounded-md
    transition-all duration-300 ease-in-out cursor-pointer select-none text-center
    ${widthStyle}
    ${fontStyle}
    ${paddingStyle}
    ${variantStyle}
    ${disabled ? 'opacity-50 pointer-events-none cursor-not-allowed' : ''}
    ${className}
  `.replace(/\s+/g, ' ').trim()

  const content = text || children

  // If href is provided, render as Next.js Link
  if (href && !disabled) {
    return (
      <Link
        href={href}
        className={baseClasses}
        onClick={onClick}
        target={target}
        rel={target === '_blank' ? (rel || 'noopener noreferrer') : rel}
        {...props}
      >
        {content}
      </Link>
    )
  }

  // Otherwise render as a standard HTML button
  return (
    <button
      type={type}
      disabled={disabled}
      className={baseClasses}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  )
}

export default MainButton