import { Textarea, TextInput } from '@mantine/core'
import { Buttons } from 'components/Buttons'
import { Layout } from 'components/Layout'
import { Title } from 'components/Title'
import { NextPage } from 'next'

const Contact: NextPage = () => {
  return (
    <Layout label="Contact" description="This page is contact page">
      <div className="w-full max-w-screen-lg h-full mx-auto my-10">
        <Title title="Contact" />
        <form className="space-y-8 my-8">
          <TextInput
            placeholder="your @email.com"
            label="Email"
            classNames={{
              label: 'font-bold text-lg',
            }}
          />
          <TextInput
            placeholder="your name"
            label="Name"
            classNames={{
              label: 'font-bold text-lg',
            }}
          />
          <Textarea
            placeholder="your message"
            label="Your message"
            classNames={{
              label: 'font-bold text-lg',
            }}
          />
        </form>
        <Buttons label="Send message" />
      </div>
    </Layout>
  )
}

export default Contact
