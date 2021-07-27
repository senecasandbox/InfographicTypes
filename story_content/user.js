function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Lzrm9Rkjfv":
        Script1();
        break;
      case "6avfWS5AESO":
        Script2();
        break;
      case "5nI8iK5AuIT":
        Script3();
        break;
      case "6RrQUnmjk6z":
        Script4();
        break;
      case "5udLVPE7DqE":
        Script5();
        break;
      case "5wj3EWdJbxU":
        Script6();
        break;
      case "6OIgv1hRRNU":
        Script7();
        break;
      case "5uf7BLp6gmZ":
        Script8();
        break;
      case "6pdW2S8u0vO":
        Script9();
        break;
      case "607nNS9K2Og":
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

