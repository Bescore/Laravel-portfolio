<?php

namespace App\Http\Controllers;

use App\Models\Message;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    public function message(Request $request){
        
        $request->validate([
            'nom' => 'required',
            'email' => 'required|email',
            'message' => 'required|max:400',
        ]);
        
        $message= new Message();

        $message->nom = $request->input('nom');
        $message->email = $request->input('email');
        $message->message = $request->input('message');
        $message->save();
        
        return response()->json($message,200);
    }
}
