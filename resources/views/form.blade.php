<!DOCTYPE html>
<html>

<head>
    <title>Đăng ký</title>
    <style>
        form {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        input[type="text"],
        input[type="email"],
        input[type="password"] {
            margin-bottom: 10px;
            padding: 5px;
            border: none;
            border-radius: 3px;
            box-shadow: 0px 0px 2px #888;
        }

        input[type="submit"] {
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 3px;
            cursor: pointer;
        }

        input[type="submit"]:hover {
            background-color: #3e8e41;
        }
        span {
            color:red;
        }
    </style>
</head>

<body>
    <h2>Đăng ký tài khoản</h2>
    <form method="post">
        @csrf
        <label for="email">Email:</label>
        <input type="text" id="email" name="email" >
        @if ($errors->has('email'))
            <span class="error">{{ $errors->first('email') }}</span>
        @endif

        <label for="phone">Phone Number:</label>
        <input type="text" id="phone" name="phone" >
        @if ($errors->has('phone'))
            <span class="error">{{ $errors->first('phone') }}</span>
        @endif

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" >
        @if ($errors->has('password'))
            <span class="error">{{ $errors->first('password') }}</span>
        @endif


        <label for="confirm_password">Confirm Password:</label>
        <input type="password" id="confirm_password" name="confirm_password" >

        <input type="submit" value="Đăng ký">
    </form>
</body>

<div>
    @if (isset($user))
        <ul>
            <li>{{ $user['email'] }}</li>
            <li>{{ $user['phone'] }}</li>
            <li>{{ $user['password'] }}</li>
        </ul>
    @endif
</div>

</html>
