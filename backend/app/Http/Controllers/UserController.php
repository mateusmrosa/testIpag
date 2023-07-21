<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Services\Service;


class UserController extends Controller
{
    public function create(Request $request)
    {
        $data = $request->validate([
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:6',
        ]);
    
        try {
            User::create([
                'email' => $data['email'],
                'password' => Service::hash($data['password']),
            ]);
        } catch (\Throwable $th) {
            return response()->json(['message' => 'Error creating user'], 500);
        }
    
        return response()->json(['message' => 'User created'], 201);
    }
    
}
