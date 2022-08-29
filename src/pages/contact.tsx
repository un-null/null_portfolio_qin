import { Button, Textarea, TextInput } from '@mantine/core'
import { Layout, Title } from 'components'
import { NextPage } from 'next'

const Contact: NextPage = () => {
  return (
    <Layout label="Contact" description="This page is contact page">
      <div className="mx-auto my-10 h-full max-w-screen-lg px-4">
        <Title title="Contact" />
        <form className="my-8 mx-auto w-[80%] max-w-lg space-y-8">
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
        <div className="grid h-auto w-full place-items-center">
          <Button
            radius="xl"
            className="block h-11 w-40 bg-[#25262B] hover:bg-[#0c0c13]"
          >
            Send message
          </Button>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
