import React from 'react'
import { LabelF, TextBox, MessageBox, Form, FieldID, Header } from './Contact.styles'

const info = ['Email:', 'Name:', 'Subject:', 'Urgency:']
const messPH = 'Message:'

const Contact = () => {
  const FFields = info.map((field => 
      <LabelF>
        <FieldID>{field}</FieldID>
        <TextBox placeholder={field} />
      </LabelF>
    ))
  return (
    <div>
      <Form>
        <Header>
          Tests
        </Header>
        
        {FFields}
        <LabelF>
          <FieldID>{messPH}</FieldID>
          <MessageBox placeholder={messPH} />
        </LabelF>
        <input type='submit' value="Submit" />
      </Form>
    </div>
  )
}

export default Contact
