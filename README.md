# Usage

## First - you will eneter you name itself . Ff the name is used before you will get all the messages sent to this name. [MAIN_URL/api/users]`(getAllUsers)`

## Second - to send message for other users you will have to fill this form

<code>
  recipient: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
</code>

### You can even send message for yourself
