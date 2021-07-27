function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5lh3OMxfVl8":
        Script1();
        break;
      case "5zK2InB7jwd":
        Script2();
        break;
      case "6A19bEAeoYr":
        Script3();
        break;
      case "6m6UoaHaBKZ":
        Script4();
        break;
      case "6QJHoJjpXV5":
        Script5();
        break;
      case "6Bla6XiMXu9":
        Script6();
        break;
      case "5lA6Sza0XSp":
        Script7();
        break;
      case "6X96Gwsmmi6":
        Script8();
        break;
      case "61iTF5YNPg1":
        Script9();
        break;
      case "6RlHPKAnvWr":
        Script10();
        break;
  }
}

function Script1()
{
  ga('send', 'screenview', {screenName: 'welcome'});
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

