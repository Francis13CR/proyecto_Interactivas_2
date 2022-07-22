<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $news = DB::table("news")->join("categories", "news.categories_id", "=", "categories.id")
        ->select("news.id", "news.title", "news.subtitle", "news.img", "news.description", "news.created_at",
        "news.categories_id","categories.name")->get();
        return $news;
    }
    public function detail($id){
        //$news = News::find($id);
        $item=DB::table('news')->join("categories","news.categories_id","=","categories.id")
        ->select("news.id", "news.title", "news.subtitle", "news.img", "news.description", "news.created_at", "news.categories_id",
        "categories.name", "categories.name as category")->where("news.id","=",$id)->get();
        return $item;
 }

 public function related($id,$category){
    $related_news = News::where([
    ["categories_id","=",$category],
    ["id","<>",$id]])->get();

    return $related_news;
    //El count ayuda a preguntarle al array si tiene o no valores
    
   
}

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
