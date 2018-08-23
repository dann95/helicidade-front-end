<?php

namespace Heliquality\Repositories;


use Heliquality\Models\User;

class UsersRepository
{
    /**
     * @var User
     */
    private $model;

    /**
     * UsersRepository constructor.
     */
    public function __construct()
    {
        $this->model = new User();
    }

    /**
     * @param $email
     * @param $password
     * @return mixed
     */
    public function findByEmailAndPassword($email, $password)
    {
        return $this->model->where('email', $email)->where('senha', $password)->get()->first();
    }

}