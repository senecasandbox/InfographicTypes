function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6NjKQdouvpe":
        Script1();
        break;
      case "6lC4TdjjW6z":
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

