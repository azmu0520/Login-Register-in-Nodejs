<h1>  Usage  </h1>

<ol>
    <li>
      Api  Can be used without registration and authentication
    </li>
    <li>
        At the start user have to enter its name (just name without password or anything). 
        <ul>
            <li>The endpoint is <a href="/">main_url/api/users</a></li>
            <li>method=POST</li>
            <li>body={name:"username"}</li>
        </ul>
    </li>
    <li>
        After entering its name user get to the “send a message” form: recipient, title and the message body.
        <ul>
            <li>The endpoint is <a href="/">main_url/api/messages</a></li>
            <li>method=POST</li>
            <li>body={recipient:"username",title:"Message title", message="MSG" }</li>
        </ul>
    </li>
    <li>
        You can get All users to support autocompletion.
        <ul>
            <li>The endpoint is <a href="/">main_url/api/users</a></li>
            <li>method=GET</li>
        </ul>
    </li>

    <li>
        To display all messages send to the current user.
        <ul>
            <li>The endpoint is <a href="/">main_url/api/messages/recipient</a></li>
            <li>method=POST</li>
            <li>body={recipient:"username"}</li>
        </ul>
    </li>
    <li>
        Users can send message to themselves
    </li>

</ol>

<h3>Thank you for your attention. Do not forget to like this repo!!!</h3>
