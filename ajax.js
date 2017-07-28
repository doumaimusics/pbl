//ajax封装
/*arguments说明:
     1、method:请求的方式;(get||post); 
     2、url:请求的地址
     3、data：请求的数据
     4、success：请求执行的操作函数
 */
function ajax(method,url,data,success){
	var xhr = null;//定义一个空变量
	if(window.XMLHttpRequest){//判断XMLHttpRequest
		xhr = new XMLHttpRequest();//兼容chrome&&firefox
	}else{
		xhr = new ActiveXObject('Microsoft.XMLHTTP');//兼容Microsoft IE6
	}

/*
 容错版写法和上面if判断一样
 try{
   	 xhr = new XMLHttpRequest();
   }catch(e){
   	 xhr = new ActiveXObject('Microsoft.XMLHTTP')
   }*/

	if (method=='get'&&data) {//get方式的时候要判断下数据;因为用get传输数据的时候数据是跟在url?后面的
		url+='?'+data;
	}
	xhr.open(method,url,true);//open()方法;参数：请求方式、地址、是否异步
	if (method=='get') {//判断请求的方式是get还是post
		xhr.send();
	} else{
       //post方式在提交表单数据的时候需要设置下编码格式
		xhr.setRequestHeader('content-type','application/x-www-form-urlencoded')
		//post方式传输数据时 是把数据到在send()里传输的;所以需要把数据放在send()里;
		xhr.send(data);
	}
	
	xhr.onreadystatechange=function(){//请求完成时执行的DOM操作
		if (xhr.readyState==4) {//readyState判断ajax的请求状态
			if (xhr.status==200) {//status判断服务的状态
				success&success(xhr.responseText);//请求成功时执行的DOM操作
			} else{
				alert('cuochul',+xhr.status);//请求失败时执行的
			}
		}
	}
	
}



