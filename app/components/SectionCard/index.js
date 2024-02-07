export default function SectionCard({SEC_ID, children}){
    return (
        <section id={SEC_ID} className='my-5 mx-2 px-5 py-10 flex justify-around content-center bg-sky-50/70 rounded-md shadow-md justify-self-center'>
            {children}
        </section>
    )
}