function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5nrjuOkcnwj":
        Script1();
        break;
      case "6kUzG7wMuE9":
        Script2();
        break;
      case "5XKWmbh7Fva":
        Script3();
        break;
      case "5yZhgHihah8":
        Script4();
        break;
      case "6it9r5AfJEF":
        Script5();
        break;
      case "5qZNd3WBwUX":
        Script6();
        break;
      case "5dN82mVruw0":
        Script7();
        break;
      case "68OhW4mDerW":
        Script8();
        break;
      case "5yOMu4WjyQU":
        Script9();
        break;
      case "6J4MU4fYUrI":
        Script10();
        break;
  }
}

function Script1()
{
  ga('send', 'screenview', {screenName: 'Types of Infographics'});
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

