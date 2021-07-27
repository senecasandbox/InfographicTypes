function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5lXHPtuqx00":
        Script1();
        break;
      case "5lTise0DbfE":
        Script2();
        break;
      case "6HNQWI0TxtR":
        Script3();
        break;
      case "5VpuwOJEXWq":
        Script4();
        break;
      case "6QWoowhfKcU":
        Script5();
        break;
      case "5tywzrNR5dK":
        Script6();
        break;
      case "6E4EZeCdhqY":
        Script7();
        break;
      case "6G6xq5FIc5M":
        Script8();
        break;
      case "5X0CKIaERbS":
        Script9();
        break;
  }
}

function Script1()
{
  //Get Var Pagetitle from Storyline
var player = GetPlayer();
var pagetitle = player.GetVar("PageTitle");

//Send PageTitle to Analytics
ga('send', 'screenview', {screenName: pagetitle});
}

function Script2()
{
  ga('send', 'event', 'Button', 'click', 'ListHome');
}

function Script3()
{
  ga('send', 'event', 'Button', 'click', ComparisonHome');
}

function Script4()
{
  ga('send', 'event', 'Button', 'click', FlowHome');
}

function Script5()
{
  ga('send', 'event', 'Button', 'click', 'DataVisHome');
}

function Script6()
{
  ga('send', 'event', 'Button', 'click', MapHome');
}

function Script7()
{
  ga('send', 'event', 'Button', 'click', TimelineHome');
}

function Script8()
{
  ga('send', 'event', 'Button', 'click', ArticleHome');
}

function Script9()
{
  ga('send', 'event', 'Button', 'click', Source Button');
}

