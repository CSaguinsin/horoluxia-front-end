<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;
use Illuminate\Support\Facades\Validator;


class CategoryController extends Controller
{
    public function store (Request $request){
        
        $validator = Validator::make($request->all(), [
            'meta_title' => ['required', 'string', 'max:255'],
            'slug' => ['required', 'string', 'max:255'],
            'name' => ['required'],
        ]);
        if($validator->fails()){
            return response()->json([
                'status' => 400,
                'errors' =>$validator->messages(),
            ]);
        }else{
            $category = new Category;
            $category->meta_title = $request->input('meta_title');
            $category->meta_keyword = $request->input('meta_keyword');
            $category->meta_description = $request->input('meta_description');
            $category->slug = $request->input('slug');
            $category->name = $request->input('name');
            $category->description = $request->input('decription');
            $category->status = $request->input('status') == true ? '1' : '0';
            $category->save();
    
            return response()->json([
                'status' => 200,
                'message' => 'Added Successfully',
            ]);
    
        }

        
    }
}
