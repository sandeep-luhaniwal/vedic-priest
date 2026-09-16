import React from 'react'

export type ParagraphSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | 'default'

export type ParagraphColor =
  | 'black'
  | 'darkblack'
  | 'white'
  | 'orange'
  | 'primary'
  | 'darkorange'
  | 'lightwhite'
  | 'green'

export type ParagraphTag = 'p' | 'span' | 'div'

export interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children?: React.ReactNode
  text?: string
  size?: ParagraphSize
  color?: ParagraphColor
  as?: ParagraphTag
  className?: string
}

const sizeClasses: Record<ParagraphSize, string> = {
  xs: 'text-[12px]',
  sm: 'text-[14px]',
  base: 'text-[14px] md:text-[16px]',
  lg: 'text-[16px] md:text-[18px]',
  xl: 'text-base md:text-lg lg:text-xl',
  default: 'text-[20px] md:text-[22px] lg:text-[24px]',
}

const colorClasses: Record<ParagraphColor, string> = {
  black: 'text-black',
  darkblack: 'text-black/65',
  white: 'text-white',
  orange: 'text-[#FA891A]',
  primary: 'text-[#FA891A]',
  darkorange: 'text-[#F55300]',
  lightwhite: 'text-[#FCF8F8]',
  green: 'text-[#3DC244]',
}

const Paragraph: React.FC<ParagraphProps> = ({
  children,
  text,
  size = 'default',
  color = 'black',
  as: Component = 'p',
  className = '',
  ...props
}) => {
  const sizeStyle = sizeClasses[size] || sizeClasses.default
  const colorStyle = colorClasses[color] || colorClasses.black

  return (
    <Component
      className={`leading-[150%] ${sizeStyle} ${colorStyle} ${className}`.trim()}
      {...props}
    >
      {text || children}
    </Component>
  )
}

export default Paragraph