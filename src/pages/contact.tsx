import { Button, Textarea, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { Layout, Title } from 'components'
import { NextPage } from 'next'
import { useState } from 'react'

type Form = {
  email: string
  username: string
  message: string
}

const Contact: NextPage = () => {
  const [success, setSuccess] = useState(false)

  const form = useForm<Form>({
    initialValues: {
      email: '',
      username: '',
      message: '',
    },
    validate: {
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : '正しいメールアドレスを入力して下さい',
      username: (value) => (value ? null : '名前を入力して下さい'),
      message: (value) => (value ? null : 'メッセージを入力して下さい'),
    },
  })

  const handleSubmit = async (values: Form) => {
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          email: values.email,
          username: values.username,
          message: values.message,
        }),
      }).then((value) => {
        if (value.ok) {
          setSuccess(true)
          console.log(value)
        } else {
          throw new Error('エラーが発生しました')
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Layout label="Contact" description="This page is contact page">
      <div className="mx-auto my-10 h-full max-w-screen-lg px-4">
        <Title title="Contact" />
        {!success ? (
          <form
            className="my-8 mx-auto w-[80%] max-w-lg space-y-8"
            onSubmit={form.onSubmit(handleSubmit)}
          >
            <TextInput
              placeholder="your @email.com"
              label="Email"
              classNames={{
                label: 'font-bold text-lg',
              }}
              {...form.getInputProps('email')}
            />
            <TextInput
              placeholder="your name"
              label="Name"
              classNames={{
                label: 'font-bold text-lg',
              }}
              {...form.getInputProps('username')}
            />
            <Textarea
              placeholder="your message"
              label="Your message"
              classNames={{
                label: 'font-bold text-lg',
              }}
              {...form.getInputProps('message')}
            />
            <div className="grid h-auto w-full place-items-center">
              <Button
                radius="xl"
                className="block h-11 w-40 bg-[#25262B] hover:bg-[#0c0c13]"
                type="submit"
              >
                Send message
              </Button>
            </div>
          </form>
        ) : (
          <h2>お問合せが完了しました</h2>
        )}
      </div>
    </Layout>
  )
}

export default Contact
