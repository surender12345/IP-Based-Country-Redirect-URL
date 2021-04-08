<?php
/*
Plugin Name: IP Based Country and Redirect URL
Description: A IP Based plugin to demonstrate wordpress functionality
Author: Developer
Version: 0.1
*/
add_action('admin_menu', 'plugin_setup_menu');
 
function plugin_setup_menu(){
    add_menu_page( 'IP Based Country and Redirect URL', 'IP Based Country and Redirect URL', 'manage_options', 'ip-redirect-plugin', 'plugin_init' );
}
 
function wpb_adding_scripts() {  
	
  wp_register_script('my_region_country_script', plugins_url('js/region_country_list.js', __FILE__), array('jquery'),'1.1', true);
	wp_enqueue_script('my_region_country_script');
	
}
add_action('init', 'wpb_adding_scripts');

function plugin_init(){ ?>
<link rel="stylesheet" href="<?=plugins_url('css/bootstrap.min.css', __FILE__)?>">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<script src="<?=plugins_url('js/jquery.min.js', __FILE__)?>"></script>
<script src="<?=plugins_url('js/bootstrap.min.js', __FILE__)?>"></script>
<div class="container">
  <h2>IP Based Country and Redirect URL</h2>
  <form action="#" method="POST">
    <div class="dynamic-section-outer">
      <div class="row">
      <div class="col-md-2" style="width:80px">
        <div class="form-group">
          <label for="add" style="color: transparent;">add:</label>
          <button type="button" class="form-control add"><i class="fa fa-plus"></i></button>
        </div>
      </div>
      <div class="col-md-10">
        <div class="form-group">
          <label for="add" style="color: transparent;">notice:</label>
          <span class="form-control" style="border: none; -webkit-box-shadow: unset ">Add Redirect URL</span>
        </div>
      </div>
    </div>
  <?php 
  $post_id = 6036;
  $data_region = unserialize(get_post_meta($post_id,'_ip_region',true));
  $data_country = unserialize(get_post_meta($post_id,'_ip_country',true));
  $data_url = unserialize(get_post_meta($post_id,'_ip_url',true));
  if(!empty($data_region) && !empty($data_country) && !empty($data_url)):
  $counter = 0;                     
  foreach($data_region as $key => $val): ?>
	  <div class="row clone-div">
      <div class="col-md-3">
		<div class="form-group">
      <label for="region">Region:</label>
      <select class="form-control region-select-box" id="region" name="region[]" required data-val="<?=$val?>"> 
	 </select>
		</div>
    </div>
    <div class="col-md-3">
		<div class="form-group">
      <label for="country">Country:</label>
      <select class="form-control country-select-box" id="country" data-val="<?=$data_country['country'][$key]?>">
          <option value="">select country</option>
	 </select>
          <input type="hidden" class="country-hidden-input-box" name="country[country][]" value="<?=$data_country['country'][$key]?>"/>
		</div>
    </div>
    <div class="col-md-4">
		<div class="form-group">
      <label for="url">URL:</label>
      <input type="url" class="form-control" id="url" placeholder="Enter url" name="url[]" value="<?=$data_url[$key]?>" required/>
		</div>
    </div>
   
		  <div class="col-md-2" style="width:80px">
			  <div class="form-group">
				  <label for="minus" style="color: transparent;">minus:</label>
				  <button type="button" class="form-control minus"><i class="fa fa-minus"></i></button>
			  </div>
		  </div>
		  
   </div>
   <?php $counter++; endforeach;
    endif; ?>
       </div>
       <?php if(!empty($data_region) && !empty($data_country) && !empty($data_url)): ?>
	  <div class="row submit-button">
		  <div class="col-md-12">
            <button type="submit" class="btn btn-default" name="submit">Submit</button>
		  </div>
	  </div>
  <?php endif; ?>
  </form>
</div>
<?php }

// include code file.
 include 'code.php';

?>