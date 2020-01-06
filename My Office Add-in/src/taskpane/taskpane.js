Office.onReady(info => {
  if (info.host === Office.HostType.OneNote) {
    document.getElementById("sideload-msg").style.display = "none";
    document.getElementById("app-body").style.display = "flex";
    document.getElementById("run").onclick = run;
  }
}); 

export async function run() {
  /**
   * Insert your OneNote code here
   */
  try {
    await OneNote.run(async context => {

      // Get all of the notes in the current_pentest folder and put that as the new page 
      // Get the current page.
      var page = context.application.getActivePage();

      // Queue a command to set the page title.
      
      fetch('http://localhost:5000/title').then((response) => {
        response.text().then((title) => {
          page.title = title;
        })
      })    

      fetch('http://localhost:5000/read').then((response) => {
        response.text().then((html) => {
          page.addOutline(40, 90, html);
        })
      })      

      // Run the queued commands, and return a promise to indicate task completion.
      return context.sync();
    });
  } catch (error) {
      console.log("Error: " + error);
  }
}
