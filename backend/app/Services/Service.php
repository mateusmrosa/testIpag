<?php

namespace App\Services;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use \Illuminate\Validation\ValidationException;

class Service
{
    public static function hash($password)
    {
        return Hash::make($password);
    }

    public static function check($passwordBody, $password)
    {
        return Hash::check($passwordBody, $password);
    }

    public static function verifyEmail($email)
    {
        if (filter_var($email, FILTER_VALIDATE_EMAIL))
            return true;
        else
            return false;
    }
}
