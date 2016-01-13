'use strict'



$(document).ready(init);

var sum = 0;

function init(){
  $('#newTransactionForm').on('submit' , addNewTransaction);
  $('table').on('click', '.deleteButton', deleteMe);

  $('#withB').on('click' , clickWith);
  $('#depoB').on('click' , clickDepo);
  $('#histB').on('click' , clickHist);
  
 }

 function addNewTransaction(event){
  event.preventDefault();
  
 	var tranny = $("#transaction").val();
  var date = $('#date').val();
  var amount = $("#moneymoney").val();
  var str = amount.toString();
  var decimal = str.match(/\.\d{1,2}$/)
  //console.log(decimal, amount)

  // if(!amount){
  //   alert('INVALID AMOUNT!!')
  //   return
  // }
  // if(!tranny){
  //   alert('INVALID TRANSACTION!!')
  //   return
  // }
  // if(!date){
  //   alert('INVALID DATE!!')
  //   return
  // }

  var $tr = $('#template').clone();
  $tr.removeAttr('id');
  $tr.children('.transactions').text(tranny);
  $tr.children('.date').text(date);
  console.log($('.deposit'))
  var myamount = Number(amount).toFixed(2);


  if(amount <0 ){
    $("#moneymoney").css("color", "red");

    $tr.children('.withdraw').text('$ '+ myamount).css("color", "red");
    $tr.attr('data', 'neg');
    
  
  }else{
     $tr.children('.deposit').text('$ '+ myamount);
     $tr.attr('data', 'pos');
     
  }
  sum += Number(amount);
  $('.total').text('Total Balance: $' + sum.toFixed(2));
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
 $("tr[data='pos']").css("display", "none");
 $("tr[data='neg']").css("display", "table-row");


}

function clickDepo(event){
    //console.log('lol');


  $("tr[data='neg']").css("display", "none");
  $("tr[data='pos']").css("display", "table-row");



}

function clickHist(event){
   // console.log('lol');
  $("tr[data='neg']").css("display", "table-row");
  $("tr[data='pos']").css("display", "table-row");

 


}



   


