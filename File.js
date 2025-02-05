// File.js
class File {
  constructor(name, content = "") {
    if (!name) throw new Error("File name cannot be empty");
    this.name = name;
    this.content = content;
  }

  displayContent() {
    console.log(`\n--- Content of '${this.name}' ---\n${this.content}\n`);
  }

  // Method to display file details
  display() {
    return `File: ${this.name}`;
  }
}

module.exports = File;
