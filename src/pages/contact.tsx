import { Button, TextInput } from '@mantine/core'
import { Layout } from 'components/Layout'
import { Title } from 'components/Title'
import { NextPage } from 'next'

const Contact: NextPage = () => {
  return (
    <Layout label="Contact">
      <div className="w-full max-w-screen-lg h-full mx-auto my-10">
        <Title title="Contact" />
        <form>
          <TextInput placeholder="your @email.com" label="Email" required />
          <TextInput placeholder="your name" label="Name" required />
          <TextInput placeholder="your message" label="Your message" required />
        </form>
        <div className="w-full h-auto grid place-items-center">
          <Button color="dark" size="md" radius="xl" className="my-4">
            Send message
          </Button>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
