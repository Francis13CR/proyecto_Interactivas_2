<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\News;

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
    //si
    
   
}

    public function filter($category){
        $item=DB::table('news')->join("categories","news.categories_id","=","categories.id")
        ->select("news.id", "news.title", "news.subtitle", "news.img", "news.description", "news.created_at",
        "categories.name", "categories.name as category")->where("categories.name","=",$category)->get();
        return $item;
    }

    public function search($keyboard){
        $results=DB::table("news")->join("categories", "news.categories_id","=","categories.id")
        ->select("news.id", "news.title", "news.img", "news.description", "news.created_at",
        "categories.name")
        ->where("news.title", "like", "%{$keyboard}%")
        ->orWhere("news.description", "like", "%{$keyboard}%")
        ->get();
    
        if(count($results) > 0){
            return $results;
            }else{
                return response()->json(["message"=> "No found: ".$keyboard]);
            } 
        }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        //creamos una nueva noticia
        $news = new News();
        $news->title = $request->title;
        $news->subtitle = $request->subtitle;
        $img = $request->img;
        //sacamos la imagen de la peticion
        $image = $request->file('image');
        //guardamos la imagen en la carpeta public/images
        $image_name = time().$image->getClientOriginalName();
        $image->move('storage/imgs',$image_name);
        $news->img = $image_name;

        $news->description = $request->description;
        $news->categories_id = $request->category;
        //obteneos fecha y hora actuales GMT-6
        $news->created_at = date('Y-m-d H:i:s', time() - (6 * 60 * 60));
        $news->updated_at = date('Y-m-d H:i:s', time() - (6 * 60 * 60));


        $news->save();
        return response()->json(
            [
                'status' => 'success',
                'message' => 'News created successfully'
            ]
        );


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
