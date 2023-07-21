<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Services\Service;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $data = $request->all();
        try {
            $user = User::where('email', $data['email'])->first();

            if (!$user || !Service::check($data['password'], $user->password))
                return response()->json(['message' => 'invalid credentials'], 401);

            if (!$token = auth()->attempt($data)) {
                abort(401);
            }

            return response()->json([
                'message' => 'authorized login',
                'token' => $token,
                'token_type' => 'bearer',
                'expires_in' => auth()->factory()->getTTL() * 60
            ]);
        } catch (\Throwable $th) {
            return response()->json(['message' => $th->getMessage()], 500);
        }
    }
}
