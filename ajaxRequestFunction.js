<script>
  function ajaxRequest()
  {
    try //Non-ie browser
    {
      var request = new XMLHttpRequest()
    }
    catch(e1)
    {
      try //for ie 6+
      {
        request = new ActiveXObject("Msxml2.XMLHTTP")
      }
      catech(e2)
      {
        try //ie 5
        {
          request = new ActiveXObject("Microsoft.XMLHTTP")
        }
        catch(e3) //this means the browser doesn't support ajax
        {
          request = false
        }
      }
    }
    return request
  }
</script>
