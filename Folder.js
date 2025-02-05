// Folder.js
const File = require("./File");

class Folder {
  constructor(name) {
    this.name = name;
    this.files = [];
    this.subfolders = [];
  }

  // Method to add a file
  addFile(fileName, content = "") {
    const file = new File(fileName, content);
    this.files.push(file);
    console.log(`File '${fileName}' added to folder '${this.name}'.`);
  }

  // Method to remove a file
  removeFile(fileName) {
    const fileIndex = this.files.findIndex((file) => file.name === fileName);
    if (fileIndex === -1) {
      console.log(`File '${fileName}' not found in folder '${this.name}'.`);
    } else {
      this.files.splice(fileIndex, 1);
      console.log(`File '${fileName}' removed from folder '${this.name}'.`);
    }
  }

  // Method to add a subfolder
  addSubfolder(folderName) {
    const folder = new Folder(folderName);
    this.subfolders.push(folder);
    console.log(`Subfolder '${folderName}' added to folder '${this.name}'.`);
  }

  // Method to remove a subfolder
  removeSubfolder(folderName) {
    const folderIndex = this.subfolders.findIndex(
      (folder) => folder.name === folderName
    );
    if (folderIndex === -1) {
      console.log(`Subfolder '${folderName}' not found in folder '${this.name}'.`);
    } else {
      this.subfolders.splice(folderIndex, 1);
      console.log(`Subfolder '${folderName}' removed from folder '${this.name}'.`);
    }
  }

  // Method to search for a file by name
  searchFile(fileName) {
    const file = this.files.find((file) => file.name === fileName);
    if (file) {
      console.log(`File '${fileName}' found in folder '${this.name}'.`);
    } else {
      console.log(`File '${fileName}' not found in folder '${this.name}'.`);
    }
    return file;
  }

  // Method to search for a folder by name
  searchFolder(folderName) {
    const folder = this.subfolders.find((folder) => folder.name === folderName);
    if (folder) {
      console.log(`Folder '${folderName}' found in folder '${this.name}'.`);
    } else {
      console.log(`Folder '${folderName}' not found in folder '${this.name}'.`);
    }
    return folder;
  }

  getFile(fileName) {
    return this.files.find((file) => file.name === fileName) || null;
  }

  // Method to display the folder structure as a tree
  display(level = 0) {
    console.log("  ".repeat(level) + `Folder: ${this.name}`);
    this.files.forEach((file) => {
      console.log("  ".repeat(level + 1) + file.display());
    });
    this.subfolders.forEach((subfolder) => {
      subfolder.display(level + 1);
    });
  }
}

module.exports = Folder;