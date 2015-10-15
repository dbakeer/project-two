// UPVOTE DOWNVOTE TOGGLE
$(function (){
  $(".vote").click(
    function(){
    var count = parseInt($("~ .count", this).text());

    if ($(this).hasClass("up")) {
      var upvote = count + 1;

      $("~ .count", this).text(upvote);
    } else if
      ($(this).hasClass("down")) {
        var downvote = count - 1;
        $("~ .count", this).text(downvote);
      }
  });
});


// LOGIN & SIGNUP MODALS
$('#openBtn').click(function(){
	$('#myModal').modal({show:true});
});
