function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6b8MJdYSAe8":
        Script1();
        break;
      case "6oEqilvJww1":
        Script2();
        break;
      case "6grVOOevJQT":
        Script3();
        break;
      case "6n9z72fnMS4":
        Script4();
        break;
      case "6ZXdtigOsHv":
        Script5();
        break;
      case "5aL6jLsfxvD":
        Script6();
        break;
      case "5oDIB87DmP2":
        Script7();
        break;
      case "6nBsKT6LIoE":
        Script8();
        break;
      case "66R1UHKsGnb":
        Script9();
        break;
      case "6ePFqOdDOeQ":
        Script10();
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
  ga('send', 'event', 'Button', 'click', DataVisHome');
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

