function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6YJQBuh6UON":
        Script1();
        break;
      case "6lrQsBHMr36":
        Script2();
        break;
      case "6lb6Iizus2R":
        Script3();
        break;
      case "5lzpdTYLGxp":
        Script4();
        break;
      case "6533yuINIEn":
        Script5();
        break;
      case "6owd6Nxdux6":
        Script6();
        break;
      case "6A6o8nmPcJP":
        Script7();
        break;
      case "5v8RutHCHeL":
        Script8();
        break;
      case "6QdvAAXbAXP":
        Script9();
        break;
      case "631S40NGIDA":
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

