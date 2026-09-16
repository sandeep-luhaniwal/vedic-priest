import React from 'react'

export type HeadingSize = 'small' | 'big' | 'hero' | 'default'

export type HeadingColor =
  | 'white'
  | 'black'
  | 'darkblack'
  | 'primary'
  | 'orange'
  | 'darkorange'
  | 'lightwhite'
  | 'green'

export type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children?: React.ReactNode
  text?: string
  size?: HeadingSize
  color?: HeadingColor
  as?: HeadingTag
  className?: string
}

const sizeClasses: Record<HeadingSize, string> = {
  small: 'text-[24px] md:text-[28px] lg:text-[32px]',
  big: 'text-[32px] md:text-[36px] lg:text-[42px]',
  default: 'text-[32px] md:text-[36px] lg:text-[42px]',
  hero: 'text-[48px] md:text-[54px] lg:text-[62px]',
}

const colorClasses: Record<HeadingColor, string> = {
  white: 'text-white',
  black: 'text-black',
  darkblack: 'text-black/65',
  primary: 'text-[#FA891A]',
  orange: 'text-[#FA891A]',
  darkorange: 'text-[#F55300]',
  lightwhite: 'text-[#FCF8F8]',
  green: 'text-[#3DC244]',
}

const Heading: React.FC<HeadingProps> = ({
  children,
  text,
  size = 'default',
  color = 'primary',
  as: Component = 'h2',
  className = '',
  ...props
}) => {
  const sizeStyle = sizeClasses[size] || sizeClasses.default
  const colorStyle = colorClasses[color] || colorClasses.primary

  return (
    <Component
      className={`leading-[110%] font-bold ${sizeStyle} ${colorStyle} ${className}`.trim()}
      {...props}
    >
      {text || children}
    </Component>
  )
}

export default Heading