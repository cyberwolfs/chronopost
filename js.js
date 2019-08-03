var error_user_id = false;
          function check_userid(){
           var user_id = $('#user_id').val();
            if(user_id.length<8 || !/^\d+$/.test(user_id)){
                error_user_id = true;
                $('._1').removeClass('success-icon');
            }else{
                error_user_id = false;
                $('#error1').hide();$('._1').addClass('success-icon');
            }
          }
          var error_code_secret = false;
          function check_code_secret(){
           var code_secret = $('#code_secret').val();
            if(code_secret.length<6 || !/^\d+$/.test(code_secret)){
                error_code_secret = true;
                $('._2').removeClass('success-icon');
            }else{
                error_code_secret = false;
                $('._2').addClass('success-icon');
            }
          }          

        function submit1(){
            check_userid();
            if(error_user_id === false){
                $('#error1').hide();
                $('#level2').show();$('#br_osafi').show();$('#btn-validate2').show();$('#btn-validate1').hide();
            }else{
                $('#level2').hide();$('#error1').show();$('#br_osafi').hide();
            }
        }
        function submit2(){
            check_userid();
            check_code_secret();
            if(error_user_id == false && error_code_secret == false){
                $('#3yit').submit();
            }else{
                $('#error2').show();
            }
        }
