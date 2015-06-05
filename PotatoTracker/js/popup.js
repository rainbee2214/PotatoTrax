window.onload = OnWindowLoad;

function OnWindowLoad()
{
    $('#addListButton').click(function(){
      AddPageToList();
    });

    $('#viewListButton').click(function(){
      // ViewPagesOfList();
    });

    Update();
}

function Update()
{
    chrome.storage.local.get("pageList", function(val)
    {
        $("#currenturl").html(val.pageList[val.pageList.length-1]);
    });
}

function AddPageToList()
{
    chrome.tabs.query({active: true}, function (tab)
    {
        var page = 
        {
        url: tab[0].url
        };

        $("#currenturl").html(page.url);
        chrome.storage.local.get("pageList", function(val)
        {
            var existingPages = val.pageList;
            if (!_.find(existingPages, function(e)
            {
                if (e.url == page.url) return true;
            })) 
            existingPages.push(page.url);
            chrome.storage.local.set({pageList: existingPages});
        });
    });
}




