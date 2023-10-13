$(function () {
  var list = $(".banner");
  var total = list.children('li').length;
  console.log(total);
  var num = 0;
  var liW =list.children('li').width();
  console.log(liW);
  var copyobj = list.children('li').next().clone(true).addClass("copy");
  $.each(list.find("li"), function (idx, el) {
    $(this).append("<span>" + idx);
  });

  list.append(copyobj);
  $(".next").click(function () {
    if (num == total) {
      num = 0;
      list.css("margin-left", 0);
    }
    num++;
    list.stop().animate({ "margin-left": -liW * num }, 500);
    return false;
  });

  $(".prev").click(function () {
    if (num == 0) {
      num = total;
      list.css("margin-left", "-800px");
    }
    num--;
    list.stop().animate({ "margin-left": -liW * num }, 500);
    return false;
  });
});