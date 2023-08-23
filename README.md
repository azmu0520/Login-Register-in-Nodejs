<h1>  Usage  </h1>

<ol>
    <li>
   <h3> The Api  Can be used without registration and authentication</h3>
    </li>
    <li>
    Regsiter a user with <i>name</i> , <i>email</i> , <i>password</i> in req.body. You will get userId , name , email and token as a response
        <ul>
            <li>The endpoint is <a href="/">main_url/api/user/register</a></li>
            <li>method=POST</li>
        </ul>
    </li>
    <li>
        To Login user you will enter <i>email</i> , <i>password</i>. You will get userId , name , email and token as a response
        <ul>
            <li>The endpoint is <a href="/">main_url/api/user/login</a></li>
            <li>method=POST</li>
        </ul>
    </li>
    <li>
        You can get All users by sending main url get request
        <ul>
            <li>The endpoint is <a href="/">main_url/api/user</a></li>
            <li>method=GET</li>
        </ul>
    </li>
    <li>
       To get single user
        <ul>
            <li>The endpoint is <a href="/">main_url/api/user/:userId</a></li>
            <li>method=POST</li>
        </ul>
    </li>
</ol>

<h1>Thank you for your attention. Do not forget to like this repo!!!</h1>
