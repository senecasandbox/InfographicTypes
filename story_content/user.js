function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6JR84KS33fK":
        Script1();
        break;
      case "5UgAGH6uVtQ":
        Script2();
        break;
      case "6GhRbUJ3q40":
        Script3();
        break;
      case "69cRasEfkxQ":
        Script4();
        break;
      case "6rjgYFWc5JU":
        Script5();
        break;
      case "5tUcfSEkiBZ":
        Script6();
        break;
      case "6TwXypNGTfd":
        Script7();
        break;
      case "5ZBLiSBSkQ4":
        Script8();
        break;
      case "6KzCDcwu6bj":
        Script9();
        break;
      case "6A6D77t5ofk":
        Script10();
        break;
  }
}

function Script1()
{
  ga('send', 'screenview', {screenName: 'home'});
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

function Script10()
{
  //Get Var Pagetitle from Storyline
var player = GetPlayer();
var pagetitle = player.GetVar("PageTitle");

//Send PageTitle to Analytics
ga('send', 'screenview', {screenName: pagetitle});
}

