function ExecuteScript(strId)
{
  switch (strId)
  {
      case "651Kh4Dy4Kq":
        Script1();
        break;
      case "6lMiuUK7jVL":
        Script2();
        break;
      case "6QG6qb1o66p":
        Script3();
        break;
      case "6JGiHK64YDM":
        Script4();
        break;
      case "6U6kiHUKb7l":
        Script5();
        break;
      case "5rPUDUJQnO9":
        Script6();
        break;
      case "5npiBlMxSCk":
        Script7();
        break;
      case "5cSendUrh5a":
        Script8();
        break;
      case "6JMyO9qGMxT":
        Script9();
        break;
      case "6jMV0bGXi3V":
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

