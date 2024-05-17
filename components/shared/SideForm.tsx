import React from 'react'
import Form from './Form'

type Props = {}

const MainPage = (props: Props) => {
  return (
    <section className="flex flex-col  p-10 gap-3 w-[90%] md:w-[70%] lg:w-[50%] ">
        <div className="flex flex-col">
          <h1 className="font-bold text-[22px] md:text-[32px] capitalize">
            Get started with franchain
          </h1>
          <p className="text-[16px] md:text-[25px]">Create an account in 5 minutes</p>
        </div>
        <Form />
      </section>
  )
}

export default MainPage