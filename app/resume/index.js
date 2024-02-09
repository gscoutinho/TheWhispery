import Image from 'next/image'
import React from 'react'
import SectionCard from '../components/SectionCard'
import Tag from '../components/Tag'



export default function Resume({ props }) {

    const AUTHOR_NAME = props.author_name
    const AUTHOR_ROLE = props.author_role
    const INTERESTED_FIELDS = props.interested_fields
    const DESCRIPTION = props.description
    const PHOTO_PATH = props.photo

    return (
        <>
            <SectionCard SEC_ID='resume' initial_animation={true}>
                <Image
                    src={PHOTO_PATH}
                    width={250}
                    height={250}
                    alt='Picture of the author'
                    className='rounded-lg shadow-4xl hover:shadow-8xl transform hover:scale-105 transition duration-300'
                />

                <div className=' w-3/5 relative'>
                    <div className='h-full'>
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
                        <span className='text-justify'>{DESCRIPTION}</span>
                        
                        <div className='bg-red w-full flex justify-start absolute bottom-0'>
                            {INTERESTED_FIELDS.map(item => {
                                return (
                                    <Tag description={item} />
                                )
                            })}

                        </div>
                    </div>
                </div>
            </SectionCard>
        </>
    )
}


