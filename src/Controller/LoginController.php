<?php

namespace App\Controller;

use App\Repository\UserRepository;
use Lexik\Bundle\JWTAuthenticationBundle\Security\Guard\JWTTokenAuthenticator;
use Lexik\Bundle\JWTAuthenticationBundle\Services\JWTTokenManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\PasswordEncoderInterface;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class LoginController extends AbstractController
{
    /**
     * @Route("/login", name="login", methods={"GET|POST"})
     */
    public function index(Request $request, UserRepository $userRepository, JWTTokenManagerInterface $JWTManager, UserPasswordEncoderInterface $passwordEncoder): Response
    {
        $content = json_decode($request->getContent());

        $user = $userRepository->findOneBy([
            'email' => $content->email,
        ]);

        die(var_dump($passwordEncoder->isPasswordValid()));

        $jwt = $JWTManager->create($user);
//        return $this->render('login/index.html.twig');
    }

    /**
     * @Route("/api/login_check", name="login_check")
     */
    public function check(): Response
    {
        return $this->render('login/index.html.twig');
    }
}
