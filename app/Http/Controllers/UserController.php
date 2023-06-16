<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;

class UserController extends Controller
{
    public function Login(Request $request)
    {

            $login = [
                'email' => $request->email,
                'password' => $request->password
            ];
            // dd(Auth::attempt($login));
            $check = DB::table('users')->where('email',$login['email'], 'password',$login['password']);

            if($check){
                return true;
            }
            else {
                return false;
            }
      
    }

    public function Logout()
    {
        Session::forget('user');
        Session::forget('cart');
        return redirect('/trangchu');
    }
    public function Register(Request $request)
    {
        $input = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email|unique:users',
            'password' => 'required',
            'c_password' => 'required|same:password',
        ]);

        $input['password'] = bcrypt($input['password']);
        User::create($input);

        echo '
        <script>
            alert ("Đăng ký thành công. Vui lòng đăng nhập.");
            window.location.assign("login");
        </>
        ';
    }
}
