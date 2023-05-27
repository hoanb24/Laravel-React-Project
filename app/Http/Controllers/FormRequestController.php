<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\FormRequests;
use App\Http\Requests;
use Carbon\Carbon;

class FormRequestController extends Controller
{
    public function index()
    {
        return view('form');
    }

    public function validateform(FormRequests $request)
    {
        $user= [
            'email' => $email = $request->input('email'),
            'phone' => $phone =$request->input('phone'),
            'password' => $password =$request->input('password'),
        ];
        return view('form')->with('user',$user);
    }

    public function ngay(Request $request){
        $so = $request ->input('so');
        $day = Carbon::now()->day;
        return view('page.trangchu')->with('day',$day);
    }
}
