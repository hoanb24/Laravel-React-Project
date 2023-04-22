<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HelloControl extends Controller
{
    //
    public function xinchao(){
        $title = "Tiêu đề";
        $traicay = "Dưa hấu";
        $mang = ['title' => $title,'traicay'=>$traicay];
        // return view('test')->with('title',$title)->with('traicay',$traicay);
        return view('test')->with('title',$mang);
    }
}
