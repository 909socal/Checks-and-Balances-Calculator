'use strict'



$(document).ready(init);

var sum = 0;

function init(){
  $('.add').on('click' , clickHandler);
  $('table').on('click', '.deleteButton', deleteMe);

  $('#withB').on('click' , clickWith);
  $('#depoB').on('click' , clickDepo);
  $('#histB').on('click' , clickHist);
  
 }

 function clickHandler(event){
  
 	var tranny = $("#transaction").val();
  var date = $('#date').val();
  var amount = $("#moneymoney").val();
  var str = amount.toString();
  var decimal = str.match(/\.\d{1,2}$/)
  //console.log(decimal, amount)

  if(!amount){
    alert('INVALID AMOUNT!!')
    return
  }
  if(!tranny){
    alert('INVALID TRANSACTION!!')
    return
  }
  if(!date){
    alert('INVALID DATE!!')
    return
  }

  var $tr = $('#template').clone();
  $tr.removeAttr('id');
  $tr.children('.transactions').text(tranny);
  $tr.children('.date').text(date);
  console.log($('.deposit'))
  var myamount = Number(amount).toFixed(2);


  if(amount <0 ){
    $("#moneymoney").css("color", "red");

    $tr.children('.withdraw').text('$ '+ myamount).css("color", "red");
    
  
  }else{
     $tr.children('.deposit').text('$ '+ myamount);
     
  }
  sum += Number(amount);
  $('.total').text('$' + sum.toFixed(2));
  $('#bigBoy').append($tr);

  $("#transaction").val('');
  $('#date').val('');
  $("#moneymoney").val('');

}
function deleteMe(){
  //console.log('MEEE');
  var subd = $(this).closest('tr').find('.deposit').text();
  var subw = $(this).closest('tr').find('.withdraw').text();
  //console.log(sub);
  $(this).closest('tr').remove();
  sum = sum - Number(subd.slice(2));
  sum = sum - Number(subw.slice(2));
  $('.total').text(sum.toFixed(2));


}

function clickWith(event){
  //console.log('lol');
 $('tr').find('.deposit').css("visibility", "hidden");
 $('tr').find('.withdraw').css("visibility",  "");

}

function clickDepo(event){
    //console.log('lol');

 $('tr').find('.withdraw').css("visibility", "hidden");
 $('tr').find('.deposit').css("visibility",  "");

}

function clickHist(event){
   // console.log('lol');

  $('tr').find('.deposit').css("visibility",  "");
  $('tr').find('.withdraw').css("visibility",  "");


}



   


