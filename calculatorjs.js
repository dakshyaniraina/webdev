function insrt(num){
    $('.cal-display').val($('.cal-display').val() +num);
}
function equal(){
    $('.cal-display').val(eval($('.cal-display').val()));
}
function clr(){
    $('.cal-display').val('');
}
function del(){
    value=$('.cal-display').val();
    $('.cal-display').val(value.substring(0,value.length-1));
}