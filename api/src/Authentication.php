<?php 
namespace StarFinder  ;
use Aws\credentials\Credentials as aws_auth ;

class Authentication {
    protected $credentials,$ACCESS_KEY_ID,$SECRET_ACCESS_KEY,$options ;
    protected $errors =[ ];
    public function __construct(){           
       $this->options = [
        'version'     => 'latest',
        'region'      => 'eu-central-1',
        'credentials' =>$this->credentials,'http' => [ 'verify' => false ] 
    ] ;
    }
    public function setError($error): void
    {
        array_push($this->errors, $error);
        return;
    }

    public function getErrors(): array
    {
        return $this->errors;
    }
    
    public function getOptions(){
        return $this->options ;
    }
    public function getCredentials(){
        return $this->credentials ;
    }
    public function setOptions($options){
        $this->options = $options ;
    }

    public function setAccessKeyId($id):void {
        $this->ACCESS_KEY_ID = $id ;
    }

    public function setSecretAccessKey($secret):void {
        $this->SECRET_ACCESS_KEY = $secret ;
    }
    public function boot() {
        try{
        $auth = new aws_auth($this->ACCESS_KEY_ID,$this->SECRET_ACCESS_KEY); 
        $this->credentials = $auth ;
        $this->options['credentials'] = $this->getCredentials() ;
        }catch(\Exception $e){
            $this->setError($e->getMessage()) ;
        }
        return $auth ;
    }
    public function getResponse(){
        return $this->response; 
    }

    public function auth(){
        $credentials =  $this->boot() ;
        return $credentials ;
    }


}
