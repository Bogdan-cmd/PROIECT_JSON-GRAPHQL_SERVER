<?php
require "vendor/autoload.php";
$client=new \GuzzleHttp\Client();
$actiune = $_POST['actiune'];

if($actiune == "categorii"){

    $interogareSerializata=["json"=>["query"=>"{allCategories {
      id name 
      }}"]]; //interogare
    $antet=["headers"=>["Content-Type"=>"application/json"]];
    $cereri=[
        "cerere"=>$client->postAsync("http://localhost:3000",$interogareSerializata,$antet)
    ];
    $rezultate=\GuzzleHttp\Promise\unwrap($cereri);

    print $rezultate["cerere"]->getBody();}

if($actiune == "menu"){
$id = $_POST["id"];
    $interogareSerializata=["json"=>["query"=>"{
      allMenus(filter: {category_id: $id}) {
        name image_url price id category_id
      }
     }
     "]]; //interogare
$antet=["headers"=>["Content-Type"=>"application/json"]];
$cereri=[
    "cerere"=>$client->postAsync("http://localhost:3000",$interogareSerializata,$antet)
];
$rezultate=\GuzzleHttp\Promise\unwrap($cereri);

print $rezultate["cerere"]->getBody();}

if($actiune == "stergere"){
  $id = $_POST["id"];
      $interogareSerializata=["json"=>["query"=>'
      mutation{removeMenu(id:"'. $id .'"){id Category{id}}}
       ']]; //interogare
  $antet=["headers"=>["Content-Type"=>"application/json"]];
  $cereri=[
      "cerere"=>$client->postAsync("http://localhost:3000",$interogareSerializata,$antet)
  ];
  $rezultate=\GuzzleHttp\Promise\unwrap($cereri);
  
  print $rezultate["cerere"]->getBody();}

  if($actiune == "inserare"){
   // $data = json_decode(file_get_contents('php://input'));
    //$data = $_POST["valoare"];
   // print $data->price;
  $id = $_POST["id"];
  $price = $_POST["price"];
  $name = $_POST["name"];
  $description = $_POST["description"];
  $category_id = $_POST["type"];
  
  $interogareSerializata = ["json" => ["query" => 'mutation {
    createMenu(price:"' . $price . '", name: "' . $name . '",description:"' . $description . '", category_id:' . $category_id . ', image_url : "") {id name Category{id}}
   }
   ']];
    $antet=["headers"=>["Content-Type"=>"application/json"]];
    $cereri=[
        "cerere"=>$client->postAsync("http://localhost:3000",$interogareSerializata,$antet)
    ];
    $rezultate=\GuzzleHttp\Promise\unwrap($cereri);
    
    print $rezultate["cerere"]->getBody();}
?>
