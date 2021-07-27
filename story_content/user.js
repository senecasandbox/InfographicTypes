function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6eXKCV7qSN8":
        Script1();
        break;
      case "6YlTsHqW6kc":
        Script2();
        break;
      case "5phTLsM15sr":
        Script3();
        break;
      case "69kMg9dlhtu":
        Script4();
        break;
      case "5t14jDGTZen":
        Script5();
        break;
      case "5veOPF8pwPl":
        Script6();
        break;
      case "6EEye3ufY1V":
        Script7();
        break;
      case "6knOHXoHBd4":
        Script8();
        break;
      case "5p2S0rc6IRm":
        Script9();
        break;
      case "6TF9PUcBji9":
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
  ga('send', 'event', 'Button', 'click', 'List Button');
}

function Script3()
{
  ga('send', 'event', 'Button', 'click', Comparison Button');
}

function Script4()
{
  ga('send', 'event', 'Button', 'click', Flow Button');
}

function Script5()
{
  ga('send', 'event', 'Button', 'click', Data Vis Button');
}

function Script6()
{
  ga('send', 'event', 'Button', 'click', Map Button');
}

function Script7()
{
  ga('send', 'event', 'Button', 'click', Timeline Button');
}

function Script8()
{
  ga('send', 'event', 'Button', 'click', Article Button');
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

