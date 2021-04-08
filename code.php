<?php

	
    add_action('init', 'save_section_data');
    function save_section_data(){
    if(isset($_POST['submit'])){
            $id = 6036;
            if(!empty($_POST['region'])){
                $region = $_POST['region'];
            }else{
                $region = "";
            }
            if(!empty($_POST['country'])){
                $country = $_POST['country'];
            }else{
                $country = "";
            }
            if(!empty($_POST['url'])){
                $url = $_POST['url'];
            }else{
                $url = "";
            }

            update_post_meta( $id, '_ip_region', serialize( $region ) );
            update_post_meta( $id, '_ip_country', serialize( $country ) );
            update_post_meta( $id, '_ip_url', serialize( $url ) );
            header('Location: ' . $_SERVER['HTTP_REFERER']);
        }

    }

    function getClientIP(){
      if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
        $ip = $_SERVER['HTTP_CLIENT_IP'];
      } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
      } else {
        $ip = $_SERVER['REMOTE_ADDR'];
      }
      return $ip;
    }



    function ip_details($ip) {
      $json = file_get_contents("https://ipinfo.io/{$ip}/geo");
      $details = json_decode($json, true);
      return $details;
    }



    if(!is_admin()) {
      add_action('init', 'ip_country_redirect_url');

      function ip_country_redirect_url()
      {   
          $ipaddress = getClientIP();
          $details = ip_details($ipaddress);
          $country_code = isset($details['country'])?$details['country']:'';
          $post_id = 6036;
          $data_country = unserialize(get_post_meta($post_id,'_ip_country',true));
          $data_url = unserialize(get_post_meta($post_id,'_ip_url',true));
          if(!empty($data_country) && !empty($data_url)):            
              foreach($data_country as $key => $val):
                foreach ($val as $key1 => $val1):
                  $url = $data_url[$key1];
                  $country = explode(',',$val1);
                    foreach ($country as $key2 => $val2):
                       if(strval($val2) == strval($country_code)):
                        // Redirect browser 
                        header("Location: $url"); 
                        exit; 
                       endif;
                    endforeach;
                endforeach;  
              endforeach;
          endif;
      }
    }


?>