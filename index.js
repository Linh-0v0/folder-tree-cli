// index.js
const Folder = require("./Folder");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Create a root folder
const rootFolder = new Folder("root");

// Helper function to navigate through nested folders
function navigateToFolder(path) {
  let currentFolder = rootFolder;
  const folders = path.split("/").filter((folder) => folder !== "");

  // Skip the first folder if it's "root"
  if (folders.length > 0 && folders[0] === "root") {
    folders.shift(); // Remove "root" from the array
  }

  // Navigate through the remaining folders
  for (const folderName of folders) {
    const folder = currentFolder.searchFolder(folderName);
    if (!folder) {
      console.log(`Folder '${folderName}' not found in path '${path}'.`);
      return null;
    }
    currentFolder = folder;
  }

  return currentFolder;
}

// Function to handle CLI commands
function handleCommand(command) {
  const [action, ...args] = command.split(" ");

  switch (action) {
    case "addFile":
      const [filePath, fileName, ...content] = args;
      const targetFolder = navigateToFolder(filePath);
      if (targetFolder) {
        targetFolder.addFile(fileName, content.join(" "));
      }
      break;

    case "removeFile":
      const [filePathRemove, fileNameRemove] = args;
      const folderRemove = navigateToFolder(filePathRemove);
      if (folderRemove) {
        folderRemove.removeFile(fileNameRemove);
      }
      break;

    case "addFolder":
      const [folderPath, folderName] = args;
      const parentFolder = navigateToFolder(folderPath);
      if (parentFolder) {
        parentFolder.addSubfolder(folderName);
      }
      break;

    case "removeFolder":
      const [folderPathRemove, folderNameRemove] = args;
      const parentFolderRemove = navigateToFolder(folderPathRemove);
      if (parentFolderRemove) {
        parentFolderRemove.removeSubfolder(folderNameRemove);
      }
      break;

    case "searchFile":
      const [filePathSearch, fileNameSearch] = args;
      const folderSearch = navigateToFolder(filePathSearch);
      if (folderSearch) {
        folderSearch.searchFile(fileNameSearch);
      }
      break;

    case "searchFolder":
      const [folderPathSearch, folderNameSearch] = args;
      const folderParentSearch = navigateToFolder(folderPathSearch);
      if (folderParentSearch) {
        folderParentSearch.searchFolder(folderNameSearch);
      }
      break;
      
    case "viewFile":
      const [filePathView, fileNameView] = args;
      const folderView = navigateToFolder(filePathView);
      if (folderView) {
        const file = folderView.getFile(fileNameView);
        if (file) {
          file.displayContent();
        } else {
          console.log(`File '${fileNameView}' not found in '${filePathView}'.`);
        }
      }
      break;

    case "display":
      rootFolder.display();
      break;

    case "exit":
      rl.close();
      break;

    default:
      console.log("Invalid command.");
  }
}

// Start the CLI
console.log(
  "Welcome to the Folder Tree CLI! Commands: addFile, removeFile, addFolder, removeFolder, searchFile, searchFolder, display, exit"
);
rl.on("line", (input) => {
  handleCommand(input);
});
