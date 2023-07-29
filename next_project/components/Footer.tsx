import React from 'react'
import Image from 'next/image'
import { footerLinks } from '@/constant'
import Link from 'next/link'

type ColumnProps={
  title :string;
  links: Array<string>;
}

const FooterColumn =({title ,links}: ColumnProps) =>(
  <div className='footer_column'>
    <h4 className='font-semibold'> {title}</h4>
    <ul className='flex flex-col gap-2 font-normal'></ul>
  </div>

)
const Footer = () => {
  return (
    <footer className='flexStart footer'>
      <div className='flex flex-col gap-12 w-full'>
        <div className='flex item-start flex-col'>
          <Image alt='Flexabble' src='/logo-purple.svg' width={115} height={38} />
          <p className='text-start text-sm font-normal mt-5 max-xs'>Flexabble is very comunity </p>

        </div>
        <div className='flex flex-wrap gap-12'>
          <FooterColumn title={footerLinks[0].title} links={footerLinks[0].links}/>
          {links.map((link))=> <Link href='/' key={link}>{link}</Link>
            <></>
          }
        </div>
      </div>
    </footer>
  )
}

export default Footer