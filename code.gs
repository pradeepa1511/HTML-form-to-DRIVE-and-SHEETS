function doGet() {
  //Logger.log(e);
  var html = HtmlService.createHtmlOutputFromFile('base');
  return html.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}


function uploadFiles(data)
{
    
    var file = data.myFile;                                                    //identifying the uploaded file
    var folder = DriveApp.getFolderById('1s28vsuiibb1ehdXsUZUX1IQP7gy2Qohp');  //var folder accesses the folder in drive
    var createFile = folder.createFile(file);                                 //using createFile method file uploaded by user is entered
    return createFile.getUrl(); 
 
  
}

function onClick(name,email,empid,role,files){
  var url = 'https://docs.google.com/spreadsheets/d/1K20Cl1dPBf3OWDvCG_qE1z724y6cc67aWJ3wmGjJBps/edit#gid=0';
  var sheets = SpreadsheetApp.openByUrl(url);
  var worksheets = sheets.getSheetByName("Data");
  worksheets.appendRow([name,email,empid,role,files]);
  //Logger.log(name +" clicked the button");
  
}
