export default function getCurrentBrowserUrl(): Promise<string> {
    return new Promise((resolve) => {
        chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
            const current_url = tabs[0].url ?? ''; // ?? '' handles the case when url is undefined. This is basically just to avoid Typescript shouting at me
            console.log(current_url);
            resolve(current_url);
        });
    });
    
}