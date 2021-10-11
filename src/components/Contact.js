import React from 'react'
import { LabelF, TextBox, MessageBox, Form, FieldID, Header, Submit } from './Contact.styles'

const info = ['Email:', 'Name:', 'Subject:', 'Urgency:']
const messPH = 'Message:'

const Contact = () => {
  const FFields = info.map((field => 
      <LabelF>
        <FieldID>{field}</FieldID>
        <TextBox rows = '1' placeholder={field} />
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
          <MessageBox rows='4' placeholder={messPH} />
        </LabelF>
        <Submit type='submit' value='Submit'/>
      </Form>
    </div>
  )
}

export default Contact
