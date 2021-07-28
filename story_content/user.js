function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6DGP3k3wcq6":
        Script1();
        break;
      case "6ZKOgIVzhET":
        Script2();
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

