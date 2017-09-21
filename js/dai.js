				document.documentElement.style.fontSize=innerWidth/16+"px";
//				console.log("1rem="+innerWidth/16)
			onresize=function(){
				document.documentElement.style.fontSize=innerWidth/16+"px";
		}
			
 
		function add(){
//			alert("en")
			$.ajax({
				type:"post",
				url:"http://47.92.37.168/supermarket/data/register.php",
				async:true,
				data:{
					user_phone:$("#cell_phone").val(),
					user_pass_word:$("#pss").val()
				},
				dataType:"jsonp",
				jsonp:"callback",
				success:function(data){
						console.log(data)
					
					 if(data.msg=="success"){
					 	 localStorage.setItem("user_phone",$("#cell_phone").val());
					 	localStorage.setItem("pss",$("#pss").val());
					 	location.href="DenLu.html";
					 	$("#cell_phone").val("")
					 	$("#pss").val("")
					 }
					 
				}
			});	
		}
	 //给手机号 绑定事件
	 
			  var reg1=/^[1]\d{10}$/;
			  var reg2=/^[0-9A-Za-z]{6,12}$/;
			  
		   $("#cell_phone").blur(function(){    
		        if(reg1.test($("#cell_phone").val())){
		            $("#Boss1").html("输入正确");
		            $("#Boss1").css("color","black"); 
		        }else{
		            $("#Boss1").html("输入错误");
		            $("#Boss1").css("color","red");
		        }
		    });
		    //密码验证
		      $("#pss").blur(function(){
		        if(reg2.test($("#pss").val())){
		            $("#Boss2").html("输入正确")
		            $("#Boss2").css("color","black")
		        }else{
		            $("#Boss2").html("输入错误")
		            $("#Boss2").css("color","red");
		        }
		
		
			        if(reg1.test($("#cell_phone").val()) && reg2.test($("#pss").val())){
			        		$("#Qin").css("background","#FF4400");
			        		$("#Qin").attr("disabled",false);
		//	        			console.log(localStorage.getItem("user_phone"));
			        }else{
			        	$("#Qin").attr("disabled",true);
			        }   
		    });

