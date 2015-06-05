chrome.runtime.onInstalled.addListener(function()
{
    //Add local storage
	chrome.storage.local.clear();
	chrome.storage.local.set({pageList: []});
})

function ViewLists()
{
    console.log("Viewing lists")
}