<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class FormRequests extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'email' => 'required|email|string',
            'phone' => 'numeric',
            'password' => 'string|confirmed',
            'confirm_password' => 'string|confirmed',
        ];
    }

    public function messages()
    {
        return [
            'email.email' => 'Phai nhap email',
            'phone.numeric' => 'Phai nhap phone',
            'password.confirmed' => 'Mat khau khong khop',
            'confirm_password.confirmed' => 'Mat khau khong khop',

        ];
    }
}
