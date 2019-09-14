<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/")
 */
class AccueilController extends AbstractController
{
    /**
     * @Route("/", name="accueil")
     */
    public function index()
    {
        return $this->render('accueil/index.html.twig', [
            'controller_name' => 'AccueilController',
        ]);
    }

    /**
     * @Route("/decode_data", name="decode_data")
     */
    public function decode_data(Request $request){
        $response = "ce n'est pas ajax.";
       
        if ($request->isXmlHttpRequest()){
            $response = "c'est ajax.";
            // $returnContent = $request->getContent();
           $data = json_decode($_POST['data']);
           if ($data){
               $name = $data->name ;
               $password = $data->password;
               $response = array('name'=>$name , 'password'=>$password);
           }
        }
        return new JsonResponse($response);
    }
}
