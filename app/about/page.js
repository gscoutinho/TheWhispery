import Image from 'next/image'

import React from 'react'
import SectionCard from '../components/SectionCard'



export default function About() {

  const AUTHOR_NAME = 'Gabriel Coutinho'
  const AUTHOR_ROLE = 'SCADA & Software Engineer'
  const INTERESTED_FIELDS = ['Renewable Energies', 'SCADA Systems', 'Software Engineering', 'Data Science']

  return (
    <>
      <SectionCard SEC_ID='about'>
        <Image
          src='/about.png'
          width={250}
          height={250}
          alt='Picture of the author'
          className='rounded-lg shadow-4xl'
        />

        <div className='w-3/5'>
          <table>
            <tr>
              <td className='w-2 bg-lime-700'></td>
              <td className='pl-3 text-left text-4xl mb-1'>{AUTHOR_NAME}</td>
            </tr>
            <tr>
              <td className='w-2 bg-lime-700'></td>
              <td className='pl-3 text-left tetx-2xl'>{AUTHOR_ROLE}</td>
            </tr>
          </table>
          <br />
          <span className='text-justify'>Expertise in renewable energy projects and industrial automation systems. With a focus on high-performance SCADA systems and software development, I've led projects from inception to deployment, specializing in wind, solar, and hybrid energy plants. </span>
        </div>
      </SectionCard>
    </>
  )
}
